# TP Python — Recherche et logique dans les listes

**Bachelor 1 · Approfondissement progressif · 15 exercices**

## Méthode

Ce chapitre s'appuie sur les acquis du chapitre 02. Il les applique à des problèmes nouveaux : comparer des voisins, analyser des groupes de plusieurs valeurs et chercher des motifs dans une liste.

Les premiers exercices installent les raisonnements spécifiques à ce chapitre. Les suivants combinent progressivement plusieurs comparaisons et deux boucles.

**Prérequis :** parcourir une liste, utiliser `if`, des indices, `range`, un compteur et `append`.

**Contraintes :** Python 3 ; boucles et listes uniquement ; sans fonction personnalisée, classe ni bibliothèque externe. Pour les recherches de motifs, utiliser des boucles, même quand une tranche pourrait remplacer la boucle intérieure.

## Repères avant de commencer

### Comparer des voisins

Pour examiner un élément et celui qui le suit, `i` doit s'arrêter avant le dernier indice :

```python
values = [4, 7, 2]
for i in range(len(values) - 1):
    print(values[i], values[i + 1])
```

On compare les couples aux indices 0 et 1. Une liste de moins de deux valeurs ne donne aucun couple.

### Examiner un groupe de trois

Pour accéder à `values[i]`, `values[i + 1]` et `values[i + 2]`, utiliser `range(len(values) - 2)`. Le dernier départ valide est `len(values) - 3`.

### Chercher un motif dans des fenêtres

Une fenêtre est un groupe consécutif de valeurs. Si la liste contient `n` éléments et le motif `m` éléments, les départs valides sont parcourus avec `range(n - m + 1)`. Pour chaque départ, une deuxième boucle compare les valeurs correspondantes.

---

## Partie 1 — Couples et triples voisins

## Exercice 01 — Comparer les voisins

### Exemple expliqué

```python
values = [3, 5, 5, 2]
for i in range(len(values) - 1):
    if values[i] < values[i + 1]:
        print(i, "rise")
    elif values[i] == values[i + 1]:
        print(i, "equal")
    else:
        print(i, "fall")
```

On décrit chaque couple selon l'ordre de ses deux valeurs.

### Énoncé

```python
values = [4, 2, 2, 7, 5]
```

Afficher l'indice de départ et l'étiquette `rise`, `equal` ou `fall` pour chaque couple de voisins.

**Résultat attendu :** `0 fall`, `1 equal`, `2 rise`, `3 fall`.

**Pour avancer :**

1. Écrire la boucle jusqu'à `len(values) - 1` exclu.
2. Comparer `values[i]` à `values[i + 1]`.
3. Utiliser `if`, `elif` et `else` pour distinguer les trois cas.

## Exercice 02 — Trouver un couple précis

### Exemple expliqué

```python
values = [4, 8, 3, 8, 3]
for i in range(len(values) - 1):
    if values[i] == 8 and values[i + 1] == 3:
        print(i)
```

Les deux comparaisons doivent être vraies au même indice de départ.

### Énoncé

```python
values = [2, 5, 7, 5, 7, 3, 5, 7]
first = 5
second = 7
```

Créer une liste des indices où `first` est immédiatement suivi de `second`.

**Résultat attendu :** `[1, 3, 6]`.

**Pour avancer :** créer une liste vide, tester les deux voisins avec `and`, puis ajouter `i` quand les deux valeurs conviennent.

## Exercice 03 — Compter les doublons voisins

### Exemple expliqué

```python
values = [1, 1, 2, 3, 3]
count = 0
for i in range(len(values) - 1):
    if values[i] == values[i + 1]:
        count += 1
print(count)  # 2
```

Chaque couple égal compte une fois. Trois valeurs égales de suite forment donc deux couples.

### Énoncé

```python
values = [4, 4, 4, 2, 5, 5, 1, 1, 1]
```

Compter tous les couples de voisins égaux. Afficher également leurs indices de départ.

**Résultat attendu :** indices `[0, 1, 4, 6, 7]` et total `5`.

**Pour avancer :** garder une liste d'indices et un compteur ; mettre à jour les deux dans la même condition.

## Exercice 04 — Reconnaître un triple croissant

### Exemple expliqué

```python
values = [3, 6, 9, 4]
for i in range(len(values) - 2):
    if values[i] < values[i + 1] < values[i + 2]:
        print(i)
```

Deux comparaisons strictes valident un groupe de trois. Une égalité ne constitue pas une hausse stricte.

### Énoncé

```python
values = [3, 5, 8, 2, 4, 6, 9, 1, 3]
```

Créer une liste de couples `[indice, [x, y, z]]` pour tous les triples strictement croissants.

**Résultat attendu :** `[[0, [3, 5, 8]], [3, [2, 4, 6]], [4, [4, 6, 9]]]`.

**Pour avancer :** calculer les trois valeurs à partir de `i` ; tester les deux relations ; ajouter l'indice et les trois valeurs ensemble.

