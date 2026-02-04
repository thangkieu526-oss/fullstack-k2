// Bài 1 của 14.4 là bài 3 của 14.2 của Day 26

// Bài 2
function flattenCategories(arr, parentId = 0, result = []) {
  for (var i = 0; i < arr.length; i++) {
    var item = {
      id: arr[i].id,
      name: arr[i].name,
      parentId: arr[i].parentId,
    };

    result.push(item);

    if (arr[i].children) {
      flattenCategories(arr[i].children, arr[i].id, result);
    }
  }
  return result;
}

const categories = [
  {
    id: 1,
    name: "Electronics",
    children: [
      {
        id: 2,
        name: "Laptops",
        children: [
          {
            id: 3,
            name: "Apple",
          },
          {
            id: 4,
            name: "Dell",
          },
        ],
      },
      {
        id: 5,
        name: "Headphones",
      },
    ],
  },
  {
    id: 6,
    name: "Books",
    children: [
      {
        id: 7,
        name: "Fiction",
        children: [
          {
            id: 8,
            name: "Thrillers",
          },
          {
            id: 9,
            name: "Mystery",
          },
        ],
      },
      {
        id: 10,
        name: "Non-Fiction",
      },
    ],
  },
];

const result = flattenCategories(categories);
console.log(result);
