import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Image from "material-ui-image";
import Paper from '@material-ui/core/Paper';
import { responsiveFontSizes } from "@material-ui/core/styles";
import Raaa from "./LoginRoutes";
import { useHistory } from "react-router-dom";
import image from "../new-logo.jpg";
const styles = makeStyles({
	// Styles go here
	mainBody: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		paddingTop: "10px",
		paddingBottom: "10px",
		margin: "40px",
		// border: "2px solid red",
	},
	column1: {
		// border: "3px solid black",
		height: "100%",
		width: "500px",
		position: "relative",
	},
	column2: {
		// border: "3px solid black",
		height: "500px",
		width: "600px",
		position: "relative"
	},
	butttons: {
		position: "absolute",
		// border: "2px solid black",
		bottom: "10px",
		width: "100%",
		padding: "0px",
		margin: "0px",
	},
	list: {
		listStyle: "none",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: "0px",
		margin: "0px",
	},
	li: {
		padding: "5px",
	},
	logo: {
		position: "absolute",
		top: "0px",
		bottom: "0px",
	},
	Link: {
		textDecoration: "none",
		color: "gray",
		"&:hover" : {
			color: "black",
		}
	}
}) ;

export default function() {
	const myStyles = styles();
	const history = useHistory();
	useEffect(() => {
		history.push("/L/Login");
	},[]);
	return(
		<div>
			<Paper elevation={0} className={myStyles.mainBody}>
				<div className={myStyles.column1}>
					<Image className={myStyles.logo} src={image} height="500px"/> 
				</div>
				<div className={myStyles.column2}>
					<Raaa/>
					<div className={myStyles.butttons}>
						<ul className={myStyles.list}>
							<li className={myStyles.li}><Link className={myStyles.Link} to="/L/Login">Login</Link></li>
							<li className={myStyles.li}><Link className={myStyles.Link} to="/L/CreateAccount">Create account</Link></li>
							<li className={myStyles.li}><Link className={myStyles.Link} to="/L/ForgotPassword">Forgot password</Link></li>
						</ul>
					</div>
				</div>
		</Paper>
		</div>
	)
}
	
	

	