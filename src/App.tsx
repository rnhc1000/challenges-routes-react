import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import BodyHome from "./routes/BodyHome";
import NotFound from "./routes/NotFound";
import Products from "././routes/Products";
import Computers from "./routes/Products/Computers";
import Electronics from "./routes/Products/Electronics";
import Books from "./routes/Products/Books";
import AboutUs from "./routes/AboutUs";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<BodyHome />} />
          </Route>
          <Route path='products/' element={<Products />}>
            <Route path='computers' element={<Computers />}></Route>
            <Route path='electronics' element={<Electronics />}></Route>
            <Route path='books' element={<Books />}></Route>
          </Route>
          <Route path="about" element={<AboutUs />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
