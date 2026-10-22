# 02 — QCM de révision : algorithmique avec Python

**20 questions — une seule bonne réponse par question — 1 point par réponse.**

Commencez par 10 questions faciles, puis poursuivez avec 10 questions progressives. Prédire les résultats sans exécuter le code, puis ouvrir les feedbacks. Tous les extraits utilisent les conventions de Python : indices à partir de 0 et borne finale de `range` exclue.

[Revoir le chapitre](../supports/02_algorithmique.md)

## Question 1 — Addition simple

Que vaut `total` ?

```python
price = 4
quantity = 3
total = price * quantity
```

A. `7`  
B. `12`  
C. `43`  
D. `1`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** Le montant est le prix multiplié par la quantité : 4 × 3 = 12.

- A : correspondrait à une addition.
- C : assemble les chiffres au lieu de les multiplier.
- D : la différence entre les deux valeurs n'est pas le produit.

</details>

## Question 2 — Calculer un reste

Que vaut `17 % 5` ?

A. `2`  
B. `3`  
C. `5`  
D. `12`

<details><summary>Réponse et feedback</summary>

**Réponse : A.** 17 = 5 × 3 + 2 ; le reste est 2.

- B : c'est le quotient entier.
- C : c'est le diviseur, pas le reste.
- D : c'est la différence entre 17 et 5.

</details>

## Question 3 — Division entière

Que vaut `20 // 4` ?

A. `0`  
B. `4`  
C. `5`  
D. `5.0`

<details><summary>Réponse et feedback</summary>

**Réponse : C.** 20 divisé par 4 vaut 5.

- A : le reste est nul ; le quotient ne l'est pas.
- B : c'est le diviseur.
- D : `//` produit ici l'entier `5`, pas le flottant `5.0`.

</details>

## Question 4 — Comparer deux valeurs

Que vaut `age >= 18` si `age = 18` ?

A. `18`  
B. `False`  
C. `19`  
D. `True`

<details><summary>Réponse et feedback</summary>

**Réponse : D.** `>=` signifie « supérieur ou égal ». L'égalité suffit donc.

- A et C sont des nombres ; la comparaison renvoie un booléen.
- B serait le résultat de `age > 18`, qui exclut l'égalité.

</details>

## Question 5 — Choisir une branche

Que s'affiche-t-il ?

```python
temperature = 12
if temperature < 0:
    print("Cold")
else:
    print("Warm")
```

A. `Cold`  
B. `Warm`  
C. Les deux messages  
D. Aucun message

<details><summary>Réponse et feedback</summary>

**Réponse : B.** `12 < 0` est faux ; le bloc `else` affiche `Warm`.

- A : correspondrait à une température négative.
- C : un seul bloc de cette structure est exécuté.
- D : une des deux branches s'exécute toujours ici.

</details>

## Question 6 — Comprendre range

Quelles valeurs prend `i` ?

```python
for i in range(1, 4):
    print(i)
```

A. 1, 2, 3  
B. 1, 2, 3, 4  
C. 0, 1, 2, 3  
D. 4 seulement

<details><summary>Réponse et feedback</summary>

**Réponse : A.** La boucle commence à 1 et s'arrête avant la borne 4.

- B : la borne finale est exclue.
- C : `range(1, 4)` ne commence pas à 0.
- D : 4 est la borne d'arrêt, jamais une valeur de la boucle.

</details>

## Question 7 — Parcourir une liste

Quels nombres sont affichés ?

```python
for number in [2, 4]:
    print(number + 1)
```

A. 2, 4  
B. 3 seulement  
C. 5 seulement  
D. 3, 5

<details><summary>Réponse et feedback</summary>

**Réponse : D.** La boucle ajoute 1 à chaque élément : 2 devient 3 et 4 devient 5.

- A : affiche les valeurs d'origine, sans le calcul.
- B : omet le deuxième tour.
- C : ajoute 1 à la dernière valeur seulement.

</details>

## Question 8 — Longueur d'une liste

Que vaut `len(numbers)` ?

```python
numbers = [8, 10, 12]
```

A. `3`  
B. `2`  
C. `30`  
D. `12`

