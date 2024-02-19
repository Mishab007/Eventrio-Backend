const { json } = require("express");
const userSignup = require("../models/userscheema");
const bcrypt = require("bcrypt")

const object = {
    postSignup: async (req, res) => {
        const { username, emailOrPhone, password} = req.body
        console.log(emailOrPhone);

      //    const userExist = await userSignup.findOne({emailOrPhone:emailOrPhone});
      //    if(userExist){
      //     console.log("you are already signed once! please do login");

      //     res.status(400).json( {message : 'you already have an account. please log in '})
      //     console.log('unsuccess')
  
      //    }else{
      //     const saltrounds = 10 ;
      //     const hashedPassword = await bcrypt.hash(password,saltrounds)
      //     userSignup.password = hashedPassword;
          
      //     const dataBase = {
      //       username :username,
      //       emailOrPhone: emailOrPhone,
      //       password: hashedPassword 
      //     };
      //     userSignup.insertMany(dataBase);
      //     console.log("success");
      //   }

      const userExist = await userSignup.findOne({emailOrPhone:emailOrPhone})
      if(userExist){
        console.log('you already have an account ')
        res.status(400).json({message : 'you already have an account'})
      }else{
        const hashedPassword = await bcrypt.hash(password,10)
        
        const newUser = new userSignup({
          username : username,
          emailOrPhone : emailOrPhone,
          password : hashedPassword
        })
        newUser.save()
        console.log('signup has successfully done')
      }
 
      }
}

module.exports = object