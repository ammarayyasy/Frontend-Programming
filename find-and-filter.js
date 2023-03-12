    const users = [
    {
        name: "Ammar",
        age: 19
    },
    {
        name: "Dea",
        age: 21
    },
    {
        name: "Tami",
        age: 28
    }
]

//coba find
const cobaFind = (nama) => { 
    return users.find(function (user) {
        return user.name = nama
    })
}
//coba filter
const cobaFilter = (age) => {
    return users.filter(function (user) {
        return user.age > age
    })
}

//menampilkan hasil
console.log(cobaFind("Ammar"));
console.log("");
console.log(cobaFilter(19));



//jadi kalo find mengambil 1 data dan kalo ada banyak yg terseleksi akan diambil data yang paling atas
//dan kalo pilter dia mengambil semua data yang terseleksi
