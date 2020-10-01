// import { makeStyles, Paper } from "@material-ui/core";
import React, { useEffect} from "react";
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Routes from "./MainRoutes";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import LockOpenIcon from '@material-ui/icons/LockOpen';
import image from "../new-logo.jpg";



const drawerWidth = 240;


const useStyles = makeStyles((theme) => ({
	root: {
	  display: 'flex',
	  backgroundColor: "#f6f7f8",
	},
	appBar: {
	  zIndex: theme.zIndex.drawer + 1,
	  transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
		
	  }),
	},
	appBarShift: {
	  marginLeft: drawerWidth,
	  width: `calc(100% - ${drawerWidth}px)`,
	  transition: theme.transitions.create(['width', 'margin'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
		
	  }),
	},
	menuButton: {
	  marginRight: 36,
	},
	hide: {
	  display: 'none',
	},
	drawer: {
	  width: drawerWidth,
	  flexShrink: 0,
	  whiteSpace: 'nowrap',
	},
	drawerOpen: {
	  width: drawerWidth,
	  transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	  }),
	  backgroundColor: "#f6f7f8",
	},
	drawerClose: {
	  transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	  }),
	  backgroundColor: "#f6f7f8",
	  overflowX: 'hidden',
	  width: theme.spacing(7) + 1,
	  [theme.breakpoints.up('sm')]: {
		width: theme.spacing(9) + 1,
	  },
	},
	toolbar: {
	  display: 'flex',
	  alignItems: 'center',
	  justifyContent: 'space-between',
	  padding: theme.spacing(0, 1),
	  // necessary for content to be below app bar
	  ...theme.mixins.toolbar,
	},
	content: {
	  flexGrow: 1,
	  padding: theme.spacing(3),
	
	},
	nested: {
		paddingLeft: theme.spacing(4),
	},
	account: {
		display: "flex",
		alignItems: "center",
		justifyContent: "flexEnd",
		paddingRight: "5px",
		// backgroundColor: "red",
	},
	accountProfile: {
		display:"flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "5px 10px 5px 5px",
		textAlign: "center",
		// backgroundColor: "red",
	},
	menu: {
		paddingTop: "20px",
		color: "blue",
	},
	brand: {
		marginLeft: "150px",
		marginRight: "150px",
		textAlign: "center",
	},
	drawerBackground: {
		backgroundImage: `url(${image})`,
		backgroundSize: "contain",
	},
	link: {
		textDecoration: "none",
		color: "black",
	}
  }));

  export default function() {
	const classes = useStyles();
	const history = useHistory();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const [down, setUp] = React.useState(true);
  	const handleDrawerOpen = () => {
	  setOpen(true);
	};
  
	const handleDrawerClose = () => {
	  setOpen(false);
	};
	const handleClick = () => {
		setUp(!down);
	  };
	  useEffect(() => {
		  history.push("/M/Home");
	  }, []);
  
	return (
	  <div className={classes.root}>
		<CssBaseline />
		<AppBar
		style={{backgroundColor: "#f6f7f8", color: "black"}}
		  MuiAppB
		  position="fixed"
		  className={clsx(classes.appBar, {
			[classes.appBarShift]: open,
		  })}
		>
		  <Toolbar className={classes.toolbar}>
			<IconButton
			  color="inherit"
			  aria-label="open drawer"
			  onClick={handleDrawerOpen}
			  edge="start"
			  className={clsx(classes.menuButton, {
				[classes.hide]: open,
			  })}
			>
			  <MenuIcon style={{marginLeft: "8px"}} />
			</IconButton>
			<Typography variant="h3" noWrap
			className={clsx({
				[classes.brand]: open
			})}
			>
			  SYSTEM BRAND NAME
			</Typography>
			<Box className={classes.account}>
				
				<PopupState variant="popover" popuId="menu" className={classes.menu}>
			  		{(PopupState) => (
						  <>
						<Box
							 className={classes.accountProfile} 
							 {...bindTrigger(PopupState)
						}>
							<AccountCircleIcon
							 style={{
								padding: "0px",
								margin: "0px",
								width: "30px",
								height: "30px",
								  }}/>
							<h6 
							style={{
								padding: "0px",
								margin: "0px",
								textAlign: "center"
								  }}>
								Account name
							</h6>
						</Box>
						  <Menu {...bindMenu(PopupState)}>
							  	<Link 
							  		className={classes.link}
							  		to="/M/MyAccount">
							  		<MenuItem onClick={PopupState.close}>My account</MenuItem>
							  	</Link>
								<Link
								  	className={classes.link} 
								  	to="/L/Login">
							<MenuItem onClick={PopupState.close}>Sign out</MenuItem>
							  	</Link>
						  
						  
						  </Menu>
						  </>
					  )}

					

				</PopupState>


				
			</Box>
		  </Toolbar>
		</AppBar>
		<Drawer
		  variant="permanent"
		  className={clsx(classes.drawer, {
			[classes.drawerOpen]: open,
			[classes.drawerClose]: !open,
		  })}
		  classes={{
			paper: clsx({
			  [classes.drawerOpen]: open,
			  [classes.drawerClose]: !open,
			}),
		  }}
		>
		  <div className={clsx(classes.toolbar, {
			  [classes.drawerBackground]: open
		  })}>
			<IconButton onClick={handleDrawerClose}>
			  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <LockOpenIcon 
			  style={{color: "#fff", paddingLeft: "0", marginLeft: "0"}} />}
			</IconButton>
			
		  </div>
		  
		<List style={{backgroundColor: "none", paddingTop: "5px"}}>
			<Link
				className={classes.link}
			 	to="/M/Home">
				<ListItem button >
					<ListItemIcon>
              			<HomeIcon/>
            		</ListItemIcon>
            		<ListItemText primary="Home" />
				</ListItem>
			</Link>
			<Link
				className={classes.link}
			 	to="/M/Books">
				<ListItem button >
					<ListItemIcon>
              			<LibraryBooksIcon/>
            		</ListItemIcon>
            		<ListItemText primary="Books" />
				</ListItem>
			</Link>
		<Link
			className={classes.link}
		>
		<ListItem button onClick={handleClick}>
				<ListItemIcon>
					  <AccountCircleIcon/>
				</ListItemIcon>
				<ListItemText primary="My Account"/>
			{down ? <ExpandMore/> : <ExpandLess/>}
		 	</ListItem>
		</Link>
		 	
			<Collapse in={!down} timeout="auto" unmountOnExit>
			  	<List>
					  <Link
					  		className={classes.link}
					   		to="/M/MyAccount">
					  	<ListItem button className={classes.nested}>
							<ListItemIcon>
								<PersonOutlineIcon />
							</ListItemIcon>
							<ListItemText primary="Profile" />
         				</ListItem>
					  </Link>
					  <Link 
					  		className={classes.link}
					  		to="/L/Login">
					  <ListItem button className={classes.nested}>
							<ListItemIcon>
								<ExitToAppIcon />
							</ListItemIcon>
							<ListItemText primary="Sign Out" />
        				</ListItem>
					  </Link>
        		</List>
			</Collapse>
		</List>
		</Drawer>
		<main className={classes.content}>
		  <div className={classes.toolbar} />
		  <Routes/>
		</main>
	  </div>
	);
  }
  
  