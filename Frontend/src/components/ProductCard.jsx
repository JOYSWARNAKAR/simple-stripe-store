import axios from "axios";


function ProductCard({ product }) {

    const handleCheckout = async () => {
        try {
            const response = await axios.post(
                "http://localhost:5000/create-checkout-session",
                {
                    product,
                });
                window.location.href = response.data.url
            } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-80 transition hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-xl text-center font-bold text-gray-800">{product.name}</h2>
      <p className="text-lg font-semibold text-center text-green-600">${product.price.toFixed(2)}</p>   
      <button onClick={handleCheckout}
       className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer" 
      >
        Buy Now
      </button>
    </div>
  )
}

export default ProductCard