<details><summary>Réponse et feedback</summary>

**Réponse : A.** La liste contient trois éléments.

- B : est le dernier indice, pas la longueur.
- C : additionne les valeurs au lieu de compter les éléments.
- D : est le dernier élément de la liste.

</details>

## Question 9 — Ajouter un élément

Que contient `numbers` après le programme ?

```python
numbers = [1]
numbers.append(2)
```

A. `[2]`  
B. `[1, 2]`  
C. `[1]`  
D. `[1, 1, 2]`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** `append` ajoute 2 à la fin de la liste existante.

- A : remplacerait la liste au lieu de lui ajouter un élément.
- C : ne tiendrait pas compte de l'appel à `append`.
- D : ajouterait une valeur qui n'est pas dans le programme.

</details>

## Question 10 — Accumuler une somme

Que s'affiche-t-il ?

```python
total = 0
for number in [2, 3]:
    total += number
print(total)
```

A. `3`  
B. `5`  
C. `23`  
D. `0`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** Le total passe de 0 à 2, puis à 5.

- A : est la dernière valeur lue, pas la somme.
- C : assemble les chiffres au lieu de les additionner.
- D : serait le total si la boucle n'ajoutait aucune valeur.

</details>

## Question 11 — Affectations et permutation

Que s'affiche-t-il ?

```python
a = 4
b = 9
a = b
b = a
print(a, b)
```

A. `4 9`  
B. `9 4`  
C. `9 9`  
D. `4 4`

<details><summary>Réponse et feedback</summary>

**Réponse : C.** `a = b` remplace 4 par 9. Ensuite, `b` reçoit la valeur actuelle de `a`, donc 9.

- A : ignore les affectations.
- B : ce serait une permutation réussie ; il fallait sauvegarder l'ancienne valeur de `a`.
- D : la valeur 4 a été perdue dès `a = b`.

</details>

## Question 12 — Quotient et reste

Que s'affiche-t-il ?

```python
print(23 // 5, 23 % 5)
```

A. `4 3`  
B. `4.6 3`  
C. `3 4`  
D. `4 0`

<details><summary>Réponse et feedback</summary>

**Réponse : A.** `23 = 5 * 4 + 3` : le quotient entier vaut 4 et le reste vaut 3.

- B : `4.6` serait le résultat de `/`, pas de `//`.
- C : inverse le quotient et le reste.
- D : 23 n'est pas divisible par 5.

</details>

## Question 13 — Conditions combinées

Que s'affiche-t-il ?

```python
nombre = 12
if nombre % 2 == 0 and nombre > 10:
    print("A")
else:
    print("B")
```

A. `B`  
B. `True`  
C. `A` puis `B`  
D. `A`

<details><summary>Réponse et feedback</summary>

**Réponse : D.** 12 est pair et strictement supérieur à 10 : les deux conditions sont vraies.

- A : la branche `else` ne s'exécute pas ici.
- B : le programme affiche un texte, pas la valeur du test.
- C : un seul des deux blocs est exécuté.

</details>

## Question 14 — Boucle et accumulateur

Quelle valeur est affichée ?

```python
total = 0
for i in range(1, 4):
    total += i
print(total)
```

A. `3`  
B. `6`  
C. `10`  
D. `4`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** La boucle additionne 1, 2 et 3 : le total vaut 6.

- A : 3 est la dernière valeur de `i`, pas le total.
- C : inclut 4, alors que la borne finale est exclue.
- D : 4 est la borne exclue, pas le résultat du calcul.

</details>

## Question 15 — Filtrer et compter

Que s'affiche-t-il ?

```python
valides = []
for note in [8, 10, 14]:
    if note >= 10:
        valides.append(note)
print(len(valides))
```

A. `[10, 14]`  
B. `24`  
C. `2`  
D. `3`

<details><summary>Réponse et feedback</summary>

**Réponse : C.** La liste finale contient deux éléments : 10 et 14. `len` renvoie leur nombre.

- A : correspond à la liste, mais le programme affiche sa longueur.
- B : correspond à la somme des valeurs retenues, qui n'est pas demandée.
- D : compte aussi 8, alors que cette note est exclue.

