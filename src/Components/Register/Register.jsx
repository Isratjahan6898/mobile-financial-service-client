import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (user) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
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
          title: "user register successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        console.error("Registration failed:", data.message);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="mt-[100px] lg:mx-[300px]">
      <div className="flex justify-center items-center">
        <img
          src="https://i.ibb.co/Ct9sZ5q/1701541755bkash-logo-png.png"
          alt=""
          className="w-[100px] h-[100px]"
        />
      </div>

      <div>
        <h1 className="font-bold text-3xl text-pink-800 text-center">
          Register Here
        </h1>
      </div>

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              className="input text-black border-pink-800"
              {...register("name", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Enter Pin</span>
            </label>
            <input
              type="number"
              placeholder="Enter 5 digit pin"
              name="pin"
              className="input text-black input-bordered border-pink-800"
              {...register("pin", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Mobile Number</span>
            </label>
            <input
              type="tel"
              placeholder="Enter mobile number"
              name="mobile"
              className="input text-black input-bordered border-pink-800"
              {...register("mobile", { required: true })}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white border-pink-800">
                Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              className="input text-black input-bordered border-pink-800"
              {...register("email", { required: true })}
            />
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn bg-pink-800 border-0 text-white font-bold"
            >
              Register
            </button>
          </div>
        </form>
      </div>

      <div className="text-center font-bold text-2xl mb-[20px]">
        <Link to="/login">
          Already have an account? Please{" "}
          <span className="text-pink-800">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default Register;
