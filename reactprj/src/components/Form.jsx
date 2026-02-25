import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Form() {
	const [form, setForm] = useState({
		name: '',
		address: '',
		phone: '',
		age: ''
	});

	function handleChange(e) {
		setForm({ ...form, [e.target.name]: e.target.value });
	}

	function handleSubmit(e) {
		e.preventDefault();
		alert('Form submitted!');
	}

	return (
		<>
		<div style={{
			backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/004/141/314/original/blue-sky-wallpaper-clear-air-heavenly-background-illustration-vector.jpg)',
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			height: '75vh',
			width: '65vw',
			
		}}>
			<form onSubmit={handleSubmit} style={{
				background: 'rgba(255,255,255,0.8)',
				padding: '2rem',
				borderRadius: '10px',
				boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
			}}>
			<div>
				<label>Name:</label>
				<input name="name" value={form.name} onChange={handleChange} />
			</div>
            <br />
			<div>
				<label>Address:</label>
				<input name="address" value={form.address} onChange={handleChange} />
			</div>
            <br />
			<div>
				<label>Phone:</label>
				<input name="phone" value={form.phone} onChange={handleChange} />
			</div>
            <br />
			<div>
				<label>Age Range:</label>
				<select name="age" value={form.age} onChange={handleChange}>
					<option value="">Select</option>
					<option value="under18">Under 18</option>
					<option value="18-30">18-30</option>
					<option value="31-50">31-50</option>
					<option value="51plus">51+</option>
				</select>
			</div>
            <br />
			<button type="submit">Submit</button>
		</form>
		<Link to="/">
			<br />
			<button>Go to Home</button>
		</Link>
	</div>
	</>
	);
}

export default Form;


