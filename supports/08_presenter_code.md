# 08 — Présenter un code clair

Un algorithme doit fonctionner, mais il doit aussi pouvoir être lu et repris par quelqu'un d'autre. Un code bien présenté aide à comprendre la logique, à repérer les erreurs et à travailler en équipe.

## Choisir des noms qui expliquent le rôle

Utiliser des noms précis en anglais, avec `snake_case` pour les variables. Le nom doit indiquer ce que la valeur représente.

```python
# Difficile à comprendre
x = [8, 12, 9]
y = 0
for z in x:
    y += z
print(y)
```

```python
# Le rôle des variables est visible
grades = [8, 12, 9]
total_grade = 0
for grade in grades:
    total_grade += grade
print(total_grade)
```

Éviter les noms trop courts (`x`, `a`, `tmp`) hors d'un calcul très local. Des noms comme `grades`, `total_grade` et `grade` montrent le rôle de chaque donnée.

### Exercice 1 — Renommer les variables

Remplacer `a`, `b` et `c` par des noms clairs, sans modifier le calcul :

```python
a = 15
b = 4
c = a % b
print(c)
```

Choisir des noms anglais qui décrivent le nombre de départ, le diviseur et le reste.

## Indenter et espacer régulièrement

En Python, l'indentation délimite les blocs. Utiliser quatre espaces par niveau et garder la même indentation dans tout le fichier. Ajouter des espaces autour des opérateurs pour rendre les calculs lisibles.

```python
values = [4, 1, 7]
total = 0

for value in values:
    if value > 3:
        total += value

print(total)
```

Les lignes vides séparent les étapes du programme. Un bloc `if` ou une boucle doit être indenté de façon cohérente.

### Exercice 2 — Rendre le code lisible

Réindenter ce code avec quatre espaces, ajouter les espaces manquants et séparer les étapes par une ligne vide :

```python
values=[2,5,1]
total=0
for value in values:
if value>2:
total+=value
print(total)
```

Le programme doit continuer à afficher `5`.

## Écrire des commentaires utiles

Un commentaire explique une intention ou une décision qui ne se comprend pas immédiatement. Il n'est pas nécessaire de commenter chaque ligne évidente. Les commentaires doivent rester à jour avec le code.

```python
position = -1

for index in range(len(values)):
    if values[index] == target:
        position = index
        break  # La première occurrence suffit.
```

Le commentaire explique pourquoi la boucle s'arrête. Écrire `# Ajouter 1 à position` devant `position += 1` répéterait simplement l'instruction.

### Exercice 3 — Ajouter un commentaire pertinent

Ajouter un commentaire court qui explique pourquoi `maximum` commence avec le premier élément :

```python
values = [-8, -3, -12]
maximum = values[0]
```

Le commentaire doit aider à éviter une erreur avec une liste composée uniquement de nombres négatifs.

## Présenter un petit algorithme complet

Avant de rendre ou de partager un programme, vérifier que :

- les noms décrivent les données et les résultats ;
- les blocs sont correctement indentés ;
- les espaces et lignes vides rendent les étapes visibles ;
- les commentaires expliquent les choix utiles, sans paraphraser chaque ligne ;
- les essais couvrent un cas normal et un cas limite.

```python
values = [-8, -3, -12]

# Démarrer avec une valeur réelle de la liste fonctionne aussi pour les négatifs.
maximum = values[0]

for value in values:
    if value > maximum:
        maximum = value

print(maximum)  # -3
```

Un code facile à lire est plus facile à expliquer, corriger et réutiliser. Présenter clairement son travail fait partie de la programmation.
