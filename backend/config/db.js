const mongoose = require("mongoose");






exports.ConnectDB= async ()=>{
    await mongoose
    .connect('mongodb://127.0.0.1:27017/blog')
    .then(() => console.log("💻 Mondodb Connected"))
    .catch(err => console.error(err));
}