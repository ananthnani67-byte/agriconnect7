import React, { useState } from 'react'; 
function Login() { 
const [form, setForm] = useState({ email: '', password: '' }); 
const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value }); 
const handleSubmit = e => { 
e.preventDefault(); 
alert(`Logged in: ${form.email}`); 
}; 
return ( 
<div> 
<h2>Login Page</h2> 
<form onSubmit={handleSubmit}> 
<input name="email" placeholder="Email" onChange={handleChange} /> 
<input name="password" type="password" placeholder="Password" 
onChange={handleChange} /> 
<button type="submit">Login</button> 
</form> 
</div> 
); 
} 
export default Login;