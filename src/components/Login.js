import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div
      className=" h-dvh w-dvw bg-black  sm:bg-black/60 sm:bg-blend-overlay md:bg-black/60 md:bg-blend-overlay lg:bg-black/60 lg:bg-blend-overlay
    xl:bg-black/60 xl:bg-blend-overlay sm:bg-protectedBgLarge md:bg-protectedBgLarge lg:bg-protectedBgLarge xl:bg-protectedBgLarge bg-no-repeat "
    >
      <Header />

      <form className="py-12 px-[68px] flex gap-2 flex-col bg-black bg-opacity-60 rounded-xl lg:w-[450px] lg:mx-auto lg:my-0 md:w-[450px] md:mx-auto md:my-0 sm:w-[450px] sm:mx-auto sm:my-0">
        <h1 className="text-white font-bold mb-4 text-3xl m-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full Name"
            className="py-4 px-4 m-2 rounded-md border border-stone-100 bg-black bg-opacity-40 text-white focus:outline-1 focus:outline-stone-100 focus:outline-offset-[5px]"
          />
        )}
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email Address"
          className="py-4 px-4 m-2 rounded-md border border-stone-50 bg-black bg-opacity-30 text-white focus:outline-1 focus:outline-stone-50 focus:outline-offset-[5px]"
        />

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="py-4 px-4 m-2 rounded-md border border-stone-100 bg-black bg-opacity-40 text-white focus:outline-1 focus:outline-stone-100 focus:outline-offset-[5px]"
        />

        {!isSignInForm && (
          <input
            id="confirmpassword"
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            className="py-4 px-4 m-2 rounded-md border border-stone-100 bg-black bg-opacity-40 text-white focus:outline-1 focus:outline-stone-100 focus:outline-offset-[5px]"
          />
        )}

        <button className="p-2 m-2 font-semibold text-stone-100 rounded-lg bg-red-600 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="inline-flex items-center">
          <label
            className="relative flex items-center p-3 rounded-full cursor-pointer"
            htmlFor="check"
          >
            <input
              type="checkbox"
              name="check"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-sm border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-white checked:before:bg-gray-900 hover:before:opacity-10"
              id="check"
            />
            <span className="absolute text-black transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label
            className="mt-px font-light text-white cursor-pointer select-none"
            htmlFor="check"
          >
            Remember Me
          </label>
        </div>

        <p className="m-2">
          <span className=" text-stone-50 text-opacity-80">
            {isSignInForm ? `New to Netflix?${" "}` : `Already a user?${" "}`}
          </span>
          <span
            onClick={toggleSignInForm}
            className="text-stone-50 font-bold cursor-pointer hover:underline"
          >
            {isSignInForm ? " Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
