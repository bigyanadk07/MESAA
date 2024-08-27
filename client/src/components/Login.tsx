// src/components/Login.tsx
import React, { useState } from 'react';
import Logo from './assets/mesaaLogo.png';
import LoginImg from './assets/loginImg.webp';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const LoginForm: React.FC = () => {
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/getAdmin', { username: uname, password: password });
      if (response.data.name) {
        login();
        navigate(`/dashboard/?name=${response.data.name}`);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error(error);
      setError('Invalid Details Entered')
    }
  };

  return (
    <section className="gradient-form h-screen bg-neutral-200 dark:bg-neutral-700 font3 text-white">
      <div className="container h-full flex items-center justify-center">
        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="lg:flex lg:flex-wrap">
            {/* Left column container */}
            <div className="w-full lg:w-6/12 p-10">
              <div className="md:p-12">
                {/* Logo */}
                <div className="text-center">
                  <img className="mx-auto w-48" src={Logo} alt="logo" />
                  <h4 className="my-6 text-xl font-semibold">We are The MESAA Team</h4>
                </div>

                <form className="text-center" onSubmit={handleLogin}>
                  <p className="mb-4">Please login to your account</p>
                  {/* Username input */}
                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block w-full rounded border-0 bg-transparent px-3 py-1.5 leading-normal outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="Username"
                      value={uname}
                      onChange={(e) => setUname(e.target.value)}
                    />
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 max-w-[90%] origin-[0_0] truncate pt-1 leading-normal text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Username
                    </label>
                  </div>

                  {/* Password input */}
                  <div className="relative mb-4" data-twe-input-wrapper-init>
                    <input
                      type="password"
                      className="peer block w-full rounded border-0 bg-transparent px-3 py-1.5 leading-normal outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput11"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label
                      htmlFor="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 max-w-[90%] origin-[0_0] truncate pt-1 leading-normal text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                    >
                      Password
                    </label>
                  </div>

                  {/* Submit button */}
                  <div className="text-center py-5">
                    <div className="bookBtn py-2 cursor-pointer">
                      <button type="submit">Login</button>
                    </div>
                    <br />
                    {/* Forgot password link */}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                  </div>
                </form>
                <Link to="/" className="block mt-5 text-center hover:text-yellow-700">
                  Go Back
                </Link>
              </div>
            </div>

            {/* Right column container with background and description */}
            <div className="hidden lg:block lg:w-6/12">
              <img src={LoginImg} alt="" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
