// Soal 1 (Membuat Looping sederhana)
for(var angka = 0; angka < 10; angka++) {
    console.log(angka)
}

// Soal 2 (Membuat Looping dengan conditional angka ganjil)
for(var i = 0; i < 10 ; i++){
    if(i % 2 == 1){
        console.log(i)
    }
}

// Soal 3 (Membuat Looping dengan conditional angka genap)
for(var i = 0; i < 10 ; i++){
    if(i % 2 == 0){
        console.log(i)
    }
}

// Soal 4 (Mengakses element array)
let array1 = [1,2,3,4,5,6]
console.log(array1[5])

// Soal 5 (Mengurutkan element array)
let array2 = [5,2,4,1,3,5]
console.log(array2.sort())

// Soal 6 (Mengeluarkan element array)
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for(var i = 0; i < array3.length; i++) {
	       console.log(array3[i]);
}

// Soal 7 (Mengeluarkan element array dan dengan kondisi)
let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
for (i = 0; i <= array4.length; i++){
  if (i % 2 == 0){
    console.log(i)
  }
}

// Soal 8 (Menggabungkan element menjadi string)
let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
var slug = kalimat.join(" ")
console.log(slug)

// Soal 9 (Menambahkan element array)
var sayuran=[]
sayuran.push("Kangkung", "Bayam", "Buncis", "Kubis", "Timun", "Seledri", "Tauge");
console.log(sayuran)