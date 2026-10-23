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
    "subtitle": "10 questions faciles, puis 10 questions progressives",
    "questions": [
      {
        "title": "Addition simple",
        "prompt": "<p>Que vaut <code>total</code> ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>price = 4\nquantity = 3\ntotal = price * quantity</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>7</code></span>",
          "<span class=\"option-text\"><code>12</code></span>",
          "<span class=\"option-text\"><code>43</code></span>",
          "<span class=\"option-text\"><code>1</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>Le montant est le prix multiplié par la quantité : 4 × 3 = 12.</p>",
        "feedback": "<p>Le montant est le prix multiplié par la quantité : 4 × 3 = 12.</p>\n<ul><li>A : correspondrait à une addition.</li><li>C : assemble les chiffres au lieu de les multiplier.</li><li>D : la différence entre les deux valeurs n&#x27;est pas le produit.</li></ul>"
      },
      {
        "title": "Calculer un reste",
        "prompt": "<p>Que vaut <code>17 % 5</code> ?</p>",
        "options": [
          "<span class=\"option-text\"><code>2</code></span>",
          "<span class=\"option-text\"><code>3</code></span>",
          "<span class=\"option-text\"><code>5</code></span>",
          "<span class=\"option-text\"><code>12</code></span>"
        ],
        "answer": 0,
        "explanation": "<p>17 = 5 × 3 + 2 ; le reste est 2.</p>",
        "feedback": "<p>17 = 5 × 3 + 2 ; le reste est 2.</p>\n<ul><li>B : c&#x27;est le quotient entier.</li><li>C : c&#x27;est le diviseur, pas le reste.</li><li>D : c&#x27;est la différence entre 17 et 5.</li></ul>"
      },
      {
        "title": "Division entière",
        "prompt": "<p>Que vaut <code>20 // 4</code> ?</p>",
        "options": [
          "<span class=\"option-text\"><code>0</code></span>",
          "<span class=\"option-text\"><code>4</code></span>",
          "<span class=\"option-text\"><code>5</code></span>",
          "<span class=\"option-text\"><code>5.0</code></span>"
        ],
        "answer": 2,
        "explanation": "<p>20 divisé par 4 vaut 5.</p>",
        "feedback": "<p>20 divisé par 4 vaut 5.</p>\n<ul><li>A : le reste est nul ; le quotient ne l&#x27;est pas.</li><li>B : c&#x27;est le diviseur.</li><li>D : <code>//</code> produit ici l&#x27;entier <code>5</code>, pas le flottant <code>5.0</code>.</li></ul>"
      },
      {
        "title": "Comparer deux valeurs",
        "prompt": "<p>Que vaut <code>age &gt;= 18</code> si <code>age = 18</code> ?</p>",
        "options": [
          "<span class=\"option-text\"><code>18</code></span>",
          "<span class=\"option-text\"><code>False</code></span>",
          "<span class=\"option-text\"><code>19</code></span>",
          "<span class=\"option-text\"><code>True</code></span>"
        ],
        "answer": 3,
        "explanation": "<p><code>&gt;=</code> signifie « supérieur ou égal ». L&#x27;égalité suffit donc.</p>",
        "feedback": "<p><code>&gt;=</code> signifie « supérieur ou égal ». L&#x27;égalité suffit donc.</p>\n<ul><li>A et C sont des nombres ; la comparaison renvoie un booléen.</li><li>B serait le résultat de <code>age &gt; 18</code>, qui exclut l&#x27;égalité.</li></ul>"
      },
      {
        "title": "Choisir une branche",
        "prompt": "<p>Que s&#x27;affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>temperature = 12\nif temperature &lt; 0:\n    print(&quot;Cold&quot;)\nelse:\n    print(&quot;Warm&quot;)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>Cold</code></span>",
          "<span class=\"option-text\"><code>Warm</code></span>",
          "<span class=\"option-text\">Les deux messages</span>",
          "<span class=\"option-text\">Aucun message</span>"
        ],
        "answer": 1,
        "explanation": "<p><code>12 &lt; 0</code> est faux ; le bloc <code>else</code> affiche <code>Warm</code>.</p>",
        "feedback": "<p><code>12 &lt; 0</code> est faux ; le bloc <code>else</code> affiche <code>Warm</code>.</p>\n<ul><li>A : correspondrait à une température négative.</li><li>C : un seul bloc de cette structure est exécuté.</li><li>D : une des deux branches s&#x27;exécute toujours ici.</li></ul>"
      },
      {
        "title": "Comprendre range",
        "prompt": "<p>Quelles valeurs prend <code>i</code> ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>for i in range(1, 4):\n    print(i)</code></pre></div>",
        "options": [
          "<span class=\"option-text\">1, 2, 3</span>",
          "<span class=\"option-text\">1, 2, 3, 4</span>",
          "<span class=\"option-text\">0, 1, 2, 3</span>",
          "<span class=\"option-text\">4 seulement</span>"
        ],
        "answer": 0,
        "explanation": "<p>La boucle commence à 1 et s&#x27;arrête avant la borne 4.</p>",
        "feedback": "<p>La boucle commence à 1 et s&#x27;arrête avant la borne 4.</p>\n<ul><li>B : la borne finale est exclue.</li><li>C : <code>range(1, 4)</code> ne commence pas à 0.</li><li>D : 4 est la borne d&#x27;arrêt, jamais une valeur de la boucle.</li></ul>"
      },
      {
        "title": "Parcourir une liste",
        "prompt": "<p>Quels nombres sont affichés ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>for number in [2, 4]:\n    print(number + 1)</code></pre></div>",
        "options": [
          "<span class=\"option-text\">2, 4</span>",
          "<span class=\"option-text\">3 seulement</span>",
          "<span class=\"option-text\">5 seulement</span>",
          "<span class=\"option-text\">3, 5</span>"
        ],
        "answer": 3,
        "explanation": "<p>La boucle ajoute 1 à chaque élément : 2 devient 3 et 4 devient 5.</p>",
        "feedback": "<p>La boucle ajoute 1 à chaque élément : 2 devient 3 et 4 devient 5.</p>\n<ul><li>A : affiche les valeurs d&#x27;origine, sans le calcul.</li><li>B : omet le deuxième tour.</li><li>C : ajoute 1 à la dernière valeur seulement.</li></ul>"
      },
      {
        "title": "Longueur d'une liste",
        "prompt": "<p>Que vaut <code>len(numbers)</code> ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>numbers = [8, 10, 12]</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>3</code></span>",
          "<span class=\"option-text\"><code>2</code></span>",
          "<span class=\"option-text\"><code>30</code></span>",
          "<span class=\"option-text\"><code>12</code></span>"
        ],
        "answer": 0,
        "explanation": "<p>La liste contient trois éléments.</p>",
        "feedback": "<p>La liste contient trois éléments.</p>\n<ul><li>B : est le dernier indice, pas la longueur.</li><li>C : additionne les valeurs au lieu de compter les éléments.</li><li>D : est le dernier élément de la liste.</li></ul>"
      },
      {
        "title": "Ajouter un élément",
        "prompt": "<p>Que contient <code>numbers</code> après le programme ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>numbers = [1]\nnumbers.append(2)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>[2]</code></span>",
          "<span class=\"option-text\"><code>[1, 2]</code></span>",
          "<span class=\"option-text\"><code>[1]</code></span>",
          "<span class=\"option-text\"><code>[1, 1, 2]</code></span>"
        ],
        "answer": 1,
        "explanation": "<p><code>append</code> ajoute 2 à la fin de la liste existante.</p>",
        "feedback": "<p><code>append</code> ajoute 2 à la fin de la liste existante.</p>\n<ul><li>A : remplacerait la liste au lieu de lui ajouter un élément.</li><li>C : ne tiendrait pas compte de l&#x27;appel à <code>append</code>.</li><li>D : ajouterait une valeur qui n&#x27;est pas dans le programme.</li></ul>"
      },
      {
        "title": "Accumuler une somme",
        "prompt": "<p>Que s&#x27;affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>total = 0\nfor number in [2, 3]:\n    total += number\nprint(total)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>3</code></span>",
          "<span class=\"option-text\"><code>5</code></span>",
          "<span class=\"option-text\"><code>23</code></span>",
          "<span class=\"option-text\"><code>0</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>Le total passe de 0 à 2, puis à 5.</p>",
        "feedback": "<p>Le total passe de 0 à 2, puis à 5.</p>\n<ul><li>A : est la dernière valeur lue, pas la somme.</li><li>C : assemble les chiffres au lieu de les additionner.</li><li>D : serait le total si la boucle n&#x27;ajoutait aucune valeur.</li></ul>"
      },
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
    "next": "../revision/08_flashcards_transition.html",
    "nextLabel": "Réviser avec 8 flashcards"
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
        "html": "<p>construire <code>inverse</code> à partir de <code>nombres = [10, 20, 30, 40]</code>, dans l&#x27;ordre inverse.</p>\n<ul><li>Objectif / prérequis : parcourir une liste depuis son dernier indice.</li><li>Contraintes : conserver l&#x27;original ; sans <code>.reverse()</code>, <code>reversed()</code> ni <code>[::-1]</code>.</li><li>Réussite : obtenir <code>[40, 30, 20, 10]</code> ; <code>[]</code> donne <code>[]</code> ; <code>[5]</code> donne <code>[5]</code>.</li></ul>\n<h3>Repère de progression</h3>\n<p>À partir de l&#x27;exercice 11, les exercices sont avancés et demandent d&#x27;assembler plusieurs notions. Si vous débutez, prenez davantage de temps pour les lire, les décomposer et les comprendre : c&#x27;est normal.</p>\n<p>Si vous avez compris et réussi les exercices 1 à 10, vous maîtrisez les bases attendues dans ce cours. Les exercices 11 à 13 permettent d&#x27;aller plus loin.</p><details class=\"hint\"><summary>Afficher un indice</summary><p>le dernier indice est <code>len(nombres) - 1</code> ; ajouter chaque valeur à une nouvelle liste.</p></details>",
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
    "source": "# 02 — Algorithmique avec Python\n\n## Objectif\n\nConstruire un algorithme : une suite d'étapes permettant de résoudre un problème. Python permet de traduire ces étapes en code exécutable.\n\n**Prérequis :** [variables, calculs, comparaisons, conditions, boucles et listes](01_introduction_python.md).\n\n## Méthode en bref\n\n1. Identifier les **entrées** : les données de départ.\n2. Décrire le **traitement** : les calculs et les décisions.\n3. Définir la **sortie** : le résultat attendu.\n4. Tester un cas normal et un cas limite.\n\nExemple : pour additionner `[2, 5]`, partir de `total = 0`, ajouter 2 puis 5. Le total passe de 0 à 2, puis à 7 : la sortie est `7`.\n\nUn **accumulateur** conserve un résultat en cours de calcul ; un **compteur** compte des événements. On les initialise avant la boucle pour conserver leur valeur entre les tours.\n\n**Consigne commune :** créer un fichier Python par exercice, utiliser les données indiquées et afficher le résultat. Aucun `input()`, import ou fonction à définir n'est nécessaire. Prédire le résultat avant de lancer le programme. Les exemples sont indépendants.\n\n## Partie 1 — 5 exercices simples\n\n### 1. Calculer un prix\n\n**Exemple — calculer une durée totale :**\n\n```python\nduree = 15\nseances = 3\ntotal = duree * seances\nprint(total)  # 45\n```\n\nLes deux entrées sont multipliées ; `total` mémorise le résultat.\n\n**Exercice 1 — À vous :** avec `prix = 8` et `quantite = 4`, calculer et afficher le montant à payer.\n\n- Objectif / prérequis : affecter le résultat d'une multiplication à une variable.\n- Réussite : afficher `32` ; avec une quantité de `0`, afficher `0`.\n- Indice : remplacer la durée et le nombre de séances par les données du prix.\n\n### 2. Prendre une décision\n\n**Exemple — tester un seuil :**\n\n```python\ntemperature = 12\nif temperature < 0:\n    print(\"Gel\")\nelse:\n    print(\"Pas de gel\")  # message affiché\n```\n\nLe test est faux ; Python exécute donc le bloc `else`.\n\n**Exercice 2 — À vous :** avec `nombre = 14`, afficher `Pair` si le nombre est pair, sinon `Impair`.\n\n- Objectif / prérequis : choisir un message avec `if`, `%` et `==`.\n- Réussite : `14` → `Pair`, `7` → `Impair`, `0` → `Pair`.\n- Indice : un nombre pair a un reste de division par 2 égal à 0.\n\n### 3. Lire puis adapter une boucle\n\n**Exemple — répéter un calcul :**\n\n```python\nfor i in range(1, 4):\n    print(i * 2)  # affiche 2, puis 4, puis 6\n```\n\n`i` prend les valeurs 1, 2 et 3. La borne finale de `range` est exclue.\n\n**Exercice 3 — À vous :** prédire les valeurs affichées si `2` est remplacé par `3`. Puis écrire la table de multiplication de 7, de `7 × 1` à `7 × 10`.\n\n- Objectif / prérequis : lire et écrire une boucle `for` avec `range`.\n- Réussite : la prédiction est vérifiée ; le programme affiche 10 résultats, de `7` à `70`.\n- Contrainte : utiliser une boucle, pas dix instructions `print`.\n- Indice : pour inclure 10, utiliser une borne finale égale à 11.\n\n### 4. Corriger un accumulateur\n\n**Exemple — cumuler des valeurs :**\n\n```python\ntotal = 0\nfor valeur in [2, 5]:\n    total += valeur\nprint(total)  # 7\n```\n\nLe total est initialisé une seule fois, puis augmente à chaque tour.\n\n**Exercice 4 — À vous :** ce programme doit additionner tous les éléments. Expliquer le bug et le corriger.\n\n```python\nnombres = [4, 6, 3]\nfor nombre in nombres:\n    total = 0\n    total += nombre\nprint(total)\n```\n\n- Objectif / prérequis : comprendre l'initialisation et l'indentation.\n- Réussite : afficher `13` ; avec `nombres = []`, afficher `0`.\n- Contrainte : ne pas utiliser `sum()`.\n- Indice : quelle instruction efface le résultat des tours précédents ?\n\n### 5. Filtrer une liste\n\n**Exemple — conserver les valeurs positives :**\n\n```python\npositifs = []\nfor nombre in [-2, 3, 0, 5]:\n    if nombre > 0:\n        positifs.append(nombre)\nprint(positifs)  # [3, 5]\n```\n\nChaque nombre est testé. Seuls 3 et 5 sont ajoutés à la nouvelle liste.\n\n**Exercice 5 — À vous :** à partir de `notes = [8, 12, 9, 16, 10]`, créer une liste `valides` contenant les notes supérieures ou égales à 10.\n\n- Objectif / prérequis : combiner liste, boucle, condition et `append`.\n- Réussite : obtenir `[12, 16, 10]` ; une liste vide donne `[]`.\n- Contrainte : conserver la liste initiale et l'ordre des notes.\n- Indice : partir d'une liste vide, puis ajouter uniquement les notes retenues.\n\n## Partie 2 — 8 exercices pour approfondir\n\n### 6. Permuter deux valeurs\n\n**Exemple — sauvegarder avant de remplacer :**\n\n```python\nscore = 10\nancien_score = score\nscore = 20\nprint(ancien_score, score)  # 10 20\n```\n\nLa sauvegarde conserve l'ancienne valeur même après la modification de `score`.\n\n**Exercice 6 — À vous :** avec `a = 4` et `b = 9`, échanger leurs valeurs.\n\n- Objectif / prérequis : maîtriser l'ordre des affectations.\n- Contrainte : utiliser une variable temporaire, sans `a, b = b, a`.\n- Réussite : afficher `9 4` ; deux valeurs égales restent égales.\n- Indices : sauvegarder `a` ; remplacer `a` ; restaurer la sauvegarde dans `b`.\n\n### 7. Rechercher le maximum\n\n**Exemple — mettre à jour un record :**\n\n```python\nrecord = 6\nnouveau = 9\nif nouveau > record:\n    record = nouveau\nprint(record)  # 9\n```\n\nLe record est remplacé uniquement si la nouvelle valeur est plus grande.\n\n**Exercice 7 — À vous :** rechercher le maximum de `nombres = [4, 12, 7, 15, 9]`.\n\n- Objectif / prérequis : conserver le meilleur candidat pendant un parcours.\n- Contraintes : liste non vide ; sans `max()` ni tri.\n- Réussite : afficher `15` ; `[-8, -3, -12]` donne `-3` ; `[5]` donne `5`.\n- Indice : initialiser le maximum avec le premier élément, pas avec 0.\n\n### 8. Rechercher la première position\n\n**Exemple — parcourir les indices :**\n\n```python\nlettres = [\"a\", \"b\", \"a\"]\nfor i in range(len(lettres)):\n    print(i, lettres[i])  # 0 a, puis 1 b, puis 2 a\n```\n\n`i` est un indice ; `lettres[i]` est la valeur à cet indice.\n\n**Exercice 8 — À vous :** dans `nombres = [4, 7, 2, 7]`, trouver le premier indice de `cible = 7`. Afficher `-1` si la cible est absente.\n\n- Objectif / prérequis : distinguer indice et valeur, utiliser une valeur « non trouvé ».\n- Contrainte : ne pas utiliser `.index()`.\n- Réussite : `7` → `1`, `4` → `0`, `9` → `-1` ; une liste vide donne `-1`.\n- Indices : initialiser `position = -1` ; ne la modifier que si aucune position n'a encore été trouvée.\n\n### 9. Compter les occurrences\n\n**Exemple — compter les valeurs positives :**\n\n```python\ncompteur = 0\nfor nombre in [-1, 3, 5]:\n    if nombre > 0:\n        compteur += 1\nprint(compteur)  # 2\n```\n\nOn ajoute 1 par valeur retenue, quelle que soit cette valeur.\n\n**Exercice 9 — À vous :** compter combien de fois `cible = 3` apparaît dans `nombres = [3, 1, 3, 5, 3]`.\n\n- Objectif / prérequis : utiliser un compteur et une comparaison d'égalité.\n- Contrainte : ne pas utiliser `.count()`.\n- Réussite : afficher `3` ; une cible absente ou une liste vide donne `0`.\n- Indice : adapter le test de l'exemple pour retenir les valeurs égales à la cible.\n\n### 10. Inverser une liste\n\n**Exemple — faire reculer un indice :**\n\n```python\ni = 2\nwhile i >= 0:\n    print(i)  # 2, puis 1, puis 0\n    i -= 1\n```\n\nAprès l'affichage de 0, `i` devient -1 et la boucle s'arrête.\n\n**Exercice 10 — À vous :** construire `inverse` à partir de `nombres = [10, 20, 30, 40]`, dans l'ordre inverse.\n\n- Objectif / prérequis : parcourir une liste depuis son dernier indice.\n- Contraintes : conserver l'original ; sans `.reverse()`, `reversed()` ni `[::-1]`.\n- Réussite : obtenir `[40, 30, 20, 10]` ; `[]` donne `[]` ; `[5]` donne `[5]`.\n- Indices : le dernier indice est `len(nombres) - 1` ; ajouter chaque valeur à une nouvelle liste.\n\n### Repère de progression\n\nÀ partir de l'exercice 11, les exercices sont avancés et demandent d'assembler plusieurs notions. Si vous débutez, prenez davantage de temps pour les lire, les décomposer et les comprendre : c'est normal.\n\nSi vous avez compris et réussi les exercices 1 à 10, vous maîtrisez les bases attendues dans ce cours. Les exercices 11 à 13 permettent d'aller plus loin.\n\n### 11. Additionner les chiffres d'un nombre\n\n**Exemple — isoler et retirer le dernier chiffre :**\n\n```python\nnombre = 472\nprint(nombre % 10)   # 2 : dernier chiffre\nprint(nombre // 10)  # 47 : nombre privé de son dernier chiffre\n```\n\nLa division donne `472 = 47 * 10 + 2` : 47 est le quotient et 2 le reste.\n\n**Exercice 11 — À vous :** calculer la somme des chiffres de `nombre = 583`.\n\n- Objectif / prérequis : combiner `%`, `//`, accumulateur et `while`.\n- Contraintes : entier positif ou nul ; sans conversion en texte.\n- Réussite : `583` → `16`, `1002` → `3`, `0` → `0`.\n- Indices : ajouter le dernier chiffre au total ; le retirer ; recommencer tant qu'il reste des chiffres.\n\n### 12. Vérifier l'ordre d'une liste\n\n**Exemple — comparer deux voisins :**\n\n```python\nnombres = [2, 5, 4]\nprint(nombres[0] <= nombres[1])  # True\nprint(nombres[1] <= nombres[2])  # False\n```\n\nLe deuxième couple descend de 5 à 4 : la liste n'est pas triée par ordre croissant.\n\n**Exercice 12 — À vous :** déterminer si `nombres = [2, 4, 4, 9]` est triée par ordre croissant, en autorisant les égalités.\n\n- Objectif / prérequis : comparer des voisins et conserver un booléen.\n- Contrainte : ne pas trier la liste ni utiliser `sorted()`.\n- Réussite : afficher `True` ; `[2, 5, 4]` donne `False` ; `[]` et `[5]` donnent `True`.\n- Indices : partir de `triee = True` ; passer à `False` dès qu'un élément dépasse le suivant. Ne pas revenir à `True` ensuite.\n\n### 13. Décomposer en facteurs premiers\n\nUn **nombre premier** est un entier supérieur à 1 divisible uniquement par 1 et lui-même. Décomposer un entier, c'est l'écrire comme un produit de nombres premiers.\n\n**Exemple — retirer toutes les occurrences du facteur 2 :**\n\n```python\nreste = 12\nfacteurs = []\nwhile reste % 2 == 0:\n    facteurs.append(2)\n    reste = reste // 2\nprint(facteurs, reste)  # [2, 2] 3\n```\n\nOn divise 12 par 2, puis 6 par 2. Il reste 3, non divisible par 2. On a donc `12 = 2 * 2 * 3`.\n\n**Exercice 13 — À vous :** décomposer `nombre = 360` avec la liste fixée `premiers = [2, 3, 5, 7, 11, 13]`.\n\n- Objectif / prérequis : imbriquer un `while` dans un `for`, utiliser divisibilité et division entière.\n- Contraintes : entier de départ supérieur ou égal à 2 ; conserver sa valeur ; utiliser uniquement les premiers fournis.\n- Traitement : pour chaque premier, retirer toutes ses occurrences et les ajouter à `facteurs`.\n- Sortie : afficher les facteurs trouvés et le reste. Si le reste dépasse 1, afficher `Décomposition incomplète`.\n- Réussite : `360` → `[2, 2, 2, 3, 3, 5]`, reste `1` ; `13` → `[13]`, reste `1` ; `34` → `[2]`, reste `17`, incomplète ; `17` → `[]`, reste `17`, incomplète.\n- Indices : travailler sur `reste = nombre` ; la boucle intérieure répète la division par le même premier.\n- Justifier : pourquoi faut-il un `while` plutôt qu'un simple `if` ? Pourquoi un reste supérieur à 1 indique-t-il une limite de la liste fournie ?\n\n## À retenir et erreurs fréquentes\n\n- Initialiser compteurs et accumulateurs **avant** les boucles.\n- `=` affecte ; `==` compare ; `%` donne un reste ; `//` donne un quotient arrondi vers le bas.\n- Une liste de longueur `n` possède les indices de `0` à `n - 1`.\n- Faire évoluer la condition d'un `while` pour qu'il se termine.\n- Un maximum initialisé à 0 échoue sur une liste de nombres tous négatifs.\n- Une liste fixée de nombres premiers ne permet pas de décomposer tous les entiers.\n\n## Corrections et révision\n\n- [Corrections expliquées des 13 exercices](../corrections/03_algorithmique.md)\n- [QCM de révision — 10 questions avec feedback](../qcm/02_QCM_Revision.md)\n",
    "sourceName": "02_algorithmique.md"
  },
  "transitionCards": {
    "title": "8 flashcards — Réviser avant la recherche",
    "subtitle": "Les bases utiles avant le chapitre 03",
    "cards": [
      {
        "title": "Les bornes de range",
        "question": "<p>Quelles valeurs prend <code>i</code> dans <code>range(1, 4)</code> ?</p>",
        "answer": "<p><code>1</code>, <code>2</code> et <code>3</code>. La borne de fin <code>4</code> est exclue.</p>"
      },
      {
        "title": "Parcourir les indices",
        "question": "<p>Quelle boucle parcourt tous les indices valides d&#x27;une liste <code>values</code> ?</p>",
        "answer": "<p><code>for i in range(len(values)):</code>. Les indices vont de <code>0</code> à <code>len(values) - 1</code>. Une liste vide ne donne aucun indice.</p>"
      },
      {
        "title": "Comparer des voisins",
        "question": "<p>Pourquoi une boucle qui compare <code>values[i]</code> et <code>values[i + 1]</code> s&#x27;arrête-t-elle avant le dernier indice ?</p>",
        "answer": "<p>Pour que <code>i + 1</code> reste un indice valide. La boucle utilise <code>range(len(values) - 1)</code> ; une liste de moins de deux éléments n&#x27;a aucun couple à comparer.</p>"
      },
      {
        "title": "Lire le reste",
        "question": "<p>Que vaut <code>17 % 5</code> ?</p>",
        "answer": "<p><code>2</code>, car <code>17 = 5 × 3 + 2</code>. L&#x27;opérateur <code>%</code> donne le reste de la division.</p>"
      },
      {
        "title": "Lire le quotient entier",
        "question": "<p>Que vaut <code>17 // 5</code> ?</p>",
        "answer": "<p><code>3</code>. L&#x27;opérateur <code>//</code> donne le quotient entier. Combiné à <code>%</code>, il sert notamment à retirer les chiffres d&#x27;un nombre.</p>"
      },
      {
        "title": "Comprendre break",
        "question": "<p>Que fait <code>break</code> dans une boucle ?</p>",
        "answer": "<p>Il termine immédiatement la boucle en cours. Dans une recherche de première occurrence, il évite de continuer après avoir trouvé la valeur.</p>"
      },
      {
        "title": "Utiliser deux indices",
        "question": "<p>Dans <code>values[i + j]</code>, que représentent <code>i</code> et <code>j</code> lorsqu&#x27;on cherche un motif ?</p>",
        "answer": "<p><code>i</code> désigne le début d&#x27;une fenêtre dans la liste ; <code>j</code> désigne une position à l&#x27;intérieur du motif. La boucle extérieure choisit <code>i</code>, la boucle intérieure fait varier <code>j</code>.</p>"
      },
      {
        "title": "Réinitialiser un compteur",
        "question": "<p>Où initialiser <code>matches = 0</code> si l&#x27;on compte les positions correspondantes pour plusieurs fenêtres ?</p>",
        "answer": "<p>Au début de chaque fenêtre, dans la boucle extérieure et avant la boucle intérieure. Ainsi, les correspondances d&#x27;une fenêtre ne sont pas ajoutées au compte de la suivante.</p>\n<p>Après cette série, cinq flashcards animées permettent de s&#x27;entraîner sur les fenêtres, les indices <code>i + j</code> et les boucles imbriquées.</p>"
      }
    ],
    "next": "../revision/10_flashcards_fenetres.html",
    "nextLabel": "Continuer avec les fenêtres animées"
  },
  "windowCards": {
    "title": "5 flashcards animées — Fenêtres et indices",
    "subtitle": "Suivre i, j et les boucles imbriquées",
    "cards": [
      {
        "title": "Calculer un indice décalé",
        "question": "<p>Avec <code>i = 1</code> et <code>j = 1</code>, quel indice est lu par <code>numbers[i + j]</code> ? Que signifie <code>j</code> ?</p>",
        "answer": "<p>L&#x27;indice lu est <code>2</code>. <code>i</code> marque le début de la fenêtre et <code>j</code> la position examinée dans le motif.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>value = numbers[i + j]</code></pre></div>",
        "animation": {
          "mode": "compare",
          "values": [
            8,
            4,
            9,
            1
          ],
          "pattern": [
            4,
            9
          ],
          "starts": [
            1
          ]
        }
      },
      {
        "title": "Compter les positions égales",
        "question": "<p>Pour <code>numbers = [3, 1, 3, 2]</code>, <code>pattern = [3, 1]</code> et <code>i = 2</code>, quelle valeur prend <code>count</code> après la boucle intérieure ? Est-ce que le motif complet correspond ?</p>",
        "answer": "<p><code>count</code> vaut <code>1</code> : <code>3</code> correspond à <code>3</code>, mais <code>2</code> ne correspond pas à <code>1</code>. Le motif complet ne correspond donc pas, car il faut deux égalités.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>count = 0\nfor j in range(len(pattern)):\n    if numbers[i + j] == pattern[j]:\n        count += 1</code></pre></div>",
        "animation": {
          "mode": "compare",
          "values": [
            3,
            1,
            3,
            2
          ],
          "pattern": [
            3,
            1
          ],
          "starts": [
            2
          ]
        }
      },
      {
        "title": "Trouver les départs valides",
        "question": "<p>Une liste contient 5 valeurs et le motif en contient 3. Quels départs la boucle doit-elle tester ?</p>",
        "answer": "<p>Les départs <code>0</code>, <code>1</code> et <code>2</code>. La boucle est <code>range(5 - 3 + 1)</code>. Un départ à <code>3</code> ne laisse que deux valeurs pour un motif de trois.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>for i in range(len(numbers) - len(pattern) + 1):\n    # tester la fenêtre qui commence à i</code></pre></div>",
        "animation": {
          "mode": "bounds",
          "values": [
            8,
            2,
            5,
            1,
            9
          ],
          "pattern": [
            5,
            1,
            9
          ]
        }
      },
      {
        "title": "Réinitialiser le compteur",
        "question": "<p>Pourquoi écrire <code>count = 0</code> dans la boucle extérieure, avant la boucle intérieure ?</p>",
        "answer": "<p>Chaque départ <code>i</code> correspond à une nouvelle fenêtre. On remet donc le compteur à zéro avant de compter les égalités de cette fenêtre ; sinon, les résultats précédents s&#x27;ajouteraient au nouveau compte.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>for i in range(len(numbers) - len(pattern) + 1):\n    count = 0\n    for j in range(len(pattern)):\n        ...</code></pre></div>",
        "animation": {
          "mode": "scan",
          "values": [
            3,
            1,
            3,
            2
          ],
          "pattern": [
            3,
            1
          ],
          "starts": [
            0,
            1,
            2
          ]
        }
      },
      {
        "title": "Ne pas rater un chevauchement",
        "question": "<p>Où apparaît le motif <code>[1, 1, 1]</code> dans <code>numbers = [1, 1, 1, 1]</code> ? Pourquoi examiner le deuxième départ ?</p>",
        "answer": "<p>Aux départs <code>0</code> et <code>1</code>. Ces fenêtres se chevauchent sur deux valeurs ; avancer <code>i</code> d&#x27;une seule position après une correspondance permet de trouver les deux.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>for i in range(len(numbers) - len(pattern) + 1):\n    # tester chaque départ, même après une correspondance</code></pre></div>",
        "animation": {
          "mode": "overlap",
          "values": [
            1,
            1,
            1,
            1
          ],
          "pattern": [
            1,
            1,
            1
          ],
          "starts": [
            0,
            1
          ]
        }
      }
    ],
    "next": "../supports/03_algorithmique.html",
    "nextLabel": "Commencer le chapitre 03"
  },
  "algo03": {
    "title": "03 — Recherche et logique dans les listes",
    "subtitle": "15 exercices progressifs pour approfondir",
    "slides": [
      {
        "title": "Rechercher dans une liste",
        "html": "<p>Ce chapitre s&#x27;appuie sur les acquis du chapitre 02. Il les applique à des problèmes nouveaux : comparer des voisins, analyser des groupes de plusieurs valeurs et chercher des motifs dans une liste.</p>\n<p>Les premiers exercices installent les raisonnements spécifiques à ce chapitre. Les suivants combinent progressivement plusieurs comparaisons et deux boucles.</p>\n<p><strong>Prérequis :</strong> parcourir une liste, utiliser <code>if</code>, des indices, <code>range</code>, un compteur et <code>append</code>.</p>\n<p><strong>Contraintes :</strong> Python 3 ; boucles et listes uniquement ; sans fonction personnalisée, classe ni bibliothèque externe. Pour les recherches de motifs, utiliser des boucles, même quand une tranche pourrait remplacer la boucle intérieure.</p>",
        "kind": "Méthode",
        "group": "Avant de commencer"
      },
      {
        "title": "Chiffres, tranches et fenêtres",
        "html": "<h3>Comparer des voisins</h3>\n<p>Pour examiner un élément et celui qui le suit, <code>i</code> doit s&#x27;arrêter avant le dernier indice :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [4, 7, 2]\nfor i in range(len(values) - 1):\n    print(values[i], values[i + 1])</code></pre></div>\n<p>On compare les couples aux indices 0 et 1. Une liste de moins de deux valeurs ne donne aucun couple.</p>\n<h3>Examiner un groupe de trois</h3>\n<p>Pour accéder à <code>values[i]</code>, <code>values[i + 1]</code> et <code>values[i + 2]</code>, utiliser <code>range(len(values) - 2)</code>. Le dernier départ valide est <code>len(values) - 3</code>.</p>\n<h3>Chercher un motif dans des fenêtres</h3>\n<p>Une fenêtre est un groupe consécutif de valeurs. Si la liste contient <code>n</code> éléments et le motif <code>m</code> éléments, les départs valides sont parcourus avec <code>range(n - m + 1)</code>. Pour chaque départ, une deuxième boucle compare les valeurs correspondantes.</p>",
        "kind": "Repères",
        "group": "Avant de commencer"
      },
      {
        "title": "Comparer les voisins",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [3, 5, 5, 2]\nfor i in range(len(values) - 1):\n    if values[i] &lt; values[i + 1]:\n        print(i, &quot;rise&quot;)\n    elif values[i] == values[i + 1]:\n        print(i, &quot;equal&quot;)\n    else:\n        print(i, &quot;fall&quot;)</code></pre></div>\n<p>On décrit chaque couple selon l&#x27;ordre de ses deux valeurs.</p>",
        "kind": "Exemple 1",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Comparer les voisins",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [4, 2, 2, 7, 5]</code></pre></div>\n<p>Afficher l&#x27;indice de départ et l&#x27;étiquette <code>rise</code>, <code>equal</code> ou <code>fall</code> pour chaque couple de voisins.</p>\n<p><strong>Résultat attendu :</strong> <code>0 fall</code>, <code>1 equal</code>, <code>2 rise</code>, <code>3 fall</code>.</p>\n<p><strong>Pour avancer :</strong></p>\n<ol><li>Écrire la boucle jusqu&#x27;à <code>len(values) - 1</code> exclu.</li><li>Comparer <code>values[i]</code> à <code>values[i + 1]</code>.</li><li>Utiliser <code>if</code>, <code>elif</code> et <code>else</code> pour distinguer les trois cas.</li></ol>",
        "kind": "Exercice 1",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Trouver un couple précis",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [4, 8, 3, 8, 3]\nfor i in range(len(values) - 1):\n    if values[i] == 8 and values[i + 1] == 3:\n        print(i)</code></pre></div>\n<p>Les deux comparaisons doivent être vraies au même indice de départ.</p>",
        "kind": "Exemple 2",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Trouver un couple précis",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [2, 5, 7, 5, 7, 3, 5, 7]\nfirst = 5\nsecond = 7</code></pre></div>\n<p>Créer une liste des indices où <code>first</code> est immédiatement suivi de <code>second</code>.</p>\n<p><strong>Résultat attendu :</strong> <code>[1, 3, 6]</code>.</p>\n<p><strong>Pour avancer :</strong> créer une liste vide, tester les deux voisins avec <code>and</code>, puis ajouter <code>i</code> quand les deux valeurs conviennent.</p>",
        "kind": "Exercice 2",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Compter les doublons voisins",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [1, 1, 2, 3, 3]\ncount = 0\nfor i in range(len(values) - 1):\n    if values[i] == values[i + 1]:\n        count += 1\nprint(count)  # 2</code></pre></div>\n<p>Chaque couple égal compte une fois. Trois valeurs égales de suite forment donc deux couples.</p>",
        "kind": "Exemple 3",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Compter les doublons voisins",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [4, 4, 4, 2, 5, 5, 1, 1, 1]</code></pre></div>\n<p>Compter tous les couples de voisins égaux. Afficher également leurs indices de départ.</p>\n<p><strong>Résultat attendu :</strong> indices <code>[0, 1, 4, 6, 7]</code> et total <code>5</code>.</p>\n<p><strong>Pour avancer :</strong> garder une liste d&#x27;indices et un compteur ; mettre à jour les deux dans la même condition.</p>",
        "kind": "Exercice 3",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Reconnaître un triple croissant",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [3, 6, 9, 4]\nfor i in range(len(values) - 2):\n    if values[i] &lt; values[i + 1] &lt; values[i + 2]:\n        print(i)</code></pre></div>\n<p>Deux comparaisons strictes valident un groupe de trois. Une égalité ne constitue pas une hausse stricte.</p>",
        "kind": "Exemple 4",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Reconnaître un triple croissant",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [3, 5, 8, 2, 4, 6, 9, 1, 3]</code></pre></div>\n<p>Créer une liste de couples <code>[indice, [x, y, z]]</code> pour tous les triples strictement croissants.</p>\n<p><strong>Résultat attendu :</strong> <code>[[0, [3, 5, 8]], [3, [2, 4, 6]], [4, [4, 6, 9]]]</code>.</p>\n<p><strong>Pour avancer :</strong> calculer les trois valeurs à partir de <code>i</code> ; tester les deux relations ; ajouter l&#x27;indice et les trois valeurs ensemble.</p>",
        "kind": "Exercice 4",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Repérer le plus grand au milieu",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [2, 7, 4]\nif values[0] &lt; values[1] and values[1] &gt; values[2]:\n    print(&quot;middle peak&quot;)</code></pre></div>\n<p>La valeur centrale est ici supérieure à ses deux voisins.</p>",
        "kind": "Exemple 5",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Repérer le plus grand au milieu",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [2, 7, 4, 3, 8, 5, 1]</code></pre></div>\n<p>Parcourir les triples voisins et enregistrer <code>[indice, valeur centrale]</code> lorsque la valeur centrale est strictement supérieure aux deux autres.</p>\n<p><strong>Résultat attendu :</strong> <code>[[0, 7], [3, 8]]</code>.</p>\n<p><strong>Pour avancer :</strong> un triple valide commence avant les deux derniers indices ; tester séparément que le milieu est supérieur à gauche et à droite.</p>\n<h3>Partie 2 — Chercher des motifs</h3>",
        "kind": "Exercice 5",
        "group": "01 · Couples et triples voisins"
      },
      {
        "title": "Repérer un motif de deux valeurs",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [2, 4, 2, 5]\npattern = [2, 4]\nfor i in range(len(values) - len(pattern) + 1):\n    if values[i] == pattern[0] and values[i + 1] == pattern[1]:\n        print(i)</code></pre></div>\n<p>On teste seulement les départs qui laissent assez de place au motif.</p>",
        "kind": "Exemple 6",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Repérer un motif de deux valeurs",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [3, 1, 3, 1, 3, 2]\npattern = [3, 1]</code></pre></div>\n<p>Construire la liste des indices où apparaît le motif complet.</p>\n<p><strong>Résultat attendu :</strong> <code>[0, 2]</code>.</p>\n<p><strong>Pour avancer :</strong> créer la liste de résultats ; le dernier départ possible vaut <code>len(values) - len(pattern)</code> ; ajouter chaque départ correspondant.</p>",
        "kind": "Exercice 6",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Vérifier une correspondance complète",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [3, 1, 3, 2]\npattern = [3, 1]\nstart = 0\nmatching_positions = 0\nfor j in range(len(pattern)):\n    if values[start + j] == pattern[j]:\n        matching_positions += 1\n\nfound = 0\nif matching_positions == len(pattern):\n    found = 1\nprint(found)  # 1 : les deux positions correspondent</code></pre></div>\n<p>On compte les positions égales. Le motif complet est trouvé seulement si toutes ses positions correspondent à la fenêtre.</p>",
        "kind": "Exemple 7",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Vérifier une correspondance complète",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [3, 1, 3, 2]\npattern = [3, 1]\nstart = 2</code></pre></div>\n<p>Vérifier si toute la fenêtre qui commence à <code>start</code> correspond au motif. Utiliser un compteur de positions égales et afficher <code>1</code> si tout le motif correspond, sinon <code>0</code>.</p>\n<p><strong>Résultat attendu :</strong> <code>0</code>. Une position correspond, mais pas les deux.</p>\n<p><strong>Pour avancer :</strong> pour chaque <code>j</code>, comparer <code>values[start + j]</code> à <code>pattern[j]</code> ; après la boucle, vérifier si le compteur est égal à <code>len(pattern)</code>.</p>",
        "kind": "Exercice 7",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Compter les correspondances dans chaque fenêtre",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [2, 4, 2, 5]\npattern = [2, 4]\nfor i in range(len(values) - len(pattern) + 1):\n    matches = 0\n    for j in range(len(pattern)):\n        if values[i + j] == pattern[j]:\n            matches += 1\n    print(i, matches)</code></pre></div>\n<p>La boucle extérieure choisit chaque fenêtre valide ; la boucle intérieure compte ses positions correspondantes. On affiche le score sans encore décider si le motif est complet.</p>",
        "kind": "Exemple 8",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Compter les correspondances dans chaque fenêtre",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [3, 1, 3, 2, 3, 1]\npattern = [3, 1]</code></pre></div>\n<p>Afficher pour chaque départ valide l&#x27;indice et le nombre de positions correspondantes.</p>\n<p><strong>Résultat attendu :</strong> <code>0 2</code>, <code>1 0</code>, <code>2 1</code>, <code>3 0</code>, <code>4 2</code>.</p>\n<p><strong>Pour avancer :</strong> remettre <code>matches</code> à zéro au début de chaque fenêtre ; après la boucle de <code>j</code>, afficher <code>i</code> et <code>matches</code>.</p>",
        "kind": "Exercice 8",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Arrêter une comparaison avec break",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>window = [3, 1, 4]\npattern = [3, 2, 4]\nmatches = True\nfor j in range(len(pattern)):\n    if window[j] != pattern[j]:\n        matches = False\n        break\nprint(matches)  # False</code></pre></div>\n<p>Dès que la deuxième position diffère, la comparaison s&#x27;arrête : les positions suivantes ne peuvent pas rendre la fenêtre identique au motif.</p>",
        "kind": "Exemple 9",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Arrêter une comparaison avec break",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>window = [5, 2, 8, 4]\npattern = [5, 2, 3, 4]</code></pre></div>\n<p>Comparer la fenêtre au motif avec une boucle. Mettre <code>matches</code> à <code>False</code> et utiliser <code>break</code> dès qu&#x27;une différence est trouvée. Afficher le booléen obtenu.</p>\n<p><strong>Résultat attendu :</strong> <code>False</code>.</p>\n<p><strong>Pour avancer :</strong> partir de <code>matches = True</code> ; si deux valeurs diffèrent, modifier le booléen et interrompre la boucle.</p>",
        "kind": "Exercice 9",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Comparer un motif de trois valeurs",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [9, 2, 3, 8]\npattern = [2, 3]\nfor i in range(len(values) - len(pattern) + 1):\n    matches = True\n    for j in range(len(pattern)):\n        if values[i + j] != pattern[j]:\n            matches = False\n    if matches:\n        print(i)</code></pre></div>\n<p><code>i</code> choisit une fenêtre ; <code>j</code> compare les positions à l&#x27;intérieur du motif.</p>",
        "kind": "Exemple 10",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Comparer un motif de trois valeurs",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3]\npattern = [1, 2, 3]</code></pre></div>\n<p>Trouver tous les départs où le motif apparaît. Utiliser deux boucles et un booléen ; ne pas utiliser de tranche.</p>\n<p><strong>Résultat attendu :</strong> <code>[0, 3, 7]</code>.</p>\n<p><strong>Pour avancer :</strong> pour chaque <code>i</code>, initialiser <code>matches = True</code> ; comparer <code>values[i + j]</code> avec <code>pattern[j]</code> ; mémoriser le départ si toutes les positions correspondent.</p>",
        "kind": "Exercice 10",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Ne pas manquer les chevauchements",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [1, 1, 1]\npattern = [1, 1]\nfor i in range(len(values) - len(pattern) + 1):\n    if values[i] == pattern[0] and values[i + 1] == pattern[1]:\n        print(i)</code></pre></div>\n<p>Les départs 0 et 1 sont tous les deux testés : les motifs partagent une valeur.</p>",
        "kind": "Exemple 11",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Ne pas manquer les chevauchements",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [2, 4, 2, 4, 2, 5, 2, 4, 2, 4]\npattern = [2, 4, 2]</code></pre></div>\n<p>Trouver tous les départs du motif avec deux boucles. Accepter les chevauchements.</p>\n<p><strong>Résultat attendu :</strong> <code>[0, 2, 6]</code>.</p>\n<p><strong>Pour avancer :</strong> avancer <code>i</code> d&#x27;une seule position après chaque essai, même après une correspondance ; la boucle de <code>j</code> vérifie les trois valeurs.</p>",
        "kind": "Exercice 11",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Compter les différences dans une fenêtre",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>window = [1, 2, 4]\npattern = [1, 2, 3]\ndifferences = 0\nfor j in range(len(pattern)):\n    if window[j] != pattern[j]:\n        differences += 1\nprint(differences)  # 1</code></pre></div>\n<p>Cette étape compare une seule fenêtre à un motif et compte les positions différentes.</p>",
        "kind": "Exemple 12",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Compter les différences dans une fenêtre",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>window = [3, 5, 8, 9]\npattern = [3, 6, 8, 9]</code></pre></div>\n<p>Compter le nombre de différences entre cette fenêtre et le motif.</p>\n<p><strong>Résultat attendu :</strong> <code>1</code>.</p>\n<p><strong>Pour avancer :</strong> les longueurs sont égales ; comparer les valeurs aux mêmes indices et incrémenter le compteur pour chaque inégalité.</p>",
        "kind": "Exercice 12",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Tester chaque fenêtre avec une erreur permise",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [1, 2, 3, 1, 2, 4]\npattern = [1, 2, 3]\nfor i in range(len(values) - len(pattern) + 1):\n    differences = 0\n    for j in range(len(pattern)):\n        if values[i + j] != pattern[j]:\n            differences += 1\n    if differences &lt;= 1:\n        print(i, differences)</code></pre></div>\n<p>Le compteur est remis à zéro pour chaque nouvelle fenêtre. On accepte zéro ou une différence.</p>",
        "kind": "Exemple 13",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Tester chaque fenêtre avec une erreur permise",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [1, 2, 3, 1, 2, 4, 1, 5, 3, 1, 2, 3]\npattern = [1, 2, 3]</code></pre></div>\n<p>Enregistrer <code>[indice, differences]</code> pour chaque fenêtre qui contient au plus une différence.</p>\n<p><strong>Résultat attendu :</strong> <code>[[0, 0], [3, 1], [6, 1], [9, 0]]</code>.</p>\n<p><strong>Pour avancer :</strong> parcourir les départs possibles ; pour chacun, compter ses différences dans une boucle intérieure ; enregistrer seulement après la comparaison complète.</p>\n<h3>Partie 3 — Analyser les changements de signe</h3>",
        "kind": "Exercice 13",
        "group": "02 · Motifs et fenêtres"
      },
      {
        "title": "Distinguer les deux sens du changement",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>measurements = [-2, 3, -1]\nfor i in range(len(measurements) - 1):\n    if measurements[i] &lt; 0 and measurements[i + 1] &gt; 0:\n        print(&quot;negative to positive&quot;, i)</code></pre></div>\n<p>Cet exemple reconnaît un seul sens. Pour analyser toutes les inversions, il faut tester les deux ordres.</p>",
        "kind": "Exemple 14",
        "group": "03 · Changements de signe"
      },
      {
        "title": "Distinguer les deux sens du changement",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>measurements = [-3, 2, 4, -1, 0, 5, -2, -1, 3]</code></pre></div>\n<p>Enregistrer les indices où deux voisins sont de signes opposés stricts, dans les deux sens. Ignorer les couples contenant zéro. Afficher les indices et leur nombre.</p>\n<p><strong>Résultat attendu :</strong> <code>[0, 2, 5, 7]</code> et <code>4</code> changements.</p>\n<p><strong>Pour avancer :</strong> un sens est négatif puis positif ; l&#x27;autre est positif puis négatif. Combiner ces cas avec <code>or</code> ; zéro ne satisfait aucun des tests stricts.</p>",
        "kind": "Exercice 14",
        "group": "03 · Changements de signe"
      },
      {
        "title": "Faire le bilan des voisins",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>measurements = [2, 5, 1]\nrises = 0\nfalls = 0\nfor i in range(len(measurements) - 1):\n    if measurements[i] &lt; measurements[i + 1]:\n        rises += 1\n    elif measurements[i] &gt; measurements[i + 1]:\n        falls += 1\nprint(rises, falls)  # 1 1</code></pre></div>\n<p>Chaque couple contribue à une seule catégorie ; une égalité ne compte ni comme hausse ni comme baisse.</p>",
        "kind": "Exemple 15",
        "group": "03 · Changements de signe"
      },
      {
        "title": "Faire le bilan des voisins",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>measurements = [3, 3, -2, 4, 0, -1, -1, 5]</code></pre></div>\n<p>Compter les hausses, les baisses, les égalités et les changements de signe stricts. Afficher les quatre totaux dans cet ordre.</p>\n<p><strong>Résultat attendu :</strong> <code>2 3 2 3</code>.</p>\n<p><strong>Pour avancer :</strong> parcourir les couples une seule fois ; classer chaque relation ; compter un changement de signe uniquement si les deux valeurs sont strictement de signes contraires.</p>",
        "kind": "Exercice 15",
        "group": "03 · Changements de signe"
      }
    ],
    "next": "../revision/04_flashcards.html",
    "nextLabel": "Réviser avec les flashcards",
    "source": "# TP Python — Recherche et logique dans les listes\n\n**Bachelor 1 · Approfondissement progressif · 15 exercices**\n\n## Méthode\n\nCe chapitre s'appuie sur les acquis du chapitre 02. Il les applique à des problèmes nouveaux : comparer des voisins, analyser des groupes de plusieurs valeurs et chercher des motifs dans une liste.\n\nLes premiers exercices installent les raisonnements spécifiques à ce chapitre. Les suivants combinent progressivement plusieurs comparaisons et deux boucles.\n\n**Prérequis :** parcourir une liste, utiliser `if`, des indices, `range`, un compteur et `append`.\n\n**Contraintes :** Python 3 ; boucles et listes uniquement ; sans fonction personnalisée, classe ni bibliothèque externe. Pour les recherches de motifs, utiliser des boucles, même quand une tranche pourrait remplacer la boucle intérieure.\n\n## Repères avant de commencer\n\n### Comparer des voisins\n\nPour examiner un élément et celui qui le suit, `i` doit s'arrêter avant le dernier indice :\n\n```python\nvalues = [4, 7, 2]\nfor i in range(len(values) - 1):\n    print(values[i], values[i + 1])\n```\n\nOn compare les couples aux indices 0 et 1. Une liste de moins de deux valeurs ne donne aucun couple.\n\n### Examiner un groupe de trois\n\nPour accéder à `values[i]`, `values[i + 1]` et `values[i + 2]`, utiliser `range(len(values) - 2)`. Le dernier départ valide est `len(values) - 3`.\n\n### Chercher un motif dans des fenêtres\n\nUne fenêtre est un groupe consécutif de valeurs. Si la liste contient `n` éléments et le motif `m` éléments, les départs valides sont parcourus avec `range(n - m + 1)`. Pour chaque départ, une deuxième boucle compare les valeurs correspondantes.\n\n---\n\n## Partie 1 — Couples et triples voisins\n\n## Exercice 01 — Comparer les voisins\n\n### Exemple expliqué\n\n```python\nvalues = [3, 5, 5, 2]\nfor i in range(len(values) - 1):\n    if values[i] < values[i + 1]:\n        print(i, \"rise\")\n    elif values[i] == values[i + 1]:\n        print(i, \"equal\")\n    else:\n        print(i, \"fall\")\n```\n\nOn décrit chaque couple selon l'ordre de ses deux valeurs.\n\n### Énoncé\n\n```python\nvalues = [4, 2, 2, 7, 5]\n```\n\nAfficher l'indice de départ et l'étiquette `rise`, `equal` ou `fall` pour chaque couple de voisins.\n\n**Résultat attendu :** `0 fall`, `1 equal`, `2 rise`, `3 fall`.\n\n**Pour avancer :**\n\n1. Écrire la boucle jusqu'à `len(values) - 1` exclu.\n2. Comparer `values[i]` à `values[i + 1]`.\n3. Utiliser `if`, `elif` et `else` pour distinguer les trois cas.\n\n## Exercice 02 — Trouver un couple précis\n\n### Exemple expliqué\n\n```python\nvalues = [4, 8, 3, 8, 3]\nfor i in range(len(values) - 1):\n    if values[i] == 8 and values[i + 1] == 3:\n        print(i)\n```\n\nLes deux comparaisons doivent être vraies au même indice de départ.\n\n### Énoncé\n\n```python\nvalues = [2, 5, 7, 5, 7, 3, 5, 7]\nfirst = 5\nsecond = 7\n```\n\nCréer une liste des indices où `first` est immédiatement suivi de `second`.\n\n**Résultat attendu :** `[1, 3, 6]`.\n\n**Pour avancer :** créer une liste vide, tester les deux voisins avec `and`, puis ajouter `i` quand les deux valeurs conviennent.\n\n## Exercice 03 — Compter les doublons voisins\n\n### Exemple expliqué\n\n```python\nvalues = [1, 1, 2, 3, 3]\ncount = 0\nfor i in range(len(values) - 1):\n    if values[i] == values[i + 1]:\n        count += 1\nprint(count)  # 2\n```\n\nChaque couple égal compte une fois. Trois valeurs égales de suite forment donc deux couples.\n\n### Énoncé\n\n```python\nvalues = [4, 4, 4, 2, 5, 5, 1, 1, 1]\n```\n\nCompter tous les couples de voisins égaux. Afficher également leurs indices de départ.\n\n**Résultat attendu :** indices `[0, 1, 4, 6, 7]` et total `5`.\n\n**Pour avancer :** garder une liste d'indices et un compteur ; mettre à jour les deux dans la même condition.\n\n## Exercice 04 — Reconnaître un triple croissant\n\n### Exemple expliqué\n\n```python\nvalues = [3, 6, 9, 4]\nfor i in range(len(values) - 2):\n    if values[i] < values[i + 1] < values[i + 2]:\n        print(i)\n```\n\nDeux comparaisons strictes valident un groupe de trois. Une égalité ne constitue pas une hausse stricte.\n\n### Énoncé\n\n```python\nvalues = [3, 5, 8, 2, 4, 6, 9, 1, 3]\n```\n\nCréer une liste de couples `[indice, [x, y, z]]` pour tous les triples strictement croissants.\n\n**Résultat attendu :** `[[0, [3, 5, 8]], [3, [2, 4, 6]], [4, [4, 6, 9]]]`.\n\n**Pour avancer :** calculer les trois valeurs à partir de `i` ; tester les deux relations ; ajouter l'indice et les trois valeurs ensemble.\n\n## Exercice 05 — Repérer le plus grand au milieu\n\n### Exemple expliqué\n\n```python\nvalues = [2, 7, 4]\nif values[0] < values[1] and values[1] > values[2]:\n    print(\"middle peak\")\n```\n\nLa valeur centrale est ici supérieure à ses deux voisins.\n\n### Énoncé\n\n```python\nvalues = [2, 7, 4, 3, 8, 5, 1]\n```\n\nParcourir les triples voisins et enregistrer `[indice, valeur centrale]` lorsque la valeur centrale est strictement supérieure aux deux autres.\n\n**Résultat attendu :** `[[0, 7], [3, 8]]`.\n\n**Pour avancer :** un triple valide commence avant les deux derniers indices ; tester séparément que le milieu est supérieur à gauche et à droite.\n\n---\n\n## Partie 2 — Chercher des motifs\n\n## Exercice 06 — Repérer un motif de deux valeurs\n\n### Exemple expliqué\n\n```python\nvalues = [2, 4, 2, 5]\npattern = [2, 4]\nfor i in range(len(values) - len(pattern) + 1):\n    if values[i] == pattern[0] and values[i + 1] == pattern[1]:\n        print(i)\n```\n\nOn teste seulement les départs qui laissent assez de place au motif.\n\n### Énoncé\n\n```python\nvalues = [3, 1, 3, 1, 3, 2]\npattern = [3, 1]\n```\n\nConstruire la liste des indices où apparaît le motif complet.\n\n**Résultat attendu :** `[0, 2]`.\n\n**Pour avancer :** créer la liste de résultats ; le dernier départ possible vaut `len(values) - len(pattern)` ; ajouter chaque départ correspondant.\n\n## Exercice 07 — Vérifier une correspondance complète\n\n### Exemple expliqué\n\n```python\nvalues = [3, 1, 3, 2]\npattern = [3, 1]\nstart = 0\nmatching_positions = 0\nfor j in range(len(pattern)):\n    if values[start + j] == pattern[j]:\n        matching_positions += 1\n\nfound = 0\nif matching_positions == len(pattern):\n    found = 1\nprint(found)  # 1 : les deux positions correspondent\n```\n\nOn compte les positions égales. Le motif complet est trouvé seulement si toutes ses positions correspondent à la fenêtre.\n\n### Énoncé\n\n```python\nvalues = [3, 1, 3, 2]\npattern = [3, 1]\nstart = 2\n```\n\nVérifier si toute la fenêtre qui commence à `start` correspond au motif. Utiliser un compteur de positions égales et afficher `1` si tout le motif correspond, sinon `0`.\n\n**Résultat attendu :** `0`. Une position correspond, mais pas les deux.\n\n**Pour avancer :** pour chaque `j`, comparer `values[start + j]` à `pattern[j]` ; après la boucle, vérifier si le compteur est égal à `len(pattern)`.\n\n## Exercice 08 — Compter les correspondances dans chaque fenêtre\n\n### Exemple expliqué\n\n```python\nvalues = [2, 4, 2, 5]\npattern = [2, 4]\nfor i in range(len(values) - len(pattern) + 1):\n    matches = 0\n    for j in range(len(pattern)):\n        if values[i + j] == pattern[j]:\n            matches += 1\n    print(i, matches)\n```\n\nLa boucle extérieure choisit chaque fenêtre valide ; la boucle intérieure compte ses positions correspondantes. On affiche le score sans encore décider si le motif est complet.\n\n### Énoncé\n\n```python\nvalues = [3, 1, 3, 2, 3, 1]\npattern = [3, 1]\n```\n\nAfficher pour chaque départ valide l'indice et le nombre de positions correspondantes.\n\n**Résultat attendu :** `0 2`, `1 0`, `2 1`, `3 0`, `4 2`.\n\n**Pour avancer :** remettre `matches` à zéro au début de chaque fenêtre ; après la boucle de `j`, afficher `i` et `matches`.\n\n## Exercice 09 — Arrêter une comparaison avec break\n\n### Exemple expliqué\n\n```python\nwindow = [3, 1, 4]\npattern = [3, 2, 4]\nmatches = True\nfor j in range(len(pattern)):\n    if window[j] != pattern[j]:\n        matches = False\n        break\nprint(matches)  # False\n```\n\nDès que la deuxième position diffère, la comparaison s'arrête : les positions suivantes ne peuvent pas rendre la fenêtre identique au motif.\n\n### Énoncé\n\n```python\nwindow = [5, 2, 8, 4]\npattern = [5, 2, 3, 4]\n```\n\nComparer la fenêtre au motif avec une boucle. Mettre `matches` à `False` et utiliser `break` dès qu'une différence est trouvée. Afficher le booléen obtenu.\n\n**Résultat attendu :** `False`.\n\n**Pour avancer :** partir de `matches = True` ; si deux valeurs diffèrent, modifier le booléen et interrompre la boucle.\n\n## Exercice 10 — Comparer un motif de trois valeurs\n\n### Exemple expliqué\n\n```python\nvalues = [9, 2, 3, 8]\npattern = [2, 3]\nfor i in range(len(values) - len(pattern) + 1):\n    matches = True\n    for j in range(len(pattern)):\n        if values[i + j] != pattern[j]:\n            matches = False\n    if matches:\n        print(i)\n```\n\n`i` choisit une fenêtre ; `j` compare les positions à l'intérieur du motif.\n\n### Énoncé\n\n```python\nvalues = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3]\npattern = [1, 2, 3]\n```\n\nTrouver tous les départs où le motif apparaît. Utiliser deux boucles et un booléen ; ne pas utiliser de tranche.\n\n**Résultat attendu :** `[0, 3, 7]`.\n\n**Pour avancer :** pour chaque `i`, initialiser `matches = True` ; comparer `values[i + j]` avec `pattern[j]` ; mémoriser le départ si toutes les positions correspondent.\n\n## Exercice 11 — Ne pas manquer les chevauchements\n\n### Exemple expliqué\n\n```python\nvalues = [1, 1, 1]\npattern = [1, 1]\nfor i in range(len(values) - len(pattern) + 1):\n    if values[i] == pattern[0] and values[i + 1] == pattern[1]:\n        print(i)\n```\n\nLes départs 0 et 1 sont tous les deux testés : les motifs partagent une valeur.\n\n### Énoncé\n\n```python\nvalues = [2, 4, 2, 4, 2, 5, 2, 4, 2, 4]\npattern = [2, 4, 2]\n```\n\nTrouver tous les départs du motif avec deux boucles. Accepter les chevauchements.\n\n**Résultat attendu :** `[0, 2, 6]`.\n\n**Pour avancer :** avancer `i` d'une seule position après chaque essai, même après une correspondance ; la boucle de `j` vérifie les trois valeurs.\n\n## Exercice 12 — Compter les différences dans une fenêtre\n\n### Exemple expliqué\n\n```python\nwindow = [1, 2, 4]\npattern = [1, 2, 3]\ndifferences = 0\nfor j in range(len(pattern)):\n    if window[j] != pattern[j]:\n        differences += 1\nprint(differences)  # 1\n```\n\nCette étape compare une seule fenêtre à un motif et compte les positions différentes.\n\n### Énoncé\n\n```python\nwindow = [3, 5, 8, 9]\npattern = [3, 6, 8, 9]\n```\n\nCompter le nombre de différences entre cette fenêtre et le motif.\n\n**Résultat attendu :** `1`.\n\n**Pour avancer :** les longueurs sont égales ; comparer les valeurs aux mêmes indices et incrémenter le compteur pour chaque inégalité.\n\n## Exercice 13 — Tester chaque fenêtre avec une erreur permise\n\n### Exemple expliqué\n\n```python\nvalues = [1, 2, 3, 1, 2, 4]\npattern = [1, 2, 3]\nfor i in range(len(values) - len(pattern) + 1):\n    differences = 0\n    for j in range(len(pattern)):\n        if values[i + j] != pattern[j]:\n            differences += 1\n    if differences <= 1:\n        print(i, differences)\n```\n\nLe compteur est remis à zéro pour chaque nouvelle fenêtre. On accepte zéro ou une différence.\n\n### Énoncé\n\n```python\nvalues = [1, 2, 3, 1, 2, 4, 1, 5, 3, 1, 2, 3]\npattern = [1, 2, 3]\n```\n\nEnregistrer `[indice, differences]` pour chaque fenêtre qui contient au plus une différence.\n\n**Résultat attendu :** `[[0, 0], [3, 1], [6, 1], [9, 0]]`.\n\n**Pour avancer :** parcourir les départs possibles ; pour chacun, compter ses différences dans une boucle intérieure ; enregistrer seulement après la comparaison complète.\n\n---\n\n## Partie 3 — Analyser les changements de signe\n\n## Exercice 14 — Distinguer les deux sens du changement\n\n### Exemple expliqué\n\n```python\nmeasurements = [-2, 3, -1]\nfor i in range(len(measurements) - 1):\n    if measurements[i] < 0 and measurements[i + 1] > 0:\n        print(\"negative to positive\", i)\n```\n\nCet exemple reconnaît un seul sens. Pour analyser toutes les inversions, il faut tester les deux ordres.\n\n### Énoncé\n\n```python\nmeasurements = [-3, 2, 4, -1, 0, 5, -2, -1, 3]\n```\n\nEnregistrer les indices où deux voisins sont de signes opposés stricts, dans les deux sens. Ignorer les couples contenant zéro. Afficher les indices et leur nombre.\n\n**Résultat attendu :** `[0, 2, 5, 7]` et `4` changements.\n\n**Pour avancer :** un sens est négatif puis positif ; l'autre est positif puis négatif. Combiner ces cas avec `or` ; zéro ne satisfait aucun des tests stricts.\n\n## Exercice 15 — Faire le bilan des voisins\n\n### Exemple expliqué\n\n```python\nmeasurements = [2, 5, 1]\nrises = 0\nfalls = 0\nfor i in range(len(measurements) - 1):\n    if measurements[i] < measurements[i + 1]:\n        rises += 1\n    elif measurements[i] > measurements[i + 1]:\n        falls += 1\nprint(rises, falls)  # 1 1\n```\n\nChaque couple contribue à une seule catégorie ; une égalité ne compte ni comme hausse ni comme baisse.\n\n### Énoncé\n\n```python\nmeasurements = [3, 3, -2, 4, 0, -1, -1, 5]\n```\n\nCompter les hausses, les baisses, les égalités et les changements de signe stricts. Afficher les quatre totaux dans cet ordre.\n\n**Résultat attendu :** `2 3 2 3`.\n\n**Pour avancer :** parcourir les couples une seule fois ; classer chaque relation ; compter un changement de signe uniquement si les deux valeurs sont strictement de signes contraires.\n\n",
    "sourceName": "03_algorithmique.md"
  },
  "flashcards": {
    "title": "10 flashcards pour réviser le chapitre 03",
    "subtitle": "Voisins, motifs et fenêtres",
    "cards": [
      {
        "title": "Couples voisins",
        "question": "<p>Pour comparer <code>values[i]</code> et <code>values[i + 1]</code>, pourquoi la boucle utilise-t-elle <code>range(len(values) - 1)</code> ?</p>",
        "answer": "<p>Le dernier départ valide est <code>len(values) - 2</code>, dont le voisin est au dernier indice. La borne finale de <code>range</code> est exclue. Avec moins de deux éléments, aucun couple n&#x27;est comparé.</p>"
      },
      {
        "title": "Indice de départ",
        "question": "<p>Dans <code>values = [4, 8, 3]</code>, à quel indice commence le couple <code>[8, 3]</code> ?</p>",
        "answer": "<p>À l&#x27;indice <code>1</code>. On mémorise l&#x27;indice de la première valeur du couple, pas sa valeur ni l&#x27;indice de la deuxième.</p>"
      },
      {
        "title": "Compter les triples croissants",
        "question": "<p>Quel parcours permet de lire trois voisins avec les indices <code>i</code>, <code>i + 1</code> et <code>i + 2</code> ?</p>",
        "answer": "<p><code>range(len(values) - 2)</code>. Pour un triple strictement croissant, vérifier <code>values[i] &lt; values[i + 1] &lt; values[i + 2]</code> ; une égalité ne convient pas.</p>"
      },
      {
        "title": "Chevauchement de doublons",
        "question": "<p>Combien de couples égaux y a-t-il dans <code>[5, 5, 5]</code> ?</p>",
        "answer": "<p>Deux, aux indices de départ 0 et 1. La valeur du milieu appartient aux deux couples ; les motifs consécutifs peuvent donc se chevaucher.</p>"
      },
      {
        "title": "Départs possibles d'un motif",
        "question": "<p>Combien de positions de départ faut-il examiner pour un motif de 3 valeurs dans une liste de 6 valeurs ?</p>",
        "answer": "<p>Quatre départs : 0, 1, 2 et 3. La boucle utilise <code>range(6 - 3 + 1)</code>. Si le motif est plus long que la liste, aucun départ n&#x27;est possible.</p>"
      },
      {
        "title": "Rôle des deux indices",
        "question": "<p>Dans une recherche de motif, que représentent les indices <code>i</code> et <code>j</code> dans <code>values[i + j] == pattern[j]</code> ?</p>",
        "answer": "<p><code>i</code> est le départ de la fenêtre dans la liste ; <code>j</code> est la position examinée à l&#x27;intérieur du motif. On utilise une boucle extérieure pour les départs et une boucle intérieure pour comparer les valeurs.</p>"
      },
      {
        "title": "Garder le chevauchement",
        "question": "<p>Où apparaît <code>[1, 1]</code> dans <code>[1, 1, 1]</code> ?</p>",
        "answer": "<p>Aux départs 0 et 1. Après chaque essai, avancer le départ d&#x27;une seule position permet de ne pas manquer l&#x27;occurrence chevauchante.</p>"
      },
      {
        "title": "Réinitialiser les différences",
        "question": "<p>Quand remettre <code>differences</code> à zéro lorsqu&#x27;on compare plusieurs fenêtres à un motif ?</p>",
        "answer": "<p>Au début de chaque nouvelle fenêtre, avant la boucle intérieure. Ainsi, chaque fenêtre a son propre compte ; retenir celles qui vérifient <code>differences &lt;= 1</code> accepte zéro ou une différence.</p>"
      },
      {
        "title": "Reconnaître un changement strict",
        "question": "<p>Le couple <code>[0, -4]</code> constitue-t-il un changement de signe strict ? Pourquoi ?</p>",
        "answer": "<p>Non. Zéro n&#x27;est ni positif ni négatif. Un changement strict exige un nombre négatif et un nombre positif, dans l&#x27;un ou l&#x27;autre ordre.</p>"
      },
      {
        "title": "Classer des voisins",
        "question": "<p>Comment distinguer une hausse, une baisse et une égalité pour deux valeurs voisines ?</p>",
        "answer": "<p>Comparer dans cet ordre : <code>&lt;</code> indique une hausse, <code>==</code> une égalité, et le dernier cas est une baisse. Avec <code>if</code> / <code>elif</code> / <code>else</code>, chaque couple est classé dans une seule catégorie.</p>"
      }
    ],
    "next": "../supports/03_algorithmique.html",
    "nextLabel": "Revoir le chapitre 03",
    "followup": "../supports/05_introduction_tri.html",
    "followupLabel": "Explorer le tri"
  },
  "sorting": {
    "title": "05 — Introduction au tri en Python",
    "subtitle": "Bachelor 1 · Débutant · 2 à 3 heures",
    "slides": [
      {
        "title": "Observer — Le tri par sélection",
        "html": "<p><strong>À votre avis, comment ça marche ?</strong> Observez les valeurs comparées et celle qui est retenue comme minimum.</p>\n<p>Cette méthode cherche la plus petite valeur dans la partie restante, puis la place au début de cette partie. Les positions définitives se construisent à gauche.</p>\n<p>La sélection et l&#x27;insertion sont présentées seulement pour découvrir d&#x27;autres façons de trier. <strong>Dans ce cours, nous programmerons uniquement le tri à bulles, choisi comme point de départ simple : comparer et échanger des voisins.</strong></p>",
        "kind": "Découverte",
        "group": "01 · Observer et échanger",
        "demo": {
          "kind": "selection",
          "values": [
            5,
            2,
            4,
            1,
            3
          ]
        }
      },
      {
        "title": "Observer — Le tri par insertion",
        "html": "<p>Une partie de la liste est déjà triée. On prend la valeur suivante et on l&#x27;insère à sa place, comme une carte dans une main de cartes rangées.</p>\n<p>Dans cette animation, la valeur choisie recule vers la gauche et les valeurs plus grandes se décalent vers la droite.</p>\n<p><strong>Attention :</strong> la partie déjà triée peut encore bouger lors des insertions suivantes. Elle n&#x27;est pas nécessairement à sa position définitive.</p>\n<p><strong>À discuter :</strong> que fait cette méthode différemment de la sélection ? Nous ne détaillerons pas son code : la suite du cours porte uniquement sur le tri à bulles.</p>",
        "kind": "Notion",
        "group": "01 · Observer et échanger",
        "demo": {
          "kind": "insertion",
          "values": [
            5,
            2,
            4,
            1,
            3
          ]
        }
      },
      {
        "title": "À votre avis, comment ça marche ?",
        "html": "<p>Observez l&#x27;animation avant de regarder le code.</p>\n<ul><li>Quelles valeurs se déplacent ensemble ?</li><li>Dans quelle direction les grandes valeurs avancent-elles ?</li><li>Est-ce que toute la liste est rangée après un seul parcours ?</li></ul>\n<p>Formulez une hypothèse, puis relancez l&#x27;animation pour la vérifier.</p>",
        "kind": "Notion",
        "group": "01 · Observer et échanger",
        "demo": {
          "kind": "discovery",
          "values": [
            7,
            3,
            8,
            2,
            6,
            1,
            5,
            4
          ]
        }
      },
      {
        "title": "Le programme de cette séance",
        "html": "<p><strong>Niveau :</strong> débutant · <strong>Durée :</strong> 2 à 3 heures.</p>\n<p><strong>Objectif :</strong> comprendre comment ranger des valeurs dans une liste, puis construire progressivement un tri à bulles.</p>\n<p>Les animations de sélection et d&#x27;insertion donnent un aperçu. <strong>Le seul algorithme de tri à programmer dans cette séance est le tri à bulles.</strong></p>\n<p><strong>Prérequis :</strong> variables, listes, indices, conditions <code>if</code> et boucles <code>for</code>.</p>\n<p>Commencez par prédire les résultats sur papier, puis exécutez les exemples. Pour les exercices, utilisez les opérations de base, sans <code>sort()</code> ni <code>sorted()</code>.</p>",
        "kind": "Notion",
        "group": "01 · Observer et échanger"
      },
      {
        "title": "Qu'est-ce que trier une liste ?",
        "html": "<p>Trier consiste à ranger des valeurs selon un ordre déterminé, sans en perdre ni en ajouter.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [5, 2, 8, 1, 4]</code></pre></div>\n<p>En ordre croissant, on veut obtenir :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>[1, 2, 4, 5, 8]</code></pre></div>\n<p>Python propose déjà <code>sort()</code> et <code>sorted()</code>. Nous allons réaliser les opérations nous-mêmes pour comprendre le fonctionnement d&#x27;un algorithme de tri.</p>",
        "kind": "Notion",
        "group": "01 · Observer et échanger"
      },
      {
        "title": "Exemple — Comparer deux nombres",
        "html": "<p>Pour un ordre croissant, la plus petite valeur doit être placée avant la plus grande.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>a = 8\nb = 3\nif a &gt; b:\n    print(&quot;Les nombres sont dans le mauvais ordre&quot;)</code></pre></div>\n<p>Le programme affiche le message car <code>8 &gt; 3</code>. Il constate un problème, mais ne modifie aucune valeur.</p>",
        "kind": "Exemple",
        "group": "01 · Observer et échanger"
      },
      {
        "title": "Exercice 1 — Vérifier l'ordre",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>a = 12\nb = 7</code></pre></div>\n<p>Écrire un programme qui affiche :</p>\n<ul><li><code>Déjà triés</code> si <code>a &lt;= b</code>.</li><li><code>À inverser</code> dans le cas contraire.</li></ul>\n<p><strong>Tests attendus :</strong> <code>12, 7</code> → <code>À inverser</code> ; <code>3, 9</code> → <code>Déjà triés</code> ; deux valeurs égales → <code>Déjà triés</code>.</p>",
        "kind": "Exercice 1",
        "group": "01 · Observer et échanger"
      },
      {
        "title": "Exemple — Échanger deux valeurs",
        "html": "<p>Une variable temporaire conserve la première valeur pendant l&#x27;échange. Suivez les trois affectations dans l&#x27;animation.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>a = 8\nb = 3\ntemp = a\na = b\nb = temp\nprint(a, b)  # 3 8</code></pre></div>\n<p>Sans la sauvegarde <code>temp = a</code>, la valeur 8 serait perdue lors de <code>a = b</code>.</p>",
        "kind": "Exemple",
        "group": "01 · Observer et échanger",
        "demo": {
          "kind": "swap"
        }
      },
      {
        "title": "Exercice 2 — Échanger si nécessaire",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>a = 15\nb = 6</code></pre></div>\n<p>Écrire un programme qui échange les valeurs uniquement si <code>a &gt; b</code>, avec une variable temporaire.</p>\n<p><strong>Résultat attendu :</strong> <code>6 15</code>.</p>\n<p>Tester aussi un couple déjà dans l&#x27;ordre et deux valeurs égales : ils doivent rester inchangés.</p>",
        "kind": "Exercice 2",
        "group": "01 · Observer et échanger"
      },
      {
        "title": "Exemple — Comparer deux voisins",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [9, 4, 7]\nif nombres[0] &gt; nombres[1]:\n    temp = nombres[0]\n    nombres[0] = nombres[1]\n    nombres[1] = temp\nprint(nombres)  # [4, 9, 7]</code></pre></div>\n<p>Les deux premières valeurs sont échangées. La liste n&#x27;est pas encore entièrement triée : 9 est toujours avant 7.</p>",
        "kind": "Exemple",
        "group": "01 · Observer et échanger"
      },
      {
        "title": "Exercice 3 — Faire avancer la plus grande valeur",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [7, 3, 5]</code></pre></div>\n<ol><li>Comparer les valeurs aux indices 0 et 1 et les échanger si nécessaire.</li><li>Faire ensuite la même chose avec les indices 1 et 2.</li></ol>\n<p><strong>Résultat attendu :</strong> <code>[3, 5, 7]</code>.</p>\n<p><strong>Contrainte :</strong> ne pas utiliser de boucle pour cet exercice.</p>",
        "kind": "Exercice 3",
        "group": "01 · Observer et échanger"
      },
      {
        "title": "Exemple — Automatiser les comparaisons",
        "html": "<p>Plutôt que d&#x27;écrire plusieurs fois la même comparaison, utiliser une boucle.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [8, 3, 6, 2]\nfor i in range(len(nombres) - 1):\n    if nombres[i] &gt; nombres[i + 1]:\n        temp = nombres[i]\n        nombres[i] = nombres[i + 1]\n        nombres[i + 1] = temp\nprint(nombres)  # [3, 6, 2, 8]</code></pre></div>\n<p><code>i</code> prend les valeurs 0, 1 et 2. <code>i + 1</code> reste ainsi un indice valide.</p>",
        "kind": "Exemple",
        "group": "02 · Construire un passage"
      },
      {
        "title": "Observer un seul passage",
        "html": "<p>Un <strong>passage</strong> compare successivement tous les couples voisins de la partie à traiter.</p>\n<p>Avec <code>[8, 3, 6, 2]</code>, la valeur 8 arrive à la fin. Le résultat est <code>[3, 6, 2, 8]</code> : la liste n&#x27;est pas totalement triée.</p>\n<p>Prédisez le couple qui sera comparé ensuite, puis avancez l&#x27;animation d&#x27;une étape.</p>",
        "kind": "Notion",
        "group": "02 · Construire un passage",
        "demo": {
          "kind": "pass",
          "values": [
            8,
            3,
            6,
            2
          ]
        }
      },
      {
        "title": "Exercice 4 — Un seul passage",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [6, 2, 9, 1, 5]</code></pre></div>\n<p>Écrire une boucle qui compare et échange les éléments voisins.</p>\n<p><strong>Avant d&#x27;exécuter :</strong> déterminer sur papier le contenu de la liste après ce passage.</p>\n<p><strong>Résultat attendu :</strong> <code>[2, 6, 1, 5, 9]</code>.</p>",
        "kind": "Exercice 4",
        "group": "02 · Construire un passage"
      },
      {
        "title": "Exemple — Compter une action",
        "html": "<p>Un compteur est initialisé avant la boucle et augmente seulement quand l&#x27;événement recherché se produit.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>compteur = 0\nfor valeur in [2, 0, 4]:\n    if valeur &gt; 0:\n        compteur += 1\n        print(&quot;Valeur positive :&quot;, valeur)\nprint(compteur)  # 2</code></pre></div>\n<p>Pour compter les échanges, le même principe s&#x27;applique : incrémenter le compteur dans le bloc où l&#x27;échange est réalisé.</p>",
        "kind": "Exemple",
        "group": "02 · Construire un passage"
      },
      {
        "title": "Exercice 5 — Observer chaque échange",
        "html": "<p>Reprendre le programme de l&#x27;exercice 4, avec <code>[6, 2, 9, 1, 5]</code>.</p>\n<ol><li>Afficher la liste après chaque échange.</li><li>Compter le nombre d&#x27;échanges réalisés pendant ce passage.</li></ol>\n<p><strong>États attendus :</strong> <code>[2, 6, 9, 1, 5]</code>, puis <code>[2, 6, 1, 9, 5]</code>, puis <code>[2, 6, 1, 5, 9]</code>.</p>\n<p><strong>Nombre d&#x27;échanges :</strong> 3. Une comparaison qui ne provoque pas d&#x27;échange ne doit pas augmenter ce compteur.</p>",
        "kind": "Exercice 5",
        "group": "02 · Construire un passage"
      },
      {
        "title": "Le tri à bulles, passage après passage",
        "html": "<p>Un seul passage ne suffit pas toujours. Il faut recommencer sur la partie qui reste à ranger.</p>\n<p>Le <strong>tri à bulles</strong> compare des éléments voisins et les échange lorsqu&#x27;ils sont dans le mauvais ordre. Après chaque passage, la plus grande valeur de la partie parcourue a rejoint sa position définitive à droite.</p>\n<p>Observez <code>[5, 2, 4, 1, 3]</code> : les positions définitives s&#x27;accumulent à droite. La version présentée effectue 4 passages et 10 comparaisons.</p>",
        "kind": "Notion",
        "group": "03 · Trier toute la liste",
        "demo": {
          "kind": "bubble",
          "values": [
            5,
            2,
            4,
            1,
            3
          ]
        }
      },
      {
        "title": "Exemple — Le programme complet",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [5, 2, 4, 1, 3]\nfor passage in range(len(nombres) - 1):\n    for i in range(len(nombres) - 1 - passage):\n        if nombres[i] &gt; nombres[i + 1]:\n            temp = nombres[i]\n            nombres[i] = nombres[i + 1]\n            nombres[i + 1] = temp\nprint(nombres)  # [1, 2, 3, 4, 5]</code></pre></div>\n<ul><li>La boucle extérieure répète les passages.</li><li>La boucle intérieure compare les voisins.</li><li><code>len(nombres) - 1 - passage</code> évite les dernières valeurs déjà placées.</li></ul>\n<p>Avec 5 valeurs, les passages réalisent 4, puis 3, puis 2, puis 1 comparaison.</p>",
        "kind": "Exemple",
        "group": "03 · Trier toute la liste"
      },
      {
        "title": "Exercice 6 — Tri à bulles guidé",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [4, 1, 3, 2]</code></pre></div>\n<p>Reprendre le programme complet et afficher la liste après chaque passage de la boucle extérieure.</p>\n<p><strong>Résultats attendus :</strong></p>\n<div class=\"code-block\"><span class=\"code-label\">Résultat</span><pre tabindex=\"0\"><code>Passage 1 : [1, 3, 2, 4]\nPassage 2 : [1, 2, 3, 4]\nPassage 3 : [1, 2, 3, 4]</code></pre></div>\n<p>L&#x27;affichage doit être après la boucle intérieure, mais encore dans la boucle extérieure. Le dernier passage ne modifie rien dans cet exemple.</p>",
        "kind": "Exercice 6",
        "group": "03 · Trier toute la liste"
      },
      {
        "title": "Exemple — Changer l'ordre recherché",
        "html": "<p>En ordre décroissant, la plus grande valeur doit être placée avant la plus petite.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>a = 3\nb = 8\nif a &lt; b:\n    print(&quot;À inverser pour un ordre décroissant&quot;)</code></pre></div>\n<p>Le test est inversé par rapport à l&#x27;ordre croissant. On conserve la même méthode d&#x27;échange.</p>",
        "kind": "Exemple",
        "group": "03 · Trier toute la liste"
      },
      {
        "title": "Exercice 7 — Trier dans l'ordre décroissant",
        "html": "<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [6, 2, 9, 1, 5]</code></pre></div>\n<p>Modifier le tri à bulles pour obtenir un ordre décroissant.</p>\n<p><strong>Résultat attendu :</strong> <code>[9, 6, 5, 2, 1]</code>.</p>\n<p><strong>Indice :</strong> une seule modification de l&#x27;opérateur de comparaison est nécessaire.</p>",
        "kind": "Exercice 7",
        "group": "03 · Trier toute la liste"
      },
      {
        "title": "Exemple — Arrêter une boucle avec break",
        "html": "<p><code>break</code> arrête immédiatement la boucle dans laquelle il se trouve.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>for nombre in [4, 0, 7]:\n    if nombre == 0:\n        break\n    print(nombre)  # seul 4 est affiché</code></pre></div>\n<p>Pour arrêter les passages du tri, le <code>break</code> devra être dans la boucle extérieure, après la fin de la boucle intérieure.</p>\n<p>Un booléen peut mémoriser si une action a eu lieu pendant le passage : il commence à <code>False</code> et devient <code>True</code> lors d&#x27;un échange.</p>",
        "kind": "Exemple",
        "group": "03 · Trier toute la liste"
      },
      {
        "title": "Exercice 8 — Éviter les passages inutiles",
        "html": "<p>Reprendre le tri à bulles et ajouter un booléen <code>echange</code>.</p>\n<ol><li>Au début de chaque passage, remettre <code>echange</code> à <code>False</code>.</li><li>Après chaque échange, lui affecter <code>True</code>.</li><li>Après la boucle intérieure, si aucun échange n&#x27;a eu lieu, arrêter les passages avec <code>break</code>.</li></ol>\n<p>Tester avec <code>nombres = [1, 2, 3, 4, 5]</code>.</p>\n<p><strong>Question :</strong> combien de passages sont nécessaires pour constater que cette liste est déjà triée ? Expliquer pourquoi un passage sans échange suffit.</p>\n<p>Tester aussi une liste désordonnée, deux valeurs égales, une liste vide et une liste à un seul élément.</p>",
        "kind": "Exercice 8",
        "group": "03 · Trier toute la liste"
      },
      {
        "title": "Bilan — Expliquer avant de coder",
        "html": "<p>À la fin du cours, vous devez pouvoir expliquer :</p>\n<ul><li>Pourquoi comparer deux valeurs ne suffit pas à trier une liste entière.</li><li>Comment échanger deux éléments avec une variable temporaire.</li><li>Comment une boucle traite les couples voisins.</li><li>Pourquoi le tri à bulles utilise deux boucles.</li><li>Comment vérifier qu&#x27;une liste est triée : chaque valeur est inférieure ou égale à la suivante, sans perte ni ajout de valeurs.</li></ul>\n<p><strong>À retenir :</strong> comparer, échanger si nécessaire, terminer un passage, recommencer.</p>\n<p>Le tri à bulles sert ici à comprendre les déplacements et les indices. Pour des listes importantes en pratique, utiliser les outils de tri de Python.</p>\n<p><strong>Conseil pour la séance :</strong> consacrer davantage de temps aux exercices 2 à 5 qu&#x27;au programme complet. La priorité est de comprendre le déplacement des valeurs et le rôle des indices.</p>",
        "kind": "Notion",
        "group": "03 · Trier toute la liste"
      }
    ],
    "source": "# Introduction au tri en Python — Bachelor 1\n\n## Observer — Le tri par sélection\n\n**À votre avis, comment ça marche ?** Observez les valeurs comparées et celle qui est retenue comme minimum.\n\nCette méthode cherche la plus petite valeur dans la partie restante, puis la place au début de cette partie. Les positions définitives se construisent à gauche.\n\nLa sélection et l'insertion sont présentées seulement pour découvrir d'autres façons de trier. **Dans ce cours, nous programmerons uniquement le tri à bulles, choisi comme point de départ simple : comparer et échanger des voisins.**\n\n## Observer — Le tri par insertion\n\nUne partie de la liste est déjà triée. On prend la valeur suivante et on l'insère à sa place, comme une carte dans une main de cartes rangées.\n\nDans cette animation, la valeur choisie recule vers la gauche et les valeurs plus grandes se décalent vers la droite.\n\n**Attention :** la partie déjà triée peut encore bouger lors des insertions suivantes. Elle n'est pas nécessairement à sa position définitive.\n\n**À discuter :** que fait cette méthode différemment de la sélection ? Nous ne détaillerons pas son code : la suite du cours porte uniquement sur le tri à bulles.\n\n## À votre avis, comment ça marche ?\n\nObservez l'animation avant de regarder le code.\n\n- Quelles valeurs se déplacent ensemble ?\n- Dans quelle direction les grandes valeurs avancent-elles ?\n- Est-ce que toute la liste est rangée après un seul parcours ?\n\nFormulez une hypothèse, puis relancez l'animation pour la vérifier.\n\n## Le programme de cette séance\n\n**Niveau :** débutant · **Durée :** 2 à 3 heures.\n\n**Objectif :** comprendre comment ranger des valeurs dans une liste, puis construire progressivement un tri à bulles.\n\nLes animations de sélection et d'insertion donnent un aperçu. **Le seul algorithme de tri à programmer dans cette séance est le tri à bulles.**\n\n**Prérequis :** variables, listes, indices, conditions `if` et boucles `for`.\n\nCommencez par prédire les résultats sur papier, puis exécutez les exemples. Pour les exercices, utilisez les opérations de base, sans `sort()` ni `sorted()`.\n\n## Qu'est-ce que trier une liste ?\n\nTrier consiste à ranger des valeurs selon un ordre déterminé, sans en perdre ni en ajouter.\n\n```python\nnombres = [5, 2, 8, 1, 4]\n```\n\nEn ordre croissant, on veut obtenir :\n\n```python\n[1, 2, 4, 5, 8]\n```\n\nPython propose déjà `sort()` et `sorted()`. Nous allons réaliser les opérations nous-mêmes pour comprendre le fonctionnement d'un algorithme de tri.\n\n## Exemple — Comparer deux nombres\n\nPour un ordre croissant, la plus petite valeur doit être placée avant la plus grande.\n\n```python\na = 8\nb = 3\nif a > b:\n    print(\"Les nombres sont dans le mauvais ordre\")\n```\n\nLe programme affiche le message car `8 > 3`. Il constate un problème, mais ne modifie aucune valeur.\n\n## Exercice 1 — Vérifier l'ordre\n\n```python\na = 12\nb = 7\n```\n\nÉcrire un programme qui affiche :\n\n- `Déjà triés` si `a <= b`.\n- `À inverser` dans le cas contraire.\n\n**Tests attendus :** `12, 7` → `À inverser` ; `3, 9` → `Déjà triés` ; deux valeurs égales → `Déjà triés`.\n\n## Exemple — Échanger deux valeurs\n\nUne variable temporaire conserve la première valeur pendant l'échange. Suivez les trois affectations dans l'animation.\n\n```python\na = 8\nb = 3\ntemp = a\na = b\nb = temp\nprint(a, b)  # 3 8\n```\n\nSans la sauvegarde `temp = a`, la valeur 8 serait perdue lors de `a = b`.\n\n## Exercice 2 — Échanger si nécessaire\n\n```python\na = 15\nb = 6\n```\n\nÉcrire un programme qui échange les valeurs uniquement si `a > b`, avec une variable temporaire.\n\n**Résultat attendu :** `6 15`.\n\nTester aussi un couple déjà dans l'ordre et deux valeurs égales : ils doivent rester inchangés.\n\n## Exemple — Comparer deux voisins\n\n```python\nnombres = [9, 4, 7]\nif nombres[0] > nombres[1]:\n    temp = nombres[0]\n    nombres[0] = nombres[1]\n    nombres[1] = temp\nprint(nombres)  # [4, 9, 7]\n```\n\nLes deux premières valeurs sont échangées. La liste n'est pas encore entièrement triée : 9 est toujours avant 7.\n\n## Exercice 3 — Faire avancer la plus grande valeur\n\n```python\nnombres = [7, 3, 5]\n```\n\n1. Comparer les valeurs aux indices 0 et 1 et les échanger si nécessaire.\n2. Faire ensuite la même chose avec les indices 1 et 2.\n\n**Résultat attendu :** `[3, 5, 7]`.\n\n**Contrainte :** ne pas utiliser de boucle pour cet exercice.\n\n## Exemple — Automatiser les comparaisons\n\nPlutôt que d'écrire plusieurs fois la même comparaison, utiliser une boucle.\n\n```python\nnombres = [8, 3, 6, 2]\nfor i in range(len(nombres) - 1):\n    if nombres[i] > nombres[i + 1]:\n        temp = nombres[i]\n        nombres[i] = nombres[i + 1]\n        nombres[i + 1] = temp\nprint(nombres)  # [3, 6, 2, 8]\n```\n\n`i` prend les valeurs 0, 1 et 2. `i + 1` reste ainsi un indice valide.\n\n## Observer un seul passage\n\nUn **passage** compare successivement tous les couples voisins de la partie à traiter.\n\nAvec `[8, 3, 6, 2]`, la valeur 8 arrive à la fin. Le résultat est `[3, 6, 2, 8]` : la liste n'est pas totalement triée.\n\nPrédisez le couple qui sera comparé ensuite, puis avancez l'animation d'une étape.\n\n## Exercice 4 — Un seul passage\n\n```python\nnombres = [6, 2, 9, 1, 5]\n```\n\nÉcrire une boucle qui compare et échange les éléments voisins.\n\n**Avant d'exécuter :** déterminer sur papier le contenu de la liste après ce passage.\n\n**Résultat attendu :** `[2, 6, 1, 5, 9]`.\n\n## Exemple — Compter une action\n\nUn compteur est initialisé avant la boucle et augmente seulement quand l'événement recherché se produit.\n\n```python\ncompteur = 0\nfor valeur in [2, 0, 4]:\n    if valeur > 0:\n        compteur += 1\n        print(\"Valeur positive :\", valeur)\nprint(compteur)  # 2\n```\n\nPour compter les échanges, le même principe s'applique : incrémenter le compteur dans le bloc où l'échange est réalisé.\n\n## Exercice 5 — Observer chaque échange\n\nReprendre le programme de l'exercice 4, avec `[6, 2, 9, 1, 5]`.\n\n1. Afficher la liste après chaque échange.\n2. Compter le nombre d'échanges réalisés pendant ce passage.\n\n**États attendus :** `[2, 6, 9, 1, 5]`, puis `[2, 6, 1, 9, 5]`, puis `[2, 6, 1, 5, 9]`.\n\n**Nombre d'échanges :** 3. Une comparaison qui ne provoque pas d'échange ne doit pas augmenter ce compteur.\n\n## Le tri à bulles, passage après passage\n\nUn seul passage ne suffit pas toujours. Il faut recommencer sur la partie qui reste à ranger.\n\nLe **tri à bulles** compare des éléments voisins et les échange lorsqu'ils sont dans le mauvais ordre. Après chaque passage, la plus grande valeur de la partie parcourue a rejoint sa position définitive à droite.\n\nObservez `[5, 2, 4, 1, 3]` : les positions définitives s'accumulent à droite. La version présentée effectue 4 passages et 10 comparaisons.\n\n## Exemple — Le programme complet\n\n```python\nnombres = [5, 2, 4, 1, 3]\nfor passage in range(len(nombres) - 1):\n    for i in range(len(nombres) - 1 - passage):\n        if nombres[i] > nombres[i + 1]:\n            temp = nombres[i]\n            nombres[i] = nombres[i + 1]\n            nombres[i + 1] = temp\nprint(nombres)  # [1, 2, 3, 4, 5]\n```\n\n- La boucle extérieure répète les passages.\n- La boucle intérieure compare les voisins.\n- `len(nombres) - 1 - passage` évite les dernières valeurs déjà placées.\n\nAvec 5 valeurs, les passages réalisent 4, puis 3, puis 2, puis 1 comparaison.\n\n## Exercice 6 — Tri à bulles guidé\n\n```python\nnombres = [4, 1, 3, 2]\n```\n\nReprendre le programme complet et afficher la liste après chaque passage de la boucle extérieure.\n\n**Résultats attendus :**\n\n```output\nPassage 1 : [1, 3, 2, 4]\nPassage 2 : [1, 2, 3, 4]\nPassage 3 : [1, 2, 3, 4]\n```\n\nL'affichage doit être après la boucle intérieure, mais encore dans la boucle extérieure. Le dernier passage ne modifie rien dans cet exemple.\n\n## Exemple — Changer l'ordre recherché\n\nEn ordre décroissant, la plus grande valeur doit être placée avant la plus petite.\n\n```python\na = 3\nb = 8\nif a < b:\n    print(\"À inverser pour un ordre décroissant\")\n```\n\nLe test est inversé par rapport à l'ordre croissant. On conserve la même méthode d'échange.\n\n## Exercice 7 — Trier dans l'ordre décroissant\n\n```python\nnombres = [6, 2, 9, 1, 5]\n```\n\nModifier le tri à bulles pour obtenir un ordre décroissant.\n\n**Résultat attendu :** `[9, 6, 5, 2, 1]`.\n\n**Indice :** une seule modification de l'opérateur de comparaison est nécessaire.\n\n## Exemple — Arrêter une boucle avec break\n\n`break` arrête immédiatement la boucle dans laquelle il se trouve.\n\n```python\nfor nombre in [4, 0, 7]:\n    if nombre == 0:\n        break\n    print(nombre)  # seul 4 est affiché\n```\n\nPour arrêter les passages du tri, le `break` devra être dans la boucle extérieure, après la fin de la boucle intérieure.\n\nUn booléen peut mémoriser si une action a eu lieu pendant le passage : il commence à `False` et devient `True` lors d'un échange.\n\n## Exercice 8 — Éviter les passages inutiles\n\nReprendre le tri à bulles et ajouter un booléen `echange`.\n\n1. Au début de chaque passage, remettre `echange` à `False`.\n2. Après chaque échange, lui affecter `True`.\n3. Après la boucle intérieure, si aucun échange n'a eu lieu, arrêter les passages avec `break`.\n\nTester avec `nombres = [1, 2, 3, 4, 5]`.\n\n**Question :** combien de passages sont nécessaires pour constater que cette liste est déjà triée ? Expliquer pourquoi un passage sans échange suffit.\n\nTester aussi une liste désordonnée, deux valeurs égales, une liste vide et une liste à un seul élément.\n\n## Bilan — Expliquer avant de coder\n\nÀ la fin du cours, vous devez pouvoir expliquer :\n\n- Pourquoi comparer deux valeurs ne suffit pas à trier une liste entière.\n- Comment échanger deux éléments avec une variable temporaire.\n- Comment une boucle traite les couples voisins.\n- Pourquoi le tri à bulles utilise deux boucles.\n- Comment vérifier qu'une liste est triée : chaque valeur est inférieure ou égale à la suivante, sans perte ni ajout de valeurs.\n\n**À retenir :** comparer, échanger si nécessaire, terminer un passage, recommencer.\n\nLe tri à bulles sert ici à comprendre les déplacements et les indices. Pour des listes importantes en pratique, utiliser les outils de tri de Python.\n\n**Conseil pour la séance :** consacrer davantage de temps aux exercices 2 à 5 qu'au programme complet. La priorité est de comprendre le déplacement des valeurs et le rôle des indices.\n",
    "sourceName": "05_introduction_tri.md",
    "next": "../revision/06_flashcards_tri.html",
    "nextLabel": "Réviser le tri en 5 cartes"
  },
  "cleanCode": {
    "title": "10 flashcards — Écrire un algorithme propre",
    "subtitle": "Des habitudes simples pour écrire un code clair et fiable",
    "cards": [
      {
        "title": "Choisir un nom utile",
        "question": "<p>Quel nom explique le mieux le contenu d&#x27;une variable qui conserve des notes suffisantes ?</p>",
        "answer": "<p><code>valid_grades</code> est plus parlant que <code>x</code> ou <code>list2</code>. Un nom précis aide à comprendre l&#x27;intention sans relire tout l&#x27;algorithme.</p>"
      },
      {
        "title": "Suivre la convention des noms",
        "question": "<p>Comment nommer une variable contenant le nombre d&#x27;éléments trouvés en Python ?</p>",
        "answer": "<p>Utiliser <code>match_count</code> : minuscules et mots séparés par des traits de soulignement (<code>snake_case</code>). Garder la même convention dans tout le programme.</p>"
      },
      {
        "title": "Indenter les blocs",
        "question": "<p>Quelles lignes doivent être indentées après <code>if</code> ou <code>for</code> ?</p>",
        "answer": "<p>Les instructions qui appartiennent au bloc sont indentées de quatre espaces. Une indentation régulière rend les conditions et les boucles faciles à repérer.</p>"
      },
      {
        "title": "Initialiser avant de parcourir",
        "question": "<p>Où placer <code>total = 0</code> si l&#x27;on veut accumuler les valeurs d&#x27;une liste ?</p>",
        "answer": "<p>Avant la boucle. Placé dedans, le total est remis à zéro à chaque tour et le cumul est perdu.</p>"
      },
      {
        "title": "Séparer les étapes",
        "question": "<p>Quelles étapes identifier avant d&#x27;écrire le code ?</p>",
        "answer": "<p>Les entrées, le traitement, puis la sortie attendue. Les distinguer évite de mélanger les données de départ, les calculs et l&#x27;affichage.</p>"
      },
      {
        "title": "Choisir une borne sûre",
        "question": "<p>Pour parcourir les indices d&#x27;une liste, comment éviter de lire après sa fin ?</p>",
        "answer": "<p>Pour les valeurs seules : <code>range(len(items))</code>. Pour comparer chaque élément avec son voisin suivant : <code>range(len(items) - 1)</code>. Le dernier indice est <code>len(items) - 1</code>.</p>"
      },
      {
        "title": "Faire avancer un while",
        "question": "<p>Que faut-il vérifier dans une boucle <code>while</code> ?</p>",
        "answer": "<p>Une valeur utilisée dans la condition doit progresser vers la fin de la boucle. Sinon, la condition peut rester vraie indéfiniment.</p>"
      },
      {
        "title": "Garder la liste d'origine",
        "question": "<p>Comment filtrer sans perdre la liste initiale ?</p>",
        "answer": "<p>Créer une nouvelle liste vide, par exemple <code>valid_items = []</code>, puis y ajouter les éléments retenus avec <code>append</code>. La liste d&#x27;origine reste disponible.</p>"
      },
      {
        "title": "Tester un cas limite",
        "question": "<p>En plus du cas habituel, quels petits cas tester pour une boucle ou une recherche ?</p>",
        "answer": "<p>Tester une liste vide, une liste à un élément, une cible absente et, si pertinent, des nombres négatifs ou des doublons. Ces cas révèlent souvent des erreurs de borne ou d&#x27;initialisation.</p>"
      },
      {
        "title": "Commenter avec intention",
        "question": "<p>Que doit expliquer un commentaire utile ?</p>",
        "answer": "<p>Une décision ou une intention qui n&#x27;est pas évidente à la seule lecture du code. Les noms et les instructions simples n&#x27;ont généralement pas besoin d&#x27;être paraphrasés.</p>"
      }
    ],
    "next": "../supports/02_algorithmique.html",
    "nextLabel": "Revoir le chapitre 02",
    "followup": "../qcm/02_QCM_Revision.html",
    "followupLabel": "Refaire le QCM 02"
  },
  "flashtri": {
    "title": "5 flashcards sur le tri",
    "subtitle": "Comparer, échanger et répéter",
    "cards": [
      {
        "title": "Garder une valeur pendant l'échange",
        "question": "<p>Avec <code>a = 9</code> et <code>b = 2</code>, pourquoi ne suffit-il pas d&#x27;écrire <code>a = b</code> puis <code>b = a</code> ?</p>",
        "answer": "<p>Après <code>a = b</code>, les deux variables valent 2 et la valeur 9 est perdue. Il faut d&#x27;abord la conserver : <code>temp = a</code>, puis <code>a = b</code>, puis <code>b = temp</code>. On obtient <code>a = 2</code> et <code>b = 9</code>.</p>"
      },
      {
        "title": "Rester dans la liste",
        "question": "<p>Pourquoi un passage utilise-t-il <code>range(len(nombres) - 1)</code> lorsque l&#x27;on compare <code>nombres[i]</code> et <code>nombres[i + 1]</code> ?</p>",
        "answer": "<p>Le dernier couple commence à l&#x27;indice <code>len(nombres) - 2</code>. Comme <code>range</code> exclut sa borne finale, <code>i + 1</code> ne dépasse jamais le dernier indice. Pour une liste de 4 éléments, les départs sont 0, 1 et 2.</p>"
      },
      {
        "title": "Comprendre un passage",
        "question": "<p>Après un passage croissant sur <code>[4, 1, 3, 2]</code>, quelle liste obtient-on ? Est-elle entièrement triée ?</p>",
        "answer": "<p>On obtient <strong><code>[1, 3, 2, 4]</code></strong>. Le maximum 4 a atteint sa position définitive, mais 3 et 2 sont encore dans le mauvais ordre. Un passage ne suffit pas toujours.</p>"
      },
      {
        "title": "Deux boucles, deux rôles",
        "question": "<p>À quoi servent les deux boucles du tri à bulles et pourquoi réduire la borne avec <code>len(nombres) - 1 - passage</code> ?</p>",
        "answer": "<p>La boucle extérieure répète les passages. La boucle intérieure compare les voisins. Après chaque passage, une valeur supplémentaire est définitivement placée à droite : la borne réduite évite de la comparer à nouveau.</p>"
      },
      {
        "title": "Savoir quand arrêter",
        "question": "<p>Un passage complet ne réalise aucun échange. Que peut-on en déduire et où faut-il placer <code>break</code> ?</p>",
        "answer": "<p>La liste est déjà triée : aucun couple voisin n&#x27;est dans le mauvais ordre. Le <code>break</code> se place dans la boucle extérieure, <strong>après</strong> la boucle intérieure, sous le test <code>if not echange</code>. Le booléen <code>echange</code> doit être remis à <code>False</code> au début de chaque passage. Pour <code>[1, 2, 3]</code>, un passage suffit à le constater.</p>"
      }
    ],
    "next": "../supports/05_introduction_tri.html",
    "nextLabel": "Revoir le cours sur le tri",
    "followup": "../qcm/03_QCM_Tri.html",
    "followupLabel": "Faire le QCM sur le tri"
  },
  "quizTri": {
    "title": "QCM — Le tri à bulles",
    "subtitle": "5 questions pour vérifier votre compréhension",
    "questions": [
      {
        "title": "Comparer ne suffit pas",
        "prompt": "<p>Que contient la liste après ce programme ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [7, 2]\nif nombres[0] &gt; nombres[1]:\n    print(&quot;À inverser&quot;)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>[2, 7]</code></span>",
          "<span class=\"option-text\"><code>[7, 2]</code></span>",
          "<span class=\"option-text\"><code>[7, 7]</code></span>",
          "<span class=\"option-text\"><code>[]</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>La liste reste <code>[7, 2]</code>. Le programme affiche un message, mais aucune affectation ne modifie ses éléments.</p>",
        "feedback": "<p>La liste reste <code>[7, 2]</code>. Le programme affiche un message, mais aucune affectation ne modifie ses éléments.</p>\n<p>A supposerait un échange. C supposerait un remplacement et D une suppression : aucune de ces opérations ne figure dans le code.</p>"
      },
      {
        "title": "Un seul passage",
        "prompt": "<p>On effectue un seul passage de gauche à droite sur <code>[4, 1, 3, 2]</code>, en échangeant les voisins si la valeur de gauche est plus grande. Quel résultat obtient-on ?</p>",
        "options": [
          "<span class=\"option-text\"><code>[1, 2, 3, 4]</code></span>",
          "<span class=\"option-text\"><code>[4, 3, 2, 1]</code></span>",
          "<span class=\"option-text\"><code>[1, 4, 3, 2]</code></span>",
          "<span class=\"option-text\"><code>[1, 3, 2, 4]</code></span>"
        ],
        "answer": 3,
        "explanation": "<p>4 avance successivement devant 1, puis 3, puis 2. Le résultat est <code>[1, 3, 2, 4]</code> : seul le maximum est assuré d’être définitivement placé après ce passage.</p>",
        "feedback": "<p>4 avance successivement devant 1, puis 3, puis 2. Le résultat est <code>[1, 3, 2, 4]</code> : seul le maximum est assuré d’être définitivement placé après ce passage.</p>\n<p>A est le résultat du tri complet. B est un ordre décroissant. C s’arrête après le premier échange.</p>"
      },
      {
        "title": "Réduire la partie à parcourir",
        "prompt": "<p>Pour une liste de longueur 5 et <code>passage = 2</code>, quelles valeurs prend <code>i</code> dans <code>range(len(nombres) - 1 - passage)</code> ?</p>",
        "options": [
          "<span class=\"option-text\">0 et 1</span>",
          "<span class=\"option-text\">0, 1 et 2</span>",
          "<span class=\"option-text\">2, 3 et 4</span>",
          "<span class=\"option-text\">0, 1, 2 et 3</span>"
        ],
        "answer": 0,
        "explanation": "<p>La borne vaut <code>5 - 1 - 2 = 2</code>. <code>range(2)</code> donne 0 et 1. Deux valeurs à droite ont déjà été placées par les passages précédents.</p>",
        "feedback": "<p>La borne vaut <code>5 - 1 - 2 = 2</code>. <code>range(2)</code> donne 0 et 1. Deux valeurs à droite ont déjà été placées par les passages précédents.</p>\n<p>B inclut à tort la borne finale. C commence au numéro du passage au lieu de 0. D oublie de réduire la borne.</p>"
      },
      {
        "title": "Choisir un ordre décroissant",
        "prompt": "<p>Quel test déclenche l’échange de deux voisins pour trier du plus grand au plus petit ?</p>",
        "options": [
          "<span class=\"option-text\"><code>nombres[i] &gt; nombres[i + 1]</code></span>",
          "<span class=\"option-text\"><code>nombres[i] == nombres[i + 1]</code></span>",
          "<span class=\"option-text\"><code>nombres[i] &lt; nombres[i + 1]</code></span>",
          "<span class=\"option-text\"><code>nombres[i] != nombres[i + 1]</code></span>"
        ],
        "answer": 2,
        "explanation": "<p>Il faut échanger lorsque la valeur de gauche est plus petite que celle de droite : la plus grande passe alors devant.</p>",
        "feedback": "<p>Il faut échanger lorsque la valeur de gauche est plus petite que celle de droite : la plus grande passe alors devant.</p>\n<p>A correspond à l’ordre croissant. B ne traite que les égalités. D échange aussi des couples déjà dans le bon ordre.</p>"
      },
      {
        "title": "Arrêter les passages",
        "prompt": "<p>Dans la version optimisée, que fait-on après un passage complet sans aucun échange ?</p>",
        "options": [
          "<span class=\"option-text\">Recommencer obligatoirement tous les passages restants.</span>",
          "<span class=\"option-text\">Arrêter la boucle extérieure avec <code>break</code>.</span>",
          "<span class=\"option-text\">Arrêter dès la première comparaison sans échange.</span>",
          "<span class=\"option-text\">Inverser la liste.</span>"
        ],
        "answer": 1,
        "explanation": "<p>Un passage complet sans échange montre qu’aucun couple voisin n’est dans le mauvais ordre. On peut arrêter la boucle extérieure. Le booléen de suivi est remis à <code>False</code> au début de chaque passage.</p>",
        "feedback": "<p>Un passage complet sans échange montre qu’aucun couple voisin n’est dans le mauvais ordre. On peut arrêter la boucle extérieure. Le booléen de suivi est remis à <code>False</code> au début de chaque passage.</p>\n<p>A ignore l’optimisation. C conclut trop tôt : les couples suivants peuvent encore être désordonnés. D détruirait l’ordre obtenu.</p>"
      }
    ],
    "conventions": "<ul><li><code>=</code> affecte ; <code>==</code> compare.</li><li>Les indices commencent à 0.</li><li>La borne finale de <code>range</code> est exclue.</li><li><code>%</code> donne le reste ; <code>//</code> donne le quotient arrondi vers le bas.</li></ul>",
    "next": "04_QCM_General.html",
    "nextLabel": "Faire le QCM général"
  },
  "quizGeneral": {
    "title": "QCM général",
    "subtitle": "20 questions pour revoir tout le parcours",
    "questions": [
      {
        "title": "Affectation et valeur courante",
        "prompt": "<p>Que s’affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>x = 4\ny = x\nx = x + 3\nprint(x, y)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>4 4</code></span>",
          "<span class=\"option-text\"><code>7 7</code></span>",
          "<span class=\"option-text\"><code>7 4</code></span>",
          "<span class=\"option-text\"><code>4 7</code></span>"
        ],
        "answer": 2,
        "explanation": "<p><code>y</code> reçoit la valeur 4. Modifier ensuite <code>x</code> ne modifie pas <code>y</code>. On affiche donc <code>7 4</code>.</p>",
        "feedback": "<p><code>y</code> reçoit la valeur 4. Modifier ensuite <code>x</code> ne modifie pas <code>y</code>. On affiche donc <code>7 4</code>.</p>\n<p>A oublie la dernière affectation. B suppose que les deux variables restent liées. D inverse les valeurs finales.</p>"
      },
      {
        "title": "Quotient, reste et puissance",
        "prompt": "<p>Que s’affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>print(17 // 5, 17 % 5, 2 ** 3)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>3 2 8</code></span>",
          "<span class=\"option-text\"><code>3.4 2 6</code></span>",
          "<span class=\"option-text\"><code>2 3 8</code></span>",
          "<span class=\"option-text\"><code>3 0 6</code></span>"
        ],
        "answer": 0,
        "explanation": "<p><code>17 = 5 * 3 + 2</code> donne un quotient de 3 et un reste de 2. <code>2 ** 3</code> vaut 8.</p>",
        "feedback": "<p><code>17 = 5 * 3 + 2</code> donne un quotient de 3 et un reste de 2. <code>2 ** 3</code> vaut 8.</p>\n<p><code>/</code> donnerait 3.4, mais <code>//</code> donne ici 3. Le reste n’est pas le quotient. <code>**</code> est une puissance, pas une multiplication par 3.</p>"
      },
      {
        "title": "Comparaisons et logique",
        "prompt": "<p>Quel booléen est affiché ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>age = 17\naccompagne = True\nprint(age &gt;= 18 or accompagne)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>False</code></span>",
          "<span class=\"option-text\"><code>17</code></span>",
          "<span class=\"option-text\"><code>18</code></span>",
          "<span class=\"option-text\"><code>True</code></span>"
        ],
        "answer": 3,
        "explanation": "<p><code>age &gt;= 18</code> est faux, mais <code>accompagne</code> est vrai. Avec <code>or</code>, une seule condition vraie suffit.</p>",
        "feedback": "<p><code>age &gt;= 18</code> est faux, mais <code>accompagne</code> est vrai. Avec <code>or</code>, une seule condition vraie suffit.</p>\n<p>A correspondrait ici à une combinaison avec <code>and</code>. B et C sont des nombres : une comparaison combinée à ces booléens donne un booléen.</p>"
      },
      {
        "title": "Choisir une branche",
        "prompt": "<p>Que s’affiche-t-il ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>note = 10\nif note &gt; 10:\n    print(&quot;A&quot;)\nelif note == 10:\n    print(&quot;B&quot;)\nelse:\n    print(&quot;C&quot;)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>A</code></span>",
          "<span class=\"option-text\"><code>B</code></span>",
          "<span class=\"option-text\"><code>C</code></span>",
          "<span class=\"option-text\"><code>A</code> puis <code>B</code></span>"
        ],
        "answer": 1,
        "explanation": "<p><code>10 &gt; 10</code> est faux, mais <code>10 == 10</code> est vrai. Seul le bloc <code>elif</code> s’exécute.</p>",
        "feedback": "<p><code>10 &gt; 10</code> est faux, mais <code>10 == 10</code> est vrai. Seul le bloc <code>elif</code> s’exécute.</p>\n<p>A confond <code>&gt;</code> et <code>&gt;=</code>. C ignore le cas d’égalité. Une chaîne <code>if / elif / else</code> exécute un seul de ses blocs.</p>"
      },
      {
        "title": "Boucle for et accumulateur",
        "prompt": "<p>Quelle valeur est affichée ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>total = 0\nfor i in range(2, 5):\n    total += i\nprint(total)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>14</code></span>",
          "<span class=\"option-text\"><code>5</code></span>",
          "<span class=\"option-text\"><code>9</code></span>",
          "<span class=\"option-text\"><code>4</code></span>"
        ],
        "answer": 2,
        "explanation": "<p><code>range(2, 5)</code> donne 2, 3 et 4. Leur somme vaut 9.</p>",
        "feedback": "<p><code>range(2, 5)</code> donne 2, 3 et 4. Leur somme vaut 9.</p>\n<p>A inclut à tort 5. B est la borne exclue. D est seulement la dernière valeur de <code>i</code>, pas le total.</p>"
      },
      {
        "title": "Boucle while",
        "prompt": "<p>Quelle valeur est affichée ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>x = 1\nwhile x &lt; 5:\n    x = x * 2\nprint(x)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>8</code></span>",
          "<span class=\"option-text\"><code>4</code></span>",
          "<span class=\"option-text\"><code>5</code></span>",
          "<span class=\"option-text\">La boucle ne s’arrête pas.</span>"
        ],
        "answer": 0,
        "explanation": "<p><code>x</code> passe de 1 à 2, puis 4, puis 8. À 8, la condition est fausse et la boucle s’arrête.</p>",
        "feedback": "<p><code>x</code> passe de 1 à 2, puis 4, puis 8. À 8, la condition est fausse et la boucle s’arrête.</p>\n<p>À 4, le test est encore vrai. Le programme n’atteint pas forcément exactement la borne 5. La variable évolue et permet l’arrêt.</p>"
      },
      {
        "title": "Indices et inversion d’une liste",
        "prompt": "<p>Que contient <code>inverse</code> à la fin ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [3, 8, 5]\ninverse = []\ni = len(nombres) - 1\nwhile i &gt;= 0:\n    inverse.append(nombres[i])\n    i -= 1</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>[3, 5, 8]</code></span>",
          "<span class=\"option-text\"><code>[2, 1, 0]</code></span>",
          "<span class=\"option-text\"><code>[3, 8, 5]</code></span>",
          "<span class=\"option-text\"><code>[5, 8, 3]</code></span>"
        ],
        "answer": 3,
        "explanation": "<p>Les indices parcourus sont 2, 1 et 0. On ajoute les valeurs à ces indices, soit 5, 8 et 3.</p>",
        "feedback": "<p>Les indices parcourus sont 2, 1 et 0. On ajoute les valeurs à ces indices, soit 5, 8 et 3.</p>\n<p>A trie les valeurs au lieu d’inverser l’ordre initial. B contient les indices, pas les valeurs. C ne change pas l’ordre.</p>"
      },
      {
        "title": "Échanger deux variables",
        "prompt": "<p>Après <code>a = 6</code> et <code>b = 2</code>, quelle suite échange correctement leurs valeurs ?</p>",
        "options": [
          "<span class=\"option-text\"><code>a = b</code> puis <code>b = a</code></span>",
          "<span class=\"option-text\"><code>temp = a</code> puis <code>a = b</code> puis <code>b = temp</code></span>",
          "<span class=\"option-text\"><code>temp = b</code> puis <code>a = temp</code> puis <code>b = a</code></span>",
          "<span class=\"option-text\"><code>temp = a</code> puis <code>b = temp</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>La variable temporaire conserve 6 pendant que <code>a</code> devient 2. Puis <code>b</code> reçoit 6.</p>",
        "feedback": "<p>La variable temporaire conserve 6 pendant que <code>a</code> devient 2. Puis <code>b</code> reçoit 6.</p>\n<p>A et C produisent deux valeurs égales à 2. D remplace seulement <code>b</code> par 6 et laisse <code>a</code> à 6.</p>"
      },
      {
        "title": "Filtrer et compter",
        "prompt": "<p>Quel couple de résultats est affiché ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>valides = []\nfor note in [8, 10, 14, 7]:\n    if note &gt;= 10:\n        valides.append(note)\nprint(valides, len(valides))</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>[10, 14] 2</code></span>",
          "<span class=\"option-text\"><code>[14] 1</code></span>",
          "<span class=\"option-text\"><code>[10, 14] 24</code></span>",
          "<span class=\"option-text\"><code>[8, 10, 14, 7] 4</code></span>"
        ],
        "answer": 0,
        "explanation": "<p>10 et 14 satisfont le test. La liste contient deux éléments et <code>len()</code> renvoie 2.</p>",
        "feedback": "<p>10 et 14 satisfont le test. La liste contient deux éléments et <code>len()</code> renvoie 2.</p>\n<p>B oublie l’égalité autorisée par <code>&gt;=</code>. C donne la somme des notes au lieu de la longueur. D ne filtre aucune note.</p>"
      },
      {
        "title": "Maximum avec des nombres négatifs",
        "prompt": "<p>Pour rechercher le maximum de <code>[-7, -2, -9]</code>, quelle initialisation est fiable ?</p>",
        "options": [
          "<span class=\"option-text\"><code>maximum = 0</code></span>",
          "<span class=\"option-text\"><code>maximum = -1</code></span>",
          "<span class=\"option-text\"><code>maximum = nombres[0]</code></span>",
          "<span class=\"option-text\"><code>maximum = len(nombres)</code></span>"
        ],
        "answer": 2,
        "explanation": "<p>Le premier élément est une valeur candidate de la liste. Le parcours permet ensuite de trouver -2. La liste doit être non vide.</p>",
        "feedback": "<p>Le premier élément est une valeur candidate de la liste. Le parcours permet ensuite de trouver -2. La liste doit être non vide.</p>\n<p>0, -1 et la longueur 3 sont tous supérieurs aux éléments : ils resteraient à tort le maximum.</p>"
      },
      {
        "title": "Rechercher la première occurrence",
        "prompt": "<p>Que vaut <code>position</code> à la fin ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>nombres = [5, 2, 5]\nposition = -1\nfor i in range(len(nombres)):\n    if nombres[i] == 5 and position == -1:\n        position = i</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>2</code></span>",
          "<span class=\"option-text\"><code>5</code></span>",
          "<span class=\"option-text\"><code>-1</code></span>",
          "<span class=\"option-text\"><code>0</code></span>"
        ],
        "answer": 3,
        "explanation": "<p>Le premier 5 est à l’indice 0. Le test <code>position == -1</code> empêche de remplacer cette première position.</p>",
        "feedback": "<p>Le premier 5 est à l’indice 0. Le test <code>position == -1</code> empêche de remplacer cette première position.</p>\n<p>A serait l’indice de la dernière occurrence. B est la valeur recherchée. C signifie absence, alors que 5 est présent.</p>"
      },
      {
        "title": "Décomposer les chiffres",
        "prompt": "<p>Quel total est affiché ?</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>reste = 402\ntotal = 0\nwhile reste &gt; 0:\n    total += reste % 10\n    reste = reste // 10\nprint(total)</code></pre></div>",
        "options": [
          "<span class=\"option-text\"><code>3</code></span>",
          "<span class=\"option-text\"><code>6</code></span>",
          "<span class=\"option-text\"><code>402</code></span>",
          "<span class=\"option-text\"><code>2</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>Les chiffres extraits sont 2, 0 puis 4. Leur somme vaut 6. <code>% 10</code> extrait le dernier chiffre et <code>// 10</code> le retire.</p>",
        "feedback": "<p>Les chiffres extraits sont 2, 0 puis 4. Leur somme vaut 6. <code>% 10</code> extrait le dernier chiffre et <code>// 10</code> le retire.</p>\n<p>A est le nombre de chiffres. C est le nombre initial. D ne compte que le premier chiffre extrait.</p>"
      },
      {
        "title": "Facteurs premiers disponibles",
        "prompt": "<p>On décompose 60 en divisant autant de fois que possible par chaque valeur de <code>premiers = [2, 3]</code>. Quels facteurs et quel reste obtient-on ?</p>",
        "options": [
          "<span class=\"option-text\">Facteurs <code>[2, 2, 3]</code>, reste <code>5</code> : décomposition incomplète.</span>",
          "<span class=\"option-text\">Facteurs <code>[2, 3]</code>, reste <code>10</code> : décomposition incomplète.</span>",
          "<span class=\"option-text\">Facteurs <code>[2, 2, 3, 5]</code>, reste <code>1</code> : décomposition complète.</span>",
          "<span class=\"option-text\">Facteurs <code>[2, 2, 3]</code>, reste <code>1</code> : décomposition complète.</span>"
        ],
        "answer": 0,
        "explanation": "<p>60 devient 30, puis 15 après deux divisions par 2, puis 5 après une division par 3. Le facteur 5 manque à la liste fournie.</p>",
        "feedback": "<p>60 devient 30, puis 15 après deux divisions par 2, puis 5 après une division par 3. Le facteur 5 manque à la liste fournie.</p>\n<p>B oublie la répétition de la division par 2. C ajoute un facteur non fourni. D fait disparaître le reste 5.</p>"
      },
      {
        "title": "Parcourir trois voisins",
        "prompt": "<p>Pour comparer <code>valeurs[i]</code>, <code>valeurs[i + 1]</code> et <code>valeurs[i + 2]</code>, quelle boucle parcourt tous les départs valides ?</p>",
        "options": [
          "<span class=\"option-text\"><code>range(len(valeurs))</code></span>",
          "<span class=\"option-text\"><code>range(len(valeurs) - 1)</code></span>",
          "<span class=\"option-text\"><code>range(len(valeurs) - 2)</code></span>",
          "<span class=\"option-text\"><code>range(2, len(valeurs))</code></span>"
        ],
        "answer": 2,
        "explanation": "<p>Le dernier départ possible est <code>len(valeurs) - 3</code>. La borne finale exclue doit donc être <code>len(valeurs) - 2</code>.</p>",
        "feedback": "<p>Le dernier départ possible est <code>len(valeurs) - 3</code>. La borne finale exclue doit donc être <code>len(valeurs) - 2</code>.</p>\n<p>A et B finissent par accéder après la fin de la liste. D ignore les premiers départs et conduit aussi à dépasser la fin.</p>"
      },
      {
        "title": "Motifs avec chevauchement",
        "prompt": "<p>À quels indices commence le motif <code>[2, 2]</code> dans <code>[2, 2, 2, 3]</code> ?</p>",
        "options": [
          "<span class=\"option-text\"><code>[0]</code></span>",
          "<span class=\"option-text\"><code>[0, 2]</code></span>",
          "<span class=\"option-text\"><code>[1, 2]</code></span>",
          "<span class=\"option-text\"><code>[0, 1]</code></span>"
        ],
        "answer": 3,
        "explanation": "<p>Le motif apparaît aux indices 0 et 1. Les deux occurrences partagent l’élément d’indice 1 ; les chevauchements sont autorisés.</p>",
        "feedback": "<p>Le motif apparaît aux indices 0 et 1. Les deux occurrences partagent l’élément d’indice 1 ; les chevauchements sont autorisés.</p>\n<p>A manque la seconde occurrence. À l’indice 2, la fenêtre est <code>[2, 3]</code>, qui ne correspond pas au motif.</p>"
      },
      {
        "title": "Changements de signe",
        "prompt": "<p>Dans <code>[-2, 0, 3, -1]</code>, quels sont les indices de départ des couples de signes opposés stricts ?</p>",
        "options": [
          "<span class=\"option-text\"><code>[0, 1, 2]</code></span>",
          "<span class=\"option-text\"><code>[2]</code></span>",
          "<span class=\"option-text\"><code>[0, 2]</code></span>",
          "<span class=\"option-text\"><code>[]</code></span>"
        ],
        "answer": 1,
        "explanation": "<p>Seul le couple <code>[3, -1]</code>, qui commence à l’indice 2, possède des signes opposés stricts. Les couples impliquant zéro sont exclus.</p>",
        "feedback": "<p>Seul le couple <code>[3, -1]</code>, qui commence à l’indice 2, possède des signes opposés stricts. Les couples impliquant zéro sont exclus.</p>\n<p>A et C comptent un passage impliquant zéro. D oublie le passage du positif au négatif.</p>"
      },
      {
        "title": "Une erreur au maximum",
        "prompt": "<p>Pour accepter les fenêtres qui diffèrent d’un motif sur au plus une position, quelle règle est correcte ?</p>",
        "options": [
          "<span class=\"option-text\">Remettre le compteur à 0 à chaque fenêtre, compter les inégalités, puis tester <code>differences &lt;= 1</code>.</span>",
          "<span class=\"option-text\">Remettre le compteur à 0 avant chaque comparaison et tester <code>differences == 1</code>.</span>",
          "<span class=\"option-text\">Conserver le même compteur sur toutes les fenêtres et tester <code>differences &lt;= 1</code>.</span>",
          "<span class=\"option-text\">Compter les égalités et tester <code>differences &gt; 1</code>.</span>"
        ],
        "answer": 0,
        "explanation": "<p>Chaque fenêtre doit être évaluée indépendamment. « Au plus une » accepte zéro ou une différence, donc <code>&lt;= 1</code>.</p>",
        "feedback": "<p>Chaque fenêtre doit être évaluée indépendamment. « Au plus une » accepte zéro ou une différence, donc <code>&lt;= 1</code>.</p>\n<p>B efface les différences précédentes et exclut les correspondances exactes. C mélange plusieurs fenêtres. D compte le mauvais événement.</p>"
      },
      {
        "title": "Vérifier un ordre croissant",
        "prompt": "<p>Quel test repère une descente dans une liste, en autorisant les valeurs égales ?</p>",
        "options": [
          "<span class=\"option-text\"><code>nombres[i] &gt;= nombres[i + 1]</code></span>",
          "<span class=\"option-text\"><code>nombres[i] == nombres[i + 1]</code></span>",
          "<span class=\"option-text\"><code>nombres[i] &gt; nombres[i + 1]</code></span>",
          "<span class=\"option-text\"><code>nombres[i] &lt; nombres[i + 1]</code></span>"
        ],
        "answer": 2,
        "explanation": "<p>Une descente existe lorsque la valeur actuelle est strictement supérieure à la suivante.</p>",
        "feedback": "<p>Une descente existe lorsque la valeur actuelle est strictement supérieure à la suivante.</p>\n<p>A rejetterait aussi les égalités. B repère seulement les égalités. D repère une montée, qui respecte l’ordre croissant.</p>"
      },
      {
        "title": "Un passage de tri à bulles",
        "prompt": "<p>Après un passage croissant de gauche à droite sur <code>[3, 1, 4, 2]</code>, quelle liste obtient-on ?</p>",
        "options": [
          "<span class=\"option-text\"><code>[1, 2, 3, 4]</code></span>",
          "<span class=\"option-text\"><code>[1, 3, 4, 2]</code></span>",
          "<span class=\"option-text\"><code>[4, 3, 2, 1]</code></span>",
          "<span class=\"option-text\"><code>[1, 3, 2, 4]</code></span>"
        ],
        "answer": 3,
        "explanation": "<p>On échange 3 et 1, on conserve 3 et 4, puis on échange 4 et 2. Le maximum 4 arrive à la fin.</p>",
        "feedback": "<p>On échange 3 et 1, on conserve 3 et 4, puis on échange 4 et 2. Le maximum 4 arrive à la fin.</p>\n<p>A correspond au tri complet. B s’arrête avant le dernier échange. C correspond à l’ordre décroissant.</p>"
      },
      {
        "title": "Un passage sans échange",
        "prompt": "<p>Combien de passages la version optimisée du tri à bulles effectue-t-elle pour constater que <code>[1, 2, 3, 4]</code> est déjà triée ?</p>",
        "options": [
          "<span class=\"option-text\">0</span>",
          "<span class=\"option-text\">1</span>",
          "<span class=\"option-text\">3</span>",
          "<span class=\"option-text\">4</span>"
        ],
        "answer": 1,
        "explanation": "<p>Un passage vérifie tous les voisins sans réaliser d’échange. Le booléen reste faux et <code>break</code> arrête les passages suivants.</p>",
        "feedback": "<p>Un passage vérifie tous les voisins sans réaliser d’échange. Le booléen reste faux et <code>break</code> arrête les passages suivants.</p>\n<p>0 ne vérifie aucun couple. La version non optimisée ferait 3 passages. La longueur 4 n’est pas le nombre de passages requis ici.</p>"
      }
    ],
    "conventions": "<ul><li><code>=</code> affecte ; <code>==</code> compare.</li><li>Les indices commencent à 0.</li><li>La borne finale de <code>range</code> est exclue.</li><li><code>%</code> donne le reste ; <code>//</code> donne le quotient arrondi vers le bas.</li></ul>",
    "next": "../supports/06_fonctions.html",
    "nextLabel": "Découvrir les fonctions"
  },
  "functions": {
    "title": "06 — Comprendre et écrire des fonctions",
    "subtitle": "Nommer, découper et réutiliser des traitements",
    "slides": [
      {
        "title": "Une fonction, c'est quoi ?",
        "html": "<p>Une fonction est un bloc d&#x27;instructions auquel on donne un nom. On l&#x27;écrit une fois, puis on l&#x27;appelle chaque fois que le programme a besoin de réaliser cette action.</p>\n<p>Sans fonction, on risque de recopier le même calcul :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>first_total = 8 * 3\nsecond_total = 12 * 2\nprint(first_total, second_total)</code></pre></div>\n<p>On peut nommer ce calcul et le réutiliser :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>def calculate_total(unit_price, quantity):\n    total = unit_price * quantity\n    return total\n\nfirst_total = calculate_total(8, 3)\nsecond_total = calculate_total(12, 2)\nprint(first_total, second_total)  # 24 24</code></pre></div>\n<p>La définition commence par <code>def</code>. Le code indenté forme le corps de la fonction. La fonction ne s&#x27;exécute pas à sa définition : elle s&#x27;exécute lors de chaque appel à <code>calculate_total(...)</code>.</p>\n<h3>Exercice 1 — Calcul réutilisable</h3>\n<p>Écrire une fonction <code>calculate_area(width, height)</code> qui renvoie l&#x27;aire d&#x27;un rectangle. L&#x27;appeler pour les rectangles de dimensions <code>4 × 3</code> et <code>7 × 2</code>.</p>\n<p><strong>Résultats attendus :</strong> <code>12</code> et <code>14</code>.</p>",
        "kind": "Notion",
        "group": "01 · Comprendre une fonction"
      },
      {
        "title": "Paramètres et arguments",
        "html": "<p>Les <strong>paramètres</strong> sont les noms écrits dans la définition. Ils reçoivent les données dont la fonction a besoin. Les <strong>arguments</strong> sont les valeurs données lors de l&#x27;appel.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>def is_even(number):       # number est un paramètre\n    return number % 2 == 0\n\nresult = is_even(8)        # 8 est l&#x27;argument\nprint(result)              # True</code></pre></div>\n<p>Un même paramètre peut recevoir des valeurs différentes à des appels différents. Il n&#x27;est pas nécessaire de réécrire le corps de la fonction.</p>\n<h3>Exercice 2 — Tester plusieurs valeurs</h3>\n<p>Écrire une fonction <code>is_positive(number)</code> qui renvoie <code>True</code> si <code>number</code> est supérieur à zéro, et <code>False</code> sinon. La tester avec <code>5</code>, <code>0</code> et <code>-3</code>.</p>\n<p><strong>Résultats attendus :</strong> <code>True</code>, <code>False</code>, <code>False</code>.</p>",
        "kind": "Notion",
        "group": "01 · Comprendre une fonction"
      },
      {
        "title": "`return` renvoie un résultat ; `print` l'affiche",
        "html": "<p><code>return</code> transmet une valeur au code qui a appelé la fonction. Cette valeur peut être affichée, stockée ou réutilisée dans un autre calcul.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>def double(number):\n    return number * 2\n\nresult = double(6)\nprint(result + 1)  # 13</code></pre></div>\n<p><code>print</code> affiche un résultat à l&#x27;écran mais ne le renvoie pas pour un calcul suivant. Pour construire des fonctions réutilisables, renvoyer une valeur avec <code>return</code>, puis laisser le programme appelant décider quoi en faire.</p>\n<h3>Exercice 3 — Renvoi ou affichage ?</h3>\n<p>Écrire <code>calculate_discount(price, discount)</code> qui renvoie <code>price - discount</code>. Appeler la fonction avec <code>50</code> et <code>8</code>, stocker le résultat dans <code>final_price</code>, puis afficher cette variable.</p>\n<p><strong>Résultat attendu :</strong> <code>42</code>.</p>",
        "kind": "Notion",
        "group": "01 · Comprendre une fonction"
      },
      {
        "title": "Écrire des fonctions faciles à réutiliser",
        "html": "<p>Une fonction claire réalise une tâche identifiable, reçoit ses données par ses paramètres et renvoie son résultat. Ses variables de calcul restent locales à la fonction : le reste du programme ne dépend pas d&#x27;une variable globale cachée.</p>\n<p>Quelques réflexes :</p>\n<ul><li>choisir un nom anglais explicite, souvent un verbe : <code>calculate_total</code>, <code>is_even</code>, <code>partition</code> ;</li><li>donner aux paramètres des noms qui décrivent les données reçues ;</li><li>garder une responsabilité principale par fonction ;</li><li>éviter de recopier le même traitement ;</li><li>tester plusieurs arguments, y compris les cas limites.</li></ul>\n<p>Dans l&#x27;exemple suivant, <code>is_even</code> répond à une seule question et se teste indépendamment :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>def is_even(number):\n    return number % 2 == 0\n\nprint(is_even(8))   # True\nprint(is_even(11))  # False</code></pre></div>",
        "kind": "Notion",
        "group": "02 · Paramètres et résultats"
      },
      {
        "title": "Les fonctions et les paradigmes de programmation",
        "html": "<p>Un <strong>paradigme</strong> est une manière d&#x27;organiser et de penser un programme. Dans ce parcours, les fonctions servent surtout la programmation <strong>procédurale et structurée</strong> : on découpe un problème en étapes nommées, puis on les assemble dans un ordre compréhensible.</p>\n<p>La programmation fonctionnelle est un paradigme plus spécifique qui s&#x27;appuie notamment sur des fonctions comme valeurs, des transformations de données et la limitation des effets de bord. Écrire une fonction Python avec <code>def</code> ne signifie donc pas, à lui seul, qu&#x27;on programme selon le paradigme fonctionnel.</p>\n<h3>Pourquoi cela aide-t-il dans un vrai programme ?</h3>\n<p>Les fonctions rendent le programme plus lisible, limitent les répétitions, isolent les erreurs et permettent de tester chaque partie séparément. Dans un projet plus grand, on peut répartir les fonctions entre des fichiers et travailler sur des parties bien définies.</p>\n<p>Quick Sort montre cette organisation : <code>partition</code> place le pivot et renvoie son indice ; <code>quick_sort</code> utilise cet indice pour traiter les deux zones restantes. Chaque nom indique une responsabilité, et la fonction <code>quick_sort</code> se rappelle avec des zones plus petites.</p>",
        "kind": "Notion",
        "group": "02 · Paramètres et résultats"
      },
      {
        "title": "À vous de jouer",
        "html": "<p>Avant le dernier challenge, écrivez une fonction qui réalise une tâche courte et testez-la avec plusieurs valeurs :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>def clamp(number, minimum, maximum):\n    # Renvoyer minimum si number est trop petit,\n    # maximum s&#x27;il est trop grand, sinon number.\n    pass</code></pre></div>\n<p>Testez <code>clamp(12, 0, 10)</code>, <code>clamp(-2, 0, 10)</code> et <code>clamp(5, 0, 10)</code>.</p>\n<p><strong>Résultats attendus :</strong> <code>10</code>, <code>0</code>, <code>5</code>.</p>\n<p>Vérifiez que la fonction ne contient ni <code>input()</code> ni <code>print()</code> : elle reçoit ses paramètres et renvoie son résultat. Le programme appelant reste libre de choisir quoi faire de ce résultat.</p>",
        "kind": "Challenge",
        "group": "03 · Réutiliser et structurer"
      },
      {
        "title": "Prochaine étape — Le challenge Quick Sort",
        "html": "<p>Vous allez maintenant utiliser ces notions pour organiser un tri en deux fonctions, puis faire appeler <code>quick_sort</code> par elle-même sur des listes plus petites.</p>",
        "kind": "Notion",
        "group": "03 · Réutiliser et structurer"
      }
    ],
    "next": "../supports/07_quick_sort.html",
    "nextLabel": "Relever le challenge Quick Sort",
    "source": "# 06 — Comprendre et écrire des fonctions\n\n**Objectif :** apprendre à découper un programme en actions nommées, à transmettre des données à ces actions et à récupérer leurs résultats.\n\nCe chapitre prépare au challenge Quick Sort, qui est organisé autour de deux fonctions : `partition` et `quick_sort`.\n\n## Une fonction, c'est quoi ?\n\nUne fonction est un bloc d'instructions auquel on donne un nom. On l'écrit une fois, puis on l'appelle chaque fois que le programme a besoin de réaliser cette action.\n\nSans fonction, on risque de recopier le même calcul :\n\n```python\nfirst_total = 8 * 3\nsecond_total = 12 * 2\nprint(first_total, second_total)\n```\n\nOn peut nommer ce calcul et le réutiliser :\n\n```python\ndef calculate_total(unit_price, quantity):\n    total = unit_price * quantity\n    return total\n\nfirst_total = calculate_total(8, 3)\nsecond_total = calculate_total(12, 2)\nprint(first_total, second_total)  # 24 24\n```\n\nLa définition commence par `def`. Le code indenté forme le corps de la fonction. La fonction ne s'exécute pas à sa définition : elle s'exécute lors de chaque appel à `calculate_total(...)`.\n\n### Exercice 1 — Calcul réutilisable\n\nÉcrire une fonction `calculate_area(width, height)` qui renvoie l'aire d'un rectangle. L'appeler pour les rectangles de dimensions `4 × 3` et `7 × 2`.\n\n**Résultats attendus :** `12` et `14`.\n\n## Paramètres et arguments\n\nLes **paramètres** sont les noms écrits dans la définition. Ils reçoivent les données dont la fonction a besoin. Les **arguments** sont les valeurs données lors de l'appel.\n\n```python\ndef is_even(number):       # number est un paramètre\n    return number % 2 == 0\n\nresult = is_even(8)        # 8 est l'argument\nprint(result)              # True\n```\n\nUn même paramètre peut recevoir des valeurs différentes à des appels différents. Il n'est pas nécessaire de réécrire le corps de la fonction.\n\n### Exercice 2 — Tester plusieurs valeurs\n\nÉcrire une fonction `is_positive(number)` qui renvoie `True` si `number` est supérieur à zéro, et `False` sinon. La tester avec `5`, `0` et `-3`.\n\n**Résultats attendus :** `True`, `False`, `False`.\n\n## `return` renvoie un résultat ; `print` l'affiche\n\n`return` transmet une valeur au code qui a appelé la fonction. Cette valeur peut être affichée, stockée ou réutilisée dans un autre calcul.\n\n```python\ndef double(number):\n    return number * 2\n\nresult = double(6)\nprint(result + 1)  # 13\n```\n\n`print` affiche un résultat à l'écran mais ne le renvoie pas pour un calcul suivant. Pour construire des fonctions réutilisables, renvoyer une valeur avec `return`, puis laisser le programme appelant décider quoi en faire.\n\n### Exercice 3 — Renvoi ou affichage ?\n\nÉcrire `calculate_discount(price, discount)` qui renvoie `price - discount`. Appeler la fonction avec `50` et `8`, stocker le résultat dans `final_price`, puis afficher cette variable.\n\n**Résultat attendu :** `42`.\n\n## Écrire des fonctions faciles à réutiliser\n\nUne fonction claire réalise une tâche identifiable, reçoit ses données par ses paramètres et renvoie son résultat. Ses variables de calcul restent locales à la fonction : le reste du programme ne dépend pas d'une variable globale cachée.\n\nQuelques réflexes :\n\n- choisir un nom anglais explicite, souvent un verbe : `calculate_total`, `is_even`, `partition` ;\n- donner aux paramètres des noms qui décrivent les données reçues ;\n- garder une responsabilité principale par fonction ;\n- éviter de recopier le même traitement ;\n- tester plusieurs arguments, y compris les cas limites.\n\nDans l'exemple suivant, `is_even` répond à une seule question et se teste indépendamment :\n\n```python\ndef is_even(number):\n    return number % 2 == 0\n\nprint(is_even(8))   # True\nprint(is_even(11))  # False\n```\n\n## Les fonctions et les paradigmes de programmation\n\nUn **paradigme** est une manière d'organiser et de penser un programme. Dans ce parcours, les fonctions servent surtout la programmation **procédurale et structurée** : on découpe un problème en étapes nommées, puis on les assemble dans un ordre compréhensible.\n\nLa programmation fonctionnelle est un paradigme plus spécifique qui s'appuie notamment sur des fonctions comme valeurs, des transformations de données et la limitation des effets de bord. Écrire une fonction Python avec `def` ne signifie donc pas, à lui seul, qu'on programme selon le paradigme fonctionnel.\n\n### Pourquoi cela aide-t-il dans un vrai programme ?\n\nLes fonctions rendent le programme plus lisible, limitent les répétitions, isolent les erreurs et permettent de tester chaque partie séparément. Dans un projet plus grand, on peut répartir les fonctions entre des fichiers et travailler sur des parties bien définies.\n\nQuick Sort montre cette organisation : `partition` place le pivot et renvoie son indice ; `quick_sort` utilise cet indice pour traiter les deux zones restantes. Chaque nom indique une responsabilité, et la fonction `quick_sort` se rappelle avec des zones plus petites.\n\n## À vous de jouer\n\nAvant le dernier challenge, écrivez une fonction qui réalise une tâche courte et testez-la avec plusieurs valeurs :\n\n```python\ndef clamp(number, minimum, maximum):\n    # Renvoyer minimum si number est trop petit,\n    # maximum s'il est trop grand, sinon number.\n    pass\n```\n\nTestez `clamp(12, 0, 10)`, `clamp(-2, 0, 10)` et `clamp(5, 0, 10)`.\n\n**Résultats attendus :** `10`, `0`, `5`.\n\nVérifiez que la fonction ne contient ni `input()` ni `print()` : elle reçoit ses paramètres et renvoie son résultat. Le programme appelant reste libre de choisir quoi faire de ce résultat.\n\n## Prochaine étape — Le challenge Quick Sort\n\nVous allez maintenant utiliser ces notions pour organiser un tri en deux fonctions, puis faire appeler `quick_sort` par elle-même sur des listes plus petites.\n",
    "sourceName": "06_fonctions.md"
  },
  "quickSort": {
    "title": "07 — Challenge final : Quick Sort",
    "subtitle": "Partitionner, puis trier les sous-listes",
    "slides": [
      {
        "title": "Le défi",
        "html": "<p>Écrire un programme qui trie une liste sans utiliser <code>sort()</code> ni <code>sorted()</code>. Vous allez d&#x27;abord observer Quick Sort, puis apprendre à partitionner une seule zone et enfin à répéter cette opération sur les sous-listes.</p>\n<p>Le programme doit modifier la liste en place et fonctionner avec une liste vide, une seule valeur, des valeurs déjà rangées et des doublons.</p>",
        "kind": "Challenge",
        "group": "01 · Découvrir le défi"
      },
      {
        "title": "Observer Quick Sort pas à pas",
        "html": "<p>Avant de lire la méthode, lancez l&#x27;animation. Repérez le pivot, les valeurs qui passent à sa gauche et la manière dont l&#x27;algorithme reprend sur les deux zones. Utilisez les commandes pour avancer, reculer ou lire les étapes automatiquement.</p>\n<p>Pendant l&#x27;observation, demandez-vous :</p>\n<ul><li>À quel moment le pivot rejoint-il sa position définitive ?</li><li>Quelle partie de la liste est encore en cours de traitement ?</li><li>Pourquoi les deux zones peuvent-elles ensuite être traitées séparément ?</li></ul>",
        "kind": "Notion",
        "group": "01 · Découvrir le défi",
        "demo": {
          "kind": "quick",
          "values": [
            6,
            3,
            8,
            5,
            2,
            7,
            4
          ]
        }
      },
      {
        "title": "Étape 1 — Choisir un pivot",
        "html": "<p>Le <strong>pivot</strong> est la valeur qui sert de repère pendant une partition. Dans ce chapitre, on choisit le dernier élément de la zone.</p>\n<p>Avec <code>[6, 3, 8, 5, 2]</code>, le pivot est <code>2</code>. La partition place les valeurs inférieures ou égales au pivot à gauche, et les valeurs supérieures à droite. Ici, le pivot rejoint le début : <code>[2, 3, 8, 5, 6]</code>.</p>\n<h3>Mini-défi 1</h3>\n<p>Pour <code>[7, 4, 9, 3, 6]</code>, identifier le pivot, puis indiquer quelles valeurs doivent finir à sa gauche et lesquelles à sa droite. Ne cherchez pas encore à trier ces deux groupes.</p>",
        "kind": "Notion",
        "group": "02 · Comprendre une partition"
      },
      {
        "title": "Étape 2 — Partitionner une zone",
        "html": "<p>Une partition traite seulement les indices <code>low</code> à <code>high</code>. Elle utilise deux repères :</p>\n<ul><li><code>current</code> examine les valeurs de gauche à droite ;</li><li><code>boundary</code> marque la fin de la zone des valeurs inférieures ou égales au pivot.</li></ul>\n<p>Au départ, <code>boundary = low - 1</code>. Quand <code>values[current] &lt;= pivot</code>, on avance <code>boundary</code> et on échange les deux valeurs si nécessaire. À la fin, on échange le pivot avec la valeur juste après la zone de gauche.</p>\n<h3>Exemple suivi</h3>\n<p>Pour la zone <code>[6, 3, 8, 5, 2]</code>, le pivot vaut <code>2</code>. <code>current</code> examine <code>6</code>, <code>3</code>, <code>8</code> et <code>5</code> : aucun ne va à gauche du pivot. L&#x27;échange final place <code>2</code> à l&#x27;indice 0. Le pivot est maintenant à sa position définitive ; les valeurs à sa droite ne sont pas encore triées.</p>\n<h3>Mini-défi 2</h3>\n<p>Pour la liste <code>[6, 3, 8, 5, 2]</code>, compléter le tableau de suivi sur papier :</p>\n<div class=\"table-wrap\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">Valeur examinée</th><th scope=\"col\">Est-elle <code>&lt;= 2</code> ?</th><th scope=\"col\">Nouvelle limite de gauche</th></tr></thead><tbody><tr><td>6</td><td></td><td></td></tr><tr><td>3</td><td></td><td></td></tr><tr><td>8</td><td></td><td></td></tr><tr><td>5</td><td></td><td></td></tr></tbody></table></div>\n<p>Expliquer ensuite pourquoi le pivot termine à l&#x27;indice 0.</p>",
        "kind": "Notion",
        "group": "02 · Comprendre une partition"
      },
      {
        "title": "Étape 3 — Écrire la fonction de partition",
        "html": "<p>Une fonction reçoit la liste et les bornes de la zone. Elle déplace les valeurs et renvoie l&#x27;indice final du pivot.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>def partition(values, low, high):\n    pivot = values[high]\n    boundary = low - 1\n\n    for current in range(low, high):\n        if values[current] &lt;= pivot:\n            boundary += 1\n            values[boundary], values[current] = values[current], values[boundary]\n\n    # À compléter : placer le pivot après la zone de gauche,\n    # puis renvoyer son indice.</code></pre></div>\n<h3>Mini-défi 3</h3>\n<p>Compléter les deux dernières opérations. Tester <code>partition(values, 0, len(values) - 1)</code> avec <code>[6, 3, 8, 5, 2]</code>.</p>\n<p><strong>À vérifier :</strong> la fonction renvoie <code>0</code>, la valeur à l&#x27;indice 0 est <code>2</code>, et toutes les valeurs à gauche du pivot sont inférieures ou égales à <code>2</code>. La zone droite n&#x27;a pas encore besoin d&#x27;être triée.</p>",
        "kind": "Notion",
        "group": "02 · Comprendre une partition"
      },
      {
        "title": "Étape 4 — S'arrêter sur une zone assez petite",
        "html": "<p>Après une partition, Quick Sort traite séparément la zone de gauche et la zone de droite. Une zone vide ou composée d&#x27;une seule valeur est déjà triée : il faut arrêter d&#x27;appeler la fonction.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>if low &lt; high:\n    # Il reste au moins deux valeurs à traiter.\n    ...</code></pre></div>\n<p>Cette condition est le <strong>cas d&#x27;arrêt</strong>. Sans lui, les appels récursifs continueraient sans fin.</p>\n<h3>Mini-défi 4</h3>\n<p>Pour les bornes <code>(2, 1)</code>, <code>(4, 4)</code> et <code>(1, 3)</code>, lesquelles décrivent une zone contenant au moins deux valeurs ? Justifier avec le test <code>low &lt; high</code>.</p>",
        "kind": "Notion",
        "group": "03 · Construire Quick Sort"
      },
      {
        "title": "Étape 5 — Traiter les deux zones",
        "html": "<p>Après avoir obtenu <code>pivot_index</code>, le pivot est terminé. On ne l&#x27;inclut donc dans aucun des deux appels suivants :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>quick_sort(values, low, pivot_index - 1)\nquick_sort(values, pivot_index + 1, high)</code></pre></div>\n<p>La fonction s&#x27;appelle elle-même sur des zones plus petites : c&#x27;est la <strong>récursion</strong>. Chaque appel répète une partition, jusqu&#x27;à ce que toutes les zones contiennent zéro ou une valeur.</p>\n<h3>Exemple de découpage</h3>\n<p>Si le pivot rejoint l&#x27;indice 3 dans une zone allant de 0 à 6, les prochains appels traitent les indices <code>0 à 2</code> et <code>4 à 6</code>. L&#x27;indice 3 est laissé de côté, car le pivot est déjà à sa place.</p>\n<h3>Mini-défi 5</h3>\n<p>Si <code>pivot_index = 2</code> et que la zone initiale va de 0 à 5, écrire les bornes des deux appels récursifs. Vérifier qu&#x27;aucun appel ne retravaille le pivot.</p>",
        "kind": "Notion",
        "group": "03 · Construire Quick Sort"
      },
      {
        "title": "Challenge final — Programmer Quick Sort",
        "html": "<p>Compléter <code>partition</code>, puis écrire <code>quick_sort</code>. Respecter les étapes dans l&#x27;ordre : cas d&#x27;arrêt, partition, appel sur la zone de gauche, appel sur la zone de droite.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>def quick_sort(values, low, high):\n    if low &lt; high:\n        pivot_index = partition(values, low, high)\n        # À compléter : traiter les zones gauche et droite.\n\n\nvalues = [6, 3, 8, 5, 2, 7, 4]\nquick_sort(values, 0, len(values) - 1)\nprint(values)</code></pre></div>\n<p><strong>Résultat attendu :</strong> <code>[2, 3, 4, 5, 6, 7, 8]</code>.</p>\n<h3>Tests du challenge</h3>\n<p>Tester également ces listes :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>[]\n[5]\n[4, 1, 4, 2, 1]\n[1, 2, 3, 4, 5]\n[5, 4, 3, 2, 1]</code></pre></div>\n<p>Vérifier que la liste de départ est modifiée en place et qu&#x27;aucune valeur n&#x27;a été perdue ou ajoutée.</p>",
        "kind": "Challenge",
        "group": "03 · Construire Quick Sort"
      },
      {
        "title": "Reculer et réfléchir",
        "html": "<p>Quick Sort s&#x27;appuie sur une règle répétée : partitionner, puis résoudre les zones plus petites de la même manière. Dans beaucoup de cas, ces découpages rendent le travail efficace ; avec un pivot très déséquilibré, il peut toutefois falloir beaucoup de partitions.</p>\n<p>À expliquer avec vos mots :</p>\n<ul><li>pourquoi le pivot n&#x27;est plus retravaillé après une partition ;</li><li>comment le cas d&#x27;arrêt empêche la récursion de continuer ;</li><li>ce qui pourrait arriver si le pivot est toujours le plus petit ou le plus grand élément.</li></ul>",
        "kind": "Notion",
        "group": "04 · Recul et bonnes pratiques"
      }
    ],
    "next": "../supports/08_presenter_code.html",
    "nextLabel": "Soigner la présentation de son code",
    "source": "# 07 — Challenge final : Quick Sort\n\n**Niveau :** avancé · **Format :** observer, décomposer, puis programmer.\n\nQuick Sort est le défi final du parcours. Il combine les listes, les indices, les comparaisons, les échanges et deux nouvelles idées : les fonctions et la récursion. Avancez étape par étape : il n'est pas nécessaire de comprendre tout l'algorithme au premier passage.\n\n**Règle de cette animation :** le pivot est toujours le dernier élément de la zone observée. Les valeurs égales au pivot vont dans la zone de gauche.\n\n## Le défi\n\nÉcrire un programme qui trie une liste sans utiliser `sort()` ni `sorted()`. Vous allez d'abord observer Quick Sort, puis apprendre à partitionner une seule zone et enfin à répéter cette opération sur les sous-listes.\n\nLe programme doit modifier la liste en place et fonctionner avec une liste vide, une seule valeur, des valeurs déjà rangées et des doublons.\n\n## Observer Quick Sort pas à pas\n\nAvant de lire la méthode, lancez l'animation. Repérez le pivot, les valeurs qui passent à sa gauche et la manière dont l'algorithme reprend sur les deux zones. Utilisez les commandes pour avancer, reculer ou lire les étapes automatiquement.\n\nPendant l'observation, demandez-vous :\n\n- À quel moment le pivot rejoint-il sa position définitive ?\n- Quelle partie de la liste est encore en cours de traitement ?\n- Pourquoi les deux zones peuvent-elles ensuite être traitées séparément ?\n\n## Étape 1 — Choisir un pivot\n\nLe **pivot** est la valeur qui sert de repère pendant une partition. Dans ce chapitre, on choisit le dernier élément de la zone.\n\nAvec `[6, 3, 8, 5, 2]`, le pivot est `2`. La partition place les valeurs inférieures ou égales au pivot à gauche, et les valeurs supérieures à droite. Ici, le pivot rejoint le début : `[2, 3, 8, 5, 6]`.\n\n### Mini-défi 1\n\nPour `[7, 4, 9, 3, 6]`, identifier le pivot, puis indiquer quelles valeurs doivent finir à sa gauche et lesquelles à sa droite. Ne cherchez pas encore à trier ces deux groupes.\n\n## Étape 2 — Partitionner une zone\n\nUne partition traite seulement les indices `low` à `high`. Elle utilise deux repères :\n\n- `current` examine les valeurs de gauche à droite ;\n- `boundary` marque la fin de la zone des valeurs inférieures ou égales au pivot.\n\nAu départ, `boundary = low - 1`. Quand `values[current] <= pivot`, on avance `boundary` et on échange les deux valeurs si nécessaire. À la fin, on échange le pivot avec la valeur juste après la zone de gauche.\n\n### Exemple suivi\n\nPour la zone `[6, 3, 8, 5, 2]`, le pivot vaut `2`. `current` examine `6`, `3`, `8` et `5` : aucun ne va à gauche du pivot. L'échange final place `2` à l'indice 0. Le pivot est maintenant à sa position définitive ; les valeurs à sa droite ne sont pas encore triées.\n\n### Mini-défi 2\n\nPour la liste `[6, 3, 8, 5, 2]`, compléter le tableau de suivi sur papier :\n\n| Valeur examinée | Est-elle `<= 2` ? | Nouvelle limite de gauche |\n| --- | --- | --- |\n| 6 |  |  |\n| 3 |  |  |\n| 8 |  |  |\n| 5 |  |  |\n\nExpliquer ensuite pourquoi le pivot termine à l'indice 0.\n\n## Étape 3 — Écrire la fonction de partition\n\nUne fonction reçoit la liste et les bornes de la zone. Elle déplace les valeurs et renvoie l'indice final du pivot.\n\n```python\ndef partition(values, low, high):\n    pivot = values[high]\n    boundary = low - 1\n\n    for current in range(low, high):\n        if values[current] <= pivot:\n            boundary += 1\n            values[boundary], values[current] = values[current], values[boundary]\n\n    # À compléter : placer le pivot après la zone de gauche,\n    # puis renvoyer son indice.\n```\n\n### Mini-défi 3\n\nCompléter les deux dernières opérations. Tester `partition(values, 0, len(values) - 1)` avec `[6, 3, 8, 5, 2]`.\n\n**À vérifier :** la fonction renvoie `0`, la valeur à l'indice 0 est `2`, et toutes les valeurs à gauche du pivot sont inférieures ou égales à `2`. La zone droite n'a pas encore besoin d'être triée.\n\n## Étape 4 — S'arrêter sur une zone assez petite\n\nAprès une partition, Quick Sort traite séparément la zone de gauche et la zone de droite. Une zone vide ou composée d'une seule valeur est déjà triée : il faut arrêter d'appeler la fonction.\n\n```python\nif low < high:\n    # Il reste au moins deux valeurs à traiter.\n    ...\n```\n\nCette condition est le **cas d'arrêt**. Sans lui, les appels récursifs continueraient sans fin.\n\n### Mini-défi 4\n\nPour les bornes `(2, 1)`, `(4, 4)` et `(1, 3)`, lesquelles décrivent une zone contenant au moins deux valeurs ? Justifier avec le test `low < high`.\n\n## Étape 5 — Traiter les deux zones\n\nAprès avoir obtenu `pivot_index`, le pivot est terminé. On ne l'inclut donc dans aucun des deux appels suivants :\n\n```python\nquick_sort(values, low, pivot_index - 1)\nquick_sort(values, pivot_index + 1, high)\n```\n\nLa fonction s'appelle elle-même sur des zones plus petites : c'est la **récursion**. Chaque appel répète une partition, jusqu'à ce que toutes les zones contiennent zéro ou une valeur.\n\n### Exemple de découpage\n\nSi le pivot rejoint l'indice 3 dans une zone allant de 0 à 6, les prochains appels traitent les indices `0 à 2` et `4 à 6`. L'indice 3 est laissé de côté, car le pivot est déjà à sa place.\n\n### Mini-défi 5\n\nSi `pivot_index = 2` et que la zone initiale va de 0 à 5, écrire les bornes des deux appels récursifs. Vérifier qu'aucun appel ne retravaille le pivot.\n\n## Challenge final — Programmer Quick Sort\n\nCompléter `partition`, puis écrire `quick_sort`. Respecter les étapes dans l'ordre : cas d'arrêt, partition, appel sur la zone de gauche, appel sur la zone de droite.\n\n```python\ndef quick_sort(values, low, high):\n    if low < high:\n        pivot_index = partition(values, low, high)\n        # À compléter : traiter les zones gauche et droite.\n\n\nvalues = [6, 3, 8, 5, 2, 7, 4]\nquick_sort(values, 0, len(values) - 1)\nprint(values)\n```\n\n**Résultat attendu :** `[2, 3, 4, 5, 6, 7, 8]`.\n\n### Tests du challenge\n\nTester également ces listes :\n\n```python\n[]\n[5]\n[4, 1, 4, 2, 1]\n[1, 2, 3, 4, 5]\n[5, 4, 3, 2, 1]\n```\n\nVérifier que la liste de départ est modifiée en place et qu'aucune valeur n'a été perdue ou ajoutée.\n\n## Reculer et réfléchir\n\nQuick Sort s'appuie sur une règle répétée : partitionner, puis résoudre les zones plus petites de la même manière. Dans beaucoup de cas, ces découpages rendent le travail efficace ; avec un pivot très déséquilibré, il peut toutefois falloir beaucoup de partitions.\n\nÀ expliquer avec vos mots :\n\n- pourquoi le pivot n'est plus retravaillé après une partition ;\n- comment le cas d'arrêt empêche la récursion de continuer ;\n- ce qui pourrait arriver si le pivot est toujours le plus petit ou le plus grand élément.\n\n",
    "sourceName": "07_quick_sort.md"
  },
  "presentCode": {
    "title": "08 — Présenter un code clair",
    "subtitle": "Choisir ses noms, commenter et structurer",
    "slides": [
      {
        "title": "Choisir des noms qui expliquent le rôle",
        "html": "<p>Utiliser des noms précis en anglais, avec <code>snake_case</code> pour les variables. Le nom doit indiquer ce que la valeur représente.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code># Difficile à comprendre\nx = [8, 12, 9]\ny = 0\nfor z in x:\n    y += z\nprint(y)</code></pre></div>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code># Le rôle des variables est visible\ngrades = [8, 12, 9]\ntotal_grade = 0\nfor grade in grades:\n    total_grade += grade\nprint(total_grade)</code></pre></div>\n<p>Éviter les noms trop courts (<code>x</code>, <code>a</code>, <code>tmp</code>) hors d&#x27;un calcul très local. Des noms comme <code>grades</code>, <code>total_grade</code> et <code>grade</code> montrent le rôle de chaque donnée.</p>\n<h3>Exercice 1 — Renommer les variables</h3>\n<p>Remplacer <code>a</code>, <code>b</code> et <code>c</code> par des noms clairs, sans modifier le calcul :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>a = 15\nb = 4\nc = a % b\nprint(c)</code></pre></div>\n<p>Choisir des noms anglais qui décrivent le nombre de départ, le diviseur et le reste.</p>",
        "kind": "Notion",
        "group": "Code clair"
      },
      {
        "title": "Indenter et espacer régulièrement",
        "html": "<p>En Python, l&#x27;indentation délimite les blocs. Utiliser quatre espaces par niveau et garder la même indentation dans tout le fichier. Ajouter des espaces autour des opérateurs pour rendre les calculs lisibles.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [4, 1, 7]\ntotal = 0\n\nfor value in values:\n    if value &gt; 3:\n        total += value\n\nprint(total)</code></pre></div>\n<p>Les lignes vides séparent les étapes du programme. Un bloc <code>if</code> ou une boucle doit être indenté de façon cohérente.</p>\n<h3>Exercice 2 — Rendre le code lisible</h3>\n<p>Réindenter ce code avec quatre espaces, ajouter les espaces manquants et séparer les étapes par une ligne vide :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values=[2,5,1]\ntotal=0\nfor value in values:\nif value&gt;2:\ntotal+=value\nprint(total)</code></pre></div>\n<p>Le programme doit continuer à afficher <code>5</code>.</p>",
        "kind": "Notion",
        "group": "Code clair"
      },
      {
        "title": "Écrire des commentaires utiles",
        "html": "<p>Un commentaire explique une intention ou une décision qui ne se comprend pas immédiatement. Il n&#x27;est pas nécessaire de commenter chaque ligne évidente. Les commentaires doivent rester à jour avec le code.</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>position = -1\n\nfor index in range(len(values)):\n    if values[index] == target:\n        position = index\n        break  # La première occurrence suffit.</code></pre></div>\n<p>Le commentaire explique pourquoi la boucle s&#x27;arrête. Écrire <code># Ajouter 1 à position</code> devant <code>position += 1</code> répéterait simplement l&#x27;instruction.</p>\n<h3>Exercice 3 — Ajouter un commentaire pertinent</h3>\n<p>Ajouter un commentaire court qui explique pourquoi <code>maximum</code> commence avec le premier élément :</p>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [-8, -3, -12]\nmaximum = values[0]</code></pre></div>\n<p>Le commentaire doit aider à éviter une erreur avec une liste composée uniquement de nombres négatifs.</p>",
        "kind": "Notion",
        "group": "Code clair"
      },
      {
        "title": "Présenter un petit algorithme complet",
        "html": "<p>Avant de rendre ou de partager un programme, vérifier que :</p>\n<ul><li>les noms décrivent les données et les résultats ;</li><li>les blocs sont correctement indentés ;</li><li>les espaces et lignes vides rendent les étapes visibles ;</li><li>les commentaires expliquent les choix utiles, sans paraphraser chaque ligne ;</li><li>les essais couvrent un cas normal et un cas limite.</li></ul>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [-8, -3, -12]\n\n# Démarrer avec une valeur réelle de la liste fonctionne aussi pour les négatifs.\nmaximum = values[0]\n\nfor value in values:\n    if value &gt; maximum:\n        maximum = value\n\nprint(maximum)  # -3</code></pre></div>\n<p>Un code facile à lire est plus facile à expliquer, corriger et réutiliser. Présenter clairement son travail fait partie de la programmation.</p>",
        "kind": "Notion",
        "group": "Code clair"
      }
    ],
    "next": "../supports/09_trouver_idee_algo.html",
    "nextLabel": "Apprendre à trouver une idée d’algorithme",
    "source": "# 08 — Présenter un code clair\n\nUn algorithme doit fonctionner, mais il doit aussi pouvoir être lu et repris par quelqu'un d'autre. Un code bien présenté aide à comprendre la logique, à repérer les erreurs et à travailler en équipe.\n\n## Choisir des noms qui expliquent le rôle\n\nUtiliser des noms précis en anglais, avec `snake_case` pour les variables. Le nom doit indiquer ce que la valeur représente.\n\n```python\n# Difficile à comprendre\nx = [8, 12, 9]\ny = 0\nfor z in x:\n    y += z\nprint(y)\n```\n\n```python\n# Le rôle des variables est visible\ngrades = [8, 12, 9]\ntotal_grade = 0\nfor grade in grades:\n    total_grade += grade\nprint(total_grade)\n```\n\nÉviter les noms trop courts (`x`, `a`, `tmp`) hors d'un calcul très local. Des noms comme `grades`, `total_grade` et `grade` montrent le rôle de chaque donnée.\n\n### Exercice 1 — Renommer les variables\n\nRemplacer `a`, `b` et `c` par des noms clairs, sans modifier le calcul :\n\n```python\na = 15\nb = 4\nc = a % b\nprint(c)\n```\n\nChoisir des noms anglais qui décrivent le nombre de départ, le diviseur et le reste.\n\n## Indenter et espacer régulièrement\n\nEn Python, l'indentation délimite les blocs. Utiliser quatre espaces par niveau et garder la même indentation dans tout le fichier. Ajouter des espaces autour des opérateurs pour rendre les calculs lisibles.\n\n```python\nvalues = [4, 1, 7]\ntotal = 0\n\nfor value in values:\n    if value > 3:\n        total += value\n\nprint(total)\n```\n\nLes lignes vides séparent les étapes du programme. Un bloc `if` ou une boucle doit être indenté de façon cohérente.\n\n### Exercice 2 — Rendre le code lisible\n\nRéindenter ce code avec quatre espaces, ajouter les espaces manquants et séparer les étapes par une ligne vide :\n\n```python\nvalues=[2,5,1]\ntotal=0\nfor value in values:\nif value>2:\ntotal+=value\nprint(total)\n```\n\nLe programme doit continuer à afficher `5`.\n\n## Écrire des commentaires utiles\n\nUn commentaire explique une intention ou une décision qui ne se comprend pas immédiatement. Il n'est pas nécessaire de commenter chaque ligne évidente. Les commentaires doivent rester à jour avec le code.\n\n```python\nposition = -1\n\nfor index in range(len(values)):\n    if values[index] == target:\n        position = index\n        break  # La première occurrence suffit.\n```\n\nLe commentaire explique pourquoi la boucle s'arrête. Écrire `# Ajouter 1 à position` devant `position += 1` répéterait simplement l'instruction.\n\n### Exercice 3 — Ajouter un commentaire pertinent\n\nAjouter un commentaire court qui explique pourquoi `maximum` commence avec le premier élément :\n\n```python\nvalues = [-8, -3, -12]\nmaximum = values[0]\n```\n\nLe commentaire doit aider à éviter une erreur avec une liste composée uniquement de nombres négatifs.\n\n## Présenter un petit algorithme complet\n\nAvant de rendre ou de partager un programme, vérifier que :\n\n- les noms décrivent les données et les résultats ;\n- les blocs sont correctement indentés ;\n- les espaces et lignes vides rendent les étapes visibles ;\n- les commentaires expliquent les choix utiles, sans paraphraser chaque ligne ;\n- les essais couvrent un cas normal et un cas limite.\n\n```python\nvalues = [-8, -3, -12]\n\n# Démarrer avec une valeur réelle de la liste fonctionne aussi pour les négatifs.\nmaximum = values[0]\n\nfor value in values:\n    if value > maximum:\n        maximum = value\n\nprint(maximum)  # -3\n```\n\nUn code facile à lire est plus facile à expliquer, corriger et réutiliser. Présenter clairement son travail fait partie de la programmation.\n",
    "sourceName": "08_presenter_code.md"
  },
  "algorithmIdea": {
    "title": "09 — Trouver une idée d’algorithme",
    "subtitle": "Clarifier, décomposer, essayer et vérifier",
    "slides": [
      {
        "title": "Étape 1 — Clarifier les données et le résultat",
        "html": "<p>Reformuler la consigne en répondant à trois questions :</p>\n<ol><li>Quelles sont les données de départ ?</li><li>Qu&#x27;est-ce que je dois produire ou afficher ?</li><li>Quelles règles définissent la bonne réponse ?</li></ol>\n<p><strong>Exemple — compter les valeurs positives</strong></p>\n<ul><li>Entrée : une liste de nombres.</li><li>Résultat : le nombre de valeurs strictement supérieures à zéro.</li><li>Règle : parcourir les valeurs, tester chaque nombre, ajouter 1 au compteur si le test est vrai.</li></ul>\n<div class=\"code-block\"><span class=\"code-label\">Python</span><pre tabindex=\"0\"><code>values = [-2, 3, 0, 5]\ncount = 0\nfor value in values:\n    if value &gt; 0:\n        count += 1\nprint(count)  # 2</code></pre></div>\n<h3>Exercice 1 — Reformuler avant de coder</h3>\n<p>On reçoit <code>values = [4, 7, 2, 7]</code> et la cible <code>7</code>. On veut connaître l&#x27;indice de sa première occurrence, ou <code>-1</code> si elle est absente.</p>\n<p>Écrire en une phrase les données, le résultat et la règle qui permet de le trouver. Ne pas encore écrire de code.</p>",
        "kind": "Méthode",
        "group": "Trouver une idée"
      },
      {
        "title": "Étape 2 — Faire le calcul à la main",
        "html": "<p>Choisir une petite liste et noter ce qui se passe à chaque étape. Cette trace permet de découvrir les variables qu&#x27;il faudra mémoriser.</p>\n<p><strong>Exemple — suivre le maximum</strong></p>\n<p>Pour <code>[4, 1, 7]</code>, le meilleur candidat évolue ainsi :</p>\n<div class=\"table-wrap\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">Valeur examinée</th><th scope=\"col\">Maximum mémorisé</th></tr></thead><tbody><tr><td>4</td><td>4</td></tr><tr><td>1</td><td>4</td></tr><tr><td>7</td><td>7</td></tr></tbody></table></div>\n<p>Cette trace suggère une variable <code>maximum</code>, une boucle et une comparaison. On peut initialiser le candidat avec le premier élément.</p>\n<h3>Exercice 2 — Tracer un compteur</h3>\n<p>Pour <code>values = [2, 5, 1, 5]</code>, compter à la main les valeurs égales à <code>target = 5</code>. Noter le compteur après chaque valeur examinée.</p>\n<p><strong>À obtenir :</strong> un compteur final égal à <code>2</code>.</p>",
        "kind": "Méthode",
        "group": "Trouver une idée"
      },
      {
        "title": "Étape 3 — Reconnaître les briques utiles",
        "html": "<p>Certains verbes de l&#x27;énoncé suggèrent des outils connus. Ce sont des repères pour démarrer, pas des recettes à appliquer sans réfléchir.</p>\n<div class=\"table-wrap\" tabindex=\"0\"><table><thead><tr><th scope=\"col\">La consigne demande de…</th><th scope=\"col\">Une première idée à essayer</th></tr></thead><tbody><tr><td>additionner des valeurs</td><td>un accumulateur <code>total</code></td></tr><tr><td>compter des éléments qui respectent une règle</td><td>un compteur <code>count</code> et une condition</td></tr><tr><td>construire une liste filtrée</td><td>une liste vide et <code>append</code></td></tr><tr><td>trouver une première position</td><td><code>position = -1</code>, puis arrêter après la première occurrence</td></tr><tr><td>chercher le plus grand élément</td><td>un maximum candidat mis à jour pendant le parcours</td></tr><tr><td>comparer des voisins</td><td>parcourir les indices jusqu&#x27;à <code>len(values) - 2</code></td></tr><tr><td>comparer un motif</td><td>tester chaque départ valide, puis ses positions</td></tr></tbody></table></div>\n<h3>Exercice 3 — Choisir les briques</h3>\n<p>Pour chacune des consignes, choisir les variables et structures qui pourraient aider, sans encore programmer :</p>\n<ol><li>compter les nombres pairs ;</li><li>créer une liste des notes au moins égales à 10 ;</li><li>trouver si deux voisins sont égaux.</li></ol>",
        "kind": "Méthode",
        "group": "Trouver une idée"
      },
      {
        "title": "Étape 4 — Écrire les étapes en langage simple",
        "html": "<p>Avant la syntaxe Python, écrire une recette assez précise pour être suivie :</p>\n<ol><li>initialiser le résultat ;</li><li>parcourir les données ;</li><li>tester la règle ;</li><li>mettre à jour le résultat ;</li><li>afficher ou renvoyer le résultat.</li></ol>\n<p><strong>Exemple — rechercher une première occurrence</strong></p>\n<ol><li>Mettre <code>position</code> à <code>-1</code>.</li><li>Parcourir les indices de la liste.</li><li>Si la valeur courante est la cible, mémoriser l&#x27;indice et arrêter la recherche.</li><li>Afficher <code>position</code>.</li></ol>\n<p>Cette description fait déjà apparaître les indices, la condition, la variable sentinelle et <code>break</code>.</p>\n<h3>Exercice 4 — Décrire l&#x27;algorithme du maximum</h3>\n<p>Écrire en quatre ou cinq étapes simples comment trouver le maximum d&#x27;une liste non vide. Vérifier que votre méthode fonctionnerait aussi si toutes les valeurs étaient négatives.</p>",
        "kind": "Méthode",
        "group": "Trouver une idée"
      },
      {
        "title": "Étape 5 — Tester l'idée sur les cas importants",
        "html": "<p>Avant de considérer l&#x27;algorithme terminé, vérifier au moins un cas normal et un cas limite. Les cas limites révèlent souvent une hypothèse oubliée.</p>\n<p>Pour une recherche, essayer par exemple :</p>\n<ul><li>la cible au début ;</li><li>la cible à la fin ;</li><li>plusieurs occurrences ;</li><li>aucune occurrence ;</li><li>une liste vide.</li></ul>\n<p>Pour le maximum, vérifier la liste à un élément et une liste de nombres tous négatifs. Si une méthode échoue, reprendre la trace à la main et trouver à quelle étape le résultat diverge.</p>\n<h3>Exercice 5 — Vérifier sa stratégie</h3>\n<p>Reprendre la recherche de la première occurrence de l&#x27;exercice 1 et tester mentalement ces cas : <code>values = [7, 2, 7], target = 7</code> ; <code>values = [4, 2, 1], target = 7</code> ; <code>values = [], target = 7</code> ; <code>values = [3, 5], target = 5</code>.</p>\n<p>Pour chaque cas, annoncer l&#x27;indice attendu avant de coder. Expliquer pourquoi la boucle doit s&#x27;arrêter après la première correspondance.</p>",
        "kind": "Méthode",
        "group": "Trouver une idée"
      },
      {
        "title": "La méthode à garder",
        "html": "<p>Quand une idée ne vient pas tout de suite : reformuler, calculer un petit exemple, noter les informations à mémoriser, choisir les briques utiles, décrire les étapes, puis tester des cas limites. On peut ensuite traduire chaque étape en Python.</p>\n<p>Un bon algorithme n&#x27;est pas trouvé en devinant la syntaxe : il se construit en rendant le problème assez clair pour pouvoir l&#x27;exécuter pas à pas.</p>",
        "kind": "Méthode",
        "group": "Trouver une idée"
      }
    ],
    "next": "../index.html",
    "nextLabel": "Terminer le parcours",
    "source": "# 09 — Trouver une idée d'algorithme\n\nUn énoncé ne donne pas toujours immédiatement la suite d'instructions à écrire. Pour trouver une idée, on peut d'abord clarifier le problème, l'essayer sur papier et reconnaître les opérations dont on a besoin. Le code vient après le raisonnement.\n\n## Étape 1 — Clarifier les données et le résultat\n\nReformuler la consigne en répondant à trois questions :\n\n1. Quelles sont les données de départ ?\n2. Qu'est-ce que je dois produire ou afficher ?\n3. Quelles règles définissent la bonne réponse ?\n\n**Exemple — compter les valeurs positives**\n\n- Entrée : une liste de nombres.\n- Résultat : le nombre de valeurs strictement supérieures à zéro.\n- Règle : parcourir les valeurs, tester chaque nombre, ajouter 1 au compteur si le test est vrai.\n\n```python\nvalues = [-2, 3, 0, 5]\ncount = 0\nfor value in values:\n    if value > 0:\n        count += 1\nprint(count)  # 2\n```\n\n### Exercice 1 — Reformuler avant de coder\n\nOn reçoit `values = [4, 7, 2, 7]` et la cible `7`. On veut connaître l'indice de sa première occurrence, ou `-1` si elle est absente.\n\nÉcrire en une phrase les données, le résultat et la règle qui permet de le trouver. Ne pas encore écrire de code.\n\n## Étape 2 — Faire le calcul à la main\n\nChoisir une petite liste et noter ce qui se passe à chaque étape. Cette trace permet de découvrir les variables qu'il faudra mémoriser.\n\n**Exemple — suivre le maximum**\n\nPour `[4, 1, 7]`, le meilleur candidat évolue ainsi :\n\n| Valeur examinée | Maximum mémorisé |\n| --- | --- |\n| 4 | 4 |\n| 1 | 4 |\n| 7 | 7 |\n\nCette trace suggère une variable `maximum`, une boucle et une comparaison. On peut initialiser le candidat avec le premier élément.\n\n### Exercice 2 — Tracer un compteur\n\nPour `values = [2, 5, 1, 5]`, compter à la main les valeurs égales à `target = 5`. Noter le compteur après chaque valeur examinée.\n\n**À obtenir :** un compteur final égal à `2`.\n\n## Étape 3 — Reconnaître les briques utiles\n\nCertains verbes de l'énoncé suggèrent des outils connus. Ce sont des repères pour démarrer, pas des recettes à appliquer sans réfléchir.\n\n| La consigne demande de… | Une première idée à essayer |\n| --- | --- |\n| additionner des valeurs | un accumulateur `total` |\n| compter des éléments qui respectent une règle | un compteur `count` et une condition |\n| construire une liste filtrée | une liste vide et `append` |\n| trouver une première position | `position = -1`, puis arrêter après la première occurrence |\n| chercher le plus grand élément | un maximum candidat mis à jour pendant le parcours |\n| comparer des voisins | parcourir les indices jusqu'à `len(values) - 2` |\n| comparer un motif | tester chaque départ valide, puis ses positions |\n\n### Exercice 3 — Choisir les briques\n\nPour chacune des consignes, choisir les variables et structures qui pourraient aider, sans encore programmer :\n\n1. compter les nombres pairs ;\n2. créer une liste des notes au moins égales à 10 ;\n3. trouver si deux voisins sont égaux.\n\n## Étape 4 — Écrire les étapes en langage simple\n\nAvant la syntaxe Python, écrire une recette assez précise pour être suivie :\n\n1. initialiser le résultat ;\n2. parcourir les données ;\n3. tester la règle ;\n4. mettre à jour le résultat ;\n5. afficher ou renvoyer le résultat.\n\n**Exemple — rechercher une première occurrence**\n\n1. Mettre `position` à `-1`.\n2. Parcourir les indices de la liste.\n3. Si la valeur courante est la cible, mémoriser l'indice et arrêter la recherche.\n4. Afficher `position`.\n\nCette description fait déjà apparaître les indices, la condition, la variable sentinelle et `break`.\n\n### Exercice 4 — Décrire l'algorithme du maximum\n\nÉcrire en quatre ou cinq étapes simples comment trouver le maximum d'une liste non vide. Vérifier que votre méthode fonctionnerait aussi si toutes les valeurs étaient négatives.\n\n## Étape 5 — Tester l'idée sur les cas importants\n\nAvant de considérer l'algorithme terminé, vérifier au moins un cas normal et un cas limite. Les cas limites révèlent souvent une hypothèse oubliée.\n\nPour une recherche, essayer par exemple :\n\n- la cible au début ;\n- la cible à la fin ;\n- plusieurs occurrences ;\n- aucune occurrence ;\n- une liste vide.\n\nPour le maximum, vérifier la liste à un élément et une liste de nombres tous négatifs. Si une méthode échoue, reprendre la trace à la main et trouver à quelle étape le résultat diverge.\n\n### Exercice 5 — Vérifier sa stratégie\n\nReprendre la recherche de la première occurrence de l'exercice 1 et tester mentalement ces cas : `values = [7, 2, 7], target = 7` ; `values = [4, 2, 1], target = 7` ; `values = [], target = 7` ; `values = [3, 5], target = 5`.\n\nPour chaque cas, annoncer l'indice attendu avant de coder. Expliquer pourquoi la boucle doit s'arrêter après la première correspondance.\n\n## La méthode à garder\n\nQuand une idée ne vient pas tout de suite : reformuler, calculer un petit exemple, noter les informations à mémoriser, choisir les briques utiles, décrire les étapes, puis tester des cas limites. On peut ensuite traduire chaque étape en Python.\n\nUn bon algorithme n'est pas trouvé en devinant la syntaxe : il se construit en rendant le problème assez clair pour pouvoir l'exécuter pas à pas.\n",
    "sourceName": "09_trouver_idee_algo.md"
  }
};
