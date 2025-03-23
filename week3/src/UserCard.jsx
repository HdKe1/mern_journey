import React from 'react';

function UserCard({ name, email }) {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-5 text-center">
      <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

export default UserCard;
