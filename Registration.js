import React, { useState } from 'react'; 
function Registration() { 
const [form, setForm] = useState({ name: '', email: '', password: '' }); 
const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value }); 
const handleSubmit = e => { 
e.preventDefault(); 
alert(`Registered: ${form.name}, ${form.email}`); 
}; 
return ( 
<div> 
<h2>Registration Page</h2> 
<form onSubmit={handleSubmit}> 
<input name="name" placeholder="Name" onChange={handleChange} /> 
<input name="email" placeholder="Email" onChange={handleChange} /> 
<input name="password" type="password" placeholder="Password" 
onChange={handleChange} /> 
<button type="submit">Register</button> 
</form> 
</div> 
); 
} 
export default Registration;