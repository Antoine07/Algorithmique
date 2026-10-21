# 02 — Algorithmique avec Python

## Objectif

Construire un algorithme : une suite d'étapes permettant de résoudre un problème. Python permet de traduire ces étapes en code exécutable.

**Prérequis :** [variables, calculs, comparaisons, conditions, boucles et listes](01_introduction_python.md).

## Méthode en bref

1. Identifier les **entrées** : les données de départ.
2. Décrire le **traitement** : les calculs et les décisions.
3. Définir la **sortie** : le résultat attendu.
4. Tester un cas normal et un cas limite.

Exemple : pour additionner `[2, 5]`, partir de `total = 0`, ajouter 2 puis 5. Le total passe de 0 à 2, puis à 7 : la sortie est `7`.

Un **accumulateur** conserve un résultat en cours de calcul ; un **compteur** compte des événements. On les initialise avant la boucle pour conserver leur valeur entre les tours.

**Consigne commune :** créer un fichier Python par exercice, utiliser les données indiquées et afficher le résultat. Aucun `input()`, import ou fonction à définir n'est nécessaire. Prédire le résultat avant de lancer le programme. Les exemples sont indépendants.

## Partie 1 — 5 exercices simples

### 1. Calculer un prix

**Exemple — calculer une durée totale :**

```python
duree = 15
seances = 3
total = duree * seances
print(total)  # 45
```

Les deux entrées sont multipliées ; `total` mémorise le résultat.

**Exercice 1 — À vous :** avec `prix = 8` et `quantite = 4`, calculer et afficher le montant à payer.

- Objectif / prérequis : affecter le résultat d'une multiplication à une variable.
- Réussite : afficher `32` ; avec une quantité de `0`, afficher `0`.
- Indice : remplacer la durée et le nombre de séances par les données du prix.

### 2. Prendre une décision

**Exemple — tester un seuil :**

```python
temperature = 12
if temperature < 0:
    print("Gel")
else:
    print("Pas de gel")  # message affiché
```

Le test est faux ; Python exécute donc le bloc `else`.

**Exercice 2 — À vous :** avec `nombre = 14`, afficher `Pair` si le nombre est pair, sinon `Impair`.

- Objectif / prérequis : choisir un message avec `if`, `%` et `==`.
- Réussite : `14` → `Pair`, `7` → `Impair`, `0` → `Pair`.
- Indice : un nombre pair a un reste de division par 2 égal à 0.

### 3. Lire puis adapter une boucle

**Exemple — répéter un calcul :**

```python
for i in range(1, 4):
    print(i * 2)  # affiche 2, puis 4, puis 6
```

`i` prend les valeurs 1, 2 et 3. La borne finale de `range` est exclue.

**Exercice 3 — À vous :** prédire les valeurs affichées si `2` est remplacé par `3`. Puis écrire la table de multiplication de 7, de `7 × 1` à `7 × 10`.

- Objectif / prérequis : lire et écrire une boucle `for` avec `range`.
- Réussite : la prédiction est vérifiée ; le programme affiche 10 résultats, de `7` à `70`.
- Contrainte : utiliser une boucle, pas dix instructions `print`.
- Indice : pour inclure 10, utiliser une borne finale égale à 11.

### 4. Corriger un accumulateur

**Exemple — cumuler des valeurs :**

```python
total = 0
for valeur in [2, 5]:
    total += valeur
print(total)  # 7
```

Le total est initialisé une seule fois, puis augmente à chaque tour.

**Exercice 4 — À vous :** ce programme doit additionner tous les éléments. Expliquer le bug et le corriger.

```python
nombres = [4, 6, 3]
for nombre in nombres:
    total = 0
    total += nombre
print(total)
```

- Objectif / prérequis : comprendre l'initialisation et l'indentation.
- Réussite : afficher `13` ; avec `nombres = []`, afficher `0`.
- Contrainte : ne pas utiliser `sum()`.
- Indice : quelle instruction efface le résultat des tours précédents ?

### 5. Filtrer une liste

**Exemple — conserver les valeurs positives :**

```python
positifs = []
for nombre in [-2, 3, 0, 5]:
    if nombre > 0:
        positifs.append(nombre)
print(positifs)  # [3, 5]
```

Chaque nombre est testé. Seuls 3 et 5 sont ajoutés à la nouvelle liste.

