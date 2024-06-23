import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const url = "http://localhost:3000";

const AdminSignin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleSignin = async (e) => {
    e.preventDefault();
    let { data } = await axios.post(`${url}/iamadmin/signin`, formData, {
      credentials: true,
      origin: true,
      withCredentials: true,
    });

    if (data.message === "success") {
      var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
      Cookies.set("tokenHai", data.token, { expires: inFifteenMinutes });
      console.log("http://localhost:5173/");
      return navigate("/");
    }
    // console.log(data);
  };
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1 flex items-center justify-center">
        <div className="max-w-md md:w-full w-2/3 space-y-8 p-8 bg-white rounded-lg shadow-lg">
          <div>
            <h2 className="text-center text-xl md:text-3xl font-bold text-gray-900">
              Sign in as Admin
            </h2>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="username"
                className="block text-sm md:text-lg font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  placeholder="gourav"
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none block w-full px-3 py-2 border  border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-gray-900 focus:border-gray-900 sm:text-sm dark:border-gray-800 dark:focus:ring-gray-50 dark:focus:border-gray-50 text-black text-sm"
                  value={formData.username}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm md:text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  placeholder="password"
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:ring-gray-900 focus:border-gray-900 sm:text-sm dark:border-gray-800 dark:focus:ring-gray-50 dark:focus:border-gray-50 text-black text-sm"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              <button
                onClick={handleSignin}
                type="submit"
                className="w-full bg-gray-700 text-white p-2 rounded"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="text-black text-xs text-center">
            username: gouravbiro, password: gouravbiro8
          </p>
        </div>
      </main>
    </div>
  );
};

export default AdminSignin;
