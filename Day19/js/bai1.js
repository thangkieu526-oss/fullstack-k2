// Bài 1

var arr1 = [5, 2, 9, 1, 7];

var max = arr1[0];
var min = arr1[0];
var posMax = 0;
var posMin = 0;

for (var i = 1; i <= arr1.length; i++) {
  if (max < arr1[i]) {
    max = arr1[i];
    posMax = i;
  }
  if (min > arr1[i]) {
    min = arr1[i];
    posMin = i;
  }
}
document.getElementById("bai1").innerHTML =
  "Mảng: " +
  arr1 +
  "<br>Max = " +
  max +
  " (Vị trí: " +
  posMax +
  ")" +
  "<br>Min = " +
  min +
  " (Vị trí: " +
  posMin +
  ")";

// Bài 2
var arr2 = [4, 7, 9, 11, 15];
var sum = 0;
var count = 0;

for (var i = 0; i < arr2.length; i++) {
  var n = arr2[i];
  var isPrime = true;

  if (n < 2) {
    isPrime = false;
  } else {
    for (var j = 2; j < n; j++) {
      if (n % j === 0) {
        isPrime = false;
        break;
      }
    }
  }

  if (isPrime) {
    sum += n;
    count++;
  }
}
if (count === 0) {
  document.getElementById("bai2").innerHTML = "Không có số nguyên tố";
} else {
  var avg = sum / count;
  document.getElementById("bai2").innerHTML =
    "Mảng: " + arr2 + "<br>Trung bình số nguyên tố = " + avg;
}

// Bài 3
var arr3 = [1, 2, 3, 2, 4, 1, 5];
var result = [];

for (var i = 0; i < arr3.length; i++) {
  var exists = false;

  for (var j = 0; j < result.length; j++) {
    if (arr3[i] === result[j]) {
      exists = true;
      break;
    }
  }

  if (!exists) {
    result[result.length] = arr3[i];
  }
}

document.getElementById("bai3").innerHTML =
  "Mảng: " + arr3 + "<br>Mảng sau khi lọc: " + result;

// Bài 4
var numbers = [5, 1, 9, 8, 10];
var element = 4;

for (var i = 0; i < numbers.length - 1; i++) {
  for (var j = i + 1; j < numbers.length; j++) {
    if (numbers[i] > numbers[j]) {
      var temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

var newArr = [];
var inserted = false;

for (var i = 0; i < numbers.length; i++) {
  if (!inserted && element < numbers[i]) {
    newArr[newArr.length] = element;
    inserted = true;
  }
  newArr[newArr.length] = numbers[i];
}

if (!inserted) {
  newArr[newArr.length] = element;
}

document.getElementById("bai4").innerHTML =
  "Mảng sau khi sắp xếp: " +
  numbers +
  "<br> Mảng sau khi chèn " +
  element +
  " :" +
  newArr;
