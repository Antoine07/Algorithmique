# QCM — Introduction à l'algorithmique (pseudo-code)

**Public :** Bachelor 1 — débutants  
**Format :** 20 questions à choix multiple, une seule bonne réponse par question  
**Barème suggéré :** 1 point par question, total sur 20  
**Consigne :** lire attentivement les algorithmes. Ne choisir qu'une seule réponse. Les corrections et feedbacks sont masqués sous chaque question.

## Conventions de pseudo-code

- `←` affecte une valeur à une variable ; `=` compare deux valeurs.
- Les indices des tableaux commencent à **0**.
- `POUR i DE a À b` inclut les deux bornes.
- `MOD` désigne le reste de la division entière.
- `DIV` désigne le quotient entier ; `ET`, `OU`, `NON` sont les opérateurs logiques.
- `AFFICHER` affiche un résultat ; `AJOUTER(tableau, valeur)` ajoute en fin de tableau.
- Les blocs se terminent par `FIN SI`, `FIN POUR` ou `FIN TANT QUE`.

---

## Partie I — Fondamentaux (15 questions)

### Question 1 — Affectation

Que réalise l'instruction suivante ?

```text
age ← 19
```

A. Compare `age` à 19.  
B. Affecte la valeur 19 à `age`.  
C. Affiche 19.  
D. Déclare une constante immuable.  
E. Demande un âge à l'utilisateur.

<details><summary>Correction et feedback</summary>

**Bonne réponse : B.** La flèche `←` indique une affectation, pas une comparaison.

- **A :** une comparaison utiliserait `=` dans ce pseudo-code.
- **C :** l'affichage nécessiterait `AFFICHER`.
- **D :** aucune constante n'est déclarée ici.
- **E :** aucune saisie n'est demandée (`LIRE`).

</details>

### Question 2 — Types de données

Quel type convient à la variable `prix` ?

```text
prix ← 12,5
```

A. Entier.  
B. Texte.  
C. Réel (nombre décimal).  
D. Booléen.  
E. Tableau.

<details><summary>Correction et feedback</summary>

**Bonne réponse : C.** La valeur comporte une partie décimale ; on utilise le type réel.

- **A :** un entier ne représente pas directement 12,5.
- **B :** ce n'est pas du texte entre guillemets.
- **D :** un booléen vaut `VRAI` ou `FAUX`.
- **E :** un tableau contiendrait plusieurs éléments.

</details>

### Question 3 — Suivi des affectations

```text
x ← 5
x ← x + 3
x ← x × 2
AFFICHER x
```

A. 8  
B. 10  
C. 13  
D. 16  
E. 20

<details><summary>Correction et feedback</summary>

**Bonne réponse : D.** `x` vaut successivement 5, 8 et 16. L'affectation modifie la valeur mémorisée.

- **A :** c'est la valeur intermédiaire avant la multiplication.
- **B, C, E :** ces réponses ne respectent pas l'ordre des instructions.

</details>

### Question 4 — Comparaison

```text
a ← 10
b ← 5
AFFICHER (a = b × 2)
```

A. FAUX  
B. VRAI  
C. 10  
D. 20  
E. Erreur

<details><summary>Correction et feedback</summary>

**Bonne réponse : B.** `b × 2` vaut 10, donc `a = b × 2` est vrai.

- **A :** la comparaison est bien satisfaite.
- **C et D :** une comparaison affiche un booléen, pas un nombre.
- **E :** l'expression est valide avec les conventions annoncées.

</details>

### Question 5 — Condition simple

```text
note ← 12
SI note ≥ 10 ALORS
    AFFICHER "Admis"
SINON
    AFFICHER "Refusé"
FIN SI
```

A. Refusé  
B. VRAI  
C. Admis  
D. 12  
E. Rien

<details><summary>Correction et feedback</summary>

**Bonne réponse : C.** `12 ≥ 10` : la branche `ALORS` est exécutée.

