// Généré par scripts/build_content.py — modifier les sources Markdown.
window.LEARNING_CONTENT = {
  "quiz01": {
    "title": "QCM de révision 01",
    "subtitle": "Les fondamentaux en pseudo-code",
    "questions": [
      {
        "title": "Affectation",
        "prompt": "<p>Que réalise l&#x27;instruction suivante ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>age ← 19</code></pre></div>",
        "options": [
          "<span class=\"option-text\">Compare <code>age</code> à 19.</span>",
          "<span class=\"option-text\">Affecte la valeur 19 à <code>age</code>.</span>",
          "<span class=\"option-text\">Affiche 19.</span>",
          "<span class=\"option-text\">Déclare une constante immuable.</span>",
          "<span class=\"option-text\">Demande un âge à l&#x27;utilisateur.</span>"
        ],
        "answer": 1,
        "explanation": "<p>La flèche <code>←</code> indique une affectation, pas une comparaison.</p>",
        "feedback": "<p>La flèche <code>←</code> indique une affectation, pas une comparaison.</p>\n<ul><li><strong>A :</strong> une comparaison utiliserait <code>=</code> dans ce pseudo-code.</li><li><strong>C :</strong> l&#x27;affichage nécessiterait <code>AFFICHER</code>.</li><li><strong>D :</strong> aucune constante n&#x27;est déclarée ici.</li><li><strong>E :</strong> aucune saisie n&#x27;est demandée (<code>LIRE</code>).</li></ul>"
      },
      {
        "title": "Types de données",
        "prompt": "<p>Quel type convient à la variable <code>prix</code> ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>prix ← 12,5</code></pre></div>",
        "options": [
          "<span class=\"option-text\">Entier.</span>",
          "<span class=\"option-text\">Texte.</span>",
          "<span class=\"option-text\">Réel (nombre décimal).</span>",
          "<span class=\"option-text\">Booléen.</span>",
          "<span class=\"option-text\">Tableau.</span>"
        ],
        "answer": 2,
        "explanation": "<p>La valeur comporte une partie décimale ; on utilise le type réel.</p>",
        "feedback": "<p>La valeur comporte une partie décimale ; on utilise le type réel.</p>\n<ul><li><strong>A :</strong> un entier ne représente pas directement 12,5.</li><li><strong>B :</strong> ce n&#x27;est pas du texte entre guillemets.</li><li><strong>D :</strong> un booléen vaut <code>VRAI</code> ou <code>FAUX</code>.</li><li><strong>E :</strong> un tableau contiendrait plusieurs éléments.</li></ul>"
      },
      {
        "title": "Suivi des affectations",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>x ← 5\nx ← x + 3\nx ← x × 2\nAFFICHER x</code></pre></div>",
        "options": [
          "<span class=\"option-text\">8</span>",
          "<span class=\"option-text\">10</span>",
          "<span class=\"option-text\">13</span>",
          "<span class=\"option-text\">16</span>",
          "<span class=\"option-text\">20</span>"
        ],
        "answer": 3,
        "explanation": "<p><code>x</code> vaut successivement 5, 8 et 16. L&#x27;affectation modifie la valeur mémorisée.</p>",
        "feedback": "<p><code>x</code> vaut successivement 5, 8 et 16. L&#x27;affectation modifie la valeur mémorisée.</p>\n<ul><li><strong>A :</strong> c&#x27;est la valeur intermédiaire avant la multiplication.</li><li><strong>B, C, E :</strong> ces réponses ne respectent pas l&#x27;ordre des instructions.</li></ul>"
      },
      {
        "title": "Comparaison",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>a ← 10\nb ← 5\nAFFICHER (a = b × 2)</code></pre></div>",
        "options": [
          "<span class=\"option-text\">FAUX</span>",
          "<span class=\"option-text\">VRAI</span>",
          "<span class=\"option-text\">10</span>",
          "<span class=\"option-text\">20</span>",
          "<span class=\"option-text\">Erreur</span>"
        ],
        "answer": 1,
        "explanation": "<p><code>b × 2</code> vaut 10, donc <code>a = b × 2</code> est vrai.</p>",
        "feedback": "<p><code>b × 2</code> vaut 10, donc <code>a = b × 2</code> est vrai.</p>\n<ul><li><strong>A :</strong> la comparaison est bien satisfaite.</li><li><strong>C et D :</strong> une comparaison affiche un booléen, pas un nombre.</li><li><strong>E :</strong> l&#x27;expression est valide avec les conventions annoncées.</li></ul>"
      },
      {
        "title": "Condition simple",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>note ← 12\nSI note ≥ 10 ALORS\n    AFFICHER &quot;Admis&quot;\nSINON\n    AFFICHER &quot;Refusé&quot;\nFIN SI</code></pre></div>",
        "options": [
          "<span class=\"option-text\">Refusé</span>",
          "<span class=\"option-text\">VRAI</span>",
          "<span class=\"option-text\">Admis</span>",
          "<span class=\"option-text\">12</span>",
          "<span class=\"option-text\">Rien</span>"
        ],
        "answer": 2,
        "explanation": "<p><code>12 ≥ 10</code> : la branche <code>ALORS</code> est exécutée.</p>",
        "feedback": "<p><code>12 ≥ 10</code> : la branche <code>ALORS</code> est exécutée.</p>\n<ul><li><strong>A :</strong> la branche <code>SINON</code> n&#x27;est pas exécutée.</li><li><strong>B et D :</strong> le programme affiche un message, pas la condition ni la note.</li><li><strong>E :</strong> une instruction <code>AFFICHER</code> est exécutée.</li></ul>"
      },
      {
        "title": "Modulo",
        "prompt": "<p>Quelle est la valeur de <code>17 MOD 5</code> ?</p>",
        "options": [
          "<span class=\"option-text\">3</span>",
          "<span class=\"option-text\">5</span>",
          "<span class=\"option-text\">0</span>",
          "<span class=\"option-text\">1</span>",
          "<span class=\"option-text\">2</span>"
        ],
        "answer": 4,
        "explanation": "<p><code>17 = 5 × 3 + 2</code> : le reste vaut 2.</p>",
        "feedback": "<p><code>17 = 5 × 3 + 2</code> : le reste vaut 2.</p>\n<ul><li><strong>A :</strong> 3 est le quotient entier, pas le reste.</li><li><strong>B, C et D :</strong> ne correspondent pas à la division euclidienne.</li></ul>"
      },
      {
        "title": "Boucle POUR",
        "prompt": "<p>Combien de fois le message est-il affiché ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>POUR i DE 2 À 7\n    AFFICHER &quot;Bonjour&quot;\nFIN POUR</code></pre></div>",
        "options": [
          "<span class=\"option-text\">8</span>",
          "<span class=\"option-text\">6</span>",
          "<span class=\"option-text\">7</span>",
          "<span class=\"option-text\">5</span>",
          "<span class=\"option-text\">2</span>"
        ],
        "answer": 1,
        "explanation": "<p>La boucle parcourt 2, 3, 4, 5, 6 et 7 : six valeurs.</p>",
        "feedback": "<p>La boucle parcourt 2, 3, 4, 5, 6 et 7 : six valeurs.</p>\n<ul><li><strong>A, C, D et E :</strong> résultent d&#x27;un mauvais comptage des bornes, qui sont inclusives ici.</li></ul>"
      },
      {
        "title": "Boucle TANT QUE",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>x ← 1\nTANT QUE x &lt; 10 FAIRE\n    x ← x × 2\nFIN TANT QUE\nAFFICHER x</code></pre></div>",
        "options": [
          "<span class=\"option-text\">8</span>",
          "<span class=\"option-text\">10</span>",
          "<span class=\"option-text\">16</span>",
          "<span class=\"option-text\">32</span>",
          "<span class=\"option-text\">Boucle infinie</span>"
        ],
        "answer": 2,
        "explanation": "<p>On obtient 1 → 2 → 4 → 8 → 16. La condition devient fausse à 16.</p>",
        "feedback": "<p>On obtient 1 → 2 → 4 → 8 → 16. La condition devient fausse à 16.</p>\n<ul><li><strong>A :</strong> la boucle continue encore puisque 8 &lt; 10.</li><li><strong>B :</strong> la multiplication par 2 n&#x27;atteint pas nécessairement 10.</li><li><strong>D :</strong> la boucle est déjà terminée avant cette valeur.</li><li><strong>E :</strong> <code>x</code> augmente et dépasse le seuil.</li></ul>"
      },
      {
        "title": "Accumulateur",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>total ← 0\nPOUR i DE 1 À 4\n    total ← total + i\nFIN POUR\nAFFICHER total</code></pre></div>",
        "options": [
          "<span class=\"option-text\">10</span>",
          "<span class=\"option-text\">15</span>",
          "<span class=\"option-text\">4</span>",
          "<span class=\"option-text\">6</span>",
          "<span class=\"option-text\">5</span>"
        ],
        "answer": 0,
        "explanation": "<p><code>1 + 2 + 3 + 4 = 10</code>.</p>",
        "feedback": "<p><code>1 + 2 + 3 + 4 = 10</code>.</p>\n<ul><li><strong>B :</strong> ajouterait une valeur supplémentaire.</li><li><strong>C, D et E :</strong> ne correspondent pas à la somme des quatre passages.</li></ul>"
      },
      {
        "title": "Indices d'un tableau",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>notes ← [8, 12, 15, 19]\nAFFICHER notes[2]</code></pre></div>",
        "options": [
          "<span class=\"option-text\">8</span>",
          "<span class=\"option-text\">12</span>",
          "<span class=\"option-text\">19</span>",
          "<span class=\"option-text\">15</span>",
          "<span class=\"option-text\">Erreur</span>"
        ],
        "answer": 3,
        "explanation": "<p>Puisque le premier indice est 0, l&#x27;indice 2 désigne la troisième valeur : 15.</p>",
        "feedback": "<p>Puisque le premier indice est 0, l&#x27;indice 2 désigne la troisième valeur : 15.</p>\n<ul><li><strong>A et B :</strong> désignent les indices 0 et 1.</li><li><strong>C :</strong> désigne l&#x27;indice 3.</li><li><strong>E :</strong> l&#x27;indice 2 existe.</li></ul>"
      },
      {
        "title": "Modifier puis ajouter",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>valeurs ← [10, 20, 30]\nvaleurs[1] ← 50\nAJOUTER(valeurs, 40)\nAFFICHER valeurs</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>[10, 20, 30, 40]</code></span>",
          "<span class=\"option-text\"><code>[10, 50, 30, 40]</code></span>",
          "<span class=\"option-text\"><code>[10, 20, 50, 40]</code></span>",
          "<span class=\"option-text\"><code>[50, 20, 30, 40]</code></span>",
          "<span class=\"option-text\"><code>[10, 50, 40]</code></span>"
        ],
        "answer": 1,
        "explanation": "<p><code>valeurs[1]</code> remplace le deuxième élément, puis 40 est ajouté à la fin.</p>",
        "feedback": "<p><code>valeurs[1]</code> remplace le deuxième élément, puis 40 est ajouté à la fin.</p>\n<ul><li><strong>A :</strong> oublie la modification.</li><li><strong>C et D :</strong> modifient le mauvais indice.</li><li><strong>E :</strong> supprime un élément sans instruction correspondante.</li></ul>"
      },
      {
        "title": "Parcours et filtre",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>nombres ← [2, 4, 6, 8]\ntotal ← 0\nPOUR CHAQUE n DANS nombres\n    SI n &gt; 4 ALORS\n        total ← total + n\n    FIN SI\nFIN POUR\nAFFICHER total</code></pre></div>",
        "options": [
          "<span class=\"option-text\">20</span>",
          "<span class=\"option-text\">8</span>",
          "<span class=\"option-text\">14</span>",
          "<span class=\"option-text\">6</span>",
          "<span class=\"option-text\">10</span>"
        ],
        "answer": 2,
        "explanation": "<p>Seuls 6 et 8 sont strictement supérieurs à 4 ; leur somme vaut 14.</p>",
        "feedback": "<p>Seuls 6 et 8 sont strictement supérieurs à 4 ; leur somme vaut 14.</p>\n<ul><li><strong>A :</strong> additionne toutes les valeurs.</li><li><strong>B et D :</strong> ne retiennent qu&#x27;une seule valeur.</li><li><strong>E :</strong> additionne les valeurs exclues par la condition.</li></ul>"
      },
      {
        "title": "Conversion de températures",
        "prompt": "<p>On veut convertir les valeurs du tableau <code>celsius = [0, 10, 20, 30]</code> en Fahrenheit selon <code>F = C × 1,8 + 32</code>. Quel algorithme convient ?</p>",
        "options": [
          "<span class=\"option-text\"><code>fahrenheit ← celsius × 1,8 + 32</code></span>",
          "<span class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><span class=\"option-code\"><code>fahrenheit ← []\nPOUR CHAQUE c DANS celsius\n    AJOUTER(fahrenheit, c × 1,8 + 32)\nFIN POUR</code></span></span>",
          "<span class=\"option-text\"><code>AJOUTER(celsius, 32)</code></span>",
          "<span class=\"option-text\"><code>fahrenheit ← [celsius + 32]</code></span>",
          "<span class=\"option-text\"><code>fahrenheit ← celsius[0] × 1,8 + 32</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>On parcourt toutes les températures, on convertit chacune et on l&#x27;ajoute au nouveau tableau.</p>",
        "feedback": "<p>On parcourt toutes les températures, on convertit chacune et on l&#x27;ajoute au nouveau tableau.</p>\n<ul><li><strong>A et D :</strong> appliquent une opération numérique à l&#x27;ensemble du tableau comme s&#x27;il s&#x27;agissait d&#x27;un seul nombre.</li><li><strong>C :</strong> ajoute simplement une valeur au tableau initial.</li><li><strong>E :</strong> ne convertit que le premier élément.</li></ul>"
      },
      {
        "title": "Inverser un tableau",
        "prompt": "<p>On veut obtenir <code>[50, 40, 30, 20, 10]</code> à partir de <code>[10, 20, 30, 40, 50]</code>, <strong>sans modifier l&#x27;original</strong>. Quel algorithme convient ?</p>",
        "options": [
          "<span class=\"option-text\">Trier le tableau par ordre croissant.</span>",
          "<span class=\"option-text\">Remplacer chaque élément par 0.</span>",
          "<span class=\"option-text\">Copier uniquement les éléments d&#x27;indice 1 à 4.</span>",
          "<span class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><span class=\"option-code\"><code>inverse ← []\nPOUR i DE 4 À 0 AVEC UN PAS DE -1\n    AJOUTER(inverse, nombres[i])\nFIN POUR</code></span></span>",
          "<span class=\"option-text\"><code>inverse ← nombres[4]</code></span>"
        ],
        "answer": 3,
        "explanation": "<p>On parcourt les indices dans l&#x27;ordre décroissant et on construit un nouveau tableau.</p>",
        "feedback": "<p>On parcourt les indices dans l&#x27;ordre décroissant et on construit un nouveau tableau.</p>\n<ul><li><strong>A :</strong> trier n&#x27;est pas inverser l&#x27;ordre initial.</li><li><strong>B :</strong> perd toutes les valeurs.</li><li><strong>C :</strong> ne produit pas l&#x27;ordre inverse.</li><li><strong>E :</strong> récupère une seule valeur et non un tableau.</li></ul>"
      },
      {
        "title": "Recherche du maximum",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>valeurs ← [4, 12, 7, 15, 9]\nmaximum ← valeurs[0]\nPOUR CHAQUE valeur DANS valeurs\n    SI valeur &gt; maximum ALORS\n        maximum ← valeur\n    FIN SI\nFIN POUR\nAFFICHER maximum</code></pre></div>",
        "options": [
          "<span class=\"option-text\">4</span>",
          "<span class=\"option-text\">12</span>",
          "<span class=\"option-text\">9</span>",
          "<span class=\"option-text\">47</span>",
          "<span class=\"option-text\">15</span>"
        ],
        "answer": 4,
        "explanation": "<p>À chaque passage, on mémorise une valeur seulement si elle dépasse le maximum courant. Le résultat final est 15.</p>",
        "feedback": "<p>À chaque passage, on mémorise une valeur seulement si elle dépasse le maximum courant. Le résultat final est 15.</p>\n<ul><li><strong>A :</strong> est seulement la valeur d&#x27;initialisation.</li><li><strong>B :</strong> est un maximum intermédiaire.</li><li><strong>C :</strong> est la dernière valeur mais pas la plus grande.</li><li><strong>D :</strong> représente la somme des éléments, pas leur maximum.</li></ul>"
      },
      {
        "title": "ET, OU et parenthèses",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>age ← 17\naccompagne ← VRAI\nautorisation ← FAUX\nresultat ← (age ≥ 18 OU accompagne) ET autorisation\nAFFICHER resultat</code></pre></div>",
        "options": [
          "<span class=\"option-text\">VRAI</span>",
          "<span class=\"option-text\">FAUX</span>",
          "<span class=\"option-text\">17</span>",
          "<span class=\"option-text\">Erreur</span>",
          "<span class=\"option-text\">Rien</span>"
        ],
        "answer": 1,
        "explanation": "<p><code>(FAUX OU VRAI)</code> donne <code>VRAI</code>, puis <code>VRAI ET FAUX</code> donne <code>FAUX</code>.</p>",
        "feedback": "<p><code>(FAUX OU VRAI)</code> donne <code>VRAI</code>, puis <code>VRAI ET FAUX</code> donne <code>FAUX</code>.</p>\n<ul><li><strong>A :</strong> oublie que l&#x27;autorisation est obligatoire.</li><li><strong>C :</strong> l&#x27;expression produit un booléen, pas l&#x27;âge.</li><li><strong>D et E :</strong> l&#x27;expression est valide et affichée.</li></ul>"
      },
      {
        "title": "Priorité des opérateurs",
        "prompt": "<p>Convention : <strong>ET est prioritaire sur OU</strong>.</p>\n<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>a ← VRAI\nb ← FAUX\nc ← FAUX\nAFFICHER a OU b ET c</code></pre></div>",
        "options": [
          "<span class=\"option-text\">FAUX</span>",
          "<span class=\"option-text\">AUCUNE VALEUR</span>",
          "<span class=\"option-text\">VRAI</span>",
          "<span class=\"option-text\">Erreur de syntaxe</span>",
          "<span class=\"option-text\">0</span>"
        ],
        "answer": 2,
        "explanation": "<p>On évalue <code>b ET c</code> d&#x27;abord (<code>FAUX</code>), puis <code>a OU FAUX</code> donne <code>VRAI</code>.</p>",
        "feedback": "<p>On évalue <code>b ET c</code> d&#x27;abord (<code>FAUX</code>), puis <code>a OU FAUX</code> donne <code>VRAI</code>.</p>\n<ul><li><strong>A :</strong> correspondrait à <code>(a OU b) ET c</code>, ce qui n&#x27;est pas la priorité annoncée.</li><li><strong>B, D et E :</strong> ne sont pas des résultats adaptés à cette expression valide.</li></ul>"
      },
      {
        "title": "Conditions imbriquées",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>note ← 14\nabsences ← 3\nSI note ≥ 10 ALORS\n    SI absences &lt; 3 ALORS\n        AFFICHER &quot;Validé&quot;\n    SINON\n        AFFICHER &quot;À examiner&quot;\n    FIN SI\nSINON\n    AFFICHER &quot;Échec&quot;\nFIN SI</code></pre></div>",
        "options": [
          "<span class=\"option-text\">Validé</span>",
          "<span class=\"option-text\">Échec</span>",
          "<span class=\"option-text\">VRAI</span>",
          "<span class=\"option-text\">À examiner</span>",
          "<span class=\"option-text\">Rien</span>"
        ],
        "answer": 3,
        "explanation": "<p>La note satisfait la première condition, mais <code>3 &lt; 3</code> est faux. On exécute donc le <code>SINON</code> intérieur.</p>",
        "feedback": "<p>La note satisfait la première condition, mais <code>3 &lt; 3</code> est faux. On exécute donc le <code>SINON</code> intérieur.</p>\n<ul><li><strong>A :</strong> confond <code>&lt;</code> avec <code>≤</code>.</li><li><strong>B :</strong> supposerait une note inférieure à 10.</li><li><strong>C et E :</strong> un texte est effectivement affiché.</li></ul>"
      },
      {
        "title": "Divisibilité multiple",
        "prompt": "<div class=\"code-block\"><span class=\"code-label\">Pseudo-code</span><pre tabindex=\"0\"><code>nombre ← 30\nSI nombre MOD 2 = 0 ET nombre MOD 3 = 0 ET nombre MOD 5 ≠ 0 ALORS\n    AFFICHER &quot;A&quot;\nSINON\n    AFFICHER &quot;B&quot;\nFIN SI</code></pre></div>",
        "options": [
          "<span class=\"option-text\">A</span>",
          "<span class=\"option-text\">B</span>",
          "<span class=\"option-text\">30</span>",
          "<span class=\"option-text\">VRAI</span>",
          "<span class=\"option-text\">Erreur</span>"
        ],
        "answer": 1,
        "explanation": "<p>30 est divisible par 2 et par 3, mais aussi par 5 : la condition <code>nombre MOD 5 ≠ 0</code> est donc fausse.</p>",
        "feedback": "<p>30 est divisible par 2 et par 3, mais aussi par 5 : la condition <code>nombre MOD 5 ≠ 0</code> est donc fausse.</p>\n<ul><li><strong>A :</strong> ignore la dernière condition.</li><li><strong>C et D :</strong> l&#x27;algorithme affiche une lettre.</li><li><strong>E :</strong> le test est correctement formé.</li></ul>"
      },
      {
        "title": "Règle de validation",
        "prompt": "<p>Un étudiant valide un module si <strong>(moyenne ≥ 10 ET absences &lt; 5) OU dérogation</strong>. Quelle expression traduit exactement cette règle ?</p>",
        "options": [
          "<span class=\"option-text\"><code>moyenne ≥ 10 OU absences &lt; 5 ET derogation</code></span>",
          "<span class=\"option-text\"><code>moyenne ≥ 10 ET absences &lt; 5 ET derogation</code></span>",
          "<span class=\"option-text\"><code>moyenne ≥ 10 OU absences &lt; 5 OU derogation</code></span>",
          "<span class=\"option-text\"><code>NON (moyenne ≥ 10) ET derogation</code></span>",
          "<span class=\"option-text\"><code>(moyenne ≥ 10 ET absences &lt; 5) OU derogation</code></span>"
        ],
        "answer": 4,
        "explanation": "<p>Il faut remplir simultanément les deux conditions habituelles <strong>ou</strong> bénéficier d&#x27;une dérogation.</p>",
        "feedback": "<p>Il faut remplir simultanément les deux conditions habituelles <strong>ou</strong> bénéficier d&#x27;une dérogation.</p>\n<ul><li><strong>A :</strong> rend possible une validation avec la seule moyenne suffisante.</li><li><strong>B :</strong> impose aussi une dérogation à tous les étudiants.</li><li><strong>C :</strong> permet une validation avec seulement peu d&#x27;absences.</li><li><strong>D :</strong> exclut à tort les étudiants qui satisfont les critères ordinaires.</li></ul>"
      }
    ],
    "conventions": "<ul><li><code>←</code> affecte une valeur à une variable ; <code>=</code> compare deux valeurs.</li><li>Les indices des tableaux commencent à <strong>0</strong>.</li><li><code>POUR i DE a À b</code> inclut les deux bornes.</li><li><code>MOD</code> désigne le reste de la division entière.</li><li><code>DIV</code> désigne le quotient entier ; <code>ET</code>, <code>OU</code>, <code>NON</code> sont les opérateurs logiques.</li><li><code>AFFICHER</code> affiche un résultat ; <code>AJOUTER(tableau, valeur)</code> ajoute en fin de tableau.</li><li>Les blocs se terminent par <code>FIN SI</code>, <code>FIN POUR</code> ou <code>FIN TANT QUE</code>.</li></ul>",
    "next": "../supports/01_introduction_python.html",
    "nextLabel": "Passer à Python"
  },
  "quiz02": {
    "title": "QCM de révision 02",
    "subtitle": "Les algorithmes en Python",
    "questions": [
      {
        "title": "Affectations et permutation",
        "prompt": "<p>Que s&#x27;affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>a = 4\nb = 9\na = b\nb = a\nprint(a, b)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>4 9</code></span>",
          "<span class=\"option-text\"><code>9 4</code></span>",
          "<span class=\"option-text\"><code>9 9</code></span>",
          "<span class=\"option-text\"><code>4 4</code></span>"
        ],
        "answer": 2,
        "explanation": "<p><code>a = b</code> remplace 4 par 9. Ensuite, <code>b</code> reçoit la valeur actuelle de <code>a</code>, donc 9.</p>",
        "feedback": "<p><code>a = b</code> remplace 4 par 9. Ensuite, <code>b</code> reçoit la valeur actuelle de <code>a</code>, donc 9.</p>\n<ul><li>A : ignore les affectations.</li><li>B : ce serait une permutation réussie ; il fallait sauvegarder l&#x27;ancienne valeur de <code>a</code>.</li><li>D : la valeur 4 a été perdue dès <code>a = b</code>.</li></ul>"
      },
      {
        "title": "Quotient et reste",
        "prompt": "<p>Que s&#x27;affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>print(23 // 5, 23 % 5)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>4 3</code></span>",
          "<span class=\"option-text\"><code>4.6 3</code></span>",
          "<span class=\"option-text\"><code>3 4</code></span>",
          "<span class=\"option-text\"><code>4 0</code></span>"
        ],
        "answer": 0,
        "explanation": "<p><code>23 = 5 * 4 + 3</code> : le quotient entier vaut 4 et le reste vaut 3.</p>",
        "feedback": "<p><code>23 = 5 * 4 + 3</code> : le quotient entier vaut 4 et le reste vaut 3.</p>\n<ul><li>B : <code>4.6</code> serait le résultat de <code>/</code>, pas de <code>//</code>.</li><li>C : inverse le quotient et le reste.</li><li>D : 23 n&#x27;est pas divisible par 5.</li></ul>"
      },
      {
        "title": "Conditions combinées",
        "prompt": "<p>Que s&#x27;affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombre = 12\nif nombre % 2 == 0 and nombre &gt; 10:\n    print(&quot;A&quot;)\nelse:\n    print(&quot;B&quot;)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>B</code></span>",
          "<span class=\"option-text\"><code>True</code></span>",
          "<span class=\"option-text\"><code>A</code> puis <code>B</code></span>",
          "<span class=\"option-text\"><code>A</code></span>"
        ],
        "answer": 3,
        "explanation": "<p>12 est pair et strictement supérieur à 10 : les deux conditions sont vraies.</p>",
        "feedback": "<p>12 est pair et strictement supérieur à 10 : les deux conditions sont vraies.</p>\n<ul><li>A : la branche <code>else</code> ne s&#x27;exécute pas ici.</li><li>B : le programme affiche un texte, pas la valeur du test.</li><li>C : un seul des deux blocs est exécuté.</li></ul>"
      },
      {
        "title": "Boucle et accumulateur",
        "prompt": "<p>Quelle valeur est affichée ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>total = 0\nfor i in range(1, 4):\n    total += i\nprint(total)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>3</code></span>",
          "<span class=\"option-text\"><code>6</code></span>",
          "<span class=\"option-text\"><code>10</code></span>",
          "<span class=\"option-text\"><code>4</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>La boucle additionne 1, 2 et 3 : le total vaut 6.</p>",
        "feedback": "<p>La boucle additionne 1, 2 et 3 : le total vaut 6.</p>\n<ul><li>A : 3 est la dernière valeur de <code>i</code>, pas le total.</li><li>C : inclut 4, alors que la borne finale est exclue.</li><li>D : 4 est la borne exclue, pas le résultat du calcul.</li></ul>"
      },
      {
        "title": "Filtrer et compter",
        "prompt": "<p>Que s&#x27;affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valides = []\nfor note in [8, 10, 14]:\n    if note &gt;= 10:\n        valides.append(note)\nprint(len(valides))</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>[10, 14]</code></span>",
          "<span class=\"option-text\"><code>24</code></span>",
          "<span class=\"option-text\"><code>2</code></span>",
          "<span class=\"option-text\"><code>3</code></span>"
        ],
        "answer": 2,
        "explanation": "<p>La liste finale contient deux éléments : 10 et 14. <code>len</code> renvoie leur nombre.</p>",
        "feedback": "<p>La liste finale contient deux éléments : 10 et 14. <code>len</code> renvoie leur nombre.</p>\n<ul><li>A : correspond à la liste, mais le programme affiche sa longueur.</li><li>B : correspond à la somme des valeurs retenues, qui n&#x27;est pas demandée.</li><li>D : compte aussi 8, alors que cette note est exclue.</li></ul>"
      },
      {
        "title": "Maximum et valeurs négatives",
        "prompt": "<p>Pour chercher le maximum d&#x27;une liste <strong>non vide</strong>, quelle initialisation convient à toutes les listes de nombres, y compris si tous sont négatifs ?</p>",
        "options": [
          "<span class=\"option-text\"><code>maximum = 0</code></span>",
          "<span class=\"option-text\"><code>maximum = nombres[0]</code></span>",
          "<span class=\"option-text\"><code>maximum = len(nombres)</code></span>",
          "<span class=\"option-text\"><code>maximum = -1</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>Le premier élément fournit un candidat appartenant à la liste. On le compare ensuite aux autres valeurs.</p>",
        "feedback": "<p>Le premier élément fournit un candidat appartenant à la liste. On le compare ensuite aux autres valeurs.</p>\n<ul><li>A : pour <code>[-8, -3]</code>, 0 resterait le maximum alors qu&#x27;il n&#x27;appartient pas à la liste.</li><li>C : une longueur n&#x27;est pas une valeur candidate pertinente.</li><li>D : échoue aussi pour <code>[-8, -3]</code>, dont le maximum est inférieur à -1.</li></ul>"
      },
      {
        "title": "Première occurrence",
        "prompt": "<p>Que s&#x27;affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [4, 7, 2, 7]\nposition = -1\nfor i in range(len(nombres)):\n    if nombres[i] == 7 and position == -1:\n        position = i\nprint(position)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>1</code></span>",
          "<span class=\"option-text\"><code>3</code></span>",
          "<span class=\"option-text\"><code>7</code></span>",
          "<span class=\"option-text\"><code>-1</code></span>"
        ],
        "answer": 0,
        "explanation": "<p>Le premier 7 est à l&#x27;indice 1. Une fois cet indice mémorisé, <code>position == -1</code> devient faux.</p>",
        "feedback": "<p>Le premier 7 est à l&#x27;indice 1. Une fois cet indice mémorisé, <code>position == -1</code> devient faux.</p>\n<ul><li>B : serait la dernière occurrence ; le deuxième test empêche cette mise à jour.</li><li>C : 7 est la valeur recherchée, pas son indice.</li><li>D : signalerait une absence, mais 7 est présent.</li></ul>"
      },
      {
        "title": "Extraire les chiffres",
        "prompt": "<p>Quelle valeur est affichée ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>reste = 305\ntotal = 0\nwhile reste &gt; 0:\n    total += reste % 10\n    reste = reste // 10\nprint(total)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>305</code></span>",
          "<span class=\"option-text\"><code>3</code></span>",
          "<span class=\"option-text\"><code>5</code></span>",
          "<span class=\"option-text\"><code>8</code></span>"
        ],
        "answer": 3,
        "explanation": "<p>Les chiffres extraits sont 5, 0 et 3, dont la somme vaut 8.</p>",
        "feedback": "<p>Les chiffres extraits sont 5, 0 et 3, dont la somme vaut 8.</p>\n<ul><li>A : est le nombre initial, pas la somme de ses chiffres.</li><li>B : est le nombre de chiffres et le dernier chiffre extrait, pas le total.</li><li>C : est seulement le premier chiffre extrait.</li></ul>"
      },
      {
        "title": "Vérifier un tri",
        "prompt": "<p>On parcourt les voisins avec <code>for i in range(len(nombres) - 1)</code>. Quel test détecte une violation de l&#x27;ordre croissant <strong>avec égalités autorisées</strong> ?</p>",
        "options": [
          "<span class=\"option-text\"><code>nombres[i] &lt; nombres[i + 1]</code></span>",
          "<span class=\"option-text\"><code>nombres[i] &gt; nombres[i + 1]</code></span>",
          "<span class=\"option-text\"><code>nombres[i] == nombres[i + 1]</code></span>",
          "<span class=\"option-text\"><code>nombres[i] &gt;= nombres[i + 1]</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>Une descente apparaît lorsque l&#x27;élément actuel est strictement supérieur au suivant.</p>",
        "feedback": "<p>Une descente apparaît lorsque l&#x27;élément actuel est strictement supérieur au suivant.</p>\n<ul><li>A : détecte une montée, qui respecte l&#x27;ordre demandé.</li><li>C : détecte une égalité, explicitement autorisée.</li><li>D : rejetterait aussi les égalités, par exemple <code>[4, 4]</code>.</li></ul>"
      },
      {
        "title": "Facteurs premiers et limite de la liste",
        "prompt": "<p>On décompose 68 avec <code>premiers = [2, 3, 5, 7, 11, 13]</code>. Pour chaque premier, on divise le reste autant de fois que possible. Quel résultat obtient-on ?</p>",
        "options": [
          "<span class=\"option-text\">Facteurs <code>[2]</code>, reste <code>34</code>, décomposition incomplète.</span>",
          "<span class=\"option-text\">Facteurs <code>[2, 2, 17]</code>, reste <code>1</code>, décomposition complète.</span>",
          "<span class=\"option-text\">Facteurs <code>[2, 2]</code>, reste <code>17</code>, décomposition incomplète.</span>",
          "<span class=\"option-text\">Facteurs <code>[2, 2]</code>, reste <code>1</code>, décomposition complète.</span>"
        ],
        "answer": 2,
        "explanation": "<p>On divise 68 par 2 pour obtenir 34, puis encore par 2 pour obtenir 17. Aucun premier fourni ne divise 17.</p>",
        "feedback": "<p>On divise 68 par 2 pour obtenir 34, puis encore par 2 pour obtenir 17. Aucun premier fourni ne divise 17.</p>\n<ul><li>A : oublie de répéter la division par 2 ; un <code>while</code> est nécessaire.</li><li>B : 17 n&#x27;est pas dans la liste autorisée ; l&#x27;algorithme décrit ne l&#x27;ajoute pas.</li><li>D : fait disparaître le reste 17 ; <code>2 * 2</code> ne vaut pas 68.</li></ul>"
      }
    ],
    "conventions": "<ul><li><code>=</code> affecte ; <code>==</code> compare.</li><li>Les indices commencent à 0.</li><li>La borne finale de <code>range</code> est exclue.</li><li><code>%</code> donne le reste ; <code>//</code> donne le quotient arrondi vers le bas.</li></ul>",
    "next": "../supports/03_algorithmique.html",
    "nextLabel": "Continuer avec le chapitre 03"
  },
  "intro": {
    "title": "Introduction à Python",
    "subtitle": "Les bases, une notion à la fois",
    "slides": [
      {
        "title": "Variables",
        "html": "<p>Une variable associe un nom à une valeur. <code>=</code> sert à affecter une valeur.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>age = 20              # entier (int)\nprix = 9.99           # nombre décimal (float)\nprenom = &quot;Alice&quot;      # texte (str)\nmajeur = True         # booléen : True ou False (bool)\n\nage = age + 1         # ou : age += 1\nprint(prenom, age)    # affiche : Alice 21</code></pre></div>",
        "kind": "Notion",
        "group": "Les bases"
      },
      {
        "title": "Les opérateurs de calcul",
        "html": "<div class=\"table-wrap\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">Opérateur</th><th scope=\"col\">Rôle</th><th scope=\"col\">Exemple → résultat</th></tr></thead><tbody><tr><td><code>+</code></td><td>Addition</td><td><code>7 + 2</code> → <code>9</code></td></tr><tr><td><code>-</code></td><td>Soustraction</td><td><code>7 - 2</code> → <code>5</code></td></tr><tr><td><code>*</code></td><td>Multiplication</td><td><code>7 * 2</code> → <code>14</code></td></tr><tr><td><code>/</code></td><td>Division</td><td><code>7 / 2</code> → <code>3.5</code></td></tr><tr><td><code>//</code></td><td>Division arrondie à l&#x27;entier inférieur</td><td><code>7 // 2</code> → <code>3</code></td></tr><tr><td><code>%</code></td><td>Reste de la division</td><td><code>7 % 2</code> → <code>1</code></td></tr><tr><td><code>**</code></td><td>Puissance</td><td><code>2 ** 3</code> → <code>8</code></td></tr></tbody></table></div>",
        "kind": "Notion",
        "group": "Les bases"
      },
      {
        "title": "Choisir l’ordre des calculs",
        "html": "<p>Les parenthèses permettent de choisir l&#x27;ordre des calculs :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>resultat = (2 + 3) * 4    # 20\nx = 5\ny = 2 * x + 3            # 13 : écrire * pour multiplier</code></pre></div>",
        "kind": "Notion",
        "group": "Les bases"
      },
      {
        "title": "Comparaisons et logique",
        "html": "<p>Une comparaison renvoie <code>True</code> (vrai) ou <code>False</code> (faux).</p>\n<div class=\"table-wrap\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">Égal</th><th scope=\"col\">Différent</th><th scope=\"col\">Inférieur</th><th scope=\"col\">Inférieur ou égal</th><th scope=\"col\">Supérieur</th><th scope=\"col\">Supérieur ou égal</th></tr></thead><tbody><tr><td><code>==</code></td><td><code>!=</code></td><td><code>&lt;</code></td><td><code>&lt;=</code></td><td><code>&gt;</code></td><td><code>&gt;=</code></td></tr></tbody></table></div>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>age == 18                  # âge égal à 18 ?\nage &gt;= 18 and age &lt; 25     # les deux conditions sont vraies\nage &lt; 18 or age &gt;= 65      # au moins une condition est vraie\nnot majeur                # inverse le booléen</code></pre></div>\n<p><strong>Attention :</strong> <code>=</code> affecte une valeur ; <code>==</code> compare deux valeurs.</p>",
        "kind": "Notion",
        "group": "Les bases"
      },
      {
        "title": "Conditions",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>note = 14\n\nif note &gt;= 16:\n    print(&quot;Très bien&quot;)\nelif note &gt;= 10:\n    print(&quot;Validé&quot;)\nelse:\n    print(&quot;À retravailler&quot;)</code></pre></div>\n<p>Python exécute le premier cas vrai, sinon le bloc <code>else</code>. <strong>Les <code>:</code> et l&#x27;indentation (4 espaces) délimitent les blocs.</strong></p>",
        "kind": "Notion",
        "group": "Les bases"
      },
      {
        "title": "Listes",
        "html": "<p>Une liste contient plusieurs éléments. <strong>Les indices commencent à <code>0</code>.</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>fruits = [&quot;pomme&quot;, &quot;poire&quot;, &quot;banane&quot;]\n\nprint(fruits[0])           # pomme : premier élément\nprint(fruits[-1])          # banane : dernier élément\nprint(len(fruits))         # 3 : nombre d&#x27;éléments\n\nfruits[1] = &quot;kiwi&quot;         # remplace le deuxième élément\nfruits.append(&quot;orange&quot;)   # ajoute à la fin\nfruits.remove(&quot;pomme&quot;)    # supprime la première occurrence\nprint(&quot;kiwi&quot; in fruits)    # True : teste la présence</code></pre></div>",
        "kind": "Notion",
        "group": "Les bases"
      },
      {
        "title": "Répéter avec for",
        "html": "<p><strong><code>for</code> : parcourir des éléments ou répéter un nombre de fois.</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>fruits = [&quot;pomme&quot;, &quot;kiwi&quot;, &quot;banane&quot;]\nfor fruit in fruits:\n    print(fruit)\n\nfor i in range(3):\n    print(i)               # 0, puis 1, puis 2\n\nfor i in range(1, 4):\n    print(i)               # 1, puis 2, puis 3 : borne finale exclue</code></pre></div>",
        "kind": "Notion",
        "group": "Les bases"
      },
      {
        "title": "Répéter avec while",
        "html": "<p><strong><code>while</code> : répéter tant qu&#x27;une condition est vraie.</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>compteur = 0\n\nwhile compteur &lt; 3:\n    print(compteur)        # 0, puis 1, puis 2\n    compteur += 1          # fait évoluer la condition pour terminer</code></pre></div>",
        "kind": "Notion",
        "group": "Les bases"
      },
      {
        "title": "Exemple récapitulatif",
        "html": "<p>Additionner les nombres pairs d&#x27;une liste :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [3, 4, 7, 10]\ntotal = 0\n\nfor nombre in nombres:\n    if nombre % 2 == 0:    # reste nul : le nombre est pair\n        total += nombre\n\nprint(total)               # 14</code></pre></div>",
        "kind": "Exemple",
        "group": "Les bases"
      }
    ],
    "next": "02_algorithmique.html",
    "nextLabel": "Passer à l’algorithmique",
    "source": "# Python — les bases\n\n## 1. Variables\n\nUne variable associe un nom à une valeur. `=` sert à affecter une valeur.\n\n```python\nage = 20              # entier (int)\nprix = 9.99           # nombre décimal (float)\nprenom = \"Alice\"      # texte (str)\nmajeur = True         # booléen : True ou False (bool)\n\nage = age + 1         # ou : age += 1\nprint(prenom, age)    # affiche : Alice 21\n```\n\n## 2. Calculs\n\n| Opérateur | Rôle | Exemple → résultat |\n|---|---|---|\n| `+` | Addition | `7 + 2` → `9` |\n| `-` | Soustraction | `7 - 2` → `5` |\n| `*` | Multiplication | `7 * 2` → `14` |\n| `/` | Division | `7 / 2` → `3.5` |\n| `//` | Division arrondie à l'entier inférieur | `7 // 2` → `3` |\n| `%` | Reste de la division | `7 % 2` → `1` |\n| `**` | Puissance | `2 ** 3` → `8` |\n\nLes parenthèses permettent de choisir l'ordre des calculs :\n\n```python\nresultat = (2 + 3) * 4    # 20\nx = 5\ny = 2 * x + 3            # 13 : écrire * pour multiplier\n```\n\n## 3. Comparaisons et logique\n\nUne comparaison renvoie `True` (vrai) ou `False` (faux).\n\n| Égal | Différent | Inférieur | Inférieur ou égal | Supérieur | Supérieur ou égal |\n|---|---|---|---|---|---|\n| `==` | `!=` | `<` | `<=` | `>` | `>=` |\n\n```python\nage == 18                  # âge égal à 18 ?\nage >= 18 and age < 25     # les deux conditions sont vraies\nage < 18 or age >= 65      # au moins une condition est vraie\nnot majeur                # inverse le booléen\n```\n\n**Attention :** `=` affecte une valeur ; `==` compare deux valeurs.\n\n## 4. Conditions\n\n```python\nnote = 14\n\nif note >= 16:\n    print(\"Très bien\")\nelif note >= 10:\n    print(\"Validé\")\nelse:\n    print(\"À retravailler\")\n```\n\nPython exécute le premier cas vrai, sinon le bloc `else`.\n**Les `:` et l'indentation (4 espaces) délimitent les blocs.**\n\n## 5. Listes\n\nUne liste contient plusieurs éléments. **Les indices commencent à `0`.**\n\n```python\nfruits = [\"pomme\", \"poire\", \"banane\"]\n\nprint(fruits[0])           # pomme : premier élément\nprint(fruits[-1])          # banane : dernier élément\nprint(len(fruits))         # 3 : nombre d'éléments\n\nfruits[1] = \"kiwi\"         # remplace le deuxième élément\nfruits.append(\"orange\")   # ajoute à la fin\nfruits.remove(\"pomme\")    # supprime la première occurrence\nprint(\"kiwi\" in fruits)    # True : teste la présence\n```\n\n## 6. Boucles\n\n**`for` : parcourir des éléments ou répéter un nombre de fois.**\n\n```python\nfor fruit in fruits:\n    print(fruit)\n\nfor i in range(3):\n    print(i)               # 0, puis 1, puis 2\n\nfor i in range(1, 4):\n    print(i)               # 1, puis 2, puis 3 : borne finale exclue\n```\n\n**`while` : répéter tant qu'une condition est vraie.**\n\n```python\ncompteur = 0\n\nwhile compteur < 3:\n    print(compteur)        # 0, puis 1, puis 2\n    compteur += 1          # fait évoluer la condition pour terminer\n```\n\n## Exemple récapitulatif\n\nAdditionner les nombres pairs d'une liste :\n\n```python\nnombres = [3, 4, 7, 10]\ntotal = 0\n\nfor nombre in nombres:\n    if nombre % 2 == 0:    # reste nul : le nombre est pair\n        total += nombre\n\nprint(total)               # 14\n```\n",
    "sourceName": "01_introduction_python.md"
  },
  "algo": {
    "title": "Algorithmique avec Python",
    "subtitle": "Observer, comprendre, puis pratiquer",
    "slides": [
      {
        "title": "Penser en étapes",
        "html": "<p>Construire un algorithme : une suite d&#x27;étapes permettant de résoudre un problème. Python permet de traduire ces étapes en code exécutable.</p>\n<p><strong>Prérequis :</strong> variables, calculs, comparaisons, conditions, boucles et listes.</p>\n<h3>Méthode en bref</h3>\n<ol><li>Identifier les <strong>entrées</strong> : les données de départ.</li><li>Décrire le <strong>traitement</strong> : les calculs et les décisions.</li><li>Définir la <strong>sortie</strong> : le résultat attendu.</li><li>Tester un cas normal et un cas limite.</li></ol>\n<p>Exemple : pour additionner <code>[2, 5]</code>, partir de <code>total = 0</code>, ajouter 2 puis 5. Le total passe de 0 à 2, puis à 7 : la sortie est <code>7</code>.</p>\n<p>Un <strong>accumulateur</strong> conserve un résultat en cours de calcul ; un <strong>compteur</strong> compte des événements. On les initialise avant la boucle pour conserver leur valeur entre les tours.</p>\n<p><strong>Consigne commune :</strong> créer un fichier Python par exercice, utiliser les données indiquées et afficher le résultat. Aucun <code>input()</code>, import ou fonction à définir n&#x27;est nécessaire. Prédire le résultat avant de lancer le programme. Les exemples sont indépendants.</p>",
        "kind": "Méthode",
        "group": "Avant de commencer"
      },
      {
        "title": "Calculer un prix",
        "html": "<p><strong>Exemple — calculer une durée totale :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>duree = 15\nseances = 3\ntotal = duree * seances\nprint(total)  # 45</code></pre></div>\n<p>Les deux entrées sont multipliées ; <code>total</code> mémorise le résultat.</p>",
        "kind": "Exemple 1",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Calculer un prix",
        "html": "<p>avec <code>prix = 8</code> et <code>quantite = 4</code>, calculer et afficher le montant à payer.</p>\n<ul><li>Objectif / prérequis : affecter le résultat d&#x27;une multiplication à une variable.</li><li>Réussite : afficher <code>32</code> ; avec une quantité de <code>0</code>, afficher <code>0</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>remplacer la durée et le nombre de séances par les données du prix.</p></details>",
        "kind": "Exercice 1",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Prendre une décision",
        "html": "<p><strong>Exemple — tester un seuil :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>temperature = 12\nif temperature &lt; 0:\n    print(&quot;Gel&quot;)\nelse:\n    print(&quot;Pas de gel&quot;)  # message affiché</code></pre></div>\n<p>Le test est faux ; Python exécute donc le bloc <code>else</code>.</p>",
        "kind": "Exemple 2",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Prendre une décision",
        "html": "<p>avec <code>nombre = 14</code>, afficher <code>Pair</code> si le nombre est pair, sinon <code>Impair</code>.</p>\n<ul><li>Objectif / prérequis : choisir un message avec <code>if</code>, <code>%</code> et <code>==</code>.</li><li>Réussite : <code>14</code> → <code>Pair</code>, <code>7</code> → <code>Impair</code>, <code>0</code> → <code>Pair</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>un nombre pair a un reste de division par 2 égal à 0.</p></details>",
        "kind": "Exercice 2",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Lire puis adapter une boucle",
        "html": "<p><strong>Exemple — répéter un calcul :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>for i in range(1, 4):\n    print(i * 2)  # affiche 2, puis 4, puis 6</code></pre></div>\n<p><code>i</code> prend les valeurs 1, 2 et 3. La borne finale de <code>range</code> est exclue.</p>",
        "kind": "Exemple 3",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Lire puis adapter une boucle",
        "html": "<p>prédire les valeurs affichées si <code>2</code> est remplacé par <code>3</code>. Puis écrire la table de multiplication de 7, de <code>7 × 1</code> à <code>7 × 10</code>.</p>\n<ul><li>Objectif / prérequis : lire et écrire une boucle <code>for</code> avec <code>range</code>.</li><li>Réussite : la prédiction est vérifiée ; le programme affiche 10 résultats, de <code>7</code> à <code>70</code>.</li><li>Contrainte : utiliser une boucle, pas dix instructions <code>print</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>pour inclure 10, utiliser une borne finale égale à 11.</p></details>",
        "kind": "Exercice 3",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Corriger un accumulateur",
        "html": "<p><strong>Exemple — cumuler des valeurs :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>total = 0\nfor valeur in [2, 5]:\n    total += valeur\nprint(total)  # 7</code></pre></div>\n<p>Le total est initialisé une seule fois, puis augmente à chaque tour.</p>",
        "kind": "Exemple 4",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Corriger un accumulateur",
        "html": "<p>ce programme doit additionner tous les éléments. Expliquer le bug et le corriger.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [4, 6, 3]\nfor nombre in nombres:\n    total = 0\n    total += nombre\nprint(total)</code></pre></div>\n<ul><li>Objectif / prérequis : comprendre l&#x27;initialisation et l&#x27;indentation.</li><li>Réussite : afficher <code>13</code> ; avec <code>nombres = []</code>, afficher <code>0</code>.</li><li>Contrainte : ne pas utiliser <code>sum()</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>quelle instruction efface le résultat des tours précédents ?</p></details>",
        "kind": "Exercice 4",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Filtrer une liste",
        "html": "<p><strong>Exemple — conserver les valeurs positives :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>positifs = []\nfor nombre in [-2, 3, 0, 5]:\n    if nombre &gt; 0:\n        positifs.append(nombre)\nprint(positifs)  # [3, 5]</code></pre></div>\n<p>Chaque nombre est testé. Seuls 3 et 5 sont ajoutés à la nouvelle liste.</p>",
        "kind": "Exemple 5",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Filtrer une liste",
        "html": "<p>à partir de <code>notes = [8, 12, 9, 16, 10]</code>, créer une liste <code>valides</code> contenant les notes supérieures ou égales à 10.</p>\n<ul><li>Objectif / prérequis : combiner liste, boucle, condition et <code>append</code>.</li><li>Réussite : obtenir <code>[12, 16, 10]</code> ; une liste vide donne <code>[]</code>.</li><li>Contrainte : conserver la liste initiale et l&#x27;ordre des notes.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>partir d&#x27;une liste vide, puis ajouter uniquement les notes retenues.</p></details>",
        "kind": "Exercice 5",
        "group": "01 · Exercices simples"
      },
      {
        "title": "Permuter deux valeurs",
        "html": "<p><strong>Exemple — sauvegarder avant de remplacer :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>score = 10\nancien_score = score\nscore = 20\nprint(ancien_score, score)  # 10 20</code></pre></div>\n<p>La sauvegarde conserve l&#x27;ancienne valeur même après la modification de <code>score</code>.</p>",
        "kind": "Exemple 6",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Permuter deux valeurs",
        "html": "<p>avec <code>a = 4</code> et <code>b = 9</code>, échanger leurs valeurs.</p>\n<ul><li>Objectif / prérequis : maîtriser l&#x27;ordre des affectations.</li><li>Contrainte : utiliser une variable temporaire, sans <code>a, b = b, a</code>.</li><li>Réussite : afficher <code>9 4</code> ; deux valeurs égales restent égales.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>sauvegarder <code>a</code> ; remplacer <code>a</code> ; restaurer la sauvegarde dans <code>b</code>.</p></details>",
        "kind": "Exercice 6",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Rechercher le maximum",
        "html": "<p><strong>Exemple — mettre à jour un record :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>record = 6\nnouveau = 9\nif nouveau &gt; record:\n    record = nouveau\nprint(record)  # 9</code></pre></div>\n<p>Le record est remplacé uniquement si la nouvelle valeur est plus grande.</p>",
        "kind": "Exemple 7",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Rechercher le maximum",
        "html": "<p>rechercher le maximum de <code>nombres = [4, 12, 7, 15, 9]</code>.</p>\n<ul><li>Objectif / prérequis : conserver le meilleur candidat pendant un parcours.</li><li>Contraintes : liste non vide ; sans <code>max()</code> ni tri.</li><li>Réussite : afficher <code>15</code> ; <code>[-8, -3, -12]</code> donne <code>-3</code> ; <code>[5]</code> donne <code>5</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>initialiser le maximum avec le premier élément, pas avec 0.</p></details>",
        "kind": "Exercice 7",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Rechercher la première position",
        "html": "<p><strong>Exemple — parcourir les indices :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>lettres = [&quot;a&quot;, &quot;b&quot;, &quot;a&quot;]\nfor i in range(len(lettres)):\n    print(i, lettres[i])  # 0 a, puis 1 b, puis 2 a</code></pre></div>\n<p><code>i</code> est un indice ; <code>lettres[i]</code> est la valeur à cet indice.</p>",
        "kind": "Exemple 8",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Rechercher la première position",
        "html": "<p>dans <code>nombres = [4, 7, 2, 7]</code>, trouver le premier indice de <code>cible = 7</code>. Afficher <code>-1</code> si la cible est absente.</p>\n<ul><li>Objectif / prérequis : distinguer indice et valeur, utiliser une valeur « non trouvé ».</li><li>Contrainte : ne pas utiliser <code>.index()</code>.</li><li>Réussite : <code>7</code> → <code>1</code>, <code>4</code> → <code>0</code>, <code>9</code> → <code>-1</code> ; une liste vide donne <code>-1</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>initialiser <code>position = -1</code> ; ne la modifier que si aucune position n&#x27;a encore été trouvée.</p></details>",
        "kind": "Exercice 8",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Compter les occurrences",
        "html": "<p><strong>Exemple — compter les valeurs positives :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>compteur = 0\nfor nombre in [-1, 3, 5]:\n    if nombre &gt; 0:\n        compteur += 1\nprint(compteur)  # 2</code></pre></div>\n<p>On ajoute 1 par valeur retenue, quelle que soit cette valeur.</p>",
        "kind": "Exemple 9",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Compter les occurrences",
        "html": "<p>compter combien de fois <code>cible = 3</code> apparaît dans <code>nombres = [3, 1, 3, 5, 3]</code>.</p>\n<ul><li>Objectif / prérequis : utiliser un compteur et une comparaison d&#x27;égalité.</li><li>Contrainte : ne pas utiliser <code>.count()</code>.</li><li>Réussite : afficher <code>3</code> ; une cible absente ou une liste vide donne <code>0</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>adapter le test de l&#x27;exemple pour retenir les valeurs égales à la cible.</p></details>",
        "kind": "Exercice 9",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Inverser une liste",
        "html": "<p><strong>Exemple — faire reculer un indice :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>i = 2\nwhile i &gt;= 0:\n    print(i)  # 2, puis 1, puis 0\n    i -= 1</code></pre></div>\n<p>Après l&#x27;affichage de 0, <code>i</code> devient -1 et la boucle s&#x27;arrête.</p>",
        "kind": "Exemple 10",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Inverser une liste",
        "html": "<p>construire <code>inverse</code> à partir de <code>nombres = [10, 20, 30, 40]</code>, dans l&#x27;ordre inverse.</p>\n<ul><li>Objectif / prérequis : parcourir une liste depuis son dernier indice.</li><li>Contraintes : conserver l&#x27;original ; sans <code>.reverse()</code>, <code>reversed()</code> ni <code>[::-1]</code>.</li><li>Réussite : obtenir <code>[40, 30, 20, 10]</code> ; <code>[]</code> donne <code>[]</code> ; <code>[5]</code> donne <code>[5]</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>le dernier indice est <code>len(nombres) - 1</code> ; ajouter chaque valeur à une nouvelle liste.</p></details>",
        "kind": "Exercice 10",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Additionner les chiffres d'un nombre",
        "html": "<p><strong>Exemple — isoler et retirer le dernier chiffre :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombre = 472\nprint(nombre % 10)   # 2 : dernier chiffre\nprint(nombre // 10)  # 47 : nombre privé de son dernier chiffre</code></pre></div>\n<p>La division donne <code>472 = 47 * 10 + 2</code> : 47 est le quotient et 2 le reste.</p>",
        "kind": "Exemple 11",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Additionner les chiffres d'un nombre",
        "html": "<p>calculer la somme des chiffres de <code>nombre = 583</code>.</p>\n<ul><li>Objectif / prérequis : combiner <code>%</code>, <code>//</code>, accumulateur et <code>while</code>.</li><li>Contraintes : entier positif ou nul ; sans conversion en texte.</li><li>Réussite : <code>583</code> → <code>16</code>, <code>1002</code> → <code>3</code>, <code>0</code> → <code>0</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>ajouter le dernier chiffre au total ; le retirer ; recommencer tant qu&#x27;il reste des chiffres.</p></details>",
        "kind": "Exercice 11",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Vérifier l'ordre d'une liste",
        "html": "<p><strong>Exemple — comparer deux voisins :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [2, 5, 4]\nprint(nombres[0] &lt;= nombres[1])  # True\nprint(nombres[1] &lt;= nombres[2])  # False</code></pre></div>\n<p>Le deuxième couple descend de 5 à 4 : la liste n&#x27;est pas triée par ordre croissant.</p>",
        "kind": "Exemple 12",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Vérifier l'ordre d'une liste",
        "html": "<p>déterminer si <code>nombres = [2, 4, 4, 9]</code> est triée par ordre croissant, en autorisant les égalités.</p>\n<ul><li>Objectif / prérequis : comparer des voisins et conserver un booléen.</li><li>Contrainte : ne pas trier la liste ni utiliser <code>sorted()</code>.</li><li>Réussite : afficher <code>True</code> ; <code>[2, 5, 4]</code> donne <code>False</code> ; <code>[]</code> et <code>[5]</code> donnent <code>True</code>.</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>partir de <code>triee = True</code> ; passer à <code>False</code> dès qu&#x27;un élément dépasse le suivant. Ne pas revenir à <code>True</code> ensuite.</p></details>",
        "kind": "Exercice 12",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Décomposer en facteurs premiers",
        "html": "<p>Un <strong>nombre premier</strong> est un entier supérieur à 1 divisible uniquement par 1 et lui-même. Décomposer un entier, c&#x27;est l&#x27;écrire comme un produit de nombres premiers.</p>\n<p><strong>Exemple — retirer toutes les occurrences du facteur 2 :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>reste = 12\nfacteurs = []\nwhile reste % 2 == 0:\n    facteurs.append(2)\n    reste = reste // 2\nprint(facteurs, reste)  # [2, 2] 3</code></pre></div>\n<p>On divise 12 par 2, puis 6 par 2. Il reste 3, non divisible par 2. On a donc <code>12 = 2 * 2 * 3</code>.</p>",
        "kind": "Exemple 13",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Décomposer en facteurs premiers",
        "html": "<p>décomposer <code>nombre = 360</code> avec la liste fixée <code>premiers = [2, 3, 5, 7, 11, 13]</code>.</p>\n<ul><li>Objectif / prérequis : imbriquer un <code>while</code> dans un <code>for</code>, utiliser divisibilité et division entière.</li><li>Contraintes : entier de départ supérieur ou égal à 2 ; conserver sa valeur ; utiliser uniquement les premiers fournis.</li><li>Traitement : pour chaque premier, retirer toutes ses occurrences et les ajouter à <code>facteurs</code>.</li><li>Sortie : afficher les facteurs trouvés et le reste. Si le reste dépasse 1, afficher <code>Décomposition incomplète</code>.</li><li>Réussite : <code>360</code> → <code>[2, 2, 2, 3, 3, 5]</code>, reste <code>1</code> ; <code>13</code> → <code>[13]</code>, reste <code>1</code> ; <code>34</code> → <code>[2]</code>, reste <code>17</code>, incomplète ; <code>17</code> → <code>[]</code>, reste <code>17</code>, incomplète.</li><li>Justifier : pourquoi faut-il un <code>while</code> plutôt qu&#x27;un simple <code>if</code> ? Pourquoi un reste supérieur à 1 indique-t-il une limite de la liste fournie ?</li></ul><details class=\"hint\"><summary>Afficher un indice</summary><p>travailler sur <code>reste = nombre</code> ; la boucle intérieure répète la division par le même premier.</p></details>",
        "kind": "Exercice 13",
        "group": "02 · Pour aller plus loin"
      },
      {
        "title": "Les réflexes à garder",
        "html": "<ul><li>Initialiser compteurs et accumulateurs <strong>avant</strong> les boucles.</li><li><code>=</code> affecte ; <code>==</code> compare ; <code>%</code> donne un reste ; <code>//</code> donne un quotient arrondi vers le bas.</li><li>Une liste de longueur <code>n</code> possède les indices de <code>0</code> à <code>n - 1</code>.</li><li>Faire évoluer la condition d&#x27;un <code>while</code> pour qu&#x27;il se termine.</li><li>Un maximum initialisé à 0 échoue sur une liste de nombres tous négatifs.</li><li>Une liste fixée de nombres premiers ne permet pas de décomposer tous les entiers.</li></ul>",
        "kind": "Mémo",
        "group": "Pour terminer"
      }
    ],
    "next": "../qcm/02_QCM_Revision.html",
    "nextLabel": "Faire le QCM 02",
    "source": "# 02 — Algorithmique avec Python\n\n## Objectif\n\nConstruire un algorithme : une suite d'étapes permettant de résoudre un problème. Python permet de traduire ces étapes en code exécutable.\n\n**Prérequis :** [variables, calculs, comparaisons, conditions, boucles et listes](01_introduction_python.md).\n\n## Méthode en bref\n\n1. Identifier les **entrées** : les données de départ.\n2. Décrire le **traitement** : les calculs et les décisions.\n3. Définir la **sortie** : le résultat attendu.\n4. Tester un cas normal et un cas limite.\n\nExemple : pour additionner `[2, 5]`, partir de `total = 0`, ajouter 2 puis 5. Le total passe de 0 à 2, puis à 7 : la sortie est `7`.\n\nUn **accumulateur** conserve un résultat en cours de calcul ; un **compteur** compte des événements. On les initialise avant la boucle pour conserver leur valeur entre les tours.\n\n**Consigne commune :** créer un fichier Python par exercice, utiliser les données indiquées et afficher le résultat. Aucun `input()`, import ou fonction à définir n'est nécessaire. Prédire le résultat avant de lancer le programme. Les exemples sont indépendants.\n\n## Partie 1 — 5 exercices simples\n\n### 1. Calculer un prix\n\n**Exemple — calculer une durée totale :**\n\n```python\nduree = 15\nseances = 3\ntotal = duree * seances\nprint(total)  # 45\n```\n\nLes deux entrées sont multipliées ; `total` mémorise le résultat.\n\n**Exercice 1 — À vous :** avec `prix = 8` et `quantite = 4`, calculer et afficher le montant à payer.\n\n- Objectif / prérequis : affecter le résultat d'une multiplication à une variable.\n- Réussite : afficher `32` ; avec une quantité de `0`, afficher `0`.\n- Indice : remplacer la durée et le nombre de séances par les données du prix.\n\n### 2. Prendre une décision\n\n**Exemple — tester un seuil :**\n\n```python\ntemperature = 12\nif temperature < 0:\n    print(\"Gel\")\nelse:\n    print(\"Pas de gel\")  # message affiché\n```\n\nLe test est faux ; Python exécute donc le bloc `else`.\n\n**Exercice 2 — À vous :** avec `nombre = 14`, afficher `Pair` si le nombre est pair, sinon `Impair`.\n\n- Objectif / prérequis : choisir un message avec `if`, `%` et `==`.\n- Réussite : `14` → `Pair`, `7` → `Impair`, `0` → `Pair`.\n- Indice : un nombre pair a un reste de division par 2 égal à 0.\n\n### 3. Lire puis adapter une boucle\n\n**Exemple — répéter un calcul :**\n\n```python\nfor i in range(1, 4):\n    print(i * 2)  # affiche 2, puis 4, puis 6\n```\n\n`i` prend les valeurs 1, 2 et 3. La borne finale de `range` est exclue.\n\n**Exercice 3 — À vous :** prédire les valeurs affichées si `2` est remplacé par `3`. Puis écrire la table de multiplication de 7, de `7 × 1` à `7 × 10`.\n\n- Objectif / prérequis : lire et écrire une boucle `for` avec `range`.\n- Réussite : la prédiction est vérifiée ; le programme affiche 10 résultats, de `7` à `70`.\n- Contrainte : utiliser une boucle, pas dix instructions `print`.\n- Indice : pour inclure 10, utiliser une borne finale égale à 11.\n\n### 4. Corriger un accumulateur\n\n**Exemple — cumuler des valeurs :**\n\n```python\ntotal = 0\nfor valeur in [2, 5]:\n    total += valeur\nprint(total)  # 7\n```\n\nLe total est initialisé une seule fois, puis augmente à chaque tour.\n\n**Exercice 4 — À vous :** ce programme doit additionner tous les éléments. Expliquer le bug et le corriger.\n\n```python\nnombres = [4, 6, 3]\nfor nombre in nombres:\n    total = 0\n    total += nombre\nprint(total)\n```\n\n- Objectif / prérequis : comprendre l'initialisation et l'indentation.\n- Réussite : afficher `13` ; avec `nombres = []`, afficher `0`.\n- Contrainte : ne pas utiliser `sum()`.\n- Indice : quelle instruction efface le résultat des tours précédents ?\n\n### 5. Filtrer une liste\n\n**Exemple — conserver les valeurs positives :**\n\n```python\npositifs = []\nfor nombre in [-2, 3, 0, 5]:\n    if nombre > 0:\n        positifs.append(nombre)\nprint(positifs)  # [3, 5]\n```\n\nChaque nombre est testé. Seuls 3 et 5 sont ajoutés à la nouvelle liste.\n\n**Exercice 5 — À vous :** à partir de `notes = [8, 12, 9, 16, 10]`, créer une liste `valides` contenant les notes supérieures ou égales à 10.\n\n- Objectif / prérequis : combiner liste, boucle, condition et `append`.\n- Réussite : obtenir `[12, 16, 10]` ; une liste vide donne `[]`.\n- Contrainte : conserver la liste initiale et l'ordre des notes.\n- Indice : partir d'une liste vide, puis ajouter uniquement les notes retenues.\n\n## Partie 2 — 8 exercices plus techniques\n\n### 6. Permuter deux valeurs\n\n**Exemple — sauvegarder avant de remplacer :**\n\n```python\nscore = 10\nancien_score = score\nscore = 20\nprint(ancien_score, score)  # 10 20\n```\n\nLa sauvegarde conserve l'ancienne valeur même après la modification de `score`.\n\n**Exercice 6 — À vous :** avec `a = 4` et `b = 9`, échanger leurs valeurs.\n\n- Objectif / prérequis : maîtriser l'ordre des affectations.\n- Contrainte : utiliser une variable temporaire, sans `a, b = b, a`.\n- Réussite : afficher `9 4` ; deux valeurs égales restent égales.\n- Indices : sauvegarder `a` ; remplacer `a` ; restaurer la sauvegarde dans `b`.\n\n### 7. Rechercher le maximum\n\n**Exemple — mettre à jour un record :**\n\n```python\nrecord = 6\nnouveau = 9\nif nouveau > record:\n    record = nouveau\nprint(record)  # 9\n```\n\nLe record est remplacé uniquement si la nouvelle valeur est plus grande.\n\n**Exercice 7 — À vous :** rechercher le maximum de `nombres = [4, 12, 7, 15, 9]`.\n\n- Objectif / prérequis : conserver le meilleur candidat pendant un parcours.\n- Contraintes : liste non vide ; sans `max()` ni tri.\n- Réussite : afficher `15` ; `[-8, -3, -12]` donne `-3` ; `[5]` donne `5`.\n- Indice : initialiser le maximum avec le premier élément, pas avec 0.\n\n### 8. Rechercher la première position\n\n**Exemple — parcourir les indices :**\n\n```python\nlettres = [\"a\", \"b\", \"a\"]\nfor i in range(len(lettres)):\n    print(i, lettres[i])  # 0 a, puis 1 b, puis 2 a\n```\n\n`i` est un indice ; `lettres[i]` est la valeur à cet indice.\n\n**Exercice 8 — À vous :** dans `nombres = [4, 7, 2, 7]`, trouver le premier indice de `cible = 7`. Afficher `-1` si la cible est absente.\n\n- Objectif / prérequis : distinguer indice et valeur, utiliser une valeur « non trouvé ».\n- Contrainte : ne pas utiliser `.index()`.\n- Réussite : `7` → `1`, `4` → `0`, `9` → `-1` ; une liste vide donne `-1`.\n- Indices : initialiser `position = -1` ; ne la modifier que si aucune position n'a encore été trouvée.\n\n### 9. Compter les occurrences\n\n**Exemple — compter les valeurs positives :**\n\n```python\ncompteur = 0\nfor nombre in [-1, 3, 5]:\n    if nombre > 0:\n        compteur += 1\nprint(compteur)  # 2\n```\n\nOn ajoute 1 par valeur retenue, quelle que soit cette valeur.\n\n**Exercice 9 — À vous :** compter combien de fois `cible = 3` apparaît dans `nombres = [3, 1, 3, 5, 3]`.\n\n- Objectif / prérequis : utiliser un compteur et une comparaison d'égalité.\n- Contrainte : ne pas utiliser `.count()`.\n- Réussite : afficher `3` ; une cible absente ou une liste vide donne `0`.\n- Indice : adapter le test de l'exemple pour retenir les valeurs égales à la cible.\n\n### 10. Inverser une liste\n\n**Exemple — faire reculer un indice :**\n\n```python\ni = 2\nwhile i >= 0:\n    print(i)  # 2, puis 1, puis 0\n    i -= 1\n```\n\nAprès l'affichage de 0, `i` devient -1 et la boucle s'arrête.\n\n**Exercice 10 — À vous :** construire `inverse` à partir de `nombres = [10, 20, 30, 40]`, dans l'ordre inverse.\n\n- Objectif / prérequis : parcourir une liste depuis son dernier indice.\n- Contraintes : conserver l'original ; sans `.reverse()`, `reversed()` ni `[::-1]`.\n- Réussite : obtenir `[40, 30, 20, 10]` ; `[]` donne `[]` ; `[5]` donne `[5]`.\n- Indices : le dernier indice est `len(nombres) - 1` ; ajouter chaque valeur à une nouvelle liste.\n\n### 11. Additionner les chiffres d'un nombre\n\n**Exemple — isoler et retirer le dernier chiffre :**\n\n```python\nnombre = 472\nprint(nombre % 10)   # 2 : dernier chiffre\nprint(nombre // 10)  # 47 : nombre privé de son dernier chiffre\n```\n\nLa division donne `472 = 47 * 10 + 2` : 47 est le quotient et 2 le reste.\n\n**Exercice 11 — À vous :** calculer la somme des chiffres de `nombre = 583`.\n\n- Objectif / prérequis : combiner `%`, `//`, accumulateur et `while`.\n- Contraintes : entier positif ou nul ; sans conversion en texte.\n- Réussite : `583` → `16`, `1002` → `3`, `0` → `0`.\n- Indices : ajouter le dernier chiffre au total ; le retirer ; recommencer tant qu'il reste des chiffres.\n\n### 12. Vérifier l'ordre d'une liste\n\n**Exemple — comparer deux voisins :**\n\n```python\nnombres = [2, 5, 4]\nprint(nombres[0] <= nombres[1])  # True\nprint(nombres[1] <= nombres[2])  # False\n```\n\nLe deuxième couple descend de 5 à 4 : la liste n'est pas triée par ordre croissant.\n\n**Exercice 12 — À vous :** déterminer si `nombres = [2, 4, 4, 9]` est triée par ordre croissant, en autorisant les égalités.\n\n- Objectif / prérequis : comparer des voisins et conserver un booléen.\n- Contrainte : ne pas trier la liste ni utiliser `sorted()`.\n- Réussite : afficher `True` ; `[2, 5, 4]` donne `False` ; `[]` et `[5]` donnent `True`.\n- Indices : partir de `triee = True` ; passer à `False` dès qu'un élément dépasse le suivant. Ne pas revenir à `True` ensuite.\n\n### 13. Décomposer en facteurs premiers\n\nUn **nombre premier** est un entier supérieur à 1 divisible uniquement par 1 et lui-même. Décomposer un entier, c'est l'écrire comme un produit de nombres premiers.\n\n**Exemple — retirer toutes les occurrences du facteur 2 :**\n\n```python\nreste = 12\nfacteurs = []\nwhile reste % 2 == 0:\n    facteurs.append(2)\n    reste = reste // 2\nprint(facteurs, reste)  # [2, 2] 3\n```\n\nOn divise 12 par 2, puis 6 par 2. Il reste 3, non divisible par 2. On a donc `12 = 2 * 2 * 3`.\n\n**Exercice 13 — À vous :** décomposer `nombre = 360` avec la liste fixée `premiers = [2, 3, 5, 7, 11, 13]`.\n\n- Objectif / prérequis : imbriquer un `while` dans un `for`, utiliser divisibilité et division entière.\n- Contraintes : entier de départ supérieur ou égal à 2 ; conserver sa valeur ; utiliser uniquement les premiers fournis.\n- Traitement : pour chaque premier, retirer toutes ses occurrences et les ajouter à `facteurs`.\n- Sortie : afficher les facteurs trouvés et le reste. Si le reste dépasse 1, afficher `Décomposition incomplète`.\n- Réussite : `360` → `[2, 2, 2, 3, 3, 5]`, reste `1` ; `13` → `[13]`, reste `1` ; `34` → `[2]`, reste `17`, incomplète ; `17` → `[]`, reste `17`, incomplète.\n- Indices : travailler sur `reste = nombre` ; la boucle intérieure répète la division par le même premier.\n- Justifier : pourquoi faut-il un `while` plutôt qu'un simple `if` ? Pourquoi un reste supérieur à 1 indique-t-il une limite de la liste fournie ?\n\n## À retenir et erreurs fréquentes\n\n- Initialiser compteurs et accumulateurs **avant** les boucles.\n- `=` affecte ; `==` compare ; `%` donne un reste ; `//` donne un quotient arrondi vers le bas.\n- Une liste de longueur `n` possède les indices de `0` à `n - 1`.\n- Faire évoluer la condition d'un `while` pour qu'il se termine.\n- Un maximum initialisé à 0 échoue sur une liste de nombres tous négatifs.\n- Une liste fixée de nombres premiers ne permet pas de décomposer tous les entiers.\n\n## Corrections et révision\n\n- [Corrections expliquées des 13 exercices](../corrections/03_algorithmique.md)\n- [QCM de révision — 10 questions avec feedback](../qcm/02_QCM_Revision.md)\n",
    "sourceName": "02_algorithmique.md"
  },
  "algo03": {
    "title": "03 — Recherche et logique dans les listes",
    "subtitle": "8 exercices pour aller plus loin",
    "slides": [
      {
        "title": "Rechercher dans une liste",
        "html": "<p>Pour chaque exercice : (1) exécuter l’exemple, (2) expliquer les indices et bornes de boucle, (3) réaliser le problème sans consulter de solution, (4) comparer avec le résultat attendu, (5) tester un autre cas.</p>\n<p><strong>Contraintes :</strong> Python 3, boucles <code>for</code>, conditions, listes, indices, booléens ; sans fonction personnalisée, classe ni bibliothèque externe.</p>\n<p><strong>Attention :</strong> les exemples guident le raisonnement mais ne résolvent pas directement l’exercice.</p>",
        "kind": "Méthode",
        "group": "Avant de commencer"
      },
      {
        "title": "Chiffres, tranches et fenêtres",
        "html": "<p><code>str(nombre)</code> transforme un nombre en texte. <code>len()</code> compte les caractères de ce texte. Pour compter les chiffres, on utilise ici uniquement des entiers <strong>positifs ou nuls</strong> : le signe <code>-</code> compterait aussi comme un caractère.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>print(str(107))       # texte &quot;107&quot;\nprint(len(str(107)))  # 3 chiffres\nprint(len(str(0)))    # 1 chiffre</code></pre></div>\n<p>Une <strong>tranche</strong> <code>liste[debut:fin]</code> extrait les éléments de l&#x27;indice <code>debut</code> inclus à l&#x27;indice <code>fin</code> exclu.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valeurs = [9, 2, 3, 8]\nprint(valeurs[1:3])  # [2, 3]</code></pre></div>\n<p>Une <strong>fenêtre</strong> est un groupe d&#x27;éléments consécutifs que l&#x27;on examine à partir d&#x27;un indice. Dans les exercices de recherche, le <strong>motif est non vide</strong>. Les tranches sont expliquées pour lire l&#x27;exemple 07 ; sa solution doit utiliser des boucles.</p>",
        "kind": "Repères",
        "group": "Avant de commencer"
      },
      {
        "title": "Filtrer selon le nombre de chiffres",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valeurs = [5, 23, 107, 84]\nfor i in range(len(valeurs)):\n    if len(str(valeurs[i])) == 2:\n        print(i, valeurs[i])</code></pre></div>\n<p><strong>À observer :</strong> le rôle de <code>i</code>, les limites de <code>range()</code> et les comparaisons réalisées.</p>",
        "kind": "Exemple 1",
        "group": "01 · Parcourir et comparer"
      },
      {
        "title": "Filtrer selon le nombre de chiffres",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [12, 345, 7, 890, 45, 1002, 678]\nlongueur = 3</code></pre></div>\n<p>Construire une liste de couples <code>[indice, valeur]</code> pour les entiers positifs ou nuls ayant exactement <code>longueur</code> chiffres. Utiliser <code>range(len(...))</code> et <code>append()</code>.</p>\n<p><strong>Résultat attendu :</strong> <code>[[1, 345], [3, 890], [6, 678]]</code></p>\n<p><strong>À vérifier :</strong> un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l&#x27;exercice).</p>",
        "kind": "Exercice 1",
        "group": "01 · Parcourir et comparer"
      },
      {
        "title": "Retrouver des couples voisins",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valeurs = [4, 8, 3, 8, 3]\nfor i in range(len(valeurs) - 1):\n    if valeurs[i] == 8 and valeurs[i + 1] == 3:\n        print(i)</code></pre></div>\n<p><strong>À observer :</strong> le rôle de <code>i</code>, les limites de <code>range()</code> et les comparaisons réalisées.</p>",
        "kind": "Exemple 2",
        "group": "01 · Parcourir et comparer"
      },
      {
        "title": "Retrouver des couples voisins",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valeurs = [2, 5, 7, 5, 7, 3, 5, 7]\na = 5\nb = 7</code></pre></div>\n<p>Enregistrer dans une liste les indices de départ de chaque couple consécutif <code>[a, b]</code>.</p>\n<p><strong>Résultat attendu :</strong> <code>[1, 3, 6]</code></p>\n<p><strong>À vérifier :</strong> un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l&#x27;exercice).</p>",
        "kind": "Exercice 2",
        "group": "01 · Parcourir et comparer"
      },
      {
        "title": "Rechercher une séquence complète",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valeurs = [9, 2, 3, 8]\nmotif = [2, 3]\nfor i in range(len(valeurs) - len(motif) + 1):\n    identique = True\n    for j in range(len(motif)):\n        if valeurs[i + j] != motif[j]:\n            identique = False\n    if identique:\n        print(i)</code></pre></div>\n<p><strong>À observer :</strong> le rôle de <code>i</code>, les limites de <code>range()</code> et les comparaisons réalisées.</p>",
        "kind": "Exemple 3",
        "group": "01 · Parcourir et comparer"
      },
      {
        "title": "Rechercher une séquence complète",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valeurs = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3]\nmotif = [1, 2, 3]</code></pre></div>\n<p>Trouver toutes les positions où le motif apparaît complètement. Utiliser deux boucles et un booléen.</p>\n<p><strong>Résultat attendu :</strong> <code>[0, 3, 7]</code></p>\n<p><strong>À vérifier :</strong> un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l&#x27;exercice).</p>",
        "kind": "Exercice 3",
        "group": "01 · Parcourir et comparer"
      },
      {
        "title": "Détecter les triples croissants",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valeurs = [3, 6, 9, 4]\nfor i in range(len(valeurs) - 2):\n    if valeurs[i] &lt; valeurs[i + 1] &lt; valeurs[i + 2]:\n        print(i)</code></pre></div>\n<p><strong>À observer :</strong> le rôle de <code>i</code>, les limites de <code>range()</code> et les comparaisons réalisées.</p>",
        "kind": "Exemple 4",
        "group": "01 · Parcourir et comparer"
      },
      {
        "title": "Détecter les triples croissants",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valeurs = [3, 5, 8, 2, 4, 6, 9, 1, 3]</code></pre></div>\n<p>Construire une liste de <code>[indice, [x, y, z]]</code> pour chaque groupe de trois valeurs consécutives strictement croissantes.</p>\n<p><strong>Résultat attendu :</strong> <code>[[0, [3, 5, 8]], [3, [2, 4, 6]], [4, [4, 6, 9]]]</code></p>\n<p><strong>À vérifier :</strong> un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l&#x27;exercice).</p>",
        "kind": "Exercice 4",
        "group": "01 · Parcourir et comparer"
      },
      {
        "title": "Compter les changements de signe",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>mesures = [-2, 3, -1]\nfor i in range(len(mesures) - 1):\n    if mesures[i] &lt; 0 and mesures[i + 1] &gt; 0:\n        print(&#x27;négatif vers positif&#x27;, i)</code></pre></div>\n<p><strong>À observer :</strong> le rôle de <code>i</code>, les limites de <code>range()</code> et les comparaisons réalisées.</p>",
        "kind": "Exemple 5",
        "group": "02 · Compter et reconnaître"
      },
      {
        "title": "Compter les changements de signe",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>mesures = [-3, 2, 4, -1, 0, 5, -2, -1, 3]</code></pre></div>\n<p>Trouver les indices où deux valeurs consécutives sont de signes opposés stricts. Ignorer les passages impliquant zéro. Afficher les indices et le nombre total.</p>\n<p><strong>Résultat attendu :</strong> <code>[0, 2, 5, 7]</code> (4 changements de signe).</p>\n<p><strong>À vérifier :</strong> un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l&#x27;exercice).</p>",
        "kind": "Exercice 5",
        "group": "02 · Compter et reconnaître"
      },
      {
        "title": "Repérer les doublons consécutifs",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [1, 1, 2, 3, 3]\nfor i in range(len(nombres) - 1):\n    if nombres[i] == nombres[i + 1]:\n        print(i)</code></pre></div>\n<p><strong>À observer :</strong> le rôle de <code>i</code>, les limites de <code>range()</code> et les comparaisons réalisées.</p>",
        "kind": "Exemple 6",
        "group": "02 · Compter et reconnaître"
      },
      {
        "title": "Repérer les doublons consécutifs",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [4, 4, 4, 2, 5, 5, 1, 1, 1]</code></pre></div>\n<p>Afficher les indices où deux éléments voisins sont égaux, puis compter les couples. Un groupe de trois valeurs identiques forme deux couples voisins.</p>\n<p><strong>Résultat attendu :</strong> <code>[0, 1, 4, 6, 7]</code> et <code>5</code> couples.</p>\n<p><strong>À vérifier :</strong> un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l&#x27;exercice).</p>",
        "kind": "Exercice 6",
        "group": "02 · Compter et reconnaître"
      },
      {
        "title": "Trouver un motif avec chevauchement",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>donnees = [1, 1, 1]\nmotif = [1, 1]\nfor i in range(len(donnees) - len(motif) + 1):\n    if donnees[i:i + len(motif)] == motif:\n        print(i)</code></pre></div>\n<p><strong>À observer :</strong> le rôle de <code>i</code>, les limites de <code>range()</code> et les comparaisons réalisées.</p>",
        "kind": "Exemple 7",
        "group": "02 · Compter et reconnaître"
      },
      {
        "title": "Trouver un motif avec chevauchement",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>donnees = [2, 4, 2, 4, 2, 5, 2, 4, 2, 4]\nmotif = [2, 4, 2]</code></pre></div>\n<p>Retrouver toutes les positions du motif <strong>sans utiliser de tranches <code>[:]</code> dans votre solution</strong>. Accepter les motifs qui se chevauchent.</p>\n<p><strong>Résultat attendu :</strong> <code>[0, 2, 6]</code></p>\n<p><strong>À vérifier :</strong> un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l&#x27;exercice).</p>",
        "kind": "Exercice 7",
        "group": "02 · Compter et reconnaître"
      },
      {
        "title": "Autoriser une erreur dans un motif",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>donnees = [1, 2, 4]\nmotif = [1, 2, 3]\ndifferences = 0\nfor j in range(len(motif)):\n    if donnees[j] != motif[j]:\n        differences += 1\nprint(differences)  # 1</code></pre></div>\n<p><strong>À observer :</strong> le rôle de <code>j</code>, la comparaison des valeurs à la même position et l&#x27;incrémentation de <code>differences</code>.</p>",
        "kind": "Exemple 8",
        "group": "02 · Compter et reconnaître"
      },
      {
        "title": "Autoriser une erreur dans un motif",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>donnees = [1, 2, 3, 1, 2, 4, 1, 5, 3, 1, 2, 3]\nmotif = [1, 2, 3]</code></pre></div>\n<p>Pour chaque fenêtre de même taille que le motif, compter les différences. Enregistrer <code>[indice, differences]</code> seulement s’il y a au plus une différence.</p>\n<p><strong>Résultat attendu :</strong> <code>[[0, 0], [3, 1], [6, 1], [9, 0]]</code></p>\n<p><strong>À vérifier :</strong> un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l&#x27;exercice).</p>",
        "kind": "Exercice 8",
        "group": "02 · Compter et reconnaître"
      }
    ],
    "next": "../revision/04_flashcards.html",
    "nextLabel": "Réviser avec les flashcards",
    "source": "# TP Python — Recherche et logique dans les listes\n\n**Bachelor 1 · Niveau intermédiaire · 8 exercices**\n\n## Méthode\n\nPour chaque exercice : (1) exécuter l’exemple, (2) expliquer les indices et bornes de boucle, (3) réaliser le problème sans consulter de solution, (4) comparer avec le résultat attendu, (5) tester un autre cas.\n\n**Contraintes :** Python 3, boucles `for`, conditions, listes, indices, booléens ; sans fonction personnalisée, classe ni bibliothèque externe.\n\n**Attention :** les exemples guident le raisonnement mais ne résolvent pas directement l’exercice.\n\n## Repères avant de commencer\n\n`str(nombre)` transforme un nombre en texte. `len()` compte les caractères de ce texte. Pour compter les chiffres, on utilise ici uniquement des entiers **positifs ou nuls** : le signe `-` compterait aussi comme un caractère.\n\n```python\nprint(str(107))       # texte \"107\"\nprint(len(str(107)))  # 3 chiffres\nprint(len(str(0)))    # 1 chiffre\n```\n\nUne **tranche** `liste[debut:fin]` extrait les éléments de l'indice `debut` inclus à l'indice `fin` exclu.\n\n```python\nvaleurs = [9, 2, 3, 8]\nprint(valeurs[1:3])  # [2, 3]\n```\n\nUne **fenêtre** est un groupe d'éléments consécutifs que l'on examine à partir d'un indice. Dans les exercices de recherche, le **motif est non vide**. Les tranches sont expliquées pour lire l'exemple 07 ; sa solution doit utiliser des boucles.\n\n---\n\n## Exercice 01 — Filtrer selon le nombre de chiffres\n\n### Exemple expliqué\n\n```python\nvaleurs = [5, 23, 107, 84]\nfor i in range(len(valeurs)):\n    if len(str(valeurs[i])) == 2:\n        print(i, valeurs[i])\n```\n\n**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.\n\n### Énoncé\n\n```python\nnombres = [12, 345, 7, 890, 45, 1002, 678]\nlongueur = 3\n```\n\nConstruire une liste de couples `[indice, valeur]` pour les entiers positifs ou nuls ayant exactement `longueur` chiffres. Utiliser `range(len(...))` et `append()`.\n\n**Résultat attendu :** `[[1, 345], [3, 890], [6, 678]]`\n\n**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).\n\n---\n\n## Exercice 02 — Retrouver des couples voisins\n\n### Exemple expliqué\n\n```python\nvaleurs = [4, 8, 3, 8, 3]\nfor i in range(len(valeurs) - 1):\n    if valeurs[i] == 8 and valeurs[i + 1] == 3:\n        print(i)\n```\n\n**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.\n\n### Énoncé\n\n```python\nvaleurs = [2, 5, 7, 5, 7, 3, 5, 7]\na = 5\nb = 7\n```\n\nEnregistrer dans une liste les indices de départ de chaque couple consécutif `[a, b]`.\n\n**Résultat attendu :** `[1, 3, 6]`\n\n**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).\n\n---\n\n## Exercice 03 — Rechercher une séquence complète\n\n### Exemple expliqué\n\n```python\nvaleurs = [9, 2, 3, 8]\nmotif = [2, 3]\nfor i in range(len(valeurs) - len(motif) + 1):\n    identique = True\n    for j in range(len(motif)):\n        if valeurs[i + j] != motif[j]:\n            identique = False\n    if identique:\n        print(i)\n```\n\n**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.\n\n### Énoncé\n\n```python\nvaleurs = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3]\nmotif = [1, 2, 3]\n```\n\nTrouver toutes les positions où le motif apparaît complètement. Utiliser deux boucles et un booléen.\n\n**Résultat attendu :** `[0, 3, 7]`\n\n**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).\n\n---\n\n## Exercice 04 — Détecter les triples croissants\n\n### Exemple expliqué\n\n```python\nvaleurs = [3, 6, 9, 4]\nfor i in range(len(valeurs) - 2):\n    if valeurs[i] < valeurs[i + 1] < valeurs[i + 2]:\n        print(i)\n```\n\n**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.\n\n### Énoncé\n\n```python\nvaleurs = [3, 5, 8, 2, 4, 6, 9, 1, 3]\n```\n\nConstruire une liste de `[indice, [x, y, z]]` pour chaque groupe de trois valeurs consécutives strictement croissantes.\n\n**Résultat attendu :** `[[0, [3, 5, 8]], [3, [2, 4, 6]], [4, [4, 6, 9]]]`\n\n**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).\n\n---\n\n## Exercice 05 — Compter les changements de signe\n\n### Exemple expliqué\n\n```python\nmesures = [-2, 3, -1]\nfor i in range(len(mesures) - 1):\n    if mesures[i] < 0 and mesures[i + 1] > 0:\n        print('négatif vers positif', i)\n```\n\n**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.\n\n### Énoncé\n\n```python\nmesures = [-3, 2, 4, -1, 0, 5, -2, -1, 3]\n```\n\nTrouver les indices où deux valeurs consécutives sont de signes opposés stricts. Ignorer les passages impliquant zéro. Afficher les indices et le nombre total.\n\n**Résultat attendu :** `[0, 2, 5, 7]` (4 changements de signe).\n\n**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).\n\n---\n\n## Exercice 06 — Repérer les doublons consécutifs\n\n### Exemple expliqué\n\n```python\nnombres = [1, 1, 2, 3, 3]\nfor i in range(len(nombres) - 1):\n    if nombres[i] == nombres[i + 1]:\n        print(i)\n```\n\n**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.\n\n### Énoncé\n\n```python\nnombres = [4, 4, 4, 2, 5, 5, 1, 1, 1]\n```\n\nAfficher les indices où deux éléments voisins sont égaux, puis compter les couples. Un groupe de trois valeurs identiques forme deux couples voisins.\n\n**Résultat attendu :** `[0, 1, 4, 6, 7]` et `5` couples.\n\n**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).\n\n---\n\n## Exercice 07 — Trouver un motif avec chevauchement\n\n### Exemple expliqué\n\n```python\ndonnees = [1, 1, 1]\nmotif = [1, 1]\nfor i in range(len(donnees) - len(motif) + 1):\n    if donnees[i:i + len(motif)] == motif:\n        print(i)\n```\n\n**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.\n\n### Énoncé\n\n```python\ndonnees = [2, 4, 2, 4, 2, 5, 2, 4, 2, 4]\nmotif = [2, 4, 2]\n```\n\nRetrouver toutes les positions du motif **sans utiliser de tranches `[:]` dans votre solution**. Accepter les motifs qui se chevauchent.\n\n**Résultat attendu :** `[0, 2, 6]`\n\n**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).\n\n---\n\n## Exercice 08 — Autoriser une erreur dans un motif\n\n### Exemple expliqué\n\n```python\ndonnees = [1, 2, 4]\nmotif = [1, 2, 3]\ndifferences = 0\nfor j in range(len(motif)):\n    if donnees[j] != motif[j]:\n        differences += 1\nprint(differences)  # 1\n```\n\n**À observer :** le rôle de `j`, la comparaison des valeurs à la même position et l'incrémentation de `differences`.\n\n### Énoncé\n\n```python\ndonnees = [1, 2, 3, 1, 2, 4, 1, 5, 3, 1, 2, 3]\nmotif = [1, 2, 3]\n```\n\nPour chaque fenêtre de même taille que le motif, compter les différences. Enregistrer `[indice, differences]` seulement s’il y a au plus une différence.\n\n**Résultat attendu :** `[[0, 0], [3, 1], [6, 1], [9, 0]]`\n\n**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).\n",
    "sourceName": "03_algorithmique.md"
  },
  "flashcards": {
    "title": "8 flashcards pour réviser",
    "subtitle": "Recherche et logique dans les listes",
    "cards": [
      {
        "title": "Compter les chiffres",
        "question": "<p>Que vaut <code>len(str(1002))</code> ? Et <code>len(str(0))</code> ?</p>",
        "answer": "<p><strong>4 et 1.</strong> <code>str()</code> transforme le nombre en texte ; <code>len()</code> compte ses caractères. Zéro s&#x27;écrit avec un chiffre. Cette méthode suppose ici des entiers positifs ou nuls : pour un négatif, le signe <code>-</code> serait aussi compté.</p>"
      },
      {
        "title": "Comparer des voisins",
        "question": "<p>Pourquoi utilise-t-on <code>range(len(valeurs) - 1)</code> pour comparer <code>valeurs[i]</code> et <code>valeurs[i + 1]</code> ?</p>",
        "answer": "<p>Le dernier indice testé pour <code>i</code> doit être <strong><code>len(valeurs) - 2</code></strong> : son voisin est alors le dernier élément. <code>range</code> exclut sa borne finale. On évite ainsi un accès après la fin de la liste. Avec moins de deux éléments, la boucle ne fait aucun tour.</p>"
      },
      {
        "title": "Chercher un motif complet",
        "question": "<p>Dans une liste de 6 éléments, combien de positions de départ faut-il tester pour chercher un motif de 3 éléments ?</p>",
        "answer": "<p><strong>4 positions : 0, 1, 2 et 3.</strong> La boucle est <code>range(6 - 3 + 1)</code>. Pour des longueurs <code>n</code> et <code>m</code>, on utilise <code>range(n - m + 1)</code>. Le <code>+ 1</code> permet de tester le dernier départ valide. Si le motif est plus long que la liste, aucun départ n&#x27;est testé.</p>"
      },
      {
        "title": "Reconnaître un triple croissant",
        "question": "<p>Les triples <code>[2, 4, 4]</code> et <code>[2, 4, 6]</code> sont-ils strictement croissants ? Quel test utiliser ?</p>",
        "answer": "<p><strong>Seul <code>[2, 4, 6]</code> l&#x27;est.</strong> Le test <code>x &lt; y &lt; z</code> exige deux augmentations strictes ; une égalité ne convient pas. Pour comparer trois voisins sans sortir de la liste, parcourir <code>range(len(valeurs) - 2)</code>.</p>"
      },
      {
        "title": "Détecter un changement de signe",
        "question": "<p>Quels couples ont des signes opposés stricts : <code>[-2, 3]</code>, <code>[0, -4]</code>, <code>[5, -1]</code> ?</p>",
        "answer": "<p><strong><code>[-2, 3]</code> et <code>[5, -1]</code>.</strong> Le test est <code>(a &lt; 0 and b &gt; 0) or (a &gt; 0 and b &lt; 0)</code>. Il couvre les deux sens du changement. Zéro n&#x27;est ni strictement positif ni strictement négatif : <code>[0, -4]</code> est exclu.</p>"
      },
      {
        "title": "Compter les doublons voisins",
        "question": "<p>Combien de couples voisins égaux trouve-t-on dans <code>[4, 4, 4, 2]</code> ? À quels indices de départ ?</p>",
        "answer": "<p><strong>2 couples, aux indices 0 et 1.</strong> On compare chaque élément à son voisin avec <code>valeurs[i] == valeurs[i + 1]</code>. Trois valeurs identiques consécutives forment deux couples : l&#x27;élément central participe aux deux.</p>"
      },
      {
        "title": "Accepter les chevauchements",
        "question": "<p>Où apparaît le motif <code>[1, 1]</code> dans <code>[1, 1, 1]</code> ? Pourquoi ne pas avancer de la longueur du motif après une correspondance ?</p>",
        "answer": "<p><strong>Aux indices 0 et 1.</strong> Les deux occurrences partagent un élément. Avancer de deux positions ferait manquer celle d&#x27;indice 1. Il faut tester chaque départ, puis comparer <code>donnees[i + j]</code> à <code>motif[j]</code> dans une boucle intérieure.</p>"
      },
      {
        "title": "Autoriser une différence",
        "question": "<p>Pour comparer chaque fenêtre à un motif, où initialiser <code>differences = 0</code> et quel test accepte au plus une différence ?</p>",
        "answer": "<p><strong>Au début de chaque fenêtre</strong>, avant la boucle qui compare ses éléments. Incrémenter le compteur à chaque inégalité, puis retenir la fenêtre si <code>differences &lt;= 1</code>. Cela accepte 0 ou 1 différence. Le compteur ne doit ni cumuler les fenêtres précédentes, ni être remis à zéro à chaque élément.</p>"
      }
    ],
    "next": "../supports/03_algorithmique.html",
    "nextLabel": "Revoir le chapitre 03"
  }
};
