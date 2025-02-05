let firstName = "Prakash";
let lastName = "Suthar";

const obj = {
  [firstName]: lastName,
  name: "amit",
  fullname: {
    fname: "Amit",
    lname: "Manav",
  },
};

console.log(obj);
console.log(obj["name"]);
console.log(obj["fullname"]["fname"]);
