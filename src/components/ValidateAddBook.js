export default function validate(values) {
	let errors = {};
	if(!values.title) {
		errors.title = "*The field is required";
	} 
	if(!values.author) {
		errors.author = "*The field is required";
	}
	if(!values.isbn) {
		errors.isbn = "*The field is required";
	}
	if(!values.edition) {
		errors.edition = "*The field is required";
	}
	if(!values.year) {
		errors.year = "*The field is required";
	}
	if(!values.dAuthor) {
		errors.dAuthor = "*The field is required";
	}
	if(!values.dContent) {
		errors.dContent = "*The field is required";
	}
	if(!values.dBook) {
		errors.dBook = "*The field is required";
	}

	return errors;
};