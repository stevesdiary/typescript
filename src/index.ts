let OTP = '';
function generateOTP() {
   var digits = '0123456789'
   
   for(let i = 0; i < 6; i++) {
      OTP +=digits[Math.floor(Math.random() * 10)];
   }
   return OTP;
}

generateOTP()
console.log(OTP)