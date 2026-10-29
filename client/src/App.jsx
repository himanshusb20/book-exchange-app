<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ForgotPassword from "./Pages/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
=======
import {Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import BookDetails from './pages/BookDetails'

const App = ()=>{
  return(
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/books/:id" element={<BookDetails/>} />
    </Routes>
  )
>>>>>>> 9013be2b0070f981afd924df5b1ece8a24fcbbbb
}

export default App;