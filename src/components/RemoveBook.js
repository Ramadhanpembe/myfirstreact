import React from "react";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { fade, makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';


const myStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "1fr",
	},
	mainSection: {
		display: "grid",
		gridTemplateColumns: "1fr 2fr",
		gridGap: "20px",
	},
	leftSection: {

	},
	rightSection: {

	},
	lowerSection: {

	},
	search: {
		border: "1px solid black",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.black, 0.15),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.black, 0.35),
		},
		marginLeft: 0,
		width: "150px",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(1),
			width: "auto",
		},
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1,1,1,0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));


export default function () {
	const styles = myStyles();
	return (
		<Box
			className={styles.container}
		>
			<Box
				className={styles.mainSection}
			>
				<Box
					className={styles.leftSection}
				>
						<Box className={styles.search}>
							 <InputBase
								placeholder="search..."
								classes = {{
									root: styles.inputRoot,
									input: styles.inputInput,
								}}
							 />
						</Box>
				</Box>
				<Box
					className={styles.rightSection}
				>

				</Box>

			</Box>
			<Box
				className={styles.lowerSection}
			>

			</Box>

		</Box>
	);
}