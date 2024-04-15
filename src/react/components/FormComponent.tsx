import React, { useState } from 'react';

interface FormComponentProps {

	onSubmit: (data: { email: string; password: string }) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
	   e.preventDefault();
	   onSubmit({ email, password });
	};

	return (
	<form onSubmmit={handleSubmit}>
	   <label htmlFor="email">Email:</label>
	   <input
	      type="email"
	      id="email"
	      value={email}
	      onChange={(e) => setEmail(e.target.value)}
	   />
	   <label htmlFor="password">Password:</label>
	   <input
	      type="password"
	      id="password"
	      value={password}
	      onChange={(e) => setPassword(e.target.value)}
	      />
	      <button type="submit">Submit</button>
	</form>
	);
};

export default FormComponent;


