const { AuthenticationService } = require("../services");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status");

class AuthenticationController {
  static registor  = catchAsync(async (req, res) => {
    const res_obj = await AuthenticationService.register(req?.body);
    res.status(httpStatus.CREATED).send(res_obj)
  });

  static loginController  = catchAsync(async (req, res) => {
    const res_obj = await AuthenticationService.loginService(req?.body);
    res.status(httpStatus.OK).send(res_obj)
  });
  static profileController  = catchAsync(async (req, res) => {
    const res_obj = await AuthenticationService.userProfile(req?.user);
    res.status(httpStatus.OK).send(res_obj)
  });
  static postController  = catchAsync(async (req, res) => {
    const res_obj = await AuthenticationService.createPost(req?.user,req?.body,req?.file);
    res.status(httpStatus.OK).send(res_obj)
  });

  static AllpostController  = catchAsync(async (req, res) => {
    const res_obj = await AuthenticationService.AllPost();
    res.status(httpStatus.CREATED).send(res_obj)
  });
  
  static particularPost  = catchAsync(async (req, res) => {
    const res_obj = await AuthenticationService.PostById(req?.params?.id);
    res.status(httpStatus.CREATED).send(res_obj)
  });

  static deleteById  = catchAsync(async (req, res) => {
    const res_obj = await AuthenticationService.particularPost(req?.params?.id);
    res.status(httpStatus.CREATED).send(res_obj)
  });

  static contact  = catchAsync(async (req, res) => {
    const res_obj = await AuthenticationService.contact(req?.body);
    res.status(httpStatus.CREATED).send(res_obj)
  });


}

module.exports = AuthenticationController;
