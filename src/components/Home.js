import { Box, Typography } from "@material-ui/core";
import React from "react";
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import HomeIcon from '@material-ui/icons/Home';

const myStyles = makeStyles({
	homeIcon: {
		fontSize: "400px",
		background: "linear-gradient(65deg, #ffd 30%, #f6f7f8 60%)",
		color: "#f0f0f0",
		boxShadow: "0px 5px 8px 3px rgba(225, 250, 200, .3)",
	}
});
 


export default function() {
	const styles = myStyles();
	return (
		<Box>
			<HomeIcon
				className={styles.homeIcon}
			/>
		</Box>
		
	)
}