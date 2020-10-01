import React, { useState } from "react";
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PageviewIcon from '@material-ui/icons/Pageview';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles, } from "@material-ui/core/styles";


const myStyles = makeStyles((theme) => ({
	container: {
		display: "grid",
		gridTemplateColumns: "1fr",
		justifyContent: "center",
		backgroundColor: "#f6f7f8",
	},
	top: {
		display: "flex",
		justifyContent: "space-between",
		backgroundColor: "#d6d1d3",
		padding: "0px 0 0px 20px",
	},
	element: {
		display: "grid",
		gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
		gridRowGap: "5px",
		justifyContent: "center",
		padding: "0",
		margin: "0",
		alignItems: "center",
	},
	headings: {
		padding: "5px",
		margin: "0",
		fontWeight: "300",
		backgroundColor: "gray",
		color: "#ffd",
	},
	item: {
		padding: "0px",
		margin: "0",
	},
	actionIcons: {
		display: "flex",
		justifyContent: "space-between",
	},
	editIcon: {
		color: "blue",
	},
	deleteIcon: {
		color: "red",
	},
	viewIcon: {
		color: "green",
	},
	search: {
		display: "flex",
		alignItems: "center",
		margin: "10px 0 10px 0",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.black, 0.05),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.black, 0.05),
		},
	},
	addIcon: {
		color: "blue",
	},
	inputRoot: {
		color: "gray",
	},
	inputInput: {
		color: "#10100f",
		paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "60ch",
			"&:focus": {
				width: "80ch",
			},
		}
	},
}));

