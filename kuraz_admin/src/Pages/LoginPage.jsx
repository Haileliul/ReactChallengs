import React, { useState } from "react";
import { useFormik } from "formik";

import {
  FaSignInAlt,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import Images from "../assets/index";
import { signinSchema } from "../schemas";

const LoginPage = () => {
  /*  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(""); */

  const [visible, setVisible] = useState(false);
  const { values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: signinSchema,
  });

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-background">
      <div className="bg-white w-3/4 h-5/6 flex-row  flex  p-5 rounded-md">
        <div className=" flex-1  sm:hidden md:block lg:block w-full h-full bg-gray-200">
          <img
            src={Images.Login}
            alt=""
            className="object-cover object-center inset-0 w-full h-full"
          />
        </div>
        <div className=" flex-1 flex flex-col justify-center ">
          <div className=" flex flex-col  gap-5 px-20 pb-10">
            <div className="self-center">
              <p className="text-2xl font-medium"> Sign In </p>
              <div className="w-20 h-1 bg-black rounded-lg"></div>
            </div>

            <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div>
                <div className="flex items-center gap-3  bg-gray-200 h-14 w-full rounded-lg px-5 ">
                  <FaEnvelope className=" text-2xl" />
                  <input
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    className="indent-1 rounded-lg  outline-none  border-none focus:border-none w-full h-full bg-transparent"
                    placeholder="Email"
                  />
                </div>
                <span>
                  {errors.email ? (
                    <p className="text-red-600 text-sm">{errors.email}</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>

              <div>
                <div className="flex items-center gap-3  bg-gray-200 h-14 w-full rounded-lg px-5">
                  <FaLock className=" text-2xl" />
                  <input
                    name="password"
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type={visible ? "text" : "password"}
                    className="indent-3rounded-lg  outline-none  border-none focus:border-none w-full h-full bg-transparent"
                    placeholder="Password"
                  />
                  <span
                    className="text-xl pr-2"
                    onClick={() => {
                      setVisible(!visible);
                    }}
                  >
                    {visible ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                <span>
                  {errors.password ? (
                    <p className="text-red-600 text-sm">{errors.password}</p>
                  ) : (
                    ""
                  )}
                </span>
              </div>

              <input
                type="submit"
                value="Login"
                className="w-full h-14 bg-gray-700 text-white mt-2 rounded-md flex justify-center items-center gap-2 hover:bg-gray-500 hover:cursor-pointer"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
