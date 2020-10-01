import React from "react";
import Paper from '@material-ui/core/Paper';
import { TextField }  from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const myStyles = makeStyles({

	container: {
		display: "grid",
		gridTemplateColumns: "1fr",
	},
	brief: {
		display: "grid",
		gridTemplateColumns: "3fr 1fr",
		gridGap: "10px",
		// border: "2px solid black",
	},
	briefFields: {
		marginBottom: "10px",
	},
	coverSection: {
		display: "flex",
		flexDirection: "column",
		// justifyContent: "center",
		alignItems: "center",
	},
	cover: {
		border: "1px solid black",
		width: "250px",
		height: "90%",
		marginBottom: "5px",
	},
	h4: {
		// padding: "0",
		// margin: "0",
		color: "gray",
		textAlign: "center",
		marginTop: "50%",
	},
	about: {
		marginTop: "30px",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gridGap: "10px",
	},
	textarea: {
		width: "100%",
	},
	descriptionSection: {
		marginTop: "20px",
	},
	description: {
		width: "100%",
	},
	buttonSection: {
		marginTop: "20px",
		display: "grid",
		gridTemplateColumns: "repeat(2, 1fr)",
		gridGap: "10px",
	}


});

export default function () {
	const styles = myStyles();
	return (
		
		<Box 
			className={styles.container}
		>
			<Box
				className={styles.brief}
			>
				<Box>
					<TextField
						className={styles.briefFields}
						label="The title of the book"
						variant="outlined"
						fullWidth
						size="small"
					/>
					<TextField
						className={styles.briefFields}
						label="The name of the Author"
						variant="outlined"
						fullWidth
						size="small"
					/>
					<TextField
						className={styles.briefFields}
						label="The ISBN of the book"
						variant="outlined"
						fullWidth
						size="small"
						color="secondary"
					/>
					<TextField
						className={styles.briefFields}
						label="The nth of edition"
						variant="outlined"
						fullWidth
					/>
					<TextField
						className={styles.briefFields}
						label="The year of publish"
						variant="outlined"
						fullWidth
					/>
				</Box>
				<Box
					className={styles.coverSection}
				>
					<Paper
					className={styles.cover}
					elevation={3}
					>
						<p className={styles.h4}>Place the cover of the book here</p>
					</Paper>
					<input type="file"/>
				</Box>
			</Box>

			<Box
				className={styles.about}
			>
				<Box
					className={styles.aboutTheAuthor}
				>
					<TextField
						className={styles.textarea}
						variant="outlined"
						multiline="true"
						rowsMin="5"
						label="Describe the Author of the book"
					/>

				</Box>
				<Box
					className={styles.aboutTheContent}
				>
					<TextField
						className={styles.textarea}
						variant="outlined"
						multiline="true"
						rowsMin="5"
						label="Describe the content of the book in brief"
					/>

				</Box>
			</Box>
			<Box
				className={styles.descriptionSection}
			>
				<TextField
				className={styles.description}
				variant="outlined"
				multiline
				rowsMin="10"
				label="Describe the book with not less than 3000 words"
				
				/>
			</Box>
			<Box
				className={styles.buttonSection}
			>
				<Button
					variant="outlined"
					fullWidth
				>CANCEL
				</Button>
				<Button
					variant="outlined"
					fullWidth
				>ADD
				</Button>
				
			</Box>
		</Box>
	);
}