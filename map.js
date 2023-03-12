const names = [
  {
    name: "Aufa",
    age: 22,
    major: "Frontend Engineer",
  },
  {
    name: "Isfa",
    age: 20,
    major: "Android Engineer",
  },
  {
    name: "Agung",
    age: 24,
    major: "Data Engineer",
  }
];

const formatNama = (title) => {
    return names.map(function (name) {
      name.name = `${name.name} ${title}`;
      return name;
    })
}

console.log(formatNama("Mrs"));
