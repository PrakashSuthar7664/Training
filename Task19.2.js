function trackRobot(...steps){
let x = 0 , y =0 ; 
for(let i=0 ; i<steps.length; i++){
   if(i%4==0){
      y = y+steps[i];
   }
   if(i%4 == 1){
       x = x + steps[i];
   }
   if(i%4 == 2 ){
    y = y-steps[i];
   }
   if(i%4 == 3){
    x = x-steps[i];
   }
}
console.log([x,y]);
}


// To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

// 20 steps North, now at (0, 20)
// 30 steps East, now at (30, 20)
// 10 steps South. now at (30, 10)
// 40 steps West, now at (-10, 10)


trackRobot(20, 30, 10, 40) //➞ [-10, 10]
trackRobot() //➞ [0, 0]
// // No movement means the robot stays at (0, 0).
trackRobot(-10, 20, 10) //➞ [20, -20]
// The amount to move can be negative.