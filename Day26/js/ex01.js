// Bài 1
function sum(...args) {
  if (args.length === 0) {
    return "Không có dữ liệu";
  }

  let total = 0;

  for (let value of args) {
    const number = +value;

    if (Number.isNaN(number)) {
      return "Dữ liệu không hợp lệ";
    }

    total += number;
  }

  return total;
}

console.log(sum(3, "6", 9));
console.log(sum("1", "ABC", "M"));

// Bài 2
Number.prototype.getCurrency = String.prototype.getCurrency = function (unit) {
  const num = Number(this);

  if (Number.isNaN(num)) {
    return "Giá trị không hợp lệ";
  }

  return num.toLocaleString("en-US") + " " + unit;
};

var price = 12000;
console.log(price.getCurrency("đ"));
var price = "12000000";
console.log(price.getCurrency("đ"));

// Bài 3
function buildTree(data) {
  var map = {};
  var result = [];

  for (var i = 0; i < data.length; i++) {
    map[data[i].id] = {
      id: data[i].id,
      name: data[i].name,
    };
  }

  for (var j = 0; j < data.length; j++) {
    var item = data[j];

    if (item.parent === 0) {
      result.push(map[item.id]);
    } else {
      if (!map[item.parent].children) {
        map[item.parent].children = [];
      }
      map[item.parent].children.push(map[item.id]);
    }
  }

  return result;
}
var categories = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

var nestedCategories = buildTree(categories);
console.log(nestedCategories);

// Bài 4: reduce2 ở Day25 ạ
