import React from 'react';
import UiBlock from '../assets/UIBlock.png';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      
      <div className="md:w-1/2 relative hidden md:block">
        <div
          className="h-full bg-cover bg-center flex flex-col justify-center items-center px-8 text-center"
          style={{ backgroundImage: `url(${UiBlock})` }}
        >
       
       <div className=" text-white space-y-6 z-10 text-left">
  <h1 className="text-4xl md:text-5xl font-bold shadow-lg">
    The easiest way to <br /> create your COMPANY.
  </h1>
  <p className="text-sm font-light max-w-md">
    Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.
  </p>
</div>

          <div className="absolute inset-0 bg-black opacity-40 z-0" />
        </div>
      </div>

      {/*  Login Form */}
      <div className="md:w-1/2 w-full flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-5xl font-bold text-gray-800 mb-10">Log In </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-800 font-bold text-xl mb-4">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Johnwick@smalter.com"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-bold text-xl mb-4">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 rounded-full"
            >
              Log In
            </button>
          </form>
          <p className="text-gray-500 text-sm">
  Don’t have an account? <Link to="/signIn" className="text-blue-600 hover:underline">Sign up</Link>
</p>

        </div>
      </div>
    </div>
  );
}

export default Login;
