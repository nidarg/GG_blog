import { useState } from "react";
import axios from "axios";

const NewsLetter =  () => {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("IDLE");
  const [errorMessage, setErrorMessage] = useState(null);

  const subscribe = async () => {
    setState("LOADING");
    setErrorMessage(null);
    try {
      const response = await axios.post("/api/newsletter", { email });
      setState("SUCCESS");
    } catch (e) {
      setErrorMessage(e.response.data.error);
      setState("ERROR");
    }
  };

  return (
    <div className="bg-white shadow-lg max-w-sm rounded-md p-2  mt-8 mb-8 pb-8 xl:mx-auto md:mx-auto sm:mx-auto lg:p-2">
      <h2 className="text-2xl text-amber-900 font-bold text-center">
        If you want to know when I post...
      </h2>
      <div className="flex w-3/4  align-center mt-5 flex-col">
        <input
          className="appearance-none mb-8 border border-amber-900 rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none"
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className={` bg-amber-700 p-3 rounded cursor-pointer text-lg text-white font-bold transition duration-700 transform hover:-translate-y-1 inline-block ' ${
            state === "LOADING" ? "button-gradient-loading" : ""
          }`}
          type="button"
          disabled={state === "LOADING"}
          onClick={subscribe}
        >
          Subscribe
        </button>
      </div>
      {state === "ERROR" && (
        <p className="w-1/2 mt-2 text-red-600">{errorMessage}</p>
      )}
      {state === "SUCCESS" && (
        <p className="w-1/2 mt-2 text-green-600">Success!</p>
      )}
    </div>
  );
};

export default NewsLetter