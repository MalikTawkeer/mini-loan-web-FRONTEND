import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { Alert } from "@mui/material";

import { AuthContext } from "../store/auth.context";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const LoginPage = () => {
  const { login, loading, error } = useContext(AuthContext);

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  //   INPUT FEILDS NAMES
  const inputFeilds = [
    { feildName: "email", label: "Your Email" },

    { feildName: "password", label: "Password" },
  ];

  //   CALL LOGIN API
  const handleSubmit = (e) => {
    e.preventDefault();

    login(loginFormData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Mini loan portal
        </h1>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>

            {/* ERRROR */}
            {!loading && error && (
              <Alert severity="error">
                {error?.localErr || error || "Somthing went wrong!"}
              </Alert>
            )}

            {/* FORM */}
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              {inputFeilds?.map((feild) => (
                <div key={feild.feildName}>
                  <label
                    htmlFor={feild.feildName}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    {feild.label}
                  </label>
                  <input
                    type={feild.feildName}
                    name={feild.feildName}
                    id={feild.feildName}
                    value={loginFormData[feild.feildName]}
                    onChange={(e) =>
                      setLoginFormData((prev) => ({
                        ...prev,
                        [feild.feildName]: e.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={
                      feild.feildName === "email"
                        ? "name@company.com"
                        : "••••••••"
                    }
                    required
                  />
                </div>
              ))}

              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>

                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <Link
                  to="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                disabled={loading}
              >
                {loading ? (
                  <BeatLoader cssOverride={override} size={10} color="white" />
                ) : (
                  "Sign in"
                )}
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;