- **A :** la branche `SINON` n'est pas exécutée.
- **B et D :** le programme affiche un message, pas la condition ni la note.
- **E :** une instruction `AFFICHER` est exécutée.

</details>

### Question 6 — Modulo

Quelle est la valeur de `17 MOD 5` ?

A. 3  
B. 5  
C. 0  
D. 1  
E. 2

<details><summary>Correction et feedback</summary>

**Bonne réponse : E.** `17 = 5 × 3 + 2` : le reste vaut 2.

- **A :** 3 est le quotient entier, pas le reste.
- **B, C et D :** ne correspondent pas à la division euclidienne.

</details>

### Question 7 — Boucle POUR

Combien de fois le message est-il affiché ?

```text
POUR i DE 2 À 7
    AFFICHER "Bonjour"
FIN POUR
```

A. 8  
B. 6  
C. 7  
D. 5  
E. 2

<details><summary>Correction et feedback</summary>

**Bonne réponse : B.** La boucle parcourt 2, 3, 4, 5, 6 et 7 : six valeurs.

- **A, C, D et E :** résultent d'un mauvais comptage des bornes, qui sont inclusives ici.

</details>

### Question 8 — Boucle TANT QUE

```text
x ← 1
TANT QUE x < 10 FAIRE
    x ← x × 2
FIN TANT QUE
AFFICHER x
```

A. 8  
B. 10  
C. 16  
D. 32  
E. Boucle infinie

<details><summary>Correction et feedback</summary>

**Bonne réponse : C.** On obtient 1 → 2 → 4 → 8 → 16. La condition devient fausse à 16.

- **A :** la boucle continue encore puisque 8 < 10.
- **B :** la multiplication par 2 n'atteint pas nécessairement 10.
- **D :** la boucle est déjà terminée avant cette valeur.
- **E :** `x` augmente et dépasse le seuil.

</details>

### Question 9 — Accumulateur

```text
total ← 0
POUR i DE 1 À 4
    total ← total + i
FIN POUR
AFFICHER total
```

A. 10  
B. 15  
C. 4  
D. 6  
E. 5

<details><summary>Correction et feedback</summary>

**Bonne réponse : A.** `1 + 2 + 3 + 4 = 10`.

- **B :** ajouterait une valeur supplémentaire.
- **C, D et E :** ne correspondent pas à la somme des quatre passages.

</details>

### Question 10 — Indices d'un tableau

```text
notes ← [8, 12, 15, 19]
AFFICHER notes[2]
```

A. 8  
B. 12  
C. 19  
D. 15  
E. Erreur

<details><summary>Correction et feedback</summary>

**Bonne réponse : D.** Puisque le premier indice est 0, l'indice 2 désigne la troisième valeur : 15.

- **A et B :** désignent les indices 0 et 1.
- **C :** désigne l'indice 3.
- **E :** l'indice 2 existe.

</details>

### Question 11 — Modifier puis ajouter

```text
valeurs ← [10, 20, 30]
valeurs[1] ← 50
AJOUTER(valeurs, 40)
AFFICHER valeurs
```

A. `[10, 20, 30, 40]`  
B. `[10, 50, 30, 40]`  
C. `[10, 20, 50, 40]`  
D. `[50, 20, 30, 40]`  
E. `[10, 50, 40]`

<details><summary>Correction et feedback</summary>

**Bonne réponse : B.** `valeurs[1]` remplace le deuxième élément, puis 40 est ajouté à la fin.

- **A :** oublie la modification.
- **C et D :** modifient le mauvais indice.
- **E :** supprime un élément sans instruction correspondante.

</details>

### Question 12 — Parcours et filtre

```text
nombres ← [2, 4, 6, 8]
total ← 0
POUR CHAQUE n DANS nombres
    SI n > 4 ALORS
        total ← total + n
    FIN SI
FIN POUR
AFFICHER total
```

A. 20  
B. 8  
C. 14  
D. 6  
E. 10

<details><summary>Correction et feedback</summary>

