# QCM général — Python et algorithmique

20 questions pour revoir les bases de Python, les listes, les recherches, les motifs et le tri à bulles.

**Une seule bonne réponse par question. Un point par bonne réponse.**

## Question 1 — Affectation et valeur courante

Que s’affiche-t-il ?

```python
x = 4
y = x
x = x + 3
print(x, y)
```

A. `4 4`  
B. `7 7`  
C. `7 4`  
D. `4 7`

<details><summary>Réponse et feedback</summary>

**Réponse : C.** `y` reçoit la valeur 4. Modifier ensuite `x` ne modifie pas `y`. On affiche donc `7 4`.

A oublie la dernière affectation. B suppose que les deux variables restent liées. D inverse les valeurs finales.

</details>

## Question 2 — Quotient, reste et puissance

Que s’affiche-t-il ?

```python
print(17 // 5, 17 % 5, 2 ** 3)
```

A. `3 2 8`  
B. `3.4 2 6`  
C. `2 3 8`  
D. `3 0 6`

<details><summary>Réponse et feedback</summary>

**Réponse : A.** `17 = 5 * 3 + 2` donne un quotient de 3 et un reste de 2. `2 ** 3` vaut 8.

`/` donnerait 3.4, mais `//` donne ici 3. Le reste n’est pas le quotient. `**` est une puissance, pas une multiplication par 3.

</details>

## Question 3 — Comparaisons et logique

Quel booléen est affiché ?

```python
age = 17
accompagne = True
print(age >= 18 or accompagne)
```

A. `False`  
B. `17`  
C. `18`  
D. `True`

<details><summary>Réponse et feedback</summary>

**Réponse : D.** `age >= 18` est faux, mais `accompagne` est vrai. Avec `or`, une seule condition vraie suffit.

A correspondrait ici à une combinaison avec `and`. B et C sont des nombres : une comparaison combinée à ces booléens donne un booléen.

</details>

## Question 4 — Choisir une branche

Que s’affiche-t-il ?

```python
note = 10
if note > 10:
    print("A")
elif note == 10:
    print("B")
else:
    print("C")
```

A. `A`  
B. `B`  
C. `C`  
D. `A` puis `B`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** `10 > 10` est faux, mais `10 == 10` est vrai. Seul le bloc `elif` s’exécute.

A confond `>` et `>=`. C ignore le cas d’égalité. Une chaîne `if / elif / else` exécute un seul de ses blocs.

</details>

## Question 5 — Boucle for et accumulateur

Quelle valeur est affichée ?

```python
total = 0
for i in range(2, 5):
    total += i
print(total)
```

A. `14`  
B. `5`  
C. `9`  
D. `4`

<details><summary>Réponse et feedback</summary>

**Réponse : C.** `range(2, 5)` donne 2, 3 et 4. Leur somme vaut 9.

A inclut à tort 5. B est la borne exclue. D est seulement la dernière valeur de `i`, pas le total.

</details>

## Question 6 — Boucle while

Quelle valeur est affichée ?

```python
x = 1
while x < 5:
    x = x * 2
print(x)
```

A. `8`  
B. `4`  
C. `5`  
D. La boucle ne s’arrête pas.

<details><summary>Réponse et feedback</summary>

**Réponse : A.** `x` passe de 1 à 2, puis 4, puis 8. À 8, la condition est fausse et la boucle s’arrête.

À 4, le test est encore vrai. Le programme n’atteint pas forcément exactement la borne 5. La variable évolue et permet l’arrêt.

</details>

## Question 7 — Indices et inversion d’une liste

Que contient `inverse` à la fin ?

```python
nombres = [3, 8, 5]
inverse = []
i = len(nombres) - 1
while i >= 0:
    inverse.append(nombres[i])
    i -= 1
```

A. `[3, 5, 8]`  
B. `[2, 1, 0]`  
C. `[3, 8, 5]`  
D. `[5, 8, 3]`

<details><summary>Réponse et feedback</summary>

**Réponse : D.** Les indices parcourus sont 2, 1 et 0. On ajoute les valeurs à ces indices, soit 5, 8 et 3.

A trie les valeurs au lieu d’inverser l’ordre initial. B contient les indices, pas les valeurs. C ne change pas l’ordre.

