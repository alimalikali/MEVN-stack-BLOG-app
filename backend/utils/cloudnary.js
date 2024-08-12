const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'duwexuaai',
  api_key: process.env.CLOUDINARY_API_KEY || '244643393917874',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'V5lxptn5_QXJz66a0GA8R3ftLVc'
});

module.exports = cloudinary;


