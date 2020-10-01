import { useState } from "react";

const useForm = (validate) => {
	const [values, setValues] = useState({
		title: "",
		author: "",
		year: "",
		isbn: "",
		edition: "",
		dAuthor: "",
		dContent: "",
		dBook: "",
	});
	const [errors, setErrors] = useState({
		title: "",
		author: "",
		year: "",
		isbn: "",
		edition: "",
		dAuthor: "",
		dContent: "",
		dBook: "",
	});
	
	const handleChange = (event) => {
		const {name, value} = event.target;
		setValues({
			...values,
			[name]:value,
		});
	};
	
	const handleSubmit = (event) => {
		event.preventDefault();
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
