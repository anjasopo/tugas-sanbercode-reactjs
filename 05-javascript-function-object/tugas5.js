// Soal 1
console.log("-------- Soal 1 --------")
let namasaya = "Anjas Susetya"
function cetakFunction(){
    return "Hallo Nama saya " + namasaya;
}
console.log(cetakFunction())
console.log("------------------------")

// Soal 2
console.log("-------- Soal 2 --------")
function myFunction(){
    return angka1+angka2;
}

let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2)
console.log(output)
console.log("------------------------")

// Soal 3
Hello = () => "Hello";
    
// Soal 4
console.log("-------- Soal 4 --------")
let obj = {
    nama : "john",
    umur : 22,
    bahasa : "indonesia"
}
console.log(obj.bahasa);
console.log("------------------------")

// Soal 5
console.log("-------- Soal 5 --------")
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    kelamin : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    tahunlahir : arrayDaftarPeserta[3]
}
console.log(objDaftarPeserta)
console.log("------------------------")

// Soal 6
console.log("-------- Soal 6 --------")
var buah = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000}, 
    {nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000}, 
    {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000}, 
    {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}
    ]

    var buahFilter = buah.filter(function(item){
        return item.warna == "Kuning";
    })
    console.log(buahFilter)
console.log("------------------------")

// Soal 7
console.log("-------- Soal 7 --------")
let phone = {
    name: "Galaxy Note 20",
    brand: "Samsung",
    year: 2020
 }
 // kode diatas ini jangan di rubah atau di hapus sama sekali
 const {name, brand, year} = phone
 // kode di bawah ini jangan dirubah atau dihapus
 console.log(name, brand, year) 
console.log("------------------------")

// Soal 8
console.log("-------- Soal 8 --------")
let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
  let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
  let objOutput = {}
  
  // kode diatas ini jangan di rubah atau di hapus sama sekali
  objOutput = {...dataBukuTambahan,...buku}
  // kode di bawah ini jangan dirubah atau dihapus
  console.log(objOutput)
console.log("------------------------")

// Soal 9
console.log("-------- Soal 9 --------")
let mobil = {
    merk : "bmw",
    color: "red",
    year : 2002
}

const functionObject = (param) => {
    return param
}
console.log(functionObject(mobil));
console.log("------------------------")