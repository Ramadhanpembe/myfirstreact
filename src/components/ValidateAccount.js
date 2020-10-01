export default function validate(values) {
	let errors = {};
		if(!values.firstName) {
			errors.firstName = "*The field is required";
		}
		if(!values.lastName) {
			errors.lastName = "*The field is required";
		} 
		if(!values.username) {
			errors.username = "*The field is required";
		} else if(values.username.length < 6) {
			errors.username = "The username is too small";
		}
		if(!values.email) {
			errors.email = "*The field is required";
		} else if(!/\S+@\S+\.\S+/.test(values.email)) {
			errors.email = "The email is invalid";
		}
		if(!values.password) {
			errors.password = "*The field is required";
		} else if(values.password.includes(" ")) {
			errors.password = "The empty space is not allowed";
		}
		if(!values.comfirmPassword) {
			errors.comfirmPassword = "*The field is required";
		} else if(!(values.comfirmPassword === values.password)) {
			errors.comfirmPassword = "Passwords do not match";
		} 
		return errors;
}

