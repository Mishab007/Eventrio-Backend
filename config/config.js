const mongoose = require('mongoose');
  mongoose.connect('mongodb://127.0.0.1:27017/EventDB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.1').then(()=>{
  // console.log("mongooose connected");
}) //connected with mongo db
module.exports = mongoose;
