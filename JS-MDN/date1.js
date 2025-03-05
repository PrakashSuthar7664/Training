function daysUntil2021(date){
let givendate = new Date(date)
let target  = new Date("1/1/2021") ; 
console.log((target - givendate )/ (1000 * 60 * 60 * 24));
}
daysUntil2021("12/28/2020") //➞ "3 days
daysUntil2021("1/1/2020") //➞ "366 days"
daysUntil2021("2/28/2020") //➞ "308 days"