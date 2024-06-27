import React from "react";
import { FcGoogle } from "react-icons/fc";
import LoginImage from "../assets/LoginPage.jpg";
import { Input, Button } from "@nextui-org/react";
import "../App.css";

const LoginPage = () => {
  return (
    <div className="h-[100vh] bg-gradient-to-r from-blue-500 to-white flex justify-center items-center">
      <div className="flex w-fit simple-shadow rounded-xl lg:rounded-xl bg-blue-500">
        <div className="">
          <img
            className="lg:h-[600px] lg:w-[600px] bg-cover hidden lg:block rounded-l-xl"
            src={LoginImage}
            alt="LoginPage"
          />
        </div>
        <div className="h-[600px] w-[400px] px-6">
          <div className="font-playWrite font-extrabold text-[15px] text-gray-300 pt-[50px]">
            Suprimasi Laundry
          </div>
          <div className="text-[40px] w-[250px] leading-[40px] pt-[40px] text-white">
            Hello, <span className="font-extrabold">Welcome!</span>
          </div>
          <div className="pt-[20px]">
            <Input type="Username / Email" label="Username / Emaill"></Input>
            <Input
              className="pt-[20px]"
              type="Password"
              label="Password"
            ></Input>
          </div>
          <div className="cursor-pointer flex justify-end pt-[10px]">
            <span className="text-[13px] text-gray-300 font-bold">
              Forgot password?
            </span>
          </div>
          <div className="pt-[20px]">
            <Button className="bg-blue-500 font-bold text-white border-1 border-white">
              Login
            </Button>
            <Button className="bg-white font-bold text-blue-500 ml-[10px]">
              Sign Up
            </Button>
          </div>
          <div className="flex justify-center mt-[50px]">
            <Button className="w-[230px] bg-white">
                <FcGoogle className="text-[20px]" />
                <div className="font-bold">
                    Sign In with Google
                </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
