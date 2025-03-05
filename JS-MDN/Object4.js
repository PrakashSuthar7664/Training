function itemsPurchased(obj, amount) {
  let afford = [];
  for (let [key, value] of Object.entries(obj)) {
    if (
      parseFloat(value.slice(1).replace(",", "")) <= parseFloat(amount.slice(1))
    ) {
      afford.push(key);
    }
  }
  if (afford.length == 0) {
    console.log("Nothing");
  } else {
    console.log(afford.sort());
  }
}

itemsPurchased(
  {
    Water: "$1",
    Bread: "$3",
    TV: "$1,000",
    Fertilizer: "$20",
  },
  "$300"
); // ➞ ["Bread", "Fertilizer", "Water"]

itemsPurchased(
  {
    Apple: "$4",
    Honey: "$3",
    Fan: "$14",
    Bananas: "$4",
    Pan: "$100",
    Spoon: "$2",
  },
  "$100"
); //➞ ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"]

itemsPurchased(
  {
    Phone: "$999",
    Speakers: "$300",
    Laptop: "$5,000",
    PC: "$1200",
  },
  "$1"
); //➞ "Nothing"
