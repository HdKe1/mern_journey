import React from 'react'

function Footer() {
  return (
    <div>
        <footer id="contact" className="bg-gray-800 text-white text-center p-4 mt-10 fixed bottom-0 w-full">
    <p>&copy; 2025 Brand. All rights reserved.</p>
    <div className="flex justify-center space-x-4 mt-2">
      <a href="#" className="hover:text-blue-400">Facebook</a>
      <a href="#" className="hover:text-blue-400">Twitter</a>
      <a href="#" className="hover:text-blue-400">Instagram</a>
    </div>
  </footer>
    </div>
  )
}

export default Footer