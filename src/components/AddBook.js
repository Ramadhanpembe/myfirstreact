import React, { useState } from "react";
import Paper from '@material-ui/core/Paper';
import { TextField }  from "@material-ui/core";
import { Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useForm from "./useFormAddBook";
import validate from "./ValidateAddBook";

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
		marginTop: "10px",
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
	},
	p: {
		fontSize: "0.8em",
		textAlign: "start",
		color: "red",
		margin: "0",
		padding: "0",
	},
});

export default function () {
	const styles = myStyles();
	
	const {
		handleChange,
		handleSubmit,
		values,
		errors,
	} = useForm(validate);

	


	return (
		
		<Box 
			className={styles.container}
		>
			<form 
				 noValidate
				 onSubmit={handleSubmit}
			>
				<Box
					className={styles.brief}
				>
					<Box>
						<TextField
							styles={{padding: "0", margin: "0"}}
							// className={styles.briefFields}
							label="Title"
							placeholder="The title of the book"
							variant="outlined"
							fullWidth
							required="true"
							size="small"
							name="title"
							type="text"
							value={values.title}
							onChange={handleChange}
						/>
						{errors.title && <p className={styles.p}>{errors.title}</p>}
						<TextField
							styles={{padding: "0", margin: "0"}}
							className={styles.briefFields}
							label="Author"
							placeholder="The name of the Author"
							variant="outlined"
							fullWidth
							required="true"
							size="small"
							name="author"
							type="text"
							value={values.author}
							onChange={handleChange}
						/>
						{errors.author && <p className={styles.p}>{errors.author}</p>}
						<TextField
							styles={{padding: "0", margin: "0"}}
							className={styles.briefFields}
							label="ISBN"
							placeholder="The ISBN of the book"
							variant="outlined"
							fullWidth
							required="true"
							size="small"
							name="isbn"
							type="text"
							value={values.isbn}
							onChange={handleChange}
						/>
						{errors.isbn && <p className={styles.p}>{errors.isbn}</p>}
						<TextField
							styles={{padding: "0", margin: "0"}}
							className={styles.briefFields}
							label="Edition"
							placeholder="The nth edition of the book"
							variant="outlined"
							size="small"
							fullWidth
							required="true"
							name="edition"
							type="number"
							value={values.edition}
							onChange={handleChange}
						/>
						{errors.edition && <p className={styles.p}>{errors.edition}</p>}
						<TextField
							styles={{padding: "0", margin: "0"}}
							className={styles.briefFields}
							label="Year"
							placeholder="The year of publish"
							variant="outlined"
							size="small"
							fullWidth
							required="true"
							name="year"
							type="number"
							value={values.year}
							onChange={handleChange}
						/>
						{errors.year && <p className={styles.p}>{errors.year}</p>}
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
							styles={{padding: "0", margin: "0"}}
							className={styles.textarea}
							variant="outlined"
							multiline="true"
							rowsMin="5"
							label="About the Author"
							placeholder="Describe the author of the book"
							required="true"
							name="dAuthor"
							type="text"
							value={values.dAuthor}
							onChange={handleChange}
						/>
						{errors.dAuthor && <p className={styles.p}>{errors.dAuthor}</p>}

					</Box>
					<Box
						className={styles.aboutTheContent}
					>
						<TextField
							styles={{padding: "0", margin: "0"}}
							className={styles.textarea}
							variant="outlined"
							multiline="true"
							rowsMin="5"
							label="About the content"
							placeholder="Descride the content of the book"
							required="true"
							name="dContent"
							type="text"
							value={values.dContent}
							onChange={handleChange}
						/>
						{errors.dContent && <p className={styles.p}>{errors.dContent}</p>}

					</Box>
				</Box>
				<Box
					className={styles.descriptionSection}
				>
					<TextField
					styles={{padding: "0", margin: "0"}}
					className={styles.description}
					variant="outlined"
					multiline
					rowsMin="10"
					label="The book description"
					placeholder="Desribe the book clearly"
					required="true"
					name="dBook"
					type="text"
					value={values.dBook}
					onChange={handleChange}
				/>
				{errors.dBook && <p className={styles.p}>{errors.dBook}</p>}
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
						type="submit"
					>ADD
					</Button>
					
				</Box>
			</form>
		</Box>
	);
}