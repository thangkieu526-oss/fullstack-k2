// Bài 1
Array.prototype.push2 = function (...items) {
  for (var i = 0; i < items.length; i++) {
    this[this.length] = items[i];
  }
  return this.length;
};

var arr = [1, 2];
arr.push2(3, 4, 5);
console.log(arr);

// Bài 2: filter2 ở Day25 ạ

// Bài 3
function renderOptions(categories, level = 0) {
  var html = "";

  for (var i = 0; i < categories.length; i++) {
    var prefix = "";

    for (var j = 0; j < level; j++) {
      prefix += "--|";
    }
    html += `
        <option value="${categories[i].id}">${prefix}${categories[i].name}
        </option>
        `;

    if (categories[i].children) {
      html += renderOptions(categories[i].children, level + 1);
    }
  }
  return html;
}

var categories = [
  { id: 1, name: "Chuyên mục 1" },
  {
    id: 2,
    name: "Chuyên mục 2",
    children: [
      { id: 4, name: "Chuyên mục 2.1" },
      {
        id: 5,
        name: "Chuyên mục 2.2",
        children: [
          { id: 10, name: "Chuyên mục 2.2.1" },
          { id: 11, name: "Chuyên mục 2.2.2" },
          { id: 12, name: "Chuyên mục 2.2.3" },
        ],
      },
      { id: 6, name: "Chuyên mục 2.3" },
    ],
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    children: [
      { id: 7, name: "Chuyên mục 3.1" },
      { id: 8, name: "Chuyên mục 3.2" },
      { id: 9, name: "Chuyên mục 3.3" },
    ],
  },
];
var select = document.getElementById("category");
select.innerHTML += renderOptions(categories);