## Exercice 05 — Repérer le plus grand au milieu

### Exemple expliqué

```python
values = [2, 7, 4]
if values[0] < values[1] and values[1] > values[2]:
    print("middle peak")
```

La valeur centrale est ici supérieure à ses deux voisins.

### Énoncé

```python
values = [2, 7, 4, 3, 8, 5, 1]
```

Parcourir les triples voisins et enregistrer `[indice, valeur centrale]` lorsque la valeur centrale est strictement supérieure aux deux autres.

**Résultat attendu :** `[[0, 7], [3, 8]]`.

**Pour avancer :** un triple valide commence avant les deux derniers indices ; tester séparément que le milieu est supérieur à gauche et à droite.

---

## Partie 2 — Chercher des motifs

## Exercice 06 — Repérer un motif de deux valeurs

### Exemple expliqué

```python
values = [2, 4, 2, 5]
pattern = [2, 4]
for i in range(len(values) - len(pattern) + 1):
    if values[i] == pattern[0] and values[i + 1] == pattern[1]:
        print(i)
```

On teste seulement les départs qui laissent assez de place au motif.

### Énoncé

```python
values = [3, 1, 3, 1, 3, 2]
pattern = [3, 1]
```

Construire la liste des indices où apparaît le motif complet.

**Résultat attendu :** `[0, 2]`.

**Pour avancer :** créer la liste de résultats ; le dernier départ possible vaut `len(values) - len(pattern)` ; ajouter chaque départ correspondant.

## Exercice 07 — Vérifier une correspondance complète

### Exemple expliqué

```python
values = [3, 1, 3, 2]
pattern = [3, 1]
start = 0
matching_positions = 0
for j in range(len(pattern)):
    if values[start + j] == pattern[j]:
        matching_positions += 1

found = 0
if matching_positions == len(pattern):
    found = 1
print(found)  # 1 : les deux positions correspondent
```

On compte les positions égales. Le motif complet est trouvé seulement si toutes ses positions correspondent à la fenêtre.

### Énoncé

```python
values = [3, 1, 3, 2]
pattern = [3, 1]
start = 2
```

Vérifier si toute la fenêtre qui commence à `start` correspond au motif. Utiliser un compteur de positions égales et afficher `1` si tout le motif correspond, sinon `0`.

**Résultat attendu :** `0`. Une position correspond, mais pas les deux.

**Pour avancer :** pour chaque `j`, comparer `values[start + j]` à `pattern[j]` ; après la boucle, vérifier si le compteur est égal à `len(pattern)`.

## Exercice 08 — Compter les correspondances dans chaque fenêtre

### Exemple expliqué

```python
values = [2, 4, 2, 5]
pattern = [2, 4]
for i in range(len(values) - len(pattern) + 1):
    matches = 0
    for j in range(len(pattern)):
        if values[i + j] == pattern[j]:
            matches += 1
    print(i, matches)
```

La boucle extérieure choisit chaque fenêtre valide ; la boucle intérieure compte ses positions correspondantes. On affiche le score sans encore décider si le motif est complet.

### Énoncé

```python
values = [3, 1, 3, 2, 3, 1]
pattern = [3, 1]
```

Afficher pour chaque départ valide l'indice et le nombre de positions correspondantes.

**Résultat attendu :** `0 2`, `1 0`, `2 1`, `3 0`, `4 2`.

**Pour avancer :** remettre `matches` à zéro au début de chaque fenêtre ; après la boucle de `j`, afficher `i` et `matches`.

## Exercice 09 — Arrêter une comparaison avec break

### Exemple expliqué

```python
window = [3, 1, 4]
pattern = [3, 2, 4]
matches = True
for j in range(len(pattern)):
    if window[j] != pattern[j]:
        matches = False
        break
print(matches)  # False
```

Dès que la deuxième position diffère, la comparaison s'arrête : les positions suivantes ne peuvent pas rendre la fenêtre identique au motif.

### Énoncé

```python
window = [5, 2, 8, 4]
pattern = [5, 2, 3, 4]
```

Comparer la fenêtre au motif avec une boucle. Mettre `matches` à `False` et utiliser `break` dès qu'une différence est trouvée. Afficher le booléen obtenu.

**Résultat attendu :** `False`.

**Pour avancer :** partir de `matches = True` ; si deux valeurs diffèrent, modifier le booléen et interrompre la boucle.

## Exercice 10 — Comparer un motif de trois valeurs

### Exemple expliqué

```python
values = [9, 2, 3, 8]
pattern = [2, 3]
for i in range(len(values) - len(pattern) + 1):
    matches = True
    for j in range(len(pattern)):
        if values[i + j] != pattern[j]:
            matches = False
    if matches:
        print(i)
```

`i` choisit une fenêtre ; `j` compare les positions à l'intérieur du motif.

### Énoncé

