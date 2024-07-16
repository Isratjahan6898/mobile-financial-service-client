import { Link } from "react-router-dom";
import axios from 'axios';
import bcrypt from 'bcryptjs';
import { useState } from "react";
import Swal from "sweetalert2";


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        pin: '',
        mobile: '',
        email: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const hashedPin = bcrypt.hashSync(formData.pin, 10);
        try {
          await axios.post('http://localhost:5000/api/register', { ...formData, pin: hashedPin });
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "user register successfully",
            showConfirmButton: false,
            timer: 1500
          });
        } catch (error) {
          console.error(error);
          alert('Registration failed');
        }
      };
    return (
        <div className="mt-[100px] lg:mx-[300px]">
           <div className="flex justify-center items-center">
            <img src="https://i.ibb.co/Ct9sZ5q/1701541755bkash-logo-png.png" alt="" className=" w-[100px] h-[100px]" />
           </div>

           <div>
            <h1 className="font-bold text-3xl text-pink-800 text-center">Register Here</h1>
           </div>


           <div>
           <form
           onSubmit={handleSubmit}
      
       className="card-body">


<div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text"  value={formData.name}
            onChange={handleChange} placeholder="enter your name" name="name" className="input text-black border-pink-800" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Enter Pin</span>
          </label>
          <input type="number" placeholder="enter 5 digit pin" value={formData.pin}
            onChange={handleChange} name="pin" className="input text-black input-bordered border-pink-800" required />
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Mobile Number</span>
          </label>
          <input type="tel"  value={formData.mobile}
            onChange={handleChange} placeholder="enter mobile number" name="mobile" className="input text-black input-bordered border-pink-800" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white border-pink-800">Email</span>
          </label>
          <input type="email"  value={formData.email}
            onChange={handleChange} placeholder= " enter your email" name="email" className="input text-black input-bordered border-pink-800" required />
        </div>
       
        <div className="form-control mt-6">
          <button className="btn bg-pink-800 border-0 text-white font-bold">Register</button>
        </div>
      </form>
           </div>

           <div className="text-center font-bold text-2xl mb-[20px]">
           <Link to='/login'>Already you have account plz <span className="text-pink-800">Login</span></Link>
           </div>
        </div>
    );
};

export default Register;