import React from 'react'

function Navbar() {
  return (
    <div>
        <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
          <h1 className="text-2xl font-bold">Brand</h1>
          <div>
            <a href="#products" className="mx-2">Products</a>
            <a href="#contact" className="mx-2">Contact</a>
          </div>
        </nav>
      </div>
  )
}

export default Navbar