**Bonne réponse : C.** Seuls 6 et 8 sont strictement supérieurs à 4 ; leur somme vaut 14.

- **A :** additionne toutes les valeurs.
- **B et D :** ne retiennent qu'une seule valeur.
- **E :** additionne les valeurs exclues par la condition.

</details>

### Question 13 — Conversion de températures

On veut convertir les valeurs du tableau `celsius = [0, 10, 20, 30]` en Fahrenheit selon `F = C × 1,8 + 32`. Quel algorithme convient ?

**A.** `fahrenheit ← celsius × 1,8 + 32`  
**B.**

```text
fahrenheit ← []
POUR CHAQUE c DANS celsius
    AJOUTER(fahrenheit, c × 1,8 + 32)
FIN POUR
```

**C.** `AJOUTER(celsius, 32)`  
**D.** `fahrenheit ← [celsius + 32]`  
**E.** `fahrenheit ← celsius[0] × 1,8 + 32`

<details><summary>Correction et feedback</summary>

**Bonne réponse : B.** On parcourt toutes les températures, on convertit chacune et on l'ajoute au nouveau tableau.

- **A et D :** appliquent une opération numérique à l'ensemble du tableau comme s'il s'agissait d'un seul nombre.
- **C :** ajoute simplement une valeur au tableau initial.
- **E :** ne convertit que le premier élément.

</details>

### Question 14 — Inverser un tableau

On veut obtenir `[50, 40, 30, 20, 10]` à partir de `[10, 20, 30, 40, 50]`, **sans modifier l'original**. Quel algorithme convient ?

**A.** Trier le tableau par ordre croissant.  
**B.** Remplacer chaque élément par 0.  
**C.** Copier uniquement les éléments d'indice 1 à 4.  
**D.**

```text
inverse ← []
POUR i DE 4 À 0 AVEC UN PAS DE -1
    AJOUTER(inverse, nombres[i])
FIN POUR
```

**E.** `inverse ← nombres[4]`

<details><summary>Correction et feedback</summary>

**Bonne réponse : D.** On parcourt les indices dans l'ordre décroissant et on construit un nouveau tableau.

- **A :** trier n'est pas inverser l'ordre initial.
- **B :** perd toutes les valeurs.
- **C :** ne produit pas l'ordre inverse.
- **E :** récupère une seule valeur et non un tableau.

</details>

### Question 15 — Recherche du maximum

```text
valeurs ← [4, 12, 7, 15, 9]
maximum ← valeurs[0]
POUR CHAQUE valeur DANS valeurs
    SI valeur > maximum ALORS
        maximum ← valeur
    FIN SI
FIN POUR
AFFICHER maximum
```

A. 4  
B. 12  
C. 9  
D. 47  
E. 15

<details><summary>Correction et feedback</summary>

**Bonne réponse : E.** À chaque passage, on mémorise une valeur seulement si elle dépasse le maximum courant. Le résultat final est 15.

- **A :** est seulement la valeur d'initialisation.
- **B :** est un maximum intermédiaire.
- **C :** est la dernière valeur mais pas la plus grande.
- **D :** représente la somme des éléments, pas leur maximum.

</details>

---

## Partie II — Logique et conditions combinées (5 questions)

### Question 16 — ET, OU et parenthèses

```text
age ← 17
accompagne ← VRAI
autorisation ← FAUX
resultat ← (age ≥ 18 OU accompagne) ET autorisation
AFFICHER resultat
```

A. VRAI  
B. FAUX  
C. 17  
D. Erreur  
E. Rien

<details><summary>Correction et feedback</summary>

**Bonne réponse : B.** `(FAUX OU VRAI)` donne `VRAI`, puis `VRAI ET FAUX` donne `FAUX`.

- **A :** oublie que l'autorisation est obligatoire.
- **C :** l'expression produit un booléen, pas l'âge.
- **D et E :** l'expression est valide et affichée.

</details>

### Question 17 — Priorité des opérateurs

