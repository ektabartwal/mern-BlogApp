import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="min-h-screen  mt-20">
        <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
          <div className="left  flex-1">
            <Link to="/" className="  font-bold dark:text-white text-4xl">
              <span className=" px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Ekta's
              </span>
              Blog
            </Link>
            <p className="text-sm mt-5">
              This is a Demo project using Mern stack.you can sign-up with your
              email or with Google.
            </p>
          </div>
          <div className="right flex-1">
            <div className="">
              <form className="flex flex-col gap-4">
                <div>
                  <Label value="Your username" />
                  <TextInput type="text" placeholder="username" id="username" />
                </div>
                <div>
                  <Label value="Your email" />
                  <TextInput
                    type="text"
                    placeholder="name@company.com"
                    id="email"
                  />
                </div>
                <div>
                  <Label value=" Your password" />
                  <TextInput type="text" placeholder="password" id="password" />
                </div>
                <Button gradientDuoTone="purpleToPink" type="submit">
                  Sign Up
                </Button>
              </form>
              <div className="flex gap-2 text-sm mt-5">
                <sapn>Have an account</sapn>
                <Link to="/signin" className="text-blue-500">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
