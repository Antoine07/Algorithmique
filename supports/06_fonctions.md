# 06 — Comprendre et écrire des fonctions

**Objectif :** apprendre à découper un programme en actions nommées, à transmettre des données à ces actions et à récupérer leurs résultats.

Ce chapitre prépare au challenge Quick Sort, qui est organisé autour de deux fonctions : `partition` et `quick_sort`.

## Une fonction, c'est quoi ?

Une fonction est un bloc d'instructions auquel on donne un nom. On l'écrit une fois, puis on l'appelle chaque fois que le programme a besoin de réaliser cette action.

Sans fonction, on risque de recopier le même calcul :

```python
first_total = 8 * 3
second_total = 12 * 2
print(first_total, second_total)
```

On peut nommer ce calcul et le réutiliser :

```python
def calculate_total(unit_price, quantity):
    total = unit_price * quantity
    return total

first_total = calculate_total(8, 3)
second_total = calculate_total(12, 2)
print(first_total, second_total)  # 24 24
```

La définition commence par `def`. Le code indenté forme le corps de la fonction. La fonction ne s'exécute pas à sa définition : elle s'exécute lors de chaque appel à `calculate_total(...)`.

### Exercice 1 — Calcul réutilisable

Écrire une fonction `calculate_area(width, height)` qui renvoie l'aire d'un rectangle. L'appeler pour les rectangles de dimensions `4 × 3` et `7 × 2`.

**Résultats attendus :** `12` et `14`.

## Paramètres et arguments

Les **paramètres** sont les noms écrits dans la définition. Ils reçoivent les données dont la fonction a besoin. Les **arguments** sont les valeurs données lors de l'appel.

```python
def is_even(number):       # number est un paramètre
    return number % 2 == 0

result = is_even(8)        # 8 est l'argument
print(result)              # True
```

Un même paramètre peut recevoir des valeurs différentes à des appels différents. Il n'est pas nécessaire de réécrire le corps de la fonction.

### Exercice 2 — Tester plusieurs valeurs

Écrire une fonction `is_positive(number)` qui renvoie `True` si `number` est supérieur à zéro, et `False` sinon. La tester avec `5`, `0` et `-3`.

**Résultats attendus :** `True`, `False`, `False`.

## `return` renvoie un résultat ; `print` l'affiche

`return` transmet une valeur au code qui a appelé la fonction. Cette valeur peut être affichée, stockée ou réutilisée dans un autre calcul.

```python
def double(number):
    return number * 2

result = double(6)
print(result + 1)  # 13
```

`print` affiche un résultat à l'écran mais ne le renvoie pas pour un calcul suivant. Pour construire des fonctions réutilisables, renvoyer une valeur avec `return`, puis laisser le programme appelant décider quoi en faire.

### Exercice 3 — Renvoi ou affichage ?

Écrire `calculate_discount(price, discount)` qui renvoie `price - discount`. Appeler la fonction avec `50` et `8`, stocker le résultat dans `final_price`, puis afficher cette variable.

**Résultat attendu :** `42`.

## Écrire des fonctions faciles à réutiliser

Une fonction claire réalise une tâche identifiable, reçoit ses données par ses paramètres et renvoie son résultat. Ses variables de calcul restent locales à la fonction : le reste du programme ne dépend pas d'une variable globale cachée.

Quelques réflexes :

- choisir un nom anglais explicite, souvent un verbe : `calculate_total`, `is_even`, `partition` ;
- donner aux paramètres des noms qui décrivent les données reçues ;
- garder une responsabilité principale par fonction ;
- éviter de recopier le même traitement ;
- tester plusieurs arguments, y compris les cas limites.

Dans l'exemple suivant, `is_even` répond à une seule question et se teste indépendamment :

```python
def is_even(number):
    return number % 2 == 0

print(is_even(8))   # True
print(is_even(11))  # False
```

## Les fonctions et les paradigmes de programmation

Un **paradigme** est une manière d'organiser et de penser un programme. Dans ce parcours, les fonctions servent surtout la programmation **procédurale et structurée** : on découpe un problème en étapes nommées, puis on les assemble dans un ordre compréhensible.

La programmation fonctionnelle est un paradigme plus spécifique qui s'appuie notamment sur des fonctions comme valeurs, des transformations de données et la limitation des effets de bord. Écrire une fonction Python avec `def` ne signifie donc pas, à lui seul, qu'on programme selon le paradigme fonctionnel.

### Pourquoi cela aide-t-il dans un vrai programme ?

Les fonctions rendent le programme plus lisible, limitent les répétitions, isolent les erreurs et permettent de tester chaque partie séparément. Dans un projet plus grand, on peut répartir les fonctions entre des fichiers et travailler sur des parties bien définies.

Quick Sort montre cette organisation : `partition` place le pivot et renvoie son indice ; `quick_sort` utilise cet indice pour traiter les deux zones restantes. Chaque nom indique une responsabilité, et la fonction `quick_sort` se rappelle avec des zones plus petites.

## À vous de jouer

Avant le dernier challenge, écrivez une fonction qui réalise une tâche courte et testez-la avec plusieurs valeurs :

```python
def clamp(number, minimum, maximum):
    # Renvoyer minimum si number est trop petit,
    # maximum s'il est trop grand, sinon number.
    pass
```

Testez `clamp(12, 0, 10)`, `clamp(-2, 0, 10)` et `clamp(5, 0, 10)`.

**Résultats attendus :** `10`, `0`, `5`.

Vérifiez que la fonction ne contient ni `input()` ni `print()` : elle reçoit ses paramètres et renvoie son résultat. Le programme appelant reste libre de choisir quoi faire de ce résultat.

## Prochaine étape — Le challenge Quick Sort

Vous allez maintenant utiliser ces notions pour organiser un tri en deux fonctions, puis faire appeler `quick_sort` par elle-même sur des listes plus petites.