</details>

## Question 8 — Échanger deux variables

Après `a = 6` et `b = 2`, quelle suite échange correctement leurs valeurs ?

A. `a = b` puis `b = a`  
B. `temp = a` puis `a = b` puis `b = temp`  
C. `temp = b` puis `a = temp` puis `b = a`  
D. `temp = a` puis `b = temp`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** La variable temporaire conserve 6 pendant que `a` devient 2. Puis `b` reçoit 6.

A et C produisent deux valeurs égales à 2. D remplace seulement `b` par 6 et laisse `a` à 6.

</details>

## Question 9 — Filtrer et compter

Quel couple de résultats est affiché ?

```python
valides = []
for note in [8, 10, 14, 7]:
    if note >= 10:
        valides.append(note)
print(valides, len(valides))
```

A. `[10, 14] 2`  
B. `[14] 1`  
C. `[10, 14] 24`  
D. `[8, 10, 14, 7] 4`

<details><summary>Réponse et feedback</summary>

**Réponse : A.** 10 et 14 satisfont le test. La liste contient deux éléments et `len()` renvoie 2.

B oublie l’égalité autorisée par `>=`. C donne la somme des notes au lieu de la longueur. D ne filtre aucune note.

</details>

## Question 10 — Maximum avec des nombres négatifs

Pour rechercher le maximum de `[-7, -2, -9]`, quelle initialisation est fiable ?

A. `maximum = 0`  
B. `maximum = -1`  
C. `maximum = nombres[0]`  
D. `maximum = len(nombres)`

<details><summary>Réponse et feedback</summary>

**Réponse : C.** Le premier élément est une valeur candidate de la liste. Le parcours permet ensuite de trouver -2. La liste doit être non vide.

0, -1 et la longueur 3 sont tous supérieurs aux éléments : ils resteraient à tort le maximum.

</details>

## Question 11 — Rechercher la première occurrence

Que vaut `position` à la fin ?

```python
nombres = [5, 2, 5]
position = -1
for i in range(len(nombres)):
    if nombres[i] == 5 and position == -1:
        position = i
```

A. `2`  
B. `5`  
C. `-1`  
D. `0`

<details><summary>Réponse et feedback</summary>

**Réponse : D.** Le premier 5 est à l’indice 0. Le test `position == -1` empêche de remplacer cette première position.

A serait l’indice de la dernière occurrence. B est la valeur recherchée. C signifie absence, alors que 5 est présent.

</details>

## Question 12 — Décomposer les chiffres

Quel total est affiché ?

```python
reste = 402
total = 0
while reste > 0:
    total += reste % 10
    reste = reste // 10
print(total)
```

A. `3`  
B. `6`  
C. `402`  
D. `2`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** Les chiffres extraits sont 2, 0 puis 4. Leur somme vaut 6. `% 10` extrait le dernier chiffre et `// 10` le retire.

A est le nombre de chiffres. C est le nombre initial. D ne compte que le premier chiffre extrait.

</details>

## Question 13 — Facteurs premiers disponibles

On décompose 60 en divisant autant de fois que possible par chaque valeur de `premiers = [2, 3]`. Quels facteurs et quel reste obtient-on ?

A. Facteurs `[2, 2, 3]`, reste `5` : décomposition incomplète.  
B. Facteurs `[2, 3]`, reste `10` : décomposition incomplète.  
C. Facteurs `[2, 2, 3, 5]`, reste `1` : décomposition complète.  
D. Facteurs `[2, 2, 3]`, reste `1` : décomposition complète.

<details><summary>Réponse et feedback</summary>

**Réponse : A.** 60 devient 30, puis 15 après deux divisions par 2, puis 5 après une division par 3. Le facteur 5 manque à la liste fournie.

B oublie la répétition de la division par 2. C ajoute un facteur non fourni. D fait disparaître le reste 5.

</details>

## Question 14 — Parcourir trois voisins

Pour comparer `valeurs[i]`, `valeurs[i + 1]` et `valeurs[i + 2]`, quelle boucle parcourt tous les départs valides ?

A. `range(len(valeurs))`  
B. `range(len(valeurs) - 1)`  
C. `range(len(valeurs) - 2)`  
D. `range(2, len(valeurs))`

