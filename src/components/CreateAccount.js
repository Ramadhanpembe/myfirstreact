import React from "react";
import {Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField }  from "@material-ui/core";
import useForm from "./useFormAccount";
import validate from "./ValidateAccount";

// import validate from "./validateLogin";

let styles = makeStyles({
	form: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "flex-start",
		padding: "5px 0 0 100px",
	},
	TextField: {
		width: "80%",
		margin: "10px 5px 0 5px",
		padding: "0px",
	},
	Button: {
		width: "80%",
		margin: "25px 5px 5px 5px",
		padding: "5px",
		backgroundColor: "#f6f7f8",
		color: "gray",
		"&:hover": {
			color: "black",
			backgroundColor: "#fff",
		}
	},
	p: {
		fontSize: "0.8em",
		textAlign: "start",
		color: "red",
		margin: "0",
		padding: "0 0 0 5px",
	}
});

export default function CreateAccount() {
	let myStyles = styles();
	// const just = "";

	const {
		handleChange,
		handleSubmit,
		errors,
		values,
	}= useForm(validate);
	
	return (
		
		<form
			noValidate
			className={myStyles.form}
			onSubmit={handleSubmit}
		>
				<TextField
					style={{width: "80%", padding: "0", margin: "0 5px 0 5px"}}
					label="First name"
					variant="outlined"
					required="true"
					name="firstName"
					type="text"
					size="small"
					value={values.firstName}
					onChange={handleChange}
				/>
					{errors.firstName && <p className={myStyles.p}>{errors.firstName}</p>}
			
			<TextField
				className={myStyles.TextField}
				label="Last name"
				variant="outlined"
				required="true"
				name="lastName"
				type="text"
				size="small"
				value={values.lastName}
				onChange={handleChange}
				/>
				{errors.lastName && <p className={myStyles.p}>{errors.lastName}</p>}
			<TextField
				className={myStyles.TextField}
				label="Username"
				variant="outlined"
				required="true"
				name="username"
				type="text"
				size="small"
				value={values.username}
				onChange={handleChange}
				/>
				{errors.username && <p className={myStyles.p}>{errors.username}</p>}
			<TextField
				className={myStyles.TextField}
				label="Email address"
				variant="outlined"
				required="true"
				name="email"
				type="email"
				size="small"
				value={values.email}
				onChange={handleChange}
				/>
				{errors.email && <p className={myStyles.p}>{errors.email}</p>}
			<TextField
				className={myStyles.TextField}
				label="Password"
				variant="outlined"
				required="true"
				name="password"
				type="password"
				size="small"
				value={values.password}
				onChange={handleChange}
				/>
				{errors.password && <p className={myStyles.p}>{errors.password}</p>}
			<TextField
				className={myStyles.TextField}
				label="Comfirm password"
				variant="outlined"
				required="true"
				name="comfirmPassword"
				type="password"
				size="small"
				value={values.comfirmPassword}
				onChange={handleChange}
				/>
				{errors.comfirmPassword && <p className={myStyles.p}>{errors.comfirmPassword}</p>}
			<Button
				className={myStyles.Button}
				variant="outlined"
				type="submit"
				>Sign up</Button>
		</form>
	)
}
