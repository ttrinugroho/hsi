# Todo Level 0

## Membuat function bernama minimal dengan ketentuan berikut

- menerima dua buah argument number, a dan b.
- mengembalikan nilai terkecil diantara a dan b.
- bila nilai sama, maka akan mengembalikan nilai a.

```js
// Contoh:
nimimal(1, 4); // 1
nimimal(3, 2); // 2
minimal(3, 3); // 3
```

## 2. Buat `function` bernama `power` dengan ketentuan berikut

- menerima dua buah argument number, a dan b.
- mengembalikan nilai hasil dari perkalian `a * a` sebanyak `b` ( fungsi kuadrat).

```js
power(7, 3); // 343
power(3, 3); // 27
power(4, 0.5); // 2
```

## 3. Buat function bernama _penjumlahanBilangan_ dengan ketentuan berikut

- menerima dua argument, dimana argument a merupakan array number, dan argument b hanya menerima nilai "ganjil" dan "genap"
- mengembalikan nilai penjumlah dari seluruh argument a yang bertype ganjil/genap

```js
penjumlahanBilangan([1, 2, 3], "ganjil"); // 4
penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "genap"); // 12
penjumlahanBilangan([1, 2, 3, 4, 5], "ganjil"); // 9
```

## 4. Buatlah _class_ bernama **Animal** dengan ketentuan

- Memiliki Property
  - name: string
  - age: int
  - isMammal: boolean
- Memiliki Contructor untuk menginisiasi Property;
  - name
  - age
  - isMammal

## 5. Buat _class_ bernama Rabit dengan ketentuan

- merupakan keturuanan dari class Animal
- Memiliki method eat yang mengembalikan string "${this.name} yang berumur ${this.age} sedang makan"
  - ketika diinisiasi, Property isMammal harus bernilai true
