const dns = require("dns");
const domain = require("domain");

dns.lookup("example.com", (err, address, family) => {
  if (err) throw err;
  console.log(`address : ${address} , family:IPv${family}`);
});

dns.resolve("example.com", "A", (err, record) => {
  if (err) throw err;
  console.log(record);
});

dns.reverse("8.8.8.8", (err, iPaddress) => {
  if (err) throw err;
  console.log(iPaddress);
});

dns.resolveMx("gmail.com", (err, address) => {
  console.log(address);
});

dns.resolveTxt("example.com", (err, address) => {
  console.log(address);
});
