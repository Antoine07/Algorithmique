# Introduction au tri en Python — Bachelor 1

## Observer — Le tri par sélection

**À votre avis, comment ça marche ?** Observez les valeurs comparées et celle qui est retenue comme minimum.

Cette méthode cherche la plus petite valeur dans la partie restante, puis la place au début de cette partie. Les positions définitives se construisent à gauche.

La sélection et l'insertion sont présentées seulement pour découvrir d'autres façons de trier. **Dans ce cours, nous programmerons uniquement le tri à bulles, choisi comme point de départ simple : comparer et échanger des voisins.**

## Observer — Le tri par insertion

Une partie de la liste est déjà triée. On prend la valeur suivante et on l'insère à sa place, comme une carte dans une main de cartes rangées.

Dans cette animation, la valeur choisie recule vers la gauche et les valeurs plus grandes se décalent vers la droite.

**Attention :** la partie déjà triée peut encore bouger lors des insertions suivantes. Elle n'est pas nécessairement à sa position définitive.

**À discuter :** que fait cette méthode différemment de la sélection ? Nous ne détaillerons pas son code : la suite du cours porte uniquement sur le tri à bulles.

## À votre avis, comment ça marche ?

Observez l'animation avant de regarder le code.

- Quelles valeurs se déplacent ensemble ?
- Dans quelle direction les grandes valeurs avancent-elles ?
- Est-ce que toute la liste est rangée après un seul parcours ?

Formulez une hypothèse, puis relancez l'animation pour la vérifier.

## Le programme de cette séance

**Niveau :** débutant · **Durée :** 2 à 3 heures.

**Objectif :** comprendre comment ranger des valeurs dans une liste, puis construire progressivement un tri à bulles.

Les animations de sélection et d'insertion donnent un aperçu. **Le seul algorithme de tri à programmer dans cette séance est le tri à bulles.**

**Prérequis :** variables, listes, indices, conditions `if` et boucles `for`.

Commencez par prédire les résultats sur papier, puis exécutez les exemples. Pour les exercices, utilisez les opérations de base, sans `sort()` ni `sorted()`.

## Qu'est-ce que trier une liste ?

Trier consiste à ranger des valeurs selon un ordre déterminé, sans en perdre ni en ajouter.

```python
nombres = [5, 2, 8, 1, 4]
```

En ordre croissant, on veut obtenir :

```python
[1, 2, 4, 5, 8]
```

Python propose déjà `sort()` et `sorted()`. Nous allons réaliser les opérations nous-mêmes pour comprendre le fonctionnement d'un algorithme de tri.

## Exemple — Comparer deux nombres

Pour un ordre croissant, la plus petite valeur doit être placée avant la plus grande.

```python
a = 8
b = 3
if a > b:
    print("Les nombres sont dans le mauvais ordre")
```

Le programme affiche le message car `8 > 3`. Il constate un problème, mais ne modifie aucune valeur.

## Exercice 1 — Vérifier l'ordre

```python
a = 12
b = 7
```

Écrire un programme qui affiche :

- `Déjà triés` si `a <= b`.
- `À inverser` dans le cas contraire.

**Tests attendus :** `12, 7` → `À inverser` ; `3, 9` → `Déjà triés` ; deux valeurs égales → `Déjà triés`.

## Exemple — Échanger deux valeurs

Une variable temporaire conserve la première valeur pendant l'échange. Suivez les trois affectations dans l'animation.

```python
a = 8
b = 3
temp = a
a = b
b = temp
print(a, b)  # 3 8
```

Sans la sauvegarde `temp = a`, la valeur 8 serait perdue lors de `a = b`.

## Exercice 2 — Échanger si nécessaire

```python
a = 15
b = 6
```

Écrire un programme qui échange les valeurs uniquement si `a > b`, avec une variable temporaire.

**Résultat attendu :** `6 15`.

Tester aussi un couple déjà dans l'ordre et deux valeurs égales : ils doivent rester inchangés.

## Exemple — Comparer deux voisins

```python
nombres = [9, 4, 7]
if nombres[0] > nombres[1]:
    temp = nombres[0]
    nombres[0] = nombres[1]
    nombres[1] = temp
print(nombres)  # [4, 9, 7]
```

Les deux premières valeurs sont échangées. La liste n'est pas encore entièrement triée : 9 est toujours avant 7.

## Exercice 3 — Faire avancer la plus grande valeur

```python
nombres = [7, 3, 5]
```

1. Comparer les valeurs aux indices 0 et 1 et les échanger si nécessaire.
2. Faire ensuite la même chose avec les indices 1 et 2.

**Résultat attendu :** `[3, 5, 7]`.

**Contrainte :** ne pas utiliser de boucle pour cet exercice.

## Exemple — Automatiser les comparaisons

Plutôt que d'écrire plusieurs fois la même comparaison, utiliser une boucle.

```python
nombres = [8, 3, 6, 2]
for i in range(len(nombres) - 1):
    if nombres[i] > nombres[i + 1]:
        temp = nombres[i]
        nombres[i] = nombres[i + 1]
        nombres[i + 1] = temp
print(nombres)  # [3, 6, 2, 8]
```

`i` prend les valeurs 0, 1 et 2. `i + 1` reste ainsi un indice valide.

## Observer un seul passage

Un **passage** compare successivement tous les couples voisins de la partie à traiter.

Avec `[8, 3, 6, 2]`, la valeur 8 arrive à la fin. Le résultat est `[3, 6, 2, 8]` : la liste n'est pas totalement triée.

Prédisez le couple qui sera comparé ensuite, puis avancez l'animation d'une étape.

## Exercice 4 — Un seul passage

