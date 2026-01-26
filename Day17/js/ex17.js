// Bài 1
function swap() {
  var a = Number(document.getElementById("b1a").value);
  var b = Number(document.getElementById("b1b").value);

  a = a + b;
  b = a - b;
  a = a - b;

  document.getElementById("r1").innerText = `Sau hoán vị: a = ${a}, b = ${b}`;
}

// Bài 2
function findMax() {
  var a = Number(b2a.value);
  var b = Number(b2b.value);
  var c = Number(b2c.value);

  var max = a;
  if (b > max) max = b;
  if (c > max) max = c;

  r2.innerText = "Số lớn nhất là: " + max;
}

// Bài 3
function checkSign() {
  var a = Number(b3a.value);
  var b = Number(b3b.value);

  if (a * b > 0) r3.innerText = "Hai số cùng dấu";
  else if (a * b < 0) r3.innerText = "Hai số khác dấu";
  else r3.innerText = "Ít nhất một số bằng 0";
}

// Bài 4
function sort3() {
  var a = Number(b4a.value);
  var b = Number(b4b.value);
  var c = Number(b4c.value);

  if (a > b) [a, b] = [b, a];
  if (a > c) [a, c] = [c, a];
  if (b > c) [b, c] = [c, b];

  r4.innerText = `Thứ tự tăng dần: ${a}, ${b}, ${c}`;
}

// Bài 5
function calcTaxi() {
  var km = Number(document.getElementById("km").value);
  var money = 0;

  if (km <= 1) {
    money = km * 15000;
  } else if (km <= 5) {
    money = 15000 + (km - 1) * 13500;
  } else {
    money = 15000 + 4 * 13500 + (km - 5) * 11000;
  }

  if (km > 120) {
    money *= 0.9;
  }

  r5.innerText = "Tiền taxi: " + money.toLocaleString() + " đ";
}

// Bài 6
function calcElectric() {
  var kwh = Number(document.getElementById("kwh").value);
  var money = 0;

  if (kwh <= 50) {
    money = kwh * 1.678;
  } else if (kwh <= 100) {
    money = 50 * 1.678 + (kwh - 50) * 1.734;
  } else if (kwh <= 200) {
    money = 50 * 1.678 + 50 * 1.734 + (kwh - 100) * 2.014;
  } else if (kwh <= 300) {
    money = 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (kwh - 200) * 2.536;
  } else if (kwh <= 400) {
    money =
      50 * 1.678 + 50 * 1.734 + 100 * 2.014 + 100 * 2.536 + (kwh - 300) * 2.927;
  } else {
    money =
      50 * 1678 +
      50 * 1734 +
      100 * 2014 +
      100 * 2536 +
      100 * 2834 +
      (kwh - 400) * 2927;
  }
  r6.innerText = "Tiền điện phải đóng: " + money.toLocaleString() + " đ";
}

// Bài 7
function calcSum() {
  var n = Number(document.getElementById("n").value);
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i * (i + 1);
  }
  r7.innerText = "Giá trị của S = " + sum;
}

//Bài 8
function isPrime(n) {
  if (n < 2) return false;

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function checkPrime() {
  var num = Number(document.getElementById("num").value);

  if (isPrime(num)) {
    r8.innerText = num + " là số nguyên tố";
  } else {
    r8.innerText = num + " không phải là số nguyên tố";
  }
}

// Bài 9
function multiplicationTable() {
  let html = "";

  for (let i = 1; i <= 10; i++) {
    html += "<div><b>Bảng " + i + "</b><br>";
    for (var j = 1; j <= 10; j++) {
      html += i + " × " + j + " = " + i * j + "<br>";
    }
    html += "</div>";
  }
  document.getElementById("r9").innerHTML = html;
}