</details>

## Question 16 — Maximum et valeurs négatives

Pour chercher le maximum d'une liste **non vide**, quelle initialisation convient à toutes les listes de nombres, y compris si tous sont négatifs ?

A. `maximum = 0`  
B. `maximum = nombres[0]`  
C. `maximum = len(nombres)`  
D. `maximum = -1`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** Le premier élément fournit un candidat appartenant à la liste. On le compare ensuite aux autres valeurs.

- A : pour `[-8, -3]`, 0 resterait le maximum alors qu'il n'appartient pas à la liste.
- C : une longueur n'est pas une valeur candidate pertinente.
- D : échoue aussi pour `[-8, -3]`, dont le maximum est inférieur à -1.

</details>

## Question 17 — Première occurrence

Que s'affiche-t-il ?

```python
nombres = [4, 7, 2, 7]
position = -1
for i in range(len(nombres)):
    if nombres[i] == 7 and position == -1:
        position = i
print(position)
```

A. `1`  
B. `3`  
C. `7`  
D. `-1`

<details><summary>Réponse et feedback</summary>

**Réponse : A.** Le premier 7 est à l'indice 1. Une fois cet indice mémorisé, `position == -1` devient faux.

- B : serait la dernière occurrence ; le deuxième test empêche cette mise à jour.
- C : 7 est la valeur recherchée, pas son indice.
- D : signalerait une absence, mais 7 est présent.

</details>

## Question 18 — Extraire les chiffres

Quelle valeur est affichée ?

```python
reste = 305
total = 0
while reste > 0:
    total += reste % 10
    reste = reste // 10
print(total)
```

A. `305`  
B. `3`  
C. `5`  
D. `8`

<details><summary>Réponse et feedback</summary>

**Réponse : D.** Les chiffres extraits sont 5, 0 et 3, dont la somme vaut 8.

- A : est le nombre initial, pas la somme de ses chiffres.
- B : est le nombre de chiffres et le dernier chiffre extrait, pas le total.
- C : est seulement le premier chiffre extrait.

</details>

## Question 19 — Vérifier un tri

On parcourt les voisins avec `for i in range(len(nombres) - 1)`. Quel test détecte une violation de l'ordre croissant **avec égalités autorisées** ?

A. `nombres[i] < nombres[i + 1]`  
B. `nombres[i] > nombres[i + 1]`  
C. `nombres[i] == nombres[i + 1]`  
D. `nombres[i] >= nombres[i + 1]`

<details><summary>Réponse et feedback</summary>

**Réponse : B.** Une descente apparaît lorsque l'élément actuel est strictement supérieur au suivant.

- A : détecte une montée, qui respecte l'ordre demandé.
- C : détecte une égalité, explicitement autorisée.
- D : rejetterait aussi les égalités, par exemple `[4, 4]`.

</details>

## Question 20 — Facteurs premiers et limite de la liste

On décompose 68 avec `premiers = [2, 3, 5, 7, 11, 13]`. Pour chaque premier, on divise le reste autant de fois que possible. Quel résultat obtient-on ?

A. Facteurs `[2]`, reste `34`, décomposition incomplète.  
B. Facteurs `[2, 2, 17]`, reste `1`, décomposition complète.  
C. Facteurs `[2, 2]`, reste `17`, décomposition incomplète.  
D. Facteurs `[2, 2]`, reste `1`, décomposition complète.

<details><summary>Réponse et feedback</summary>

**Réponse : C.** On divise 68 par 2 pour obtenir 34, puis encore par 2 pour obtenir 17. Aucun premier fourni ne divise 17.

- A : oublie de répéter la division par 2 ; un `while` est nécessaire.
- B : 17 n'est pas dans la liste autorisée ; l'algorithme décrit ne l'ajoute pas.
- D : fait disparaître le reste 17 ; `2 * 2` ne vaut pas 68.

</details>

## Grille des réponses

<details><summary>Afficher la grille complète</summary>

| Question | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Réponse | B | A | C | D | B | A | D | A | B | B | C | A | D | B | C | B | A | D | B | C |

</details>
