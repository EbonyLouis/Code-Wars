//Your mission:
//Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

//A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings 
//in this format: "MONTH DATE, YEAR".




function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
let curr = Date.parse(currentDate);
let exp = Date.parse(expirationDate);
  if(enteredCode === correctCode && curr <= exp){
    return true
  }else{
   return false
  }
}
