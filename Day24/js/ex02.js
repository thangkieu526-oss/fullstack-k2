const users = [];
function register(name, password, email) {
  if (!name || !password || !email) {
    console.log("Vui lòng nhập đầy đủ tên, mật khẩu, và email");
    return;
  }

  users.push({ name, password, email, role: "user" });
  return users;
}

function login(email, password) {
  if (!email || !password) {
    return "Vui lòng nhập email và password";
  }
  for (let i = 0; i < users.length; i++) {
    if ((users[i].email = email && users[i].password === password)) {
      return users[i];
    }
  }
  return "Tài khoản không tồn tại";
}
console.log(register("hoang", "12345", "hoangnm@gmail.com"));
console.log(register("an", "00000", "hoangan@gmail.com"));

console.log(login("hoangan@gmail.com", "00000"));
console.log(login("hoangan.web@gmail.com", "123456"));
