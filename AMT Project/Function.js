// import { MyDataArray } from "./Data";
// console.log(MyDataArray);

const MyNewArray = [
  {
    name: "Shafique",
    key: 01,
    remarks:
      "0 small packages arriving as one is ten times the joy at once! Thank you Global shopaholics for your service, I feel so valued as a customer. Keep up the good work. Definitely shopping with you again",
    rating: 5,
    location: "USA",
  },
];
console.log(MyNewArray);

const MyMappedArray = MyNewArray.map(
  (data = () => {
    return "Hello this is my new Array of";
  })
);
console.log(MyMappedArray);
