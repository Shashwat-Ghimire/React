import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Form() {
	const [form, setForm] = useState({
		name: '',
		address: '',
		phone: '',
		age: '',
		email: '',
		password: '',
		gender: '',
		hobbies: [],
		bio: ''
	});

	function handleChange(e) {
		const { name, value, type, checked } = e.target;
		if (type === 'checkbox') {
			setForm(prev => {
				if (checked) {
					return { ...prev, hobbies: [...prev.hobbies, value] };
				} else {
					return { ...prev, hobbies: prev.hobbies.filter(hobby => hobby !== value) };
				}
			});
		} else {
			setForm({ ...form, [name]: value });
		}
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
				<label>Email:</label>
				<input type="email" name="email" value={form.email} onChange={handleChange} />
			</div>
			<br />
			<div>
				<label>Password:</label>
				<input type="password" name="password" value={form.password} onChange={handleChange} />
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
			<div>
				<label>Gender:</label>
				<input type="radio" name="gender" value="male" checked={form.gender === 'male'} onChange={handleChange} /> Male
				<input type="radio" name="gender" value="female" checked={form.gender === 'female'} onChange={handleChange} /> Female
				<input type="radio" name="gender" value="other" checked={form.gender === 'other'} onChange={handleChange} /> Other
			</div>
			<br />
			<div>
				<label>Hobbies:</label>
				<input type="checkbox" name="hobbies" value="reading" checked={form.hobbies.includes('reading')} onChange={handleChange} /> Reading
				<input type="checkbox" name="hobbies" value="sports" checked={form.hobbies.includes('sports')} onChange={handleChange} /> Sports
				<input type="checkbox" name="hobbies" value="music" checked={form.hobbies.includes('music')} onChange={handleChange} /> Music
				<input type="checkbox" name="hobbies" value="travel" checked={form.hobbies.includes('travel')} onChange={handleChange} /> Travel
			</div>
			<br />
			<div>
				<label>Bio:</label>
				<textarea name="bio" value={form.bio} onChange={handleChange} rows={3} />
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


