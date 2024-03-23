function generateOTP(){
    var number = "0123456789";
    
      OTP ='';

    for (let i=0; i<6; i++){
        OTP += number[Math.floor(Math.random()*10)];
        return OTP;
        // please tell me where it is worng, it is 6 digit Otp generater but it generate here only 1 digit.
       
         
    }
    
   
}
console.log(`Your OTP is: ${generateOTP()}`);