# TP Python — Recherche et logique dans les listes

**Bachelor 1 · Niveau intermédiaire · 8 exercices**

## Méthode

Pour chaque exercice : (1) exécuter l’exemple, (2) expliquer les indices et bornes de boucle, (3) réaliser le problème sans consulter de solution, (4) comparer avec le résultat attendu, (5) tester un autre cas.

**Contraintes :** Python 3, boucles `for`, conditions, listes, indices, booléens ; sans fonction personnalisée, classe ni bibliothèque externe.

**Attention :** les exemples guident le raisonnement mais ne résolvent pas directement l’exercice.

## Repères avant de commencer

`str(nombre)` transforme un nombre en texte. `len()` compte les caractères de ce texte. Pour compter les chiffres, on utilise ici uniquement des entiers **positifs ou nuls** : le signe `-` compterait aussi comme un caractère.

```python
print(str(107))       # texte "107"
print(len(str(107)))  # 3 chiffres
print(len(str(0)))    # 1 chiffre
```

Une **tranche** `liste[debut:fin]` extrait les éléments de l'indice `debut` inclus à l'indice `fin` exclu.

```python
valeurs = [9, 2, 3, 8]
print(valeurs[1:3])  # [2, 3]
```

Une **fenêtre** est un groupe d'éléments consécutifs que l'on examine à partir d'un indice. Dans les exercices de recherche, le **motif est non vide**. Les tranches sont expliquées pour lire l'exemple 07 ; sa solution doit utiliser des boucles.

---

## Exercice 01 — Filtrer selon le nombre de chiffres

### Exemple expliqué

```python
valeurs = [5, 23, 107, 84]
for i in range(len(valeurs)):
    if len(str(valeurs[i])) == 2:
        print(i, valeurs[i])
```

**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.

### Énoncé

```python
nombres = [12, 345, 7, 890, 45, 1002, 678]
longueur = 3
```

Construire une liste de couples `[indice, valeur]` pour les entiers positifs ou nuls ayant exactement `longueur` chiffres. Utiliser `range(len(...))` et `append()`.

**Résultat attendu :** `[[1, 345], [3, 890], [6, 678]]`

**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).

---

## Exercice 02 — Retrouver des couples voisins

### Exemple expliqué

```python
valeurs = [4, 8, 3, 8, 3]
for i in range(len(valeurs) - 1):
    if valeurs[i] == 8 and valeurs[i + 1] == 3:
        print(i)
```

**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.

### Énoncé

```python
valeurs = [2, 5, 7, 5, 7, 3, 5, 7]
a = 5
b = 7
```

Enregistrer dans une liste les indices de départ de chaque couple consécutif `[a, b]`.

**Résultat attendu :** `[1, 3, 6]`

**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).

---

## Exercice 03 — Rechercher une séquence complète

### Exemple expliqué

```python
valeurs = [9, 2, 3, 8]
motif = [2, 3]
for i in range(len(valeurs) - len(motif) + 1):
    identique = True
    for j in range(len(motif)):
        if valeurs[i + j] != motif[j]:
            identique = False
    if identique:
        print(i)
```

**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.

### Énoncé

```python
valeurs = [1, 2, 3, 1, 2, 3, 4, 1, 2, 3]
motif = [1, 2, 3]
```

Trouver toutes les positions où le motif apparaît complètement. Utiliser deux boucles et un booléen.

**Résultat attendu :** `[0, 3, 7]`

**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).

---

## Exercice 04 — Détecter les triples croissants

### Exemple expliqué

```python
valeurs = [3, 6, 9, 4]
for i in range(len(valeurs) - 2):
    if valeurs[i] < valeurs[i + 1] < valeurs[i + 2]:
        print(i)
```

**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.

### Énoncé

```python
valeurs = [3, 5, 8, 2, 4, 6, 9, 1, 3]
```

Construire une liste de `[indice, [x, y, z]]` pour chaque groupe de trois valeurs consécutives strictement croissantes.

**Résultat attendu :** `[[0, [3, 5, 8]], [3, [2, 4, 6]], [4, [4, 6, 9]]]`

**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).

---

## Exercice 05 — Compter les changements de signe

### Exemple expliqué

```python
mesures = [-2, 3, -1]
for i in range(len(mesures) - 1):
    if mesures[i] < 0 and mesures[i + 1] > 0:
        print('négatif vers positif', i)
```

**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.

### Énoncé

```python
mesures = [-3, 2, 4, -1, 0, 5, -2, -1, 3]
```

Trouver les indices où deux valeurs consécutives sont de signes opposés stricts. Ignorer les passages impliquant zéro. Afficher les indices et le nombre total.

**Résultat attendu :** `[0, 2, 5, 7]` (4 changements de signe).

**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).

---

## Exercice 06 — Repérer les doublons consécutifs

### Exemple expliqué

```python
nombres = [1, 1, 2, 3, 3]
for i in range(len(nombres) - 1):
    if nombres[i] == nombres[i + 1]:
        print(i)
```

**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.

### Énoncé

```python
nombres = [4, 4, 4, 2, 5, 5, 1, 1, 1]
```

Afficher les indices où deux éléments voisins sont égaux, puis compter les couples. Un groupe de trois valeurs identiques forme deux couples voisins.

**Résultat attendu :** `[0, 1, 4, 6, 7]` et `5` couples.

**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).

---

## Exercice 07 — Trouver un motif avec chevauchement

### Exemple expliqué

```python
donnees = [1, 1, 1]
motif = [1, 1]
for i in range(len(donnees) - len(motif) + 1):
    if donnees[i:i + len(motif)] == motif:
        print(i)
```

**À observer :** le rôle de `i`, les limites de `range()` et les comparaisons réalisées.

### Énoncé

```python
donnees = [2, 4, 2, 4, 2, 5, 2, 4, 2, 4]
motif = [2, 4, 2]
```

Retrouver toutes les positions du motif **sans utiliser de tranches `[:]` dans votre solution**. Accepter les motifs qui se chevauchent.

**Résultat attendu :** `[0, 2, 6]`

**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).

---

## Exercice 08 — Autoriser une erreur dans un motif

### Exemple expliqué

```python
donnees = [1, 2, 4]
motif = [1, 2, 3]
differences = 0
for j in range(len(motif)):
    if donnees[j] != motif[j]:
        differences += 1
print(differences)  # 1
```

**À observer :** le rôle de `j`, la comparaison des valeurs à la même position et l'incrémentation de `differences`.

### Énoncé

```python
donnees = [1, 2, 3, 1, 2, 4, 1, 5, 3, 1, 2, 3]
motif = [1, 2, 3]
```

Pour chaque fenêtre de même taille que le motif, compter les différences. Enregistrer `[indice, differences]` seulement s’il y a au plus une différence.

**Résultat attendu :** `[[0, 0], [3, 1], [6, 1], [9, 0]]`

**À vérifier :** un cas usuel et un cas limite (liste courte, aucune correspondance ou chevauchement selon l'exercice).