export default function() {
const styles = myStyles();
const [open, setOpen] = useState(false);

const handleOpen = () => {
		setOpen(true);
	};
const handleClose = () => {
		setOpen(false);
	};
	
	return (

		<Box>

<Dialog
			open={open}
			onClose={handleClose}
		>
			<DialogTitle>Delete the book permanently</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Do you really want to delete this book permanently?
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Yes</Button>
				<Button onClick={handleClose}>No</Button>
			</DialogActions>

		</Dialog>

		<Box className={styles.container}>
			<Box className={styles.top}>
				<Box className={styles.search}>
					<SearchIcon
						style={{padding: "0", margin: "0", color: "#ffd"}}
					/>
					<InputBase
						placeholder="search..."
						classes={{
							root: styles.inputRoot,
							input: styles.inputInput,
						}}
						style={{padding: "0", margin: "0"}}
					/>
				</Box>
				
				<Link to="/M/AddBook">
					<IconButton className={styles.addIcon}>
						<LibraryAddIcon/>
					</IconButton>
				</Link>
				
			</Box>
			<Box className={styles.element}>
				<h3 className={styles.headings}>TITLE</h3>
				<h3 className={styles.headings}>AUTHOR</h3>
				<h3 className={styles.headings}>YEAR</h3>
				<h3 className={styles.headings}>EDITION</h3>
				<h3 className={styles.headings}>ACTIONS</h3>
			</Box>
			
			<Box className={styles.element}>
				<Typography className={styles.item}>Rich Dad Poor Dad</Typography>
				<Typography className={styles.item}>Robert Kiyosaki</Typography>
				<Typography className={styles.item}>2010</Typography>
				<Typography className={styles.item}>third</Typography>
				<Box className={styles.actionIcons}>
					<Link to="/M/EditBook">
						<IconButton>
							<EditIcon className={styles.editIcon}/>
						</IconButton>
					</Link>
					<Link onClick={handleOpen}>
						<IconButton>
							<DeleteIcon className={styles.deleteIcon}/>
						</IconButton>
					</Link>
					<Link to="/M/View">
						<IconButton>
							<PageviewIcon className={styles.viewIcon}/>
						</IconButton>
					</Link>
					
				</Box>
			</Box>
			<Box className={styles.element}>
				<Typography className={styles.item}>The 7 Habits Of Highly Effective People </Typography>
				<Typography className={styles.item}>Stephen Covey</Typography>
				<Typography className={styles.item}>2003</Typography>
				<Typography className={styles.item}>first</Typography>
				<Box className={styles.actionIcons}>
					<Link to="/M/EditBook">
						<IconButton>
							<EditIcon className={styles.editIcon}/>
						</IconButton>
					</Link>
					<Link onClick={handleOpen}>
						<IconButton>
							<DeleteIcon className={styles.deleteIcon}/>
						</IconButton>
					</Link>
					<Link to="/M/View">
						<IconButton>
							<PageviewIcon className={styles.viewIcon}/>
						</IconButton>
					</Link>
					
				</Box>
			</Box>
			<Box className={styles.element}>
				<Typography className={styles.item}>Smart Thinking</Typography>
				<Typography className={styles.item}>Matthew Allen</Typography>
				<Typography className={styles.item}>2015</Typography>
				<Typography className={styles.item}>first</Typography>
				<Box className={styles.actionIcons}>
					<Link to="/M/EditBook">
						<IconButton>
							<EditIcon className={styles.editIcon}/>
						</IconButton>
					</Link>
					<Link onClick={handleOpen}>
						<IconButton>
							<DeleteIcon className={styles.deleteIcon}/>
						</IconButton>
					</Link>
					<Link to="/M/View">
						<IconButton>
							<PageviewIcon className={styles.viewIcon}/>
						</IconButton>
					</Link>
					
				</Box>
			</Box>
			<Box className={styles.element}>
				<Typography className={styles.item}>How To Win Friends & Influence People</Typography>
				<Typography className={styles.item}>Dale Carnegie</Typography>
				<Typography className={styles.item}>1976</Typography>
				<Typography className={styles.item}>tenth</Typography>
				<Box className={styles.actionIcons}>
					<Link to="/M/EditBook">
						<IconButton>
							<EditIcon className={styles.editIcon}/>
						</IconButton>
					</Link>
					<Link onClick={handleOpen}>
						<IconButton>
							<DeleteIcon className={styles.deleteIcon}/>
						</IconButton>
					</Link>
					<Link to="/M/View">
						<IconButton>
							<PageviewIcon className={styles.viewIcon}/>
						</IconButton>
					</Link>
					
						
				</Box>
			</Box>
			<Box className={styles.element}>
				<Typography className={styles.item}>The 5 Love Languages </Typography>
				<Typography className={styles.item}>Cary Chapman</Typography>
				<Typography className={styles.item}>2007</Typography>
				<Typography className={styles.item}>second</Typography>
				<Box className={styles.actionIcons}>
					<Link to="/M/EditBook">
						<IconButton>
							<EditIcon className={styles.editIcon}/>
						</IconButton>
					</Link>
					<Link onClick={handleOpen}>
						<IconButton>
							<DeleteIcon className={styles.deleteIcon}/>
						</IconButton>
					</Link>
					<Link to="/M/View">
						<IconButton>
							<PageviewIcon className={styles.viewIcon}/>
						</IconButton>
					</Link>
					
				</Box>
			</Box>
			<Box className={styles.element}>
				<Typography className={styles.item}>The Power Of Habit</Typography>
				<Typography className={styles.item}>Charles Duhigg</Typography>
				<Typography className={styles.item}>2010</Typography>
				<Typography className={styles.item}>second</Typography>
				<Box className={styles.actionIcons}>
					<Link to="/M/EditBook">
						<IconButton>
							<EditIcon className={styles.editIcon}/>
						</IconButton>
					</Link>
					<Link onClick={handleOpen}>
						<IconButton>
							<DeleteIcon className={styles.deleteIcon}/>
						</IconButton>
					</Link>
					<Link to="/M/View">
						<IconButton>
							<PageviewIcon className={styles.viewIcon}/>
						</IconButton>
					</Link>
					
				</Box>
			</Box>
		
		</Box>
		</Box>
		
	)
}