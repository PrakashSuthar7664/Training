function spoonerise(str) {
  let firstword = null;
  let secondword = null;
  let vowel = "aeiou";
  let s = str.split(" ");
  firstword = s[0];
  secondword = s[1];
  
  if(firstword.slice(0,2) == "ch"){
    let newfirst = secondword[0] + firstword.slice(2);
    let secondfirst =  firstword.slice(0,2) +  secondword.slice(1);
    console.log(`${newfirst} ${secondfirst}`);
  }
 else if (vowel.includes(firstword[0][0])) {
    let newfirst = secondword[0] + firstword;
    let secondfirst = secondword.slice(1);
    console.log(`${newfirst} ${secondfirst}`);
  } else {
    let newfirst = secondword[0] + firstword.slice(1);
    let secondfirst = firstword[0] + firstword.slice(1);
    console.log(`${newfirst} ${secondfirst}`);
  }
}

spoonerise("history lecture"); //➞ "listory hecture"

spoonerise("loud noises"); //➞ "noud loises"

spoonerise("chow mein"); //➞ "mow chein"

spoonerise("edabit rules!"); //➞ "redabit ules!"
