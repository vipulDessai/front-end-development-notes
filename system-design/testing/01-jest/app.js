const users = [
  {
    name: "Simran",
    age: 30,
  },
  {
    name: "Akshay",
    age: 28,
  },
  {
    name: "Sachin",
    age: 50,
  },
  {
    name: "Elon",
    age: 8,
  },
];

function sortUsers() {
  return users.sort((a, b) => a.age - b.age);
}

const sortedusers = sortUsers();
console.log(sortedusers);

module.exports = sortUsers;