import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar'; 
import Registration from './pages/Registration'; 
import Login from './pages/Login'; 
import Contact from './pages/Contact'; 
import About from './pages/About'; 
function App() { 
return ( 
<Router> 
<Navbar /> 
<Routes> 
<Route path="/register" element={<Registration />} /> 
<Route path="/login" element={<Login />} /> 
<Route path="/contact" element={<Contact />} /> 
<Route path="/about" element={<About />} /> 
</Routes> 
</Router> 
); 
} 
export default App;