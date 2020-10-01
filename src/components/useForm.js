import { useState } from "react";

const useForm = (validate) => {
	const [values, setValues] = useState({email: "", password: ""});
	const [errors, setErrors] = useState({email: "", password: ""});

	const handleChange = (event) => {
		const {name, value} = event.target;
		
		setValues({
				...values,
				[name]:value
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// handling errors
		setErrors(validate(values));
		// callback();
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};

export default useForm;