import './App.css';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Banner from './components/Banner';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart'
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner /><Body /></>} />
          <Route path="/about" element={<Body />} />
          <Route path="/product" element={<Body />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;