**Exercice 5 — À vous :** à partir de `notes = [8, 12, 9, 16, 10]`, créer une liste `valides` contenant les notes supérieures ou égales à 10.

- Objectif / prérequis : combiner liste, boucle, condition et `append`.
- Réussite : obtenir `[12, 16, 10]` ; une liste vide donne `[]`.
- Contrainte : conserver la liste initiale et l'ordre des notes.
- Indice : partir d'une liste vide, puis ajouter uniquement les notes retenues.

## Partie 2 — 8 exercices plus techniques

### 6. Permuter deux valeurs

**Exemple — sauvegarder avant de remplacer :**

```python
score = 10
ancien_score = score
score = 20
print(ancien_score, score)  # 10 20
```

La sauvegarde conserve l'ancienne valeur même après la modification de `score`.

**Exercice 6 — À vous :** avec `a = 4` et `b = 9`, échanger leurs valeurs.

- Objectif / prérequis : maîtriser l'ordre des affectations.
- Contrainte : utiliser une variable temporaire, sans `a, b = b, a`.
- Réussite : afficher `9 4` ; deux valeurs égales restent égales.
- Indices : sauvegarder `a` ; remplacer `a` ; restaurer la sauvegarde dans `b`.

### 7. Rechercher le maximum

**Exemple — mettre à jour un record :**

```python
record = 6
nouveau = 9
if nouveau > record:
    record = nouveau
print(record)  # 9
```

Le record est remplacé uniquement si la nouvelle valeur est plus grande.

**Exercice 7 — À vous :** rechercher le maximum de `nombres = [4, 12, 7, 15, 9]`.

- Objectif / prérequis : conserver le meilleur candidat pendant un parcours.
- Contraintes : liste non vide ; sans `max()` ni tri.
- Réussite : afficher `15` ; `[-8, -3, -12]` donne `-3` ; `[5]` donne `5`.
- Indice : initialiser le maximum avec le premier élément, pas avec 0.

### 8. Rechercher la première position

**Exemple — parcourir les indices :**

```python
lettres = ["a", "b", "a"]
for i in range(len(lettres)):
    print(i, lettres[i])  # 0 a, puis 1 b, puis 2 a
```

`i` est un indice ; `lettres[i]` est la valeur à cet indice.

**Exercice 8 — À vous :** dans `nombres = [4, 7, 2, 7]`, trouver le premier indice de `cible = 7`. Afficher `-1` si la cible est absente.

- Objectif / prérequis : distinguer indice et valeur, utiliser une valeur « non trouvé ».
- Contrainte : ne pas utiliser `.index()`.
- Réussite : `7` → `1`, `4` → `0`, `9` → `-1` ; une liste vide donne `-1`.
- Indices : initialiser `position = -1` ; ne la modifier que si aucune position n'a encore été trouvée.

### 9. Compter les occurrences

**Exemple — compter les valeurs positives :**

```python
compteur = 0
for nombre in [-1, 3, 5]:
    if nombre > 0:
        compteur += 1
print(compteur)  # 2
```

On ajoute 1 par valeur retenue, quelle que soit cette valeur.

**Exercice 9 — À vous :** compter combien de fois `cible = 3` apparaît dans `nombres = [3, 1, 3, 5, 3]`.

- Objectif / prérequis : utiliser un compteur et une comparaison d'égalité.
- Contrainte : ne pas utiliser `.count()`.
- Réussite : afficher `3` ; une cible absente ou une liste vide donne `0`.
- Indice : adapter le test de l'exemple pour retenir les valeurs égales à la cible.

### 10. Inverser une liste

**Exemple — faire reculer un indice :**

```python
i = 2
while i >= 0:
    print(i)  # 2, puis 1, puis 0
    i -= 1
```

Après l'affichage de 0, `i` devient -1 et la boucle s'arrête.

**Exercice 10 — À vous :** construire `inverse` à partir de `nombres = [10, 20, 30, 40]`, dans l'ordre inverse.

- Objectif / prérequis : parcourir une liste depuis son dernier indice.
- Contraintes : conserver l'original ; sans `.reverse()`, `reversed()` ni `[::-1]`.
- Réussite : obtenir `[40, 30, 20, 10]` ; `[]` donne `[]` ; `[5]` donne `[5]`.
- Indices : le dernier indice est `len(nombres) - 1` ; ajouter chaque valeur à une nouvelle liste.

