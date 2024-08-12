const httpStatus = require("http-status");
const { UserModel, BlogPostModel, ContactModel } = require("../models");
const ApiError = require("../utils/ApiError");
const { GenerateToken } = require("../utils/jwt.utils");
const { exist } = require("joi");
const { cloundary } = require("../utils/cloudnary");

const cloudinary = require("../utils/cloudnary"); // Ensure the path is correct

const uploadOnCloudinary = async (path) => {
  try {
    const result = await cloudinary.uploader.upload(path, {
      folder: "blogs",
    });
    return result;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};



const register = async (body) => {
  const { name, email, password } = body;

  const existUser = await UserModel.findOne({ email: email });
  if (existUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User Already Exist");
  }

  const user = await UserModel.create({ name, email, password });
  return { msg: `User Register Successfully ,Welcome ${user.name}` };
};
const loginService = async (body) => {
  const { email, password } = body;

  const existUser = await UserModel.findOne({ email: email });
  if (!existUser) {
    throw new ApiError(httpStatus.NOT_FOUND, "User Not Exist");
  }

  const isMatch = await existUser.comparePassword(password);
  if (!isMatch) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Sale Galat Password Deta hai");
  }
  const token = await GenerateToken(existUser);

  return {
    token,
    msg: `User Logged In Successfully ,Welcome Back ${existUser.name}`,
  };
};
const userProfile = async (id) => {
  return await UserModel.findById({ _id: id }).select(
    "-password -createdAt -updatedAt -__v"
  );
};
const createPost= async(user,body,file)=>{
  const {title,content,description} = body;


const existance = await BlogPostModel.findOne({title});
if(existance){
throw new ApiError(httpStatus.BAD_REQUEST,"Title already exist try with another name")
}

  const newTitle = title.split(" ").join("-")
  const result = await uploadOnCloudinary(file.path);

await BlogPostModel.create({
    title:title,
    slug:newTitle,
    content,
    image:{
      image_url:result.secure_url,
      cloudnary_id:result.public_id
    },
    user:user,
    description
  })

  return {
    msg:"post added successfully"
  };


}
const AllPost = async () => {
  const posts = await BlogPostModel.find({ isDeleted: false }).populate(
    "user",
    "name email"
  );
  return { posts, total: posts.length };
};
const PostById = async (id) => {
  const post = await BlogPostModel.findOne({
    _id: id,
    isDeleted: false,
  }).populate("user", "name email");

  return {post,image:post.image.image_url}
};
const deleteById = async (id) => {
  const post = await BlogPostModel.findByIdAndUpdate(id, {
    isDeleted: true,
  });
  return { msg: "post deleted" };
};
const contact = async (body) => {
  const { name, email, message, isContact } = body;

  const user = await ContactModel.create({ name, email, message });
  return { msg: "Thank you contacting , your response has been recieved :)" };
};
module.exports = { register, loginService, userProfile, createPost, AllPost, PostById, deleteById, contact };
