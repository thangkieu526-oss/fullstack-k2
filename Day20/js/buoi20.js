// Bài 1
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var intersection = [];

for (var i = 0; i < arrA.length; i++) {
  if (arrB.includes(arrA[i]) && !intersection.includes(arrA[i])) {
    intersection.push(arrA[i]);
  }
}

document.getElementById("bai1").innerHTML =
  "Array A = " +
  JSON.stringify(arrA) +
  "<br>" +
  "Array B = " +
  JSON.stringify(arrB) +
  "<br>" +
  "Result: " +
  JSON.stringify(intersection);

// Bài 2
var arr2 = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
var result = [];

function flatArr(array) {
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArr(array[i]);
    } else {
      result.push(array[i]);
    }
  }
}

flatArr(arr2);

document.getElementById("bai2").innerHTML =
  "Arr = " +
  JSON.stringify(arr2) +
  "<br>" +
  "Result: " +
  JSON.stringify(result);

// Bài 3
var arr3 = [
  ["a", 1, true],
  ["b", 2, false],
];
var stringArr = [];
var numberArr = [];
var booleanArr = [];

for (var i = 0; i < arr3.length; i++) {
  for (var j = 0; j < arr3[i].length; j++) {
    if (typeof arr3[i][j] === "string") {
      stringArr.push(arr3[i][j]);
    } else if (typeof arr3[i][j] === "number") {
      numberArr.push(arr3[i][j]);
    } else if (typeof arr3[i][j] === "boolean") {
      booleanArr.push(arr3[i][j]);
    }
  }
}

var dataTypes = [stringArr, numberArr, booleanArr];

document.getElementById("bai3").innerHTML =
  "Arr = " +
  JSON.stringify(arr3) +
  "<br>" +
  "Result: " +
  JSON.stringify(dataTypes);

// Bài 4
var posts = [
  {
    title: "Tiêu đề bài viết 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam nulla facilis, nisi blanditiis laudantium! Dolorum perferendis laudantium iusto perspiciatis placeat odio nam ullam dolorem commodi corrupti error, consectetur assumenda.",
    image:
      "https://fastly.picsum.photos/id/384/400/250.jpg?hmac=PBZ5uiUnU6e_y5KRPrUgDTmX3dTAdm3qMy6sF0P9r-c",
    reverse: false,
  },
  {
    title: "Tiêu đề bài viết 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam nulla facilis, nisi blanditiis laudantium! Dolorum perferendis laudantium iusto perspiciatis placeat odio nam ullam dolorem commodi corrupti error, consectetur assumenda.",
    image:
      "https://fastly.picsum.photos/id/384/400/250.jpg?hmac=PBZ5uiUnU6e_y5KRPrUgDTmX3dTAdm3qMy6sF0P9r-c",
    reverse: true,
  },
  {
    title: "Tiêu đề bài viết 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nam nulla facilis, nisi blanditiis laudantium! Dolorum perferendis laudantium iusto perspiciatis placeat odio nam ullam dolorem commodi corrupti error, consectetur assumenda.",
    image:
      "https://fastly.picsum.photos/id/384/400/250.jpg?hmac=PBZ5uiUnU6e_y5KRPrUgDTmX3dTAdm3qMy6sF0P9r-c",
    reverse: false,
  },
];

var app = document.getElementById("app");

posts.forEach(function (post) {
  var div = document.createElement("div");
  div.className = "post" + (post.reverse ? " reverse" : "");

  div.innerHTML = `
    <img src="${post.image}">
    <div>
      <h1>${post.title}</h1>
      <p>${post.desc}</p>
    </div>
  `;

  app.appendChild(div);
});
