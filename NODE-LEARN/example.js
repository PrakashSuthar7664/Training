// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello world ");
// });

// server.listen(4000);


const crypto = require("crypto");
// console.log(crypto);

// const hex = crypto.createHash('sha256').update("Helloworld").digest("hex") ;
// console.log(hex);
// const secretKey = "Prakash" ;
// const Hmac = crypto.createHmac('sha256', secretKey).update("helloworld").digest("hex")
// console.log(Hmac);

// const algo = "aes-256-cbc";
// const key = crypto.randomBytes(32);
// const iv = crypto.randomBytes(16);

// function encryption(text) {
//   const cipher = crypto.createCipheriv(algo, key, iv);
//   let encrypted = cipher.update(text, "utf-8", "hex");
//   encrypted += cipher.final("hex");
//   return encrypted;
// }
// function decryption(encryptedText) {
//   const decipher = crypto.createDecipheriv(algo, key, iv);
//   let decrypted = decipher.update(encryptedText, "hex", "utf-8");
//   decrypted += decipher.final("utf-8");
//   return decrypted;
// }

// const encryptedText = encryption("HelloWorld");
// console.log("Encrypted:", encryptedText);
// const decryptedText = decryption(encryptedText);
// console.log("Decrypted:", decryptedText);
