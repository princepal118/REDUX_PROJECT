import './App.css';
import Header from './containers/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
        {/* <Link> */}
          <Route path='/' element={<ProductListing/>} />
          <Route path='/product/: productId' element={<ProductDetail/>} />
          <Route>404 Not Found!</Route>
          </Routes>
          {/* </Link> */}

      </BrowserRouter>
    </div>
  );
}

export default App;
