import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="flex flex-col items-center mt-5">
      <form onSubmit={handleSubmit} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-80">
      <input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
  className="p-2 mb-3 w-full border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
  className="p-2 mb-3 w-full border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
