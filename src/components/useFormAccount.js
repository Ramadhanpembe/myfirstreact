import { useState } from "react";

const useForm = (validate) => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		comfirmPassword: "",
	});
	const [errors, setErrors] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
		comfirmPassword: "",
	});

	const handleChange = (event) => {
		const {name, value} = event.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// handling errors here
		setErrors(validate(values));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
	};
};

export default useForm;