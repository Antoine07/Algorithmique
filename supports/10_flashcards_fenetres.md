# 5 flashcards — Boucles imbriquées et décalages

Après chaque question, révélez la réponse et parcourez l'animation pas à pas. Les colonnes représentent les indices de `numbers` et de `pattern`.

## Carte 1 — Calculer un indice décalé

### Question

Avec `i = 1` et `j = 1`, quel indice est lu par `numbers[i + j]` ? Que signifie `j` ?

### Réponse

L'indice lu est `2`. `i` marque le début de la fenêtre et `j` la position examinée dans le motif.

```python
value = numbers[i + j]
```

## Carte 2 — Compter les positions égales

### Question

Pour `numbers = [3, 1, 3, 2]`, `pattern = [3, 1]` et `i = 2`, quelle valeur prend `count` après la boucle intérieure ? Est-ce que le motif complet correspond ?

### Réponse

`count` vaut `1` : `3` correspond à `3`, mais `2` ne correspond pas à `1`. Le motif complet ne correspond donc pas, car il faut deux égalités.

```python
count = 0
for j in range(len(pattern)):
    if numbers[i + j] == pattern[j]:
        count += 1
```

## Carte 3 — Trouver les départs valides

### Question

Une liste contient 5 valeurs et le motif en contient 3. Quels départs la boucle doit-elle tester ?

### Réponse

Les départs `0`, `1` et `2`. La boucle est `range(5 - 3 + 1)`. Un départ à `3` ne laisse que deux valeurs pour un motif de trois.

```python
for i in range(len(numbers) - len(pattern) + 1):
    # tester la fenêtre qui commence à i
```

## Carte 4 — Réinitialiser le compteur

### Question

Pourquoi écrire `count = 0` dans la boucle extérieure, avant la boucle intérieure ?

### Réponse

Chaque départ `i` correspond à une nouvelle fenêtre. On remet donc le compteur à zéro avant de compter les égalités de cette fenêtre ; sinon, les résultats précédents s'ajouteraient au nouveau compte.

```python
for i in range(len(numbers) - len(pattern) + 1):
    count = 0
    for j in range(len(pattern)):
        ...
```

## Carte 5 — Ne pas rater un chevauchement

### Question

Où apparaît le motif `[1, 1, 1]` dans `numbers = [1, 1, 1, 1]` ? Pourquoi examiner le deuxième départ ?

### Réponse

Aux départs `0` et `1`. Ces fenêtres se chevauchent sur deux valeurs ; avancer `i` d'une seule position après une correspondance permet de trouver les deux.

```python
for i in range(len(numbers) - len(pattern) + 1):
    # tester chaque départ, même après une correspondance
```
