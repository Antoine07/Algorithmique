# 09 — Trouver une idée d'algorithme

Un énoncé ne donne pas toujours immédiatement la suite d'instructions à écrire. Pour trouver une idée, on peut d'abord clarifier le problème, l'essayer sur papier et reconnaître les opérations dont on a besoin. Le code vient après le raisonnement.

## Étape 1 — Clarifier les données et le résultat

Reformuler la consigne en répondant à trois questions :

1. Quelles sont les données de départ ?
2. Qu'est-ce que je dois produire ou afficher ?
3. Quelles règles définissent la bonne réponse ?

**Exemple — compter les valeurs positives**

- Entrée : une liste de nombres.
- Résultat : le nombre de valeurs strictement supérieures à zéro.
- Règle : parcourir les valeurs, tester chaque nombre, ajouter 1 au compteur si le test est vrai.

```python
values = [-2, 3, 0, 5]
count = 0
for value in values:
    if value > 0:
        count += 1
print(count)  # 2
```

### Exercice 1 — Reformuler avant de coder

On reçoit `values = [4, 7, 2, 7]` et la cible `7`. On veut connaître l'indice de sa première occurrence, ou `-1` si elle est absente.

Écrire en une phrase les données, le résultat et la règle qui permet de le trouver. Ne pas encore écrire de code.

## Étape 2 — Faire le calcul à la main

Choisir une petite liste et noter ce qui se passe à chaque étape. Cette trace permet de découvrir les variables qu'il faudra mémoriser.

**Exemple — suivre le maximum**

Pour `[4, 1, 7]`, le meilleur candidat évolue ainsi :

| Valeur examinée | Maximum mémorisé |
| --- | --- |
| 4 | 4 |
| 1 | 4 |
| 7 | 7 |

Cette trace suggère une variable `maximum`, une boucle et une comparaison. On peut initialiser le candidat avec le premier élément.

### Exercice 2 — Tracer un compteur

Pour `values = [2, 5, 1, 5]`, compter à la main les valeurs égales à `target = 5`. Noter le compteur après chaque valeur examinée.

**À obtenir :** un compteur final égal à `2`.

## Étape 3 — Reconnaître les briques utiles

Certains verbes de l'énoncé suggèrent des outils connus. Ce sont des repères pour démarrer, pas des recettes à appliquer sans réfléchir.

| La consigne demande de… | Une première idée à essayer |
| --- | --- |
| additionner des valeurs | un accumulateur `total` |
| compter des éléments qui respectent une règle | un compteur `count` et une condition |
| construire une liste filtrée | une liste vide et `append` |
| trouver une première position | `position = -1`, puis arrêter après la première occurrence |
| chercher le plus grand élément | un maximum candidat mis à jour pendant le parcours |
| comparer des voisins | parcourir les indices jusqu'à `len(values) - 2` |
| comparer un motif | tester chaque départ valide, puis ses positions |

### Exercice 3 — Choisir les briques

Pour chacune des consignes, choisir les variables et structures qui pourraient aider, sans encore programmer :

1. compter les nombres pairs ;
2. créer une liste des notes au moins égales à 10 ;
3. trouver si deux voisins sont égaux.

## Étape 4 — Écrire les étapes en langage simple

Avant la syntaxe Python, écrire une recette assez précise pour être suivie :

1. initialiser le résultat ;
2. parcourir les données ;
3. tester la règle ;
4. mettre à jour le résultat ;
5. afficher ou renvoyer le résultat.

**Exemple — rechercher une première occurrence**

1. Mettre `position` à `-1`.
2. Parcourir les indices de la liste.
3. Si la valeur courante est la cible, mémoriser l'indice et arrêter la recherche.
4. Afficher `position`.

Cette description fait déjà apparaître les indices, la condition, la variable sentinelle et `break`.

### Exercice 4 — Décrire l'algorithme du maximum

Écrire en quatre ou cinq étapes simples comment trouver le maximum d'une liste non vide. Vérifier que votre méthode fonctionnerait aussi si toutes les valeurs étaient négatives.

## Étape 5 — Tester l'idée sur les cas importants

Avant de considérer l'algorithme terminé, vérifier au moins un cas normal et un cas limite. Les cas limites révèlent souvent une hypothèse oubliée.

Pour une recherche, essayer par exemple :

- la cible au début ;
- la cible à la fin ;
- plusieurs occurrences ;
- aucune occurrence ;
- une liste vide.

Pour le maximum, vérifier la liste à un élément et une liste de nombres tous négatifs. Si une méthode échoue, reprendre la trace à la main et trouver à quelle étape le résultat diverge.

### Exercice 5 — Vérifier sa stratégie

Reprendre la recherche de la première occurrence de l'exercice 1 et tester mentalement ces cas : `values = [7, 2, 7], target = 7` ; `values = [4, 2, 1], target = 7` ; `values = [], target = 7` ; `values = [3, 5], target = 5`.

Pour chaque cas, annoncer l'indice attendu avant de coder. Expliquer pourquoi la boucle doit s'arrêter après la première correspondance.

## La méthode à garder

Quand une idée ne vient pas tout de suite : reformuler, calculer un petit exemple, noter les informations à mémoriser, choisir les briques utiles, décrire les étapes, puis tester des cas limites. On peut ensuite traduire chaque étape en Python.

Un bon algorithme n'est pas trouvé en devinant la syntaxe : il se construit en rendant le problème assez clair pour pouvoir l'exécuter pas à pas.
