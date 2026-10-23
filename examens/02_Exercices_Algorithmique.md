# Examen blanc — Exercices d'algorithmique

**11 exercices : 5 très faciles, 3 applications plus difficiles et 3 challenges facultatifs.**

Utiliser les boucles, les conditions et les listes. Écrire une solution pour chaque exercice. Les noms de variables et les messages affichés dans vos programmes doivent être en anglais. Pour le dernier défi, expliquer le code fourni sans modifier son message.

## Exercices très faciles

### Exercice 1 — Calculer un montant

```python
unit_price = 8
quantity = 4
```

Calculer le montant total et l'afficher.

### Exercice 2 — Pair ou impair

```python
number = 14
```

Afficher `Even` si `number` est pair et `Odd` sinon. Tester aussi avec `7` et `0`.

### Exercice 3 — Répéter un calcul

Écrire une boucle qui affiche les trois premiers multiples de 2, en commençant par 2.

### Exercice 4 — Filtrer une liste

```python
grades = [8, 12, 9, 16, 10]
```

Créer une nouvelle liste qui contient les notes supérieures ou égales à 10. Conserver l'ordre initial.

### Exercice 5 — Compter une valeur

```python
numbers = [3, 1, 3, 5, 3]
target = 3
```

Compter le nombre d'occurrences de `target` sans utiliser `.count()`.

## Exercices d'application —  plus difficiles

### Exercice 6 — Comparer les voisins

```python
values = [4, 2, 2, 7, 5]
```

Pour chaque paire de voisins, afficher l'indice de départ et l'étiquette `rise`, `equal` ou `fall` selon la relation entre les deux valeurs.

### Exercice 7 — Repérer un couple précis

```python
values = [2, 5, 7, 5, 7, 3, 5, 7]
first = 5
second = 7
```

Créer une liste contenant les indices où `first` est immédiatement suivi de `second`.

### Exercice 8 — Compter les couples égaux

```python
values = [4, 4, 4, 2, 5, 5, 1, 1, 1]
```

Créer la liste des indices de départ des couples de voisins égaux, puis afficher cette liste et son nombre d'éléments. Trois valeurs identiques consécutives forment deux couples.

## Challenges facultatifs

### Exercice 9 — Repérer des triples croissants

```python
values = [3, 5, 8, 2, 4, 6, 9, 1, 3]
```

Créer une liste contenant les indices de départ des groupes de trois valeurs consécutives strictement croissantes.

### Exercice 10 — Repérer les sommets locaux

```python
values = [2, 7, 4, 9, 3, 5, 1]
```

Créer une liste des indices où une valeur est strictement supérieure à ses deux voisines. Ne pas tester les extrémités.

### Exercice 11 — Expliquer une recherche de séquence

```python
numbers = [1, 2, 3, 7, 9, 1, 2, 3, 4, 1, 2, 3]
pattern = [1, 2, 3, 4]

for i in range(len(numbers) - len(pattern) + 1):
    count = 0
    for j in range(len(pattern)):
        if pattern[j] == numbers[i + j]:
            count += 1
    if count == len(pattern):
        print("séquence trouvée en position", i)
```

Expliquer le rôle de `i`, de `j` et de `count`. Pourquoi la boucle extérieure utilise-t-elle cette borne ? Indiquer le message affiché par le programme.