```python
values = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3]
pattern = [1, 2, 3]
```

Trouver tous les départs où le motif apparaît. Utiliser deux boucles et un booléen ; ne pas utiliser de tranche.

**Résultat attendu :** `[0, 3, 7]`.

**Pour avancer :** pour chaque `i`, initialiser `matches = True` ; comparer `values[i + j]` avec `pattern[j]` ; mémoriser le départ si toutes les positions correspondent.

## Exercice 11 — Ne pas manquer les chevauchements

### Exemple expliqué

```python
values = [1, 1, 1]
pattern = [1, 1]
for i in range(len(values) - len(pattern) + 1):
    if values[i] == pattern[0] and values[i + 1] == pattern[1]:
        print(i)
```

Les départs 0 et 1 sont tous les deux testés : les motifs partagent une valeur.

### Énoncé

```python
values = [2, 4, 2, 4, 2, 5, 2, 4, 2, 4]
pattern = [2, 4, 2]
```

Trouver tous les départs du motif avec deux boucles. Accepter les chevauchements.

**Résultat attendu :** `[0, 2, 6]`.

**Pour avancer :** avancer `i` d'une seule position après chaque essai, même après une correspondance ; la boucle de `j` vérifie les trois valeurs.

## Exercice 12 — Compter les différences dans une fenêtre

### Exemple expliqué

```python
window = [1, 2, 4]
pattern = [1, 2, 3]
differences = 0
for j in range(len(pattern)):
    if window[j] != pattern[j]:
        differences += 1
print(differences)  # 1
```

Cette étape compare une seule fenêtre à un motif et compte les positions différentes.

### Énoncé

```python
window = [3, 5, 8, 9]
pattern = [3, 6, 8, 9]
```

Compter le nombre de différences entre cette fenêtre et le motif.

**Résultat attendu :** `1`.

**Pour avancer :** les longueurs sont égales ; comparer les valeurs aux mêmes indices et incrémenter le compteur pour chaque inégalité.

## Exercice 13 — Tester chaque fenêtre avec une erreur permise

### Exemple expliqué

```python
values = [1, 2, 3, 1, 2, 4]
pattern = [1, 2, 3]
for i in range(len(values) - len(pattern) + 1):
    differences = 0
    for j in range(len(pattern)):
        if values[i + j] != pattern[j]:
            differences += 1
    if differences <= 1:
        print(i, differences)
```

Le compteur est remis à zéro pour chaque nouvelle fenêtre. On accepte zéro ou une différence.

### Énoncé

```python
values = [1, 2, 3, 1, 2, 4, 1, 5, 3, 1, 2, 3]
pattern = [1, 2, 3]
```

Enregistrer `[indice, differences]` pour chaque fenêtre qui contient au plus une différence.

**Résultat attendu :** `[[0, 0], [3, 1], [6, 1], [9, 0]]`.

**Pour avancer :** parcourir les départs possibles ; pour chacun, compter ses différences dans une boucle intérieure ; enregistrer seulement après la comparaison complète.

---

## Partie 3 — Analyser les changements de signe

## Exercice 14 — Distinguer les deux sens du changement

### Exemple expliqué

```python
measurements = [-2, 3, -1]
for i in range(len(measurements) - 1):
    if measurements[i] < 0 and measurements[i + 1] > 0:
        print("negative to positive", i)
```

Cet exemple reconnaît un seul sens. Pour analyser toutes les inversions, il faut tester les deux ordres.

### Énoncé

```python
measurements = [-3, 2, 4, -1, 0, 5, -2, -1, 3]
```

Enregistrer les indices où deux voisins sont de signes opposés stricts, dans les deux sens. Ignorer les couples contenant zéro. Afficher les indices et leur nombre.

**Résultat attendu :** `[0, 2, 5, 7]` et `4` changements.

**Pour avancer :** un sens est négatif puis positif ; l'autre est positif puis négatif. Combiner ces cas avec `or` ; zéro ne satisfait aucun des tests stricts.

## Exercice 15 — Faire le bilan des voisins

### Exemple expliqué

```python
measurements = [2, 5, 1]
rises = 0
falls = 0
for i in range(len(measurements) - 1):
    if measurements[i] < measurements[i + 1]:
        rises += 1
    elif measurements[i] > measurements[i + 1]:
        falls += 1
print(rises, falls)  # 1 1
```

Chaque couple contribue à une seule catégorie ; une égalité ne compte ni comme hausse ni comme baisse.

### Énoncé

```python
measurements = [3, 3, -2, 4, 0, -1, -1, 5]
```

Compter les hausses, les baisses, les égalités et les changements de signe stricts. Afficher les quatre totaux dans cet ordre.

**Résultat attendu :** `2 3 2 3`.

**Pour avancer :** parcourir les couples une seule fois ; classer chaque relation ; compter un changement de signe uniquement si les deux valeurs sont strictement de signes contraires.

