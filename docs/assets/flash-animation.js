/* Animations compactes pour suivre i, j et les comparaisons d'une fenêtre. */
(function (global) {
  'use strict';

  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

  function makeFrames(config) {
    const {values, pattern} = config;
    const frames = [];
    const lastStart = values.length - pattern.length;
    if (config.mode === 'bounds') {
      for (let i = 0; i <= lastStart + 1; i++) {
        const valid = i <= lastStart;
        frames.push({i, j:null, count:null, phase:'outer', valid,
          message:valid ? `Départ ${i} valide : les ${pattern.length} valeurs du motif tiennent dans la liste.` : `Départ ${i} impossible : il ne reste que ${values.length-i} valeurs pour un motif de ${pattern.length}.`});
      }
      return frames;
    }

    for (const i of config.starts) {
      frames.push({i, j:null, count:0, phase:'reset', valid:true,
        message:`Nouvelle fenêtre à l’indice ${i} : le compteur repart de zéro.`});
      let count = 0;
      for (let j = 0; j < pattern.length; j++) {
        const numberIndex = i + j;
        const match = values[numberIndex] === pattern[j];
        if (match) count++;
        frames.push({i, j, count, match, phase:'compare', valid:true,
          message:`i = ${i}, j = ${j} : numbers[${i} + ${j}] vaut ${values[numberIndex]} et pattern[${j}] vaut ${pattern[j]} — ${match ? 'égalité' : 'différence'}.`});
      }
      if (config.mode === 'overlap' && count === pattern.length) {
        frames.push({i, j:null, count, phase:'found', valid:true,
          message:`Le motif complet est trouvé au départ ${i}. Le prochain essai peut commencer à ${i+1} : les fenêtres se chevauchent.`});
      }
    }
    return frames;
  }

  function mount(host, config) {
    if (!host || !config) return () => {};
    const frames = makeFrames(config);
    let position = 0;
    let playing = false;
    let timer = null;
    let disposed = false;

    host.innerHTML = `<section class="index-animation" aria-label="Animation des indices et des fenêtres">
      <div class="index-animation-head"><span class="mini-label">LA FENÊTRE À LA LOUPE</span><span data-flash-step></span></div>
      <div class="index-array"><span class="index-array-label">numbers</span><div class="index-cells" data-numbers></div></div>
      <div class="index-array pattern-array"><span class="index-array-label">pattern</span><div class="index-cells" data-pattern></div></div>
      <div class="index-state" data-state></div>
      <p class="index-message" role="status" aria-live="polite" data-message></p>
      <pre class="index-code"><code><span data-code="outer">for i in range(len(numbers) - len(pattern) + 1):</span>
    <span data-code="reset">count = 0</span>
    <span data-code="inner">for j in range(len(pattern)):</span>
        <span data-code="compare">if numbers[i + j] == pattern[j]:</span>
            <span data-code="increment">count += 1</span></code></pre>
      <div class="index-controls" role="group" aria-label="Commandes de l’animation">
        <button class="button" data-flash-control="previous" aria-label="Étape précédente">←</button>
        <button class="button primary" data-flash-control="play" aria-pressed="false">Lire l’animation</button>
        <button class="button" data-flash-control="next">Étape suivante →</button>
      </div>
    </section>`;

    const numbersRow = host.querySelector('[data-numbers]');
    const patternRow = host.querySelector('[data-pattern]');
    const state = host.querySelector('[data-state]');
    const message = host.querySelector('[data-message]');
    const step = host.querySelector('[data-flash-step]');
    const previous = host.querySelector('[data-flash-control="previous"]');
    const next = host.querySelector('[data-flash-control="next"]');
    const play = host.querySelector('[data-flash-control="play"]');

    function render() {
      if (disposed) return;
      const frame = frames[position];
      const currentIndex = frame.j === null ? -1 : frame.i + frame.j;
      const windowEnd = frame.i + config.pattern.length;
      numbersRow.style.setProperty('--cell-count', config.values.length);
      patternRow.style.setProperty('--cell-count', config.pattern.length);
      numbersRow.innerHTML = config.values.map((value, index) => {
        const inWindow = frame.valid && index >= frame.i && index < windowEnd;
        const current = index === currentIndex;
        const resultClass = current ? (frame.match ? 'is-match' : 'is-mismatch') : '';
        return `<div class="index-cell ${inWindow ? 'in-window' : ''} ${current ? 'is-current' : ''} ${resultClass}"><span>${index}</span><strong>${escape(value)}</strong></div>`;
      }).join('');
      patternRow.innerHTML = config.pattern.map((value, index) => `<div class="index-cell ${index === frame.j ? 'is-current' : ''} ${index === frame.j ? (frame.match ? 'is-match' : 'is-mismatch') : ''}"><span>${index}</span><strong>${escape(value)}</strong></div>`).join('');
      step.textContent = `Étape ${position + 1} / ${frames.length}`;
      state.innerHTML = `<span>i <strong>${frame.i}</strong></span><span>j <strong>${frame.j === null ? '—' : frame.j}</strong></span><span>i + j <strong>${frame.j === null ? '—' : currentIndex}</strong></span><span>count <strong>${frame.count === null ? '—' : frame.count}</strong></span>${frame.valid ? '' : '<span class="invalid-tag">départ invalide</span>'}`;
      message.textContent = frame.message;
      for (const name of ['outer','reset','inner','compare','increment']) {
        const line = host.querySelector(`[data-code="${name}"]`);
        const active = frame.phase === name || (name === 'increment' && frame.phase === 'compare' && frame.match);
        line.classList.toggle('is-code-active', active);
      }
      previous.disabled = position === 0;
      next.disabled = position === frames.length - 1;
      play.textContent = playing ? 'Pause' : position === frames.length - 1 ? 'Rejouer' : 'Lire l’animation';
      play.setAttribute('aria-pressed', String(playing));
    }

    function stop() {
      playing = false;
      if (timer !== null) global.clearTimeout(timer);
      timer = null;
    }

    function schedule() {
      timer = global.setTimeout(() => {
        if (!playing || disposed) return;
        if (position < frames.length - 1) position++;
        if (position === frames.length - 1) stop();
        render();
        if (playing) schedule();
      }, 1000);
    }

    function onClick(event) {
      const button = event.target.closest('[data-flash-control]');
      if (!button || button.disabled) return;
      const action = button.dataset.flashControl;
      if (action === 'play') {
        if (playing) stop();
        else {
          if (position === frames.length - 1) position = 0;
          playing = true;
          schedule();
        }
      } else {
        stop();
        position = action === 'previous' ? Math.max(0, position - 1) : Math.min(frames.length - 1, position + 1);
      }
      render();
    }

    host.addEventListener('click', onClick);
    render();
    return () => {
      disposed = true;
      stop();
      host.removeEventListener('click', onClick);
    };
  }

  global.FlashcardAnimation = {mount, makeFrames};
})(typeof window !== 'undefined' ? window : globalThis);
