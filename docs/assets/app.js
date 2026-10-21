/* Interface statique : fonctionne aussi en ouvrant directement les fichiers HTML. */
(() => {
  'use strict';
  const root = document.querySelector('#app');
  const id = document.body.dataset.content;
  const content = window.LEARNING_CONTENT?.[id];
  const letters = 'ABCDE';
  const escape = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const store = {
    available: true,
    read(key) { try { return JSON.parse(localStorage.getItem(key)); } catch { this.available = false; return null; } },
    write(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { this.available = false; } }
  };
  if (!content) {
    root.innerHTML = '<div class="empty-state"><h1>Le contenu n’a pas pu être chargé.</h1><p>Rechargez la page pour réessayer.</p><a href="../index.html">Revenir au parcours</a></div>';
    return;
  }
  const focusTitle = () => {
    const title = root.querySelector('#content-title');
    title?.focus({preventScroll:true});
    window.scrollTo({top:0, behavior:'instant'});
  };
  const pageHeading = extra => `<div class="page-heading"><div><p class="eyebrow">LE LABO PYTHON / ${content.questions ? 'AUTOÉVALUATION' : 'COURS & PRATIQUE'}</p><h1>${escape(content.title)}</h1><p>${escape(content.subtitle)}</p></div>${extra || ''}</div>`;
  const progress = (value, total, label, right) => `<div class="progress-line"><span>${label}</span><span>${right}</span></div><progress value="${value}" max="${total}" aria-label="${content.questions ? 'Questions répondues' : 'Progression dans le cours'}"></progress>`;

  function initQuiz() {
    const questions = content.questions;
    const total = questions.length;
    // La signature invalide une sauvegarde si les questions ou leurs réponses changent.
    const signature = JSON.stringify(questions);
    const key = `labo-python-${id}-v1`;
    const previous = store.read(key);
    let answers = Array(total).fill(null);
    let position = 0;
    let completed = false;
    if (previous?.signature === signature && Array.isArray(previous.answers) && previous.answers.length === total) {
      answers = previous.answers.map((answer, i) => Number.isInteger(answer) && answer >= 0 && answer < questions[i].options.length ? answer : null);
      position = Number.isInteger(previous.position) && previous.position >= 0 && previous.position < total ? previous.position : 0;
      completed = previous.completed === true && answers.every(answer => answer !== null);
    }
    const score = () => answers.reduce((sum, answer, i) => sum + (answer === questions[i].answer ? 1 : 0), 0);
    const answeredCount = () => answers.filter(answer => answer !== null).length;
    const save = () => store.write(key, {signature, answers, position, completed});
    save();

    function render() {
      if (completed) { renderResults(); return; }
      const question = questions[position];
      const chosen = answers[position];
      const answered = chosen !== null;
      const correct = chosen === question.answer;
      root.innerHTML = pageHeading(`<div class="score-chip" aria-label="Score actuel : ${score()} sur ${total}"><span>SCORE ACTUEL</span><strong>${score()} <small>/ ${total}</small></strong></div>`) +
        progress(answeredCount(), total, `${answeredCount()} / ${total} questions répondues`, '1 bonne réponse = 1 point') +
        `<div class="learning-layout"><aside class="sidebar" aria-label="Navigation du questionnaire"><p class="sidebar-title">LES QUESTIONS</p><nav class="question-map" aria-label="Choisir une question">${questions.map((q, i) => `<button class="map-button ${answers[i] !== null ? 'answered' : ''}" data-question="${i}" aria-label="Question ${i+1} : ${escape(q.title)}${answers[i] !== null ? ', répondue' : ', à faire'}" ${i === position ? 'aria-current="step"' : ''}>${i+1}</button>`).join('')}</nav><p class="side-note">Une seule réponse par question. Votre choix est enregistré dès que vous cliquez.</p><details><summary>${id === 'quiz01' ? 'Conventions du pseudo-code' : 'Rappels Python'}</summary><div class="prose">${content.conventions}</div></details><p class="side-note saved">${store.available ? 'Votre progression est conservée dans ce navigateur. Aucun résultat n’est envoyé.' : 'Votre progression reste disponible pendant cette visite. Le stockage du navigateur est indisponible.'}</p></aside>
        <div class="content-column"><article class="question-card"><div class="question-kicker">Question ${String(position+1).padStart(2,'0')} <span class="pill">${id === 'quiz01' ? 'Pseudo-code' : 'Python'}</span></div><h2 id="content-title" tabindex="-1">${escape(question.title)}</h2><div class="prose">${question.prompt}</div><p class="quiz-instruction">Choisissez une réponse pour afficher son explication.</p><div class="options" role="group" aria-label="Réponses proposées">${question.options.map((option, i) => {
          let state = '', label = '';
          if (answered && i === question.answer) {state = 'correct'; label = i === chosen ? 'Votre réponse · correcte' : 'Réponse attendue';}
          else if (answered && i === chosen) {state = 'incorrect'; label = 'Votre réponse · incorrecte';}
          return `<button type="button" class="option ${state}" data-choice="${i}" ${answered ? 'disabled' : ''}><span class="option-letter">${letters[i]}</span><span class="option-content">${option}${label ? `<span class="answer-label">${label}</span>` : ''}</span></button>`;
        }).join('')}</div><section id="feedback" class="feedback ${answered && !correct ? 'incorrect' : ''}" tabindex="-1" aria-live="polite" aria-atomic="true" ${answered ? '' : 'hidden'}>${answered ? `<h3>${correct ? 'Réponse correcte' : 'Réponse incorrecte'} · réponse attendue : ${letters[question.answer]}</h3>${question.explanation}<details><summary>Comprendre les autres propositions</summary><div class="prose">${question.feedback}</div></details>` : ''}</section></article>
        <nav class="card-controls" aria-label="Navigation du QCM"><button class="button" data-action="previous" ${position === 0 ? 'disabled' : ''}>← Précédente</button><button class="button primary" data-action="next" ${!answered ? 'disabled' : ''}>${answeredCount() === total ? 'Voir mon résultat' : position === total-1 ? 'Question à compléter' : 'Suivante'} <span aria-hidden="true">→</span></button></nav><p class="neutral-note">Prenez le temps de lire l’explication avant de continuer.</p></div></div>`;
    }

    function renderResults() {
      const value = score();
      root.innerHTML = pageHeading('') + progress(total, total, `${total} / ${total} questions répondues`, 'Questionnaire terminé') +
        `<section class="results-card"><p class="eyebrow" style="justify-content:center">VOTRE RÉSULTAT</p><h2 id="content-title" tabindex="-1">${value} réponse${value > 1 ? 's' : ''} correcte${value > 1 ? 's' : ''} sur ${total}</h2><p class="result-score">${value}<small> / ${total}</small></p><p>${Math.round(value / total * 100)} % de réponses correctes. Retrouvez ci-dessous les explications de chaque question.</p><div class="result-actions"><button class="button" data-action="restart">Recommencer le QCM</button><a class="button primary" href="${content.next}">${escape(content.nextLabel)} →</a><a class="button" href="../index.html">Retour au parcours</a></div></section>
        <section class="review-list" aria-labelledby="review-heading"><h2 id="review-heading">Revoir mes réponses</h2>${questions.map((question, i) => `<details class="review-item ${answers[i] === question.answer ? '' : 'missed'}"><summary><span>${answers[i] === question.answer ? 'Correcte' : 'Incorrecte'}</span> ${i+1}. ${escape(question.title)}</summary><div class="prose">${question.prompt}<div class="review-answer"><strong>VOTRE RÉPONSE · ${letters[answers[i]]}</strong>${question.options[answers[i]]}</div>${answers[i] !== question.answer ? `<div class="review-answer"><strong>RÉPONSE ATTENDUE · ${letters[question.answer]}</strong>${question.options[question.answer]}</div>` : ''}${question.feedback}</div></details>`).join('')}</section>`;
    }

    root.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button || button.disabled) return;
      if (button.hasAttribute('data-choice')) {
        if (completed || answers[position] !== null) return;
        answers[position] = Number(button.dataset.choice);
        save();
        render();
        root.querySelector('#feedback').focus({preventScroll:true});
        root.querySelector('#feedback').scrollIntoView({block:'nearest', behavior:'instant'});
      } else if (button.hasAttribute('data-question')) {
        position = Number(button.dataset.question);
        save(); render(); focusTitle();
      } else if (button.dataset.action === 'previous') {
        position = Math.max(0, position-1);
        save(); render(); focusTitle();
      } else if (button.dataset.action === 'next') {
        if (answers[position] === null) return;
        if (answeredCount() === total) completed = true;
        else if (position === total-1) position = answers.indexOf(null);
        else position += 1;
        save(); render(); focusTitle();
      } else if (button.dataset.action === 'restart') {
        answers = Array(total).fill(null); position = 0; completed = false;
        save(); render(); focusTitle();
      }
    });
    render();
  }

  function initSlides() {
    const slides = content.slides;
    const key = `labo-python-${id}-slide-v1`;
    const saved = store.read(key);
    const fromHash = () => /^#slide-\d+$/.test(location.hash) ? Number(location.hash.slice(7)) - 1 : null;
    let position = fromHash() ?? saved ?? 0;
    if (!Number.isInteger(position) || position < 0 || position >= slides.length) position = 0;

    function render() {
      const slide = slides[position];
      let group = '';
      const links = slides.map((item, i) => {
        const label = item.group !== group ? `<p class="group-title">${escape(item.group)}</p>` : '';
        group = item.group;
        return label + `<button class="slide-link" data-slide="${i}" ${i === position ? 'aria-current="step"' : ''}><small>${String(i+1).padStart(2,'0')}</small><span>${escape(item.title)}<em>${escape(item.kind)}</em></span></button>`;
      }).join('');
      root.innerHTML = pageHeading('') + progress(position+1, slides.length, `Slide ${position+1} / ${slides.length}`, escape(slide.group)) +
        `<div class="learning-layout"><aside class="sidebar slide-sidebar" aria-label="Sommaire du cours"><p class="sidebar-title">DANS CE CHAPITRE</p><nav class="slide-list" aria-label="Choisir une slide">${links}</nav><div class="mobile-select"><label for="slide-select">Aller à une slide</label><select id="slide-select">${slides.map((item,i) => `<option value="${i}" ${i === position ? 'selected' : ''}>${i+1}. ${escape(item.kind)} — ${escape(item.title)}</option>`).join('')}</select></div><p class="keyboard-note"><kbd>←</kbd> <kbd>→</kbd> pour changer de slide.</p><a class="back-link" href="data:text/markdown;charset=utf-8,${escape(encodeURIComponent(content.source))}" download="${id === 'intro' ? '01_introduction_python.md' : '02_algorithmique.md'}">Télécharger le support ↓</a></aside><div class="content-column"><article class="slide-card ${slide.kind.startsWith('Exercice') ? 'exercise' : ''}"><div class="question-kicker">${escape(slide.kind)} <span class="pill">${id === 'intro' ? 'Python · les bases' : 'Algorithmique'}</span></div><h2 id="content-title" tabindex="-1">${escape(slide.title)}</h2><div class="prose">${slide.html}</div></article><nav class="card-controls" aria-label="Navigation du cours"><button class="button" data-action="previous" ${position === 0 ? 'disabled' : ''}>← Précédente</button>${position === slides.length-1 ? `<a class="button primary" href="${content.next}">${escape(content.nextLabel)} →</a>` : '<button class="button primary" data-action="next">Suivante →</button>'}</nav></div></div>`;
      const current = root.querySelector('.slide-link[aria-current="step"]');
      if (current) current.parentElement.scrollTop = Math.max(0, current.offsetTop - current.parentElement.offsetTop - 120);
    }
    function go(index) {
      if (index < 0 || index >= slides.length) return;
      position = index;
      store.write(key, position);
      try { history.replaceState(null, '', `#slide-${position+1}`); } catch { /* La navigation reste fonctionnelle sans History API. */ }
      render(); focusTitle();
    }
    root.addEventListener('click', event => {
      const button = event.target.closest('button');
      if (!button || button.disabled) return;
      if (button.hasAttribute('data-slide')) go(Number(button.dataset.slide));
      if (button.dataset.action === 'previous') go(position-1);
      if (button.dataset.action === 'next') go(position+1);
    });
    root.addEventListener('change', event => {
      if (event.target.id === 'slide-select') go(Number(event.target.value));
    });
    document.addEventListener('keydown', event => {
      if (event.altKey || event.metaKey || event.ctrlKey || event.shiftKey || event.target.closest('input,select,textarea,button,summary,pre,.table-wrap,[contenteditable]')) return;
      if (event.key === 'ArrowRight' && position < slides.length-1) { event.preventDefault(); go(position+1); }
      if (event.key === 'ArrowLeft' && position > 0) { event.preventDefault(); go(position-1); }
    });
    window.addEventListener('hashchange', () => { const next = fromHash(); if (next !== null && next >= 0 && next < slides.length) go(next); });
    render();
  }

  if (content.questions) initQuiz(); else initSlides();
})();
