import React, { useState } from "react";

const products = [
  { id: 1, name: "Laptop", description: "A high-performance laptop for professionals." },
  { id: 2, name: "Smartphone", description: "A latest-generation smartphone with advanced features." },
  { id: 3, name: "Headphones", description: "Noise-cancelling headphones for immersive sound." }
];

export default function ProductDetailsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-4 border rounded-lg cursor-pointer hover:shadow-lg transition"
            onClick={() => setSelectedProduct(product)}
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <div 
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-center cursor-pointer hover:bg-blue-700 transition"
              onClick={() => setSelectedProduct(product)}
            >
              View Details
            </div>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="p-6 bg-white rounded-lg w-96 text-center shadow-lg">
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <p className="mt-2">{selectedProduct.description}</p>
            <div 
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg text-center cursor-pointer hover:bg-red-700 transition"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
