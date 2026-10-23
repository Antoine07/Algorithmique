/* Visualisations originales du cours : états calculés par le même tri que le Python. */
(function (global) {
  'use strict';

  function bubbleFrames(values, singlePass = false) {
    const items = values.map((value, id) => ({value, id}));
    const frames = [];
    let comparisons = 0, swaps = 0;
    const snapshot = (phase, pair, pass, sortedFrom, message) => frames.push({
      items: items.map(item => ({...item})), phase, pair, pass, sortedFrom,
      comparisons, swaps, message
    });
    snapshot('initial', [], 0, items.length, 'Liste initiale : aucune comparaison effectuée.');
    const passes = singlePass ? Math.min(1, items.length - 1) : items.length - 1;
    for (let pass = 0; pass < passes; pass++) {
      const end = items.length - 1 - pass;
      for (let i = 0; i < end; i++) {
        const a = items[i].value, b = items[i+1].value;
        comparisons++;
        snapshot('compare', [i,i+1], pass+1, end+1, `Comparer les indices ${i} et ${i+1} : ${a} et ${b}.`);
        if (a > b) {
          [items[i], items[i+1]] = [items[i+1], items[i]];
          swaps++;
          snapshot('swap', [i,i+1], pass+1, end+1, `${a} > ${b} : les deux valeurs échangent leur position.`);
        } else {
          snapshot('keep', [i,i+1], pass+1, end+1, `${a} ≤ ${b} : les deux valeurs restent en place.`);
        }
      }
      snapshot('pass', [], pass+1, end, `Passage ${pass+1} terminé : ${items[end].value} est à sa position définitive, à l’indice ${end}.`);
    }
    const complete = !singlePass || items.length <= 2;
    snapshot('done', [], Math.max(0, passes), complete ? 0 : items.length-1,
      complete ? 'Tri terminé : chaque valeur est inférieure ou égale à la suivante.' : 'Un passage terminé : le maximum est en place. Le reste n’est pas nécessairement trié.');
    return frames;
  }

  function selectionFrames(values) {
    const items = values.map((value,id) => ({value,id}));
    const frames = [];
    let comparisons = 0, swaps = 0;
    const snap = (phase, pair, pass, fixedUntil, selectedId, message) => frames.push({
      items: items.map(item => ({...item})), phase, pair, pass, fixedUntil,
      selectedId, comparisons, swaps, message
    });
    snap('initial',[],0,0,null,'Chercher la plus petite valeur dans la partie qui reste à trier.');
    for (let start=0; start<items.length-1; start++) {
      let minimum = start;
      snap('candidate',[],start+1,start,items[minimum].id,`${items[minimum].value} est le premier candidat pour le minimum.`);
      for (let j=start+1; j<items.length; j++) {
        comparisons++;
        snap('compare',[minimum,j],start+1,start,items[minimum].id,`Comparer le minimum provisoire ${items[minimum].value} à ${items[j].value}.`);
        if (items[j].value < items[minimum].value) {
          minimum = j;
          snap('candidate',[j],start+1,start,items[minimum].id,`${items[j].value} devient le nouveau minimum provisoire.`);
        }
      }
      if (minimum !== start) {
        [items[start],items[minimum]] = [items[minimum],items[start]];
        swaps++;
        snap('swap',[start,minimum],start+1,start,null,`Placer le minimum ${items[start].value} à l’indice ${start} en échangeant les deux valeurs.`);
      }
      snap('pass',[],start+1,start+1,null,`${items[start].value} est définitivement placé. On recommence à sa droite.`);
    }
    snap('done',[],Math.max(0,items.length-1),items.length,null,'Tri par sélection terminé : tous les minimums successifs sont en place.');
    return frames;
  }

  function insertionFrames(values) {
    const items = values.map((value,id) => ({value,id}));
    const frames = [];
    let comparisons = 0, swaps = 0;
    const snap = (phase,pair,pass,orderedUntil,selectedId,message) => frames.push({
      items:items.map(item=>({...item})),phase,pair,pass,orderedUntil,selectedId,
      comparisons,swaps,message
    });
    snap('initial',[],0,Math.min(1,items.length),null,'Le premier élément constitue à lui seul une partie triée.');
    for (let i=1;i<items.length;i++) {
      let j=i;
      const selectedId=items[j].id;
      snap('take',[],i,i,selectedId,`Prendre ${items[j].value} et chercher sa place parmi les valeurs de gauche.`);
      while (j>0) {
        comparisons++;
        snap('compare',[j-1,j],i,i+1,selectedId,`Comparer ${items[j-1].value} à la valeur à insérer, ${items[j].value}.`);
        if (items[j-1].value <= items[j].value) break;
        const moved=items[j-1].value;
        [items[j-1],items[j]]=[items[j],items[j-1]];
        j--;
        swaps++;
        snap('shift',[j,j+1],i,i+1,selectedId,`${moved} se décale à droite ; ${items[j].value} poursuit son insertion vers la gauche.`);
      }
      snap('insert',[],i,i+1,null,`Les ${i+1} premières valeurs sont triées entre elles. Elles peuvent encore se déplacer plus tard.`);
    }
    snap('done',[],Math.max(0,items.length-1),items.length,null,'Tri par insertion terminé : toutes les valeurs ont rejoint la partie triée.');
    return frames;
  }

  function quickSortFrames(values) {
    const items = values.map((value, id) => ({value, id}));
    const frames = [];
    const finalIds = new Set();
    let comparisons = 0, swaps = 0;
    const snapshot = (phase, low, high, pivotId, scanIndex, boundaryIndex, pair, message) => frames.push({
      items: items.map(item => ({...item})), phase, low, high, pivotId, scanIndex,
      boundaryIndex, pair, comparisons, swaps, finalIds: [...finalIds], message
    });

    snapshot('initial', 0, items.length - 1, null, null, null, [],
      'Liste initiale. Chaque partition choisira le dernier élément de sa zone comme pivot.');

    function sort(low, high) {
      if (low >= high) {
        if (low === high) finalIds.add(items[low].id);
        snapshot('base', low, high, null, null, null, [],
          low === high ? `Zone réduite à ${items[low].value} : une seule valeur est déjà à sa place.` : 'Zone vide : il n’y a rien à trier.');
        return;
      }

      const pivotId = items[high].id;
      const pivot = items[high].value;
      let boundary = low - 1;
      snapshot('pivot', low, high, pivotId, null, boundary, [],
        `Nouvelle zone, indices ${low} à ${high}. Choisir ${pivot} comme pivot.`);

      for (let current = low; current < high; current++) {
        comparisons++;
        snapshot('compare', low, high, pivotId, current, boundary, [current, high],
          `Comparer ${items[current].value} au pivot ${pivot}.`);
        if (items[current].value <= pivot) {
          boundary++;
          if (boundary !== current) {
            [items[boundary], items[current]] = [items[current], items[boundary]];
            swaps++;
            snapshot('swap', low, high, pivotId, current, boundary, [boundary, current],
              `${items[boundary].value} ≤ ${pivot} : placer cette valeur dans la zone de gauche.`);
          } else {
            snapshot('keep', low, high, pivotId, current, boundary, [current],
              `${items[current].value} ≤ ${pivot} : la valeur est déjà du côté gauche.`);
          }
        } else {
          snapshot('keep', low, high, pivotId, current, boundary, [current],
            `${items[current].value} > ${pivot} : elle reste du côté droit.`);
        }
      }

      const pivotIndex = boundary + 1;
      if (pivotIndex !== high) {
        [items[pivotIndex], items[high]] = [items[high], items[pivotIndex]];
        swaps++;
      }
      finalIds.add(pivotId);
      snapshot('partition', low, high, pivotId, null, boundary, [pivotIndex],
        `Placer le pivot ${pivot} à l’indice ${pivotIndex}. Il est définitivement rangé.`);
      sort(low, pivotIndex - 1);
      sort(pivotIndex + 1, high);
    }

    sort(0, items.length - 1);
    snapshot('done', 0, items.length - 1, null, null, null, [],
      `Tri terminé : ${items.map(item => item.value).join(', ')}.`);
    return frames;
  }

  function swapFrames(a = 8, b = 3) {
    return [
      {a, b, temp:null, active:'', code:`a = ${a} ; b = ${b}`, message:`Situation initiale. Comment conserver ${a} pendant le remplacement de a ?`},
      {a, b, temp:a, active:'temp', code:'temp = a', message:'On sauvegarde la valeur de a dans temp. a et b ne changent pas.'},
      {a:b, b, temp:a, active:'a', code:'a = b', message:'a reçoit la valeur de b. La valeur initiale de a est toujours dans temp.'},
      {a:b, b:a, temp:a, active:'b', code:'b = temp', message:'b reçoit la valeur sauvegardée. Les valeurs de a et b sont échangées.'}
    ];
  }

  function mount(host, config) {
    const isSwap = config.kind === 'swap';
    const discovery = config.kind === 'discovery';
    const selection = config.kind === 'selection';
    const insertion = config.kind === 'insertion';
    const quick = config.kind === 'quick';
    let values = [...(config.values || [5,2,4,1,3])];
    let frames = isSwap ? swapFrames() : quick ? quickSortFrames(values) : selection ? selectionFrames(values) : insertion ? insertionFrames(values) : bubbleFrames(values, config.kind === 'pass');
    let position = 0, playing = false, timer = null, disposed = false;
    const reduceMotion = global.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const number = value => String(value); // Données numériques internes, jamais de saisie HTML.

    host.className = `sorting-demo ${discovery ? 'discovery-demo' : ''}`;
    host.innerHTML = `<div class="sort-toolbar"><span class="mini-label">${isSwap ? 'UNE VALEUR À LA FOIS' : quick ? 'PIVOT · PARTITION · RÉCURSION' : discovery ? 'OBSERVEZ LE MOUVEMENT' : 'LE TRI À LA LOUPE'}</span><span data-demo-counter></span></div>
      ${isSwap ? '<div class="swap-registers">' + ['a','b','temp'].map(name => `<div class="swap-register" data-register="${name}"><span>${name}</span><strong data-value="${name}"></strong></div>`).join('') + '</div><div class="swap-assignment"><code data-assignment></code></div>' :
        `<div class="sort-stage"><svg viewBox="0 0 720 280" role="img" aria-label="Valeurs de la liste représentées par des barres" data-chart><defs><linearGradient id="sort-gradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#a5c6ad"/><stop offset="100%" stop-color="#5f8d76"/></linearGradient></defs><line class="sort-baseline" x1="20" y1="222" x2="700" y2="222"/><g data-bars></g><g data-indices></g></svg></div>
        <div class="sort-legend"><span><i class="legend-neutral"></i>${quick ? 'Zone à traiter' : 'À parcourir'}</span><span><i class="legend-active"></i>${quick ? 'Valeur examinée' : discovery ? 'Valeurs observées' : selection ? 'Valeurs comparées' : 'Voisins comparés'}</span>${quick ? '<span><i class="legend-pivot"></i>Pivot</span>' : ''}${selection || insertion ? `<span><i class="legend-picked"></i>${selection ? 'Minimum provisoire' : 'Valeur à insérer'}</span>` : ''}<span><i class="${quick ? 'legend-fixed' : insertion ? 'legend-ordered' : 'legend-fixed'}"></i>${insertion ? 'Partie triée, encore mobile' : 'Position définitive'}</span></div>`}
      <p class="sort-message" data-demo-message role="status" aria-live="polite"></p>
      <div class="sort-controls" role="group" aria-label="Commandes de l’animation">
        <button class="button" data-demo-action="previous" aria-label="Étape précédente">←</button>
        ${!isSwap ? '<button class="button primary" data-demo-action="play" aria-pressed="false">Lire l’animation</button>' : ''}
        <button class="button" data-demo-action="next">Étape suivante →</button>
        <button class="button" data-demo-action="reset">Recommencer</button>
        ${discovery ? '<button class="button" data-demo-action="shuffle">Autre liste</button>' : ''}
        ${!isSwap ? '<label class="sort-speed">Vitesse <select data-demo-speed><option value="1300">Lente</option><option value="800" selected>Normale</option><option value="350">Rapide</option></select></label>' : ''}
      </div>
      ${discovery ? '<details class="hint discovery-answer"><summary>Révéler le principe après vos hypothèses</summary><p>On compare deux voisins. Si celui de gauche est plus grand, on les échange. À la fin d’un passage, le maximum de la partie parcourue est placé à droite. On recommence sur la partie restante : c’est le <strong>tri à bulles</strong>.</p></details>' : ''}`;

    const query = selector => host.querySelector(selector);
    const message = query('[data-demo-message]');
    const counter = query('[data-demo-counter]');
    const previousButton = query('[data-demo-action="previous"]');
    const nextButton = query('[data-demo-action="next"]');
    const playButton = query('[data-demo-action="play"]');
    const speed = query('[data-demo-speed]');

    if (!isSwap) {
      query('[data-bars]').innerHTML = values.map((_, id) => `<g class="sort-bar" data-bar="${id}"><rect rx="9"/><text class="sort-value" text-anchor="middle" y="-12"></text></g>`).join('');
      const cell = 660 / values.length;
      query('[data-indices]').innerHTML = values.map((_, i) => `<text class="sort-index" text-anchor="middle" x="${30 + cell*i + cell/2}" y="254">${i}</text>`).join('') + '<text class="sort-axis" x="30" y="276">INDICES</text>';
    }

    function update() {
      if (disposed) return;
      const frame = frames[position];
      previousButton.disabled = position === 0;
      nextButton.disabled = position === frames.length-1;
      message.setAttribute('aria-live', playing ? 'off' : 'polite');
      if (isSwap) {
        counter.textContent = `Étape ${position} / 3`;
        for (const name of ['a','b','temp']) {
          query(`[data-value="${name}"]`).textContent = frame[name] === null ? '—' : number(frame[name]);
          query(`[data-register="${name}"]`).classList.toggle('is-active', frame.active === name);
        }
        query('[data-assignment]').textContent = frame.code;
        message.textContent = frame.message;
      } else {
        const cell = 660 / values.length;
        const width = Math.min(cell-16, 82);
        const max = Math.max(...values,1);
        frame.items.forEach((item, i) => {
          const bar = query(`[data-bar="${item.id}"]`);
          const height = 32 + item.value/max*136;
          bar.style.transform = `translate(${30+cell*i+(cell-width)/2}px, ${220-height}px)`;
          bar.classList.toggle('is-active', frame.pair.includes(i));
          bar.classList.toggle('is-fixed', i >= frame.sortedFrom || i < (frame.fixedUntil || 0));
          bar.classList.toggle('is-ordered', i < (frame.orderedUntil || 0) && item.id !== frame.selectedId);
          bar.classList.toggle('is-picked', item.id === frame.selectedId);
          bar.classList.toggle('is-pivot', quick && item.id === frame.pivotId);
          bar.classList.toggle('is-quick-final', quick && frame.finalIds.includes(item.id));
          bar.classList.toggle('is-quick-outside', quick && frame.phase !== 'initial' && frame.phase !== 'done' && (i < frame.low || i > frame.high));
          bar.querySelector('rect').setAttribute('width', width);
          bar.querySelector('rect').setAttribute('height', height);
          bar.querySelector('text').setAttribute('x', width/2);
          bar.querySelector('text').textContent = number(item.value);
        });
        query('[data-chart]').setAttribute('aria-label', `Liste : ${frame.items.map(x => x.value).join(', ')}.${discovery ? '' : ' ' + frame.message}`);
        if (quick) {
          const bounds = frame.low <= frame.high ? ` · Zone ${frame.low}–${frame.high}` : '';
          counter.textContent = `Étape ${position} / ${frames.length-1}${bounds} · Comparaisons ${frame.comparisons} · Échanges ${frame.swaps}`;
        } else {
          counter.textContent = discovery ? `Étape ${position} / ${frames.length-1}` : `${selection || insertion ? 'Tour' : 'Passage'} ${frame.pass} · Comparaisons ${frame.comparisons} / ${frames.at(-1).comparisons} · ${insertion ? 'Décalages' : 'Échanges'} ${frame.swaps}`;
        }
        message.textContent = discovery ? (frame.phase === 'done' ? 'La liste est maintenant rangée. Votre hypothèse explique-t-elle tous les déplacements ?' : 'À votre avis, quelle règle décide du prochain déplacement ?') : frame.message;
        playButton.textContent = playing ? 'Pause' : position === frames.length-1 ? 'Rejouer l’animation' : 'Lire l’animation';
        playButton.setAttribute('aria-pressed', String(playing));
      }
    }

    function stop() {
      playing = false;
      if (timer !== null) global.clearTimeout(timer);
      timer = null;
    }
    function schedule() {
      timer = global.setTimeout(() => {
        if (!playing || disposed) return;
        position++;
        if (position === frames.length-1) stop();
        update();
        if (playing) schedule();
      }, Number(speed.value));
    }
    function onClick(event) {
      const button = event.target.closest('[data-demo-action]');
      if (!button || button.disabled) return;
      const action = button.dataset.demoAction;
      if (action === 'play') {
        if (playing) stop();
        else {
          if (position === frames.length-1) position = 0;
          playing = true;
          schedule();
        }
      } else {
        stop();
        if (action === 'previous') position = Math.max(0, position-1);
        if (action === 'next') position = Math.min(frames.length-1, position+1);
        if (action === 'reset') position = 0;
        if (action === 'shuffle') {
          for (let i = values.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i+1));
            [values[i], values[j]] = [values[j], values[i]];
          }
          frames = bubbleFrames(values);
          position = 0;
        }
      }
      update();
    }
    function onSpeed() {
      if (!playing) return;
      global.clearTimeout(timer);
      schedule();
    }
    function onVisibility() {
      if (document.hidden) { stop(); update(); }
    }
    host.addEventListener('click', onClick);
    speed?.addEventListener('change', onSpeed);
    document.addEventListener('visibilitychange', onVisibility);
    // Le mode découverte démarre seul ; les préférences de mouvement sont respectées.
    if ((discovery || selection || insertion) && !reduceMotion && !document.hidden) { playing = true; schedule(); }
    update();
    return () => {
      disposed = true;
      stop();
      host.removeEventListener('click', onClick);
      speed?.removeEventListener('change', onSpeed);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }

  const api = {bubbleFrames, selectionFrames, insertionFrames, quickSortFrames, swapFrames, mount};
  global.SortingLesson = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
