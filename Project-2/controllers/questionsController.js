const fs = require("fs");

let result = [];
const data = fs.readFileSync("./data.csv", "utf8");
const numbers = data.split(",").map((item) => item);

const getQuestions = (req, res) => {
  const index = parseInt(req.params.index);
  if (index >= numbers.length) {
    return res.send('<script>alert("File Data Finished");</script>');
  }
  const number = numbers[index];
  res.render("question", { index, number });
};

const postQuestions = (req, res) => {
  const index = parseInt(req.params.index);
  const number = numbers[index];
  const userAnswer = parseInt(req.body.userAnswer);
  const correctAnswer = number * number;
  const isCorrect = userAnswer === correctAnswer;

  result.push(
    `Number : ${number} ,user Answer : ${userAnswer} , correct Answer : ${correctAnswer} , Result : ${isCorrect}`
  );
  const nextIndex = index + 1;
  if (nextIndex < numbers.length) {
    res.redirect(`/questions/${nextIndex}`);
  } else {
    fs.writeFileSync("./output.txt", result.join("\n"));
  }
  if (index == numbers.length - 1 && userAnswer) {
    return res.send(
      `<script>alert("all Questions finish ")
          window.location.href='/questions/0';
          </script>`
    );
  }
};

module.exports = { getQuestions, postQuestions };
