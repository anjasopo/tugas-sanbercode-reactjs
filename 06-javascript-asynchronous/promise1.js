// Soal 1 ( Membuat Function promise sederhana dengan menerima inputan  )

const myCountPromise = (param) => {

    return new Promise(( resolve, reject ) => {

        if(param !== undefined) {
            setTimeout( () => { 
                resolve(param * 2)
              }, 3000)
        } else {
            setTimeout( () => { 
                reject("Maaf tidak ada nilai dalam parameter")
              }, 3000)
        }
    })
}


//kode dibawah ini jangan dihapus atau diedit sama sekali ya


myCountPromise(2)
 .then((result) => {
    console.log(result)
 })
.catch((error) => {
    console.log(error)
})