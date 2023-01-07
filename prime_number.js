//problem 1------->

let number = 3;

let factor=0;
for(let i=1; i<=3; i++){

if(number%i==1){
 
 factor++;
  }
}
 
(factor==2) ? console.log("prime") : console.log("not prime");



//problem 2------->

let str="naman";

for(i=str.length-1;i>=0;i--){
	
	if(str[i] != str){
		console.log("palindrome");
		}
	else{
	console.log("not Palindrome");
		}
	}