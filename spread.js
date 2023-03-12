//contoh array
const family = ["Ammar", "Dea Eka"];

const newFamily = [...family, "Zakariya", "Nayla"];

console.log(...newFamily);

console.log("");

//contoh object
const user = {
    name: "Ammar",
    major: "Teknik Infomatika"
}

const newUser = {
    ...user,
    age: 19
}

console.log(newUser);