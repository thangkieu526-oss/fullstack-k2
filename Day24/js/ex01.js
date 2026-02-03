const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

function createCustomers(customers) {
  for (let i = 0; i < customers.length - 1; i++) {
    // Với mỗi giá trị của i, ta có j chạy từ 0 đến giá trị customers.length - i - 1 vì lúc này những đối tượng có tuổi lớn nhất đã được sắp xếp ở cuối mảng.
    for (let j = 0; j < customers.length - i - 1; j++) {
      console.log("i: ", i);
      console.log(`customers_${i}: `, customers[i]);
      if (customers[j].age > customers[j + 1].age) {
        // Hoán đổi vị trí nếu tuổi của phần tử trước lớn hơn phần tử sau
        console.log("j: ", j);
        console.log(`customers_${j}: `, customers[j]);
        console.log(`customers_${j + 1}: `, customers[j + 1]);
        // ! Học viên tiếp tục hoàn thành logic hoán đổi vị trí 2 đối tượng có index j và j+1.
        let temp = customers[j];
        customers[j] = customers[j + 1];
        customers[j + 1] = temp;
      }
    }
  }
  return customers;
}

const result = createCustomers(customers);

console.log(result);
