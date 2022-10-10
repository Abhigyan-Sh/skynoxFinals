import Home from './pages/Home.jsx'
import Component1 from './pages/Component1Pg.jsx'
import Component2 from './pages/Component2Pg.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/component1" element={<Component1/>}></Route>
        <Route path="/component2" element={<Component2/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
