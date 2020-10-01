import React from "react";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ShareIcon from '@material-ui/icons/Share';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Label } from "@material-ui/icons";
import { TextField } from "@material-ui/core";
import SendIcon from '@material-ui/icons/Send';

const myStyles = makeStyles({
	container: {
		display: "grid",
		gridTemplateColumns: "1fr",
		justifyContent: "center",
	},
	bookSection: {
		display: "grid",
		gridTemplateColumns: "1fr 3fr",
		justifyContent: "center",
	},
	coverSection: {
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: "#f6f7f8",
	},
	image: {
		border: "1px solid blue",
		width: "40%",
		height: "100%",
	},
	bookCredentials: {
		display: "grid",
		gridTemplateColumns: "1fr",
		justifyContent: "start",
	},
	descriptionSection: {
		display: "grid",
		gridTemplateColumns: "1fr",
		justifyContent: "center",
		marginLeft: "150px",
		// backgroundColor: "gray",

	},
	descriptionHeading: {
		padding: "0",
		margin: "0",
		// backgroundColor: "red",
	},
	description: {
		backgroundColor: "#fff",
		padding: "0",
		margin: "0",
		border: "1px solid gray",
		borderRadius: "5px",
	},
	commentBar: {
		display: "grid",
		gridTemplateColumns: "1fr 11fr 1fr",
		justifyContent: "space-around",
		alignItems: "center",
		margin: "50px 0 50px 0",
	},
	comment: {
		width: "100%",
	},
	messages: {
		display: "grid",
		gridTemplateColumns: "1fr",
		justifyContent: "center",
		borderRadius: "20px",
		border: "1px solid #a4a4a0",
		padding: "10px",
	},
	messageHeader: {
		display: "grid",
		gridTemplateColumns: "1fr 12fr",
		justifyContent: "start",
		alignItems: "center",
		
	},
	messageHeaderCredentials: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},
	messageBody: {
		display: "grid",
		gridTemplateColumns: "1fr 12fr",
		justifyContent: "start",
		alignItems: "center",
	},
	span: {
		margin: "0",
		padding: "0 15px 0 0",
		color: "gray",
	},
	messageContent: {
		textAlign: "start",
		color: "#0d0d0d"
	},
	about: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gridGap: "30px",
		justifyContent: "space-between",
		margin: "50px 0 0 0",
	}
	


});


export default function() {
	const styles = myStyles();
	return(
		<Box className={styles.container}>
			<Box className={styles.bookSection}>
				<Box className={styles.coverSection}>
					<Box className={styles.image}>

					</Box>
					<Box className={styles.bookCredentials}>
						<Typography>Name: </Typography>
						<Typography>Author: </Typography>
						<Typography>Year: </Typography>
						<Typography>ISBN: </Typography>
						<Typography>Edition: </Typography>
					</Box>
				</Box>
				<Box className={styles.descriptionSection}>
					<Typography className={styles.descriptionHeading}>
						Description
					</Typography>
					<textarea
					className={styles.description}
					variant="outlined"
					aria-readonly
					multiline="true"
					size="medium"
					rowMin={10}
					disabled
					
					/>
				</Box>
			</Box>
			<Box className={styles.about}>
				<textarea style={{}}
					className={styles.description}
					variant="outlined"
					aria-readonly
					multiline="true"
					size="medium"
					rowMin={10}
					disabled
					placeholder="Author's description"
				/>
				<textarea style={{}}
					className={styles.description}
					variant="outlined"
					aria-readonly
					multiline="true"
					size="medium"
					rowMin={10}
					disabled
					placeholder="Book's content"
				/>
			</Box>
			<Box className={styles.commentBar}>
				<Avatar>
					R
				</Avatar>
				<TextField
					className={styles.comment}
					multiline
					rowsMax={10}
					placeholder="Add comment here..."
					variant="standard"
				/>
				<IconButton>
					<SendIcon/>
				</IconButton>
			</Box>
			
			<Box className={styles.messages}>
				<Box className={styles.messageHeader}>
					<Avatar>
						AB
					</Avatar>
					<Box className={styles.messageHeaderCredentials}>
						<Box>
							<span className={styles.span}>Name</span>
							<span className={styles.span}>Date</span>
						</Box>
						<Box></Box>
					</Box>
				</Box>
				<Box className={styles.messageBody}>

				</Box>
				<Box className={styles.messageBody}>
					<Box></Box>
					<Box className={styles.messageContent}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique
						mauris massa, ac placerat enim scelerisque vulputate. Mauris in pulvinar 
						felis. Sed tincidunt sapien in libero mollis consectetur. Etiam aliquet, 
						ante eu condimentum placerat, sapien justo sodales ipsum, quis vehicula
						nulla nulla sit amet nisi. Orci varius natoque penatibus et magnis dis 
						parturient montes, nascetur ridiculus mus. Pellentesque tristique magna
						nec est placerat, nec suscipit dolor aliquet. Duis suscipit tincidun
					</Box>
				</Box>
			</Box>
			
		</Box>
	)
}