```python
nombres = [6, 2, 9, 1, 5]
```

Écrire une boucle qui compare et échange les éléments voisins.

**Avant d'exécuter :** déterminer sur papier le contenu de la liste après ce passage.

**Résultat attendu :** `[2, 6, 1, 5, 9]`.

## Exemple — Compter une action

Un compteur est initialisé avant la boucle et augmente seulement quand l'événement recherché se produit.

```python
compteur = 0
for valeur in [2, 0, 4]:
    if valeur > 0:
        compteur += 1
        print("Valeur positive :", valeur)
print(compteur)  # 2
```

Pour compter les échanges, le même principe s'applique : incrémenter le compteur dans le bloc où l'échange est réalisé.

## Exercice 5 — Observer chaque échange

Reprendre le programme de l'exercice 4, avec `[6, 2, 9, 1, 5]`.

1. Afficher la liste après chaque échange.
2. Compter le nombre d'échanges réalisés pendant ce passage.

**États attendus :** `[2, 6, 9, 1, 5]`, puis `[2, 6, 1, 9, 5]`, puis `[2, 6, 1, 5, 9]`.

**Nombre d'échanges :** 3. Une comparaison qui ne provoque pas d'échange ne doit pas augmenter ce compteur.

## Le tri à bulles, passage après passage

Un seul passage ne suffit pas toujours. Il faut recommencer sur la partie qui reste à ranger.

Le **tri à bulles** compare des éléments voisins et les échange lorsqu'ils sont dans le mauvais ordre. Après chaque passage, la plus grande valeur de la partie parcourue a rejoint sa position définitive à droite.

Observez `[5, 2, 4, 1, 3]` : les positions définitives s'accumulent à droite. La version présentée effectue 4 passages et 10 comparaisons.

## Exemple — Le programme complet

```python
nombres = [5, 2, 4, 1, 3]
for passage in range(len(nombres) - 1):
    for i in range(len(nombres) - 1 - passage):
        if nombres[i] > nombres[i + 1]:
            temp = nombres[i]
            nombres[i] = nombres[i + 1]
            nombres[i + 1] = temp
print(nombres)  # [1, 2, 3, 4, 5]
```

- La boucle extérieure répète les passages.
- La boucle intérieure compare les voisins.
- `len(nombres) - 1 - passage` évite les dernières valeurs déjà placées.

Avec 5 valeurs, les passages réalisent 4, puis 3, puis 2, puis 1 comparaison.

## Exercice 6 — Tri à bulles guidé

```python
nombres = [4, 1, 3, 2]
```

Reprendre le programme complet et afficher la liste après chaque passage de la boucle extérieure.

**Résultats attendus :**

```output
Passage 1 : [1, 3, 2, 4]
Passage 2 : [1, 2, 3, 4]
Passage 3 : [1, 2, 3, 4]
```

L'affichage doit être après la boucle intérieure, mais encore dans la boucle extérieure. Le dernier passage ne modifie rien dans cet exemple.

## Exemple — Changer l'ordre recherché

En ordre décroissant, la plus grande valeur doit être placée avant la plus petite.

```python
a = 3
b = 8
if a < b:
    print("À inverser pour un ordre décroissant")
```

Le test est inversé par rapport à l'ordre croissant. On conserve la même méthode d'échange.

## Exercice 7 — Trier dans l'ordre décroissant

```python
nombres = [6, 2, 9, 1, 5]
```

Modifier le tri à bulles pour obtenir un ordre décroissant.

**Résultat attendu :** `[9, 6, 5, 2, 1]`.

**Indice :** une seule modification de l'opérateur de comparaison est nécessaire.

## Exemple — Arrêter une boucle avec break

`break` arrête immédiatement la boucle dans laquelle il se trouve.

```python
for nombre in [4, 0, 7]:
    if nombre == 0:
        break
    print(nombre)  # seul 4 est affiché
```

Pour arrêter les passages du tri, le `break` devra être dans la boucle extérieure, après la fin de la boucle intérieure.

Un booléen peut mémoriser si une action a eu lieu pendant le passage : il commence à `False` et devient `True` lors d'un échange.

## Exercice 8 — Éviter les passages inutiles

Reprendre le tri à bulles et ajouter un booléen `echange`.

1. Au début de chaque passage, remettre `echange` à `False`.
2. Après chaque échange, lui affecter `True`.
3. Après la boucle intérieure, si aucun échange n'a eu lieu, arrêter les passages avec `break`.

Tester avec `nombres = [1, 2, 3, 4, 5]`.

**Question :** combien de passages sont nécessaires pour constater que cette liste est déjà triée ? Expliquer pourquoi un passage sans échange suffit.

Tester aussi une liste désordonnée, deux valeurs égales, une liste vide et une liste à un seul élément.

## Bilan — Expliquer avant de coder

À la fin du cours, vous devez pouvoir expliquer :

- Pourquoi comparer deux valeurs ne suffit pas à trier une liste entière.
- Comment échanger deux éléments avec une variable temporaire.
- Comment une boucle traite les couples voisins.
- Pourquoi le tri à bulles utilise deux boucles.
- Comment vérifier qu'une liste est triée : chaque valeur est inférieure ou égale à la suivante, sans perte ni ajout de valeurs.

**À retenir :** comparer, échanger si nécessaire, terminer un passage, recommencer.

Le tri à bulles sert ici à comprendre les déplacements et les indices. Pour des listes importantes en pratique, utiliser les outils de tri de Python.

**Conseil pour la séance :** consacrer davantage de temps aux exercices 2 à 5 qu'au programme complet. La priorité est de comprendre le déplacement des valeurs et le rôle des indices.
