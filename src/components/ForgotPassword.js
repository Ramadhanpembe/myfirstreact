import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import { TextField }  from "@material-ui/core";
import { Label } from "@material-ui/icons";

import { Link } from "react-router-dom";

const styles = makeStyles({
	// Styles go here
	div: {
		marginTop: "30%",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	TextField: {
		width: "80%",
		
	},
	label: {
		marginTop: "10px",
		marginBottom: "10px",
		width: "80%",
	}
	
}) ;

export default function() {
	const myStyles = styles();
	return(
		<div className={myStyles.div}>
		<TextField
		className={myStyles.TextField}
		label="Enter the email"
		variant="outlined"
		/>
		<label className={myStyles.label}>We have sent you the the verification code to your emanil, 
			please re-enter the code in the field below</label>
			<TextField
		className={myStyles.TextField}
		label="Enter verification code"
		variant="outlined"
		/>
		</div>
		
		
	)
}
	
	

	