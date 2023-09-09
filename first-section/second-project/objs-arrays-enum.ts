enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

//person.role.push("admin");

let favoriteactivities: String[];
favoriteactivities = ["hel"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

const myTuple: [String, number] = ["Hello, YOU", 13];

console.log(myTuple);
