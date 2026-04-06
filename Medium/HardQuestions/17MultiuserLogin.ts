function login(users: any[], username: string, password: string): string {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username && users[i].password === password) {
      return "Login Successful";
    }
  }
  return "Invalid Credentials";
}

const users = [
  { username: "admin", password: "1234" },
  { username: "trainer", password: "abcd" }
];

console.log(login(users, "admin", "1234"));
console.log(login(users, "admin", "wrong"));