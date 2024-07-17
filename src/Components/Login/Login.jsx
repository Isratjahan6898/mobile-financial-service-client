import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (user) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (data.success) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "user login successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error("login failed:", data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="mt-[100px] lg:mx-[300px]">
      <div>
        <div className="flex justify-center items-center">
          <img
            src="https://i.ibb.co/Ct9sZ5q/1701541755bkash-logo-png.png"
            alt=""
            className=" w-[100px] h-[100px]"
          />
        </div>

        <div>
          <h1 className="font-bold text-3xl text-pink-800 text-center">
            Login here
          </h1>
        </div>
      </div>
      <div className="max-w-md mx-auto my-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              htmlFor="identifier"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Mobile Number or Email
            </label>
            <input
              type="text"
              id="identifier"
              name="identifier"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight border-pink-800 focus:outline-none focus:shadow-outline"
              placeholder="Enter your mobile number or email"
              {...register("emailOrMobile", { required: true })}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pin"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              PIN
            </label>
            <input
              type="password"
              id="pin"
              name="pin"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight border-pink-800 focus:outline-none focus:shadow-outline"
              placeholder="Enter your PIN"
              pattern="[0-9]{5}"
              {...register("pin", { required: true })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-pink-700 w-full hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
      </div>
      <div className="text-center font-bold text-2xl mb-[20px]">
        <Link to="/">
          {" "}
          You have no account plz{" "}
          <span className="text-pink-800">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
