
let textBox = document.querySelector("button")
textBox.addEventListener("keydown", event => {
    console.log(`You pressed "${event.key}".`)
  });

textBox.addEventListener("keydown", (event) =>
    console.log(`You pressed "${event.key}".`),
  );
  
 

  