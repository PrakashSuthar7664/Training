const fs = require("fs");

const getQuestion = (req, res) => {
  const data = fs.readFileSync("./data.csv", "utf8");
  const numbers = data.split(",").map((item) => item);
  const index = parseInt(req.params.index);
  if (index >= numbers.length) {
    return res.send('<script>alert("File Data Finished");</script>');
  }
  const number = numbers[index];
  res.render("question", { index, number });
};

const postQuestion = (req, res) => {
  const data = fs.readFileSync("./data.csv", "utf8");
  const numbers = data.split(",").map((item) => item);
  const index = parseInt(req.params.index);
  const number = numbers[index];
  const userAnswer = parseInt(req.body.userAnswer);
  const correctAnswer = number * number;
  const isCorrect = userAnswer === correctAnswer;

  const result = `Number : ${number} ,user Answer : ${userAnswer} , correct Answer : ${correctAnswer} , Result : ${isCorrect} \n`;

  fs.appendFile("./output.txt", result, (err) => {
    if (err) {
      res.send("Error writing to file");
    }
    const nextIndex = index + 1;

    if (nextIndex < numbers.length) {
      res.redirect(`/questions/${nextIndex}`);
    } else {
      return res.send(
        `<script>alert("all Questions finish ")
          window.location.href='/questions/0';
          </script>`
      );
    }
  });
};

module.exports = { getQuestion, postQuestion };
