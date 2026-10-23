# Examen blanc — QCM Python et algorithmique (25 questions)

25 questions pour revoir Python, les listes, les recherches, les motifs et les boucles.

**Une seule bonne réponse par question. Un point par bonne réponse.**

Questions 1 à 20 : fondamentaux et lecture de code. Questions 21 à 25 : algorithmique et cas de raisonnement.

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


## Question 2 — Quotient, reste et puissance

Que s’affiche-t-il ?

```python
print(17 // 5, 17 % 5, 2 ** 3)
```

A. `3 2 8`  
B. `3.4 2 6`  
C. `2 3 8`  
D. `3 0 6`


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


## Question 8 — Échanger deux variables

Après `a = 6` et `b = 2`, quelle suite échange correctement leurs valeurs ?

A. `a = b` puis `b = a`  
B. `temp = a` puis `a = b` puis `b = temp`  
C. `temp = b` puis `a = temp` puis `b = a`  
D. `temp = a` puis `b = temp`


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


## Question 10 — Maximum avec des nombres négatifs

Pour rechercher le maximum de `[-7, -2, -9]`, quelle initialisation est fiable ?

A. `maximum = 0`  
B. `maximum = -1`  
C. `maximum = nombres[0]`  
D. `maximum = len(nombres)`


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


## Question 13 — Facteurs premiers disponibles

On décompose 60 en divisant autant de fois que possible par chaque valeur de `premiers = [2, 3]`. Quels facteurs et quel reste obtient-on ?

A. Facteurs `[2, 2, 3]`, reste `5` : décomposition incomplète.  
B. Facteurs `[2, 3]`, reste `10` : décomposition incomplète.  
C. Facteurs `[2, 2, 3, 5]`, reste `1` : décomposition complète.  
D. Facteurs `[2, 2, 3]`, reste `1` : décomposition complète.


## Question 14 — Parcourir trois voisins

Pour comparer `valeurs[i]`, `valeurs[i + 1]` et `valeurs[i + 2]`, quelle boucle parcourt tous les départs valides ?

A. `range(len(valeurs))`  
B. `range(len(valeurs) - 1)`  
C. `range(len(valeurs) - 2)`  
D. `range(2, len(valeurs))`


## Question 15 — Motifs avec chevauchement

À quels indices commence le motif `[2, 2]` dans `[2, 2, 2, 3]` ?

A. `[0]`  
B. `[0, 2]`  
C. `[1, 2]`  
D. `[0, 1]`


## Question 16 — Changements de signe

Dans `[-2, 0, 3, -1]`, quels sont les indices de départ des couples de signes opposés stricts ?

A. `[0, 1, 2]`  
B. `[2]`  
C. `[0, 2]`  
D. `[]`


## Question 17 — Une erreur au maximum

Pour accepter les fenêtres qui diffèrent d’un motif sur au plus une position, quelle règle est correcte ?

A. Remettre le compteur à 0 à chaque fenêtre, compter les inégalités, puis tester `differences <= 1`.  
B. Remettre le compteur à 0 avant chaque comparaison et tester `differences == 1`.  
C. Conserver le même compteur sur toutes les fenêtres et tester `differences <= 1`.  
D. Compter les égalités et tester `differences > 1`.


## Question 18 — Plusieurs conditions

Que s’affiche-t-il ?

```python
temperature = 12
if temperature < 0:
    print("Freezing")
elif temperature < 20:
    print("Cool")
else:
    print("Warm")
```

A. `Freezing`  
B. `Cool`  
C. `Warm`  
D. `Cool` puis `Warm`


## Question 19 — Parcourir un indice sur deux

Qu’affiche ce programme ?

```python
values = [10, 20, 30, 40]
for i in range(0, len(values), 2):
    print(values[i])
```

A. `10`, puis `30`  
B. `20`, puis `40`  
C. `10`, `20`, `30`, puis `40`  
D. `0`, puis `2`


## Question 20 — Mettre à jour une somme avec while

Quelle valeur est affichée ?

```python
number = 3
total = 0
while number > 0:
    total += number
    number -= 1
print(total)
```

A. `3`  
B. `5`  
C. `6`  
D. `0`


## Question 21 — Le dernier indice

Quel est le dernier indice de `values = [6, 8, 2, 9]` ?

A. `4`  
B. `3`  
C. `2`  
D. `9`


## Question 22 — Une borne de boucle

Combien de fois la boucle s'exécute-t-elle ?

```python
for i in range(2, 6):
    print(i)
```

A. 6 fois  
B. 5 fois  
C. 4 fois  
D. 3 fois


## Question 23 — Réinitialisation d'un accumulateur

Quelle valeur s'affiche ?

```python
total = 0
for number in [3, 4, 2]:
    total += number
print(total)
```

A. `9`  
B. `2`  
C. `0`  
D. `342`


## Question 24 — Liste vide et filtre

Que contient `selected` à la fin ?

```python
selected = []
for number in [1, 2, 3, 4]:
    if number > 4:
        selected.append(number)
```

A. `[4]`  
B. `[1, 2, 3, 4]`  
C. `[5]`  
D. `[]`


## Question 25 — Mettre à jour le maximum

Quel maximum obtient-on ?

```python
values = [-6, -2, -9]
maximum = values[0]
for value in values:
    if value > maximum:
        maximum = value
print(maximum)
```

A. `0`  
B. `-2`  
C. `-6`  
D. `-9`