Convention : **ET est prioritaire sur OU**.

```text
a ← VRAI
b ← FAUX
c ← FAUX
AFFICHER a OU b ET c
```

A. FAUX  
B. AUCUNE VALEUR  
C. VRAI  
D. Erreur de syntaxe  
E. 0

<details><summary>Correction et feedback</summary>

**Bonne réponse : C.** On évalue `b ET c` d'abord (`FAUX`), puis `a OU FAUX` donne `VRAI`.

- **A :** correspondrait à `(a OU b) ET c`, ce qui n'est pas la priorité annoncée.
- **B, D et E :** ne sont pas des résultats adaptés à cette expression valide.

</details>

### Question 18 — Conditions imbriquées

```text
note ← 14
absences ← 3
SI note ≥ 10 ALORS
    SI absences < 3 ALORS
        AFFICHER "Validé"
    SINON
        AFFICHER "À examiner"
    FIN SI
SINON
    AFFICHER "Échec"
FIN SI
```

A. Validé  
B. Échec  
C. VRAI  
D. À examiner  
E. Rien

<details><summary>Correction et feedback</summary>

**Bonne réponse : D.** La note satisfait la première condition, mais `3 < 3` est faux. On exécute donc le `SINON` intérieur.

- **A :** confond `<` avec `≤`.
- **B :** supposerait une note inférieure à 10.
- **C et E :** un texte est effectivement affiché.

</details>

### Question 19 — Divisibilité multiple

```text
nombre ← 30
SI nombre MOD 2 = 0 ET nombre MOD 3 = 0 ET nombre MOD 5 ≠ 0 ALORS
    AFFICHER "A"
SINON
    AFFICHER "B"
FIN SI
```

A. A  
B. B  
C. 30  
D. VRAI  
E. Erreur

<details><summary>Correction et feedback</summary>

**Bonne réponse : B.** 30 est divisible par 2 et par 3, mais aussi par 5 : la condition `nombre MOD 5 ≠ 0` est donc fausse.

- **A :** ignore la dernière condition.
- **C et D :** l'algorithme affiche une lettre.
- **E :** le test est correctement formé.

</details>

### Question 20 — Règle de validation

Un étudiant valide un module si **(moyenne ≥ 10 ET absences < 5) OU dérogation**. Quelle expression traduit exactement cette règle ?

A. `moyenne ≥ 10 OU absences < 5 ET derogation`  
B. `moyenne ≥ 10 ET absences < 5 ET derogation`  
C. `moyenne ≥ 10 OU absences < 5 OU derogation`  
D. `NON (moyenne ≥ 10) ET derogation`  
E. `(moyenne ≥ 10 ET absences < 5) OU derogation`

<details><summary>Correction et feedback</summary>

**Bonne réponse : E.** Il faut remplir simultanément les deux conditions habituelles **ou** bénéficier d'une dérogation.

- **A :** rend possible une validation avec la seule moyenne suffisante.
- **B :** impose aussi une dérogation à tous les étudiants.
- **C :** permet une validation avec seulement peu d'absences.
- **D :** exclut à tort les étudiants qui satisfont les critères ordinaires.

</details>

---

## Corrigé récapitulatif (enseignant)

<details><summary>Déplier la grille complète des réponses</summary>

| Question | Réponse | Question | Réponse |
|---:|:---:|---:|:---:|
| 1 | B | 11 | B |
| 2 | C | 12 | C |
| 3 | D | 13 | B |
| 4 | B | 14 | D |
| 5 | C | 15 | E |
| 6 | E | 16 | B |
| 7 | B | 17 | C |
| 8 | C | 18 | D |
| 9 | A | 19 | B |
| 10 | D | 20 | E |

</details>

**Conseil pédagogique :** demander aux étudiants de calculer les valeurs intermédiaires pour les questions 16 à 20 avant de choisir une réponse. Les blocs `<details>` sont dépliables dans GitHub et dans les prévisualisations Markdown compatibles avec HTML.
