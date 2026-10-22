# Corrigé — Chapitre 02 : Algorithmique avec Python

J’ai choisi d’utiliser des noms de variables en anglais, conformément aux bonnes pratiques de programmation.

## 1. Calculer un prix

```python
unit_price = 8
quantity = 4

total_price = unit_price * quantity
print(total_price)  # 32
```

**Vérification :** avec `quantity = 0`, le résultat est `0`.

## 2. Prendre une décision

```python
number = 14

# Un reste nul dans la division par 2 indique un nombre pair.
if number % 2 == 0:
    print("Even")
else:
    print("Odd")
```

**Vérification :** `14` → `Even` ; `7` → `Odd` ; `0` → `Even`.

## 3. Lire puis adapter une boucle

En remplaçant `2` par `3` dans l'exemple, les valeurs affichées sont **3, 6 et 9** : `range(1, 4)` parcourt 1, 2 et 3.

```python
number = 7

# La borne finale 11 est exclue : les multiplicateurs vont de 1 à 10.
for multiplier in range(1, 11):
    print(number * multiplier)
```

**Résultat :** 10 lignes, de `7` à `70`, par pas de 7.

## 4. Corriger un accumulateur

**Le bug :** `total = 0` dans la boucle efface le cumul à chaque tour. Le programme initial affiche seulement `3` ; avec une liste vide, `total` n'est jamais défini dans ce programme autonome.

```python
numbers = [4, 6, 3]
total = 0  # Initialiser avant la boucle pour conserver le cumul.

for number in numbers:
    total += number

print(total)  # 13
```

**Vérification :** une liste vide laisse `total` à `0`.

## 5. Filtrer une liste

```python
grades = [8, 12, 9, 16, 10]
valid_grades = []

for grade in grades:
    if grade >= 10:
        valid_grades.append(grade)  # Ajouter sans modifier la liste de départ.

print(valid_grades)  # [12, 16, 10]
```

**Vérification :** l'ordre est conservé ; `grades = []` donne `[]`.

## 6. Permuter deux valeurs

```python
first = 4
second = 9

temporary = first  # Sauvegarder avant de remplacer.
first = second
second = temporary

print(first, second)  # 9 4
```

**Vérification :** avec deux valeurs égales, les valeurs finales restent identiques.

## 7. Rechercher le maximum

**Précondition :** la liste contient au moins un élément.

```python
numbers = [4, 12, 7, 15, 9]
maximum = numbers[0]  # Une valeur de la liste, même si toutes sont négatives.

for number in numbers:
    if number > maximum:
        maximum = number

print(maximum)  # 15
```

**Vérification :** `[-8, -3, -12]` → `-3` ; `[5]` → `5`. Initialiser à `0` donnerait un résultat faux pour la liste négative.

## 8. Rechercher la première position

```python
numbers = [4, 7, 2, 7]
target = 7
position = -1

for index in range(len(numbers)):
    # Ne plus remplacer la position après la première correspondance.
    if numbers[index] == target and position == -1:
        position = index

print(position)  # 1
```

**Vérification :** cible `4` → `0` ; cible `9` → `-1` ; liste vide → `-1`. Le résultat est un **indice**, pas la valeur recherchée.

## 9. Compter les occurrences

```python
numbers = [3, 1, 3, 5, 3]
target = 3
count = 0

for number in numbers:
    if number == target:
        count += 1  # Compter une occurrence, sans additionner sa valeur.

print(count)  # 3
```

**Vérification :** cible absente ou liste vide → `0`.

**Variante :** en Python, `True` vaut `1` et `False` vaut `0`. On peut donc ajouter directement le résultat de la comparaison au compteur :

```python
numbers = [3, 1, 3, 5, 3]
target = 3
count = 0

for number in numbers:
    count += number == target  # True ajoute 1 ; False ajoute 0.

print(count)  # 3
```

## 10. Inverser une liste

```python
numbers = [10, 20, 30, 40]
reversed_numbers = []
index = len(numbers) - 1

while index >= 0:
    reversed_numbers.append(numbers[index])
    index -= 1  # Reculer jusqu'au premier élément inclus.

print(reversed_numbers)  # [40, 30, 20, 10]
```

**Vérification :** `[]` → `[]` ; `[5]` → `[5]`. La liste `numbers` reste intacte.

## 11. Additionner les chiffres d'un nombre

**Précondition :** `number` est un entier positif ou nul.

```python
number = 583
remaining = number
digit_sum = 0

while remaining > 0:
    digit_sum += remaining % 10  # Ajouter le chiffre de droite.
    remaining //= 10            # Retirer ce chiffre pour avancer.

print(digit_sum)  # 16
```

**Vérification :** `1002` → `3` ; `0` → `0`. Pour zéro, la boucle ne s'exécute pas et le total reste nul.

## 12. Vérifier l'ordre d'une liste

```python
numbers = [2, 4, 4, 9]
is_sorted = True

for index in range(len(numbers) - 1):
    if numbers[index] > numbers[index + 1]:
        is_sorted = False  # Une seule descente suffit ; ne pas revenir à True.

print(is_sorted)  # True
```

**Vérification :** `[2, 5, 4]` → `False` ; `[]` et `[5]` → `True`. Les égalités sont autorisées ; la borne évite de dépasser le dernier indice.

## 13. Décomposer en facteurs premiers

**Précondition :** `number` est un entier supérieur ou égal à 2.

```python
number = 360
primes = [2, 3, 5, 7, 11, 13]
remaining = number
factors = []

for prime in primes:
    # Retirer toutes les occurrences du même facteur avant de passer au suivant.
    while remaining % prime == 0:
        factors.append(prime)
        remaining //= prime

print(factors, remaining)  # [2, 2, 2, 3, 3, 5] 1

if remaining > 1:
    print("Incomplete decomposition")
```

**Pourquoi `while` ?** Un facteur peut apparaître plusieurs fois : 360 contient trois facteurs 2. Un simple `if` n'en retirerait qu'un.

**Limite de la liste fournie :** on ne peut extraire que les facteurs présents dans `primes`. Ainsi, `17 * 3 = 51` se réduit à `[3]` avec un reste de `17` : la décomposition est incomplète, car `17` n'est pas dans la liste. Un reste supérieur à 1 peut contenir un facteur absent ; il n'est pas nécessairement premier.

| Nombre | Facteurs trouvés | Reste | État |
| --- | --- | --- | --- |
| 360 | `[2, 2, 2, 3, 3, 5]` | 1 | Complète |
| 13 | `[13]` | 1 | Complète |
| 34 | `[2]` | 17 | Incomplète |
| 51 (`17 * 3`) | `[3]` | 17 | Incomplète : 17 n'est pas dans la liste |
| 17 | `[]` | 17 | Incomplète |

La variable `number` conserve sa valeur initiale pendant toute la décomposition.
