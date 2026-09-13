import { Route, Routes } from 'react-router-dom';
import './App.css'
import ProductCard from './components/ProductCard';
import Success from './pages/Success';
import Cancel from './pages/Cancel';

function App() {

  const products = [
    {
      name: "T-shirt",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
      price: 20,
    },
    {
      name: "Hoodie",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80",
      price: 40,
    },
    {
      name: "Cap",
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=500&q=80",
      price: 10,
    }
  ]

  return (
    <Routes>
      <Route path="/" element= {
        <div className="min-h-screen bg-gray-200 flex flex-col items-center py-10]">
          <h1 className="text-4xl font-bold text-gray-800 mb-10">Stripe Store</h1>
          <div className="grid grid-cols-3 gap-8">
              {
                products.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))
              }
          </div>
        </div>
      }  ></Route>
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />

 
    </Routes>
  )
}

export default App
