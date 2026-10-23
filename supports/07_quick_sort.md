# 07 — Challenge final : Quick Sort

**Niveau :** avancé · **Format :** observer, décomposer, puis programmer.

Quick Sort est le défi final du parcours. Il combine les listes, les indices, les comparaisons, les échanges et deux nouvelles idées : les fonctions et la récursion. Avancez étape par étape : il n'est pas nécessaire de comprendre tout l'algorithme au premier passage.

**Règle de cette animation :** le pivot est toujours le dernier élément de la zone observée. Les valeurs égales au pivot vont dans la zone de gauche.

## Le défi

Écrire un programme qui trie une liste sans utiliser `sort()` ni `sorted()`. Vous allez d'abord observer Quick Sort, puis apprendre à partitionner une seule zone et enfin à répéter cette opération sur les sous-listes.

Le programme doit modifier la liste en place et fonctionner avec une liste vide, une seule valeur, des valeurs déjà rangées et des doublons.

## Observer Quick Sort pas à pas

Avant de lire la méthode, lancez l'animation. Repérez le pivot, les valeurs qui passent à sa gauche et la manière dont l'algorithme reprend sur les deux zones. Utilisez les commandes pour avancer, reculer ou lire les étapes automatiquement.

Pendant l'observation, demandez-vous :

- À quel moment le pivot rejoint-il sa position définitive ?
- Quelle partie de la liste est encore en cours de traitement ?
- Pourquoi les deux zones peuvent-elles ensuite être traitées séparément ?

## Étape 1 — Choisir un pivot

Le **pivot** est la valeur qui sert de repère pendant une partition. Dans ce chapitre, on choisit le dernier élément de la zone.

Avec `[6, 3, 8, 5, 2]`, le pivot est `2`. La partition place les valeurs inférieures ou égales au pivot à gauche, et les valeurs supérieures à droite. Ici, le pivot rejoint le début : `[2, 3, 8, 5, 6]`.

### Mini-défi 1

Pour `[7, 4, 9, 3, 6]`, identifier le pivot, puis indiquer quelles valeurs doivent finir à sa gauche et lesquelles à sa droite. Ne cherchez pas encore à trier ces deux groupes.

## Étape 2 — Partitionner une zone

Une partition traite seulement les indices `low` à `high`. Elle utilise deux repères :

- `current` examine les valeurs de gauche à droite ;
- `boundary` marque la fin de la zone des valeurs inférieures ou égales au pivot.

Au départ, `boundary = low - 1`. Quand `values[current] <= pivot`, on avance `boundary` et on échange les deux valeurs si nécessaire. À la fin, on échange le pivot avec la valeur juste après la zone de gauche.

### Exemple suivi

Pour la zone `[6, 3, 8, 5, 2]`, le pivot vaut `2`. `current` examine `6`, `3`, `8` et `5` : aucun ne va à gauche du pivot. L'échange final place `2` à l'indice 0. Le pivot est maintenant à sa position définitive ; les valeurs à sa droite ne sont pas encore triées.

### Mini-défi 2

Pour la liste `[6, 3, 8, 5, 2]`, compléter le tableau de suivi sur papier :

| Valeur examinée | Est-elle `<= 2` ? | Nouvelle limite de gauche |
| --- | --- | --- |
| 6 |  |  |
| 3 |  |  |
| 8 |  |  |
| 5 |  |  |

Expliquer ensuite pourquoi le pivot termine à l'indice 0.

## Étape 3 — Écrire la fonction de partition

Une fonction reçoit la liste et les bornes de la zone. Elle déplace les valeurs et renvoie l'indice final du pivot.

```python
def partition(values, low, high):
    pivot = values[high]
    boundary = low - 1

    for current in range(low, high):
        if values[current] <= pivot:
            boundary += 1
            values[boundary], values[current] = values[current], values[boundary]

    # À compléter : placer le pivot après la zone de gauche,
    # puis renvoyer son indice.
```

### Mini-défi 3

Compléter les deux dernières opérations. Tester `partition(values, 0, len(values) - 1)` avec `[6, 3, 8, 5, 2]`.

**À vérifier :** la fonction renvoie `0`, la valeur à l'indice 0 est `2`, et toutes les valeurs à gauche du pivot sont inférieures ou égales à `2`. La zone droite n'a pas encore besoin d'être triée.

## Étape 4 — S'arrêter sur une zone assez petite

Après une partition, Quick Sort traite séparément la zone de gauche et la zone de droite. Une zone vide ou composée d'une seule valeur est déjà triée : il faut arrêter d'appeler la fonction.

```python
if low < high:
    # Il reste au moins deux valeurs à traiter.
    ...
```

Cette condition est le **cas d'arrêt**. Sans lui, les appels récursifs continueraient sans fin.

### Mini-défi 4

Pour les bornes `(2, 1)`, `(4, 4)` et `(1, 3)`, lesquelles décrivent une zone contenant au moins deux valeurs ? Justifier avec le test `low < high`.

## Étape 5 — Traiter les deux zones

Après avoir obtenu `pivot_index`, le pivot est terminé. On ne l'inclut donc dans aucun des deux appels suivants :

```python
quick_sort(values, low, pivot_index - 1)
quick_sort(values, pivot_index + 1, high)
```

La fonction s'appelle elle-même sur des zones plus petites : c'est la **récursion**. Chaque appel répète une partition, jusqu'à ce que toutes les zones contiennent zéro ou une valeur.

### Exemple de découpage

Si le pivot rejoint l'indice 3 dans une zone allant de 0 à 6, les prochains appels traitent les indices `0 à 2` et `4 à 6`. L'indice 3 est laissé de côté, car le pivot est déjà à sa place.

### Mini-défi 5

Si `pivot_index = 2` et que la zone initiale va de 0 à 5, écrire les bornes des deux appels récursifs. Vérifier qu'aucun appel ne retravaille le pivot.

## Challenge final — Programmer Quick Sort

Compléter `partition`, puis écrire `quick_sort`. Respecter les étapes dans l'ordre : cas d'arrêt, partition, appel sur la zone de gauche, appel sur la zone de droite.

```python
def quick_sort(values, low, high):
    if low < high:
        pivot_index = partition(values, low, high)
        # À compléter : traiter les zones gauche et droite.


values = [6, 3, 8, 5, 2, 7, 4]
quick_sort(values, 0, len(values) - 1)
print(values)
```

**Résultat attendu :** `[2, 3, 4, 5, 6, 7, 8]`.

### Tests du challenge

Tester également ces listes :

```python
[]
[5]
[4, 1, 4, 2, 1]
[1, 2, 3, 4, 5]
[5, 4, 3, 2, 1]
```

Vérifier que la liste de départ est modifiée en place et qu'aucune valeur n'a été perdue ou ajoutée.

## Reculer et réfléchir

Quick Sort s'appuie sur une règle répétée : partitionner, puis résoudre les zones plus petites de la même manière. Dans beaucoup de cas, ces découpages rendent le travail efficace ; avec un pivot très déséquilibré, il peut toutefois falloir beaucoup de partitions.

À expliquer avec vos mots :

- pourquoi le pivot n'est plus retravaillé après une partition ;
- comment le cas d'arrêt empêche la récursion de continuer ;
- ce qui pourrait arriver si le pivot est toujours le plus petit ou le plus grand élément.

