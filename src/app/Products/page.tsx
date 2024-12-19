
import React from 'react';

const Products = () => {
  const productData = [
    { id: 1, name: "FootBall", price: 2000, description: "Namclub Football", images: "/Namclub football.jpg" },
    { id: 2, name: "Badminton Racket", price: 7000, description: "Mizuno Racket", images: "/Mizuno racket.png" },
    { id: 3, name: "Cricket Bat", price: 2000, description: "CA Vision Cricket Bat", images: "/CA Vision Bat.jpg" },
    { id: 4, name: "Cricket Ball", price: 1600, description: "CA Vision Cricket Ball", images: "/CA Ball.jpg" },
    { id: 5, name: "Basket Ball", price: 10000, description: "Wilson BasketBall", images: "/Wilson Basketball.jpg" },
    { id: 6, name: "Hockey Stick", price: 5000, description: "Adidas Hockey Stick", images: "/Adidas Hockey Stick.jpg" },
  ];

  return (
    <div className="container mx-auto px-4 py-12 mt-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {productData.map((product) => (
          <div key={product.id} className="product-card border rounded-md shadow-lg overflow-hidden bg-white">
            <img src={product.images} alt={product.name} className="w-full h-72"/>
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2 text-center">{product.name}</h3>
              <p className="text-gray-600 mb-4 text-center">{product.description}</p>
              <div className="text-lg font-bold text-gray-800 mb-4 text-center">Rs {product.price}</div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;



