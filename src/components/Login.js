import React from "react";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextField }  from "@material-ui/core";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import Checkbox from '@material-ui/core/Checkbox';
import useForm from "./useForm";
import validate from "./validateLogin";


const styles = makeStyles({
	header: {
		font: "Monocca",
		color: "blue",
		fontWeight: "normal"
	},
	Icon: {
		fontSize: "60px",
		color: "#f6f7f8",
	},
	TextField: {
		margin: "5px",
		width: "80%",
	},
	Button1: {
		marginTop: "10px",
		marginBottom: "20px",
		width: "80%",
		backgroundColor: "#f6f7f8",
		color: "black",
		"&:hover": {
			backgroundColor: "#fff",
			color: "black",
		},
	},
	loginLink: {
		color: "gray", 
		textDecoration: "none",
		width: "100%",
		"&:hover": {
			color: "black",
			backgroundColor: "#fff",
		},
	},
	Label: {
		color: "blue",
	},
	Box: {
		padding: "0px",
		margin: "0px",
	},
	login: {
		fontSize: "100px",
		color: "gray",
		borderRadius: "120px",
		backgroundColor: "#f6f7f8",
		padding: "20px",
		marginBottom: "40px"

	},
	p: {
		fontSize: "0.8em",
		textAlign: "start",
		color: "red",
		margin: "0",
		padding: "0",
		
	},
});


export default function() {

const design = styles();
	
	const {
		handleChange,
		handleSubmit,
		values,
		errors,
	} = useForm(validate);
	return(
		<div>
			<form style={
					{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}
				}
						noValidate
						onSubmit = {handleSubmit}
			>
				<LockOpenOutlinedIcon
				className={design.login} 
				/>
				
				<TextField
					label="Email or username" 
					className={design.TextField} 
					variant="outlined"
					name="email" 
					margin="normal"
					type="email"
					value={values.email}
					fullWidth
					onChange={handleChange}
				/>
				{errors.email && <p className={design.p}>{errors.email}</p>}
				
				<TextField 
					label="Password" 
					className={design.TextField} 
					variant="outlined"
					name="password" 
					margin="normal"
					type="password"
					value={values.password}
					fullWidth
					onChange={handleChange}
				/>
				{errors.password && <p className={design.p}>{errors.password}</p>}
				
				<Box className={design.Box}>
				<Checkbox/>
				<label>Remember me</label>
				</Box>

				<Button 
				className={design.Button1} 
				variant="outlined" 
				margin="normal"
				fullWidth
				type="submit"
				>Login</Button>
			</form>
		</div>
		
	);
}