<details><summary>Réponse et feedback</summary>

**Réponse : C.** Le dernier départ possible est `len(valeurs) - 3`. La borne finale exclue doit donc être `len(valeurs) - 2`.

A et B finissent par accéder après la fin de la liste. D ignore les premiers départs et conduit aussi à dépasser la fin.

</details>

## Question 15 — Motifs avec chevauchement

À quels indices commence le motif `[2, 2]` dans `[2, 2, 2, 3]` ?

A. `[0]`  
B. `[0, 2]`  
C. `[1, 2]`  
D. `[0, 1]`

<details><summary>Réponse et feedback</summary>

**Réponse : D.** Le motif apparaît aux indices 0 et 1. Les deux occurrences partagent l’élément d’indice 1 ; les chevauchements sont autorisés.

A manque la seconde occurrence. À l’indice 2, la fenêtre est `[2, 3]`, qui ne correspond pas au motif.

</details>

## Question 16 — Changements de signe

Dans `[-2, 0, 3, -1]`, quels sont les indices de départ des couples de signes opposés stricts ?

A. `[0, 1, 2]`  
B. `[2]`  
C. `[0, 2]`  
D. `[]`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** Seul le couple `[3, -1]`, qui commence à l’indice 2, possède des signes opposés stricts. Les couples impliquant zéro sont exclus.

A et C comptent un passage impliquant zéro. D oublie le passage du positif au négatif.

</details>

## Question 17 — Une erreur au maximum

Pour accepter les fenêtres qui diffèrent d’un motif sur au plus une position, quelle règle est correcte ?

A. Remettre le compteur à 0 à chaque fenêtre, compter les inégalités, puis tester `differences <= 1`.  
B. Remettre le compteur à 0 avant chaque comparaison et tester `differences == 1`.  
C. Conserver le même compteur sur toutes les fenêtres et tester `differences <= 1`.  
D. Compter les égalités et tester `differences > 1`.

<details><summary>Réponse et feedback</summary>

**Réponse : A.** Chaque fenêtre doit être évaluée indépendamment. « Au plus une » accepte zéro ou une différence, donc `<= 1`.

B efface les différences précédentes et exclut les correspondances exactes. C mélange plusieurs fenêtres. D compte le mauvais événement.

</details>

## Question 18 — Vérifier un ordre croissant

Quel test repère une descente dans une liste, en autorisant les valeurs égales ?

A. `nombres[i] >= nombres[i + 1]`  
B. `nombres[i] == nombres[i + 1]`  
C. `nombres[i] > nombres[i + 1]`  
D. `nombres[i] < nombres[i + 1]`

<details><summary>Réponse et feedback</summary>

**Réponse : C.** Une descente existe lorsque la valeur actuelle est strictement supérieure à la suivante.

A rejetterait aussi les égalités. B repère seulement les égalités. D repère une montée, qui respecte l’ordre croissant.

</details>

## Question 19 — Un passage de tri à bulles

Après un passage croissant de gauche à droite sur `[3, 1, 4, 2]`, quelle liste obtient-on ?

A. `[1, 2, 3, 4]`  
B. `[1, 3, 4, 2]`  
C. `[4, 3, 2, 1]`  
D. `[1, 3, 2, 4]`

<details><summary>Réponse et feedback</summary>

**Réponse : D.** On échange 3 et 1, on conserve 3 et 4, puis on échange 4 et 2. Le maximum 4 arrive à la fin.

A correspond au tri complet. B s’arrête avant le dernier échange. C correspond à l’ordre décroissant.

</details>

## Question 20 — Un passage sans échange

Combien de passages la version optimisée du tri à bulles effectue-t-elle pour constater que `[1, 2, 3, 4]` est déjà triée ?

A. 0  
B. 1  
C. 3  
D. 4

<details><summary>Réponse et feedback</summary>

**Réponse : B.** Un passage vérifie tous les voisins sans réaliser d’échange. Le booléen reste faux et `break` arrête les passages suivants.

0 ne vérifie aucun couple. La version non optimisée ferait 3 passages. La longueur 4 n’est pas le nombre de passages requis ici.

</details>
