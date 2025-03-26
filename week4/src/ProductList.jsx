import React from 'react'

const products = [
    { id: 1, name: "Product 1", price: "$29.99", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product 2", price: "$39.99", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Product 3", price: "$49.99", image: "https://via.placeholder.com/150" },
  ];
  
function ProductList() {
  return (
    <div>
        <section id="products" className="p-10">
         <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-lg text-center">
          <img src={product.image} alt={product.name} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <p className="text-lg font-bold">{product.price}</p>
        </div>
      ))}
    </div>
  </section>
    </div>
  )
}

export default ProductList