### 11. Additionner les chiffres d'un nombre

**Exemple — isoler et retirer le dernier chiffre :**

```python
nombre = 472
print(nombre % 10)   # 2 : dernier chiffre
print(nombre // 10)  # 47 : nombre privé de son dernier chiffre
```

La division donne `472 = 47 * 10 + 2` : 47 est le quotient et 2 le reste.

**Exercice 11 — À vous :** calculer la somme des chiffres de `nombre = 583`.

- Objectif / prérequis : combiner `%`, `//`, accumulateur et `while`.
- Contraintes : entier positif ou nul ; sans conversion en texte.
- Réussite : `583` → `16`, `1002` → `3`, `0` → `0`.
- Indices : ajouter le dernier chiffre au total ; le retirer ; recommencer tant qu'il reste des chiffres.

### 12. Vérifier l'ordre d'une liste

**Exemple — comparer deux voisins :**

```python
nombres = [2, 5, 4]
print(nombres[0] <= nombres[1])  # True
print(nombres[1] <= nombres[2])  # False
```

Le deuxième couple descend de 5 à 4 : la liste n'est pas triée par ordre croissant.

**Exercice 12 — À vous :** déterminer si `nombres = [2, 4, 4, 9]` est triée par ordre croissant, en autorisant les égalités.

- Objectif / prérequis : comparer des voisins et conserver un booléen.
- Contrainte : ne pas trier la liste ni utiliser `sorted()`.
- Réussite : afficher `True` ; `[2, 5, 4]` donne `False` ; `[]` et `[5]` donnent `True`.
- Indices : partir de `triee = True` ; passer à `False` dès qu'un élément dépasse le suivant. Ne pas revenir à `True` ensuite.

### 13. Décomposer en facteurs premiers

Un **nombre premier** est un entier supérieur à 1 divisible uniquement par 1 et lui-même. Décomposer un entier, c'est l'écrire comme un produit de nombres premiers.

**Exemple — retirer toutes les occurrences du facteur 2 :**

```python
reste = 12
facteurs = []
while reste % 2 == 0:
    facteurs.append(2)
    reste = reste // 2
print(facteurs, reste)  # [2, 2] 3
```

On divise 12 par 2, puis 6 par 2. Il reste 3, non divisible par 2. On a donc `12 = 2 * 2 * 3`.

**Exercice 13 — À vous :** décomposer `nombre = 360` avec la liste fixée `premiers = [2, 3, 5, 7, 11, 13]`.

- Objectif / prérequis : imbriquer un `while` dans un `for`, utiliser divisibilité et division entière.
- Contraintes : entier de départ supérieur ou égal à 2 ; conserver sa valeur ; utiliser uniquement les premiers fournis.
- Traitement : pour chaque premier, retirer toutes ses occurrences et les ajouter à `facteurs`.
- Sortie : afficher les facteurs trouvés et le reste. Si le reste dépasse 1, afficher `Décomposition incomplète`.
- Réussite : `360` → `[2, 2, 2, 3, 3, 5]`, reste `1` ; `13` → `[13]`, reste `1` ; `34` → `[2]`, reste `17`, incomplète ; `17` → `[]`, reste `17`, incomplète.
- Indices : travailler sur `reste = nombre` ; la boucle intérieure répète la division par le même premier.
- Justifier : pourquoi faut-il un `while` plutôt qu'un simple `if` ? Pourquoi un reste supérieur à 1 indique-t-il une limite de la liste fournie ?

## À retenir et erreurs fréquentes

- Initialiser compteurs et accumulateurs **avant** les boucles.
- `=` affecte ; `==` compare ; `%` donne un reste ; `//` donne un quotient arrondi vers le bas.
- Une liste de longueur `n` possède les indices de `0` à `n - 1`.
- Faire évoluer la condition d'un `while` pour qu'il se termine.
- Un maximum initialisé à 0 échoue sur une liste de nombres tous négatifs.
- Une liste fixée de nombres premiers ne permet pas de décomposer tous les entiers.

## Corrections et révision

- [Corrections expliquées des 13 exercices](../corrections/02_algorithmique_corrections.md)
- [QCM de révision — 10 questions avec feedback](../qcm/02_QCM_Revision.md)
