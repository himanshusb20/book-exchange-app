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
}

export default App
