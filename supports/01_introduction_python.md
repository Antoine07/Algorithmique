# Python — les bases

## 1. Variables

Une variable associe un nom à une valeur. `=` sert à affecter une valeur.

```python
age = 20              # entier (int)
prix = 9.99           # nombre décimal (float)
prenom = "Alice"      # texte (str)
majeur = True         # booléen : True ou False (bool)

age = age + 1         # ou : age += 1
print(prenom, age)    # affiche : Alice 21
```

## 2. Calculs

| Opérateur | Rôle | Exemple → résultat |
|---|---|---|
| `+` | Addition | `7 + 2` → `9` |
| `-` | Soustraction | `7 - 2` → `5` |
| `*` | Multiplication | `7 * 2` → `14` |
| `/` | Division | `7 / 2` → `3.5` |
| `//` | Division arrondie à l'entier inférieur | `7 // 2` → `3` |
| `%` | Reste de la division | `7 % 2` → `1` |
| `**` | Puissance | `2 ** 3` → `8` |

Les parenthèses permettent de choisir l'ordre des calculs :

```python
resultat = (2 + 3) * 4    # 20
x = 5
y = 2 * x + 3            # 13 : écrire * pour multiplier
```

## 3. Comparaisons et logique

Une comparaison renvoie `True` (vrai) ou `False` (faux).

| Égal | Différent | Inférieur | Inférieur ou égal | Supérieur | Supérieur ou égal |
|---|---|---|---|---|---|
| `==` | `!=` | `<` | `<=` | `>` | `>=` |

```python
age == 18                  # âge égal à 18 ?
age >= 18 and age < 25     # les deux conditions sont vraies
age < 18 or age >= 65      # au moins une condition est vraie
not majeur                # inverse le booléen
```

**Attention :** `=` affecte une valeur ; `==` compare deux valeurs.

## 4. Conditions

```python
note = 14

if note >= 16:
    print("Très bien")
elif note >= 10:
    print("Validé")
else:
    print("À retravailler")
```

Python exécute le premier cas vrai, sinon le bloc `else`.
**Les `:` et l'indentation (4 espaces) délimitent les blocs.**

## 5. Listes

Une liste contient plusieurs éléments. **Les indices commencent à `0`.**

```python
fruits = ["pomme", "poire", "banane"]

print(fruits[0])           # pomme : premier élément
print(fruits[-1])          # banane : dernier élément
print(len(fruits))         # 3 : nombre d'éléments

fruits[1] = "kiwi"         # remplace le deuxième élément
fruits.append("orange")   # ajoute à la fin
fruits.remove("pomme")    # supprime la première occurrence
print("kiwi" in fruits)    # True : teste la présence
```

## 6. Boucles

**`for` : parcourir des éléments ou répéter un nombre de fois.**

```python
for fruit in fruits:
    print(fruit)

for i in range(3):
    print(i)               # 0, puis 1, puis 2

for i in range(1, 4):
    print(i)               # 1, puis 2, puis 3 : borne finale exclue
```

**`while` : répéter tant qu'une condition est vraie.**

```python
compteur = 0

while compteur < 3:
    print(compteur)        # 0, puis 1, puis 2
    compteur += 1          # fait évoluer la condition pour terminer
```

## Exemple récapitulatif

Additionner les nombres pairs d'une liste :

```python
nombres = [3, 4, 7, 10]
total = 0

for nombre in nombres:
    if nombre % 2 == 0:    # reste nul : le nombre est pair
        total += nombre

print(total)               # 14
```
