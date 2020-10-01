import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Box, Button } from "@material-ui/core";
import { makeStyles, responsiveFontSizes } from "@material-ui/core/styles";
import image_01 from "./books_images/books_01.jpg";
import image_02 from "./books_images/books_02.jpg";
import image_3 from "./books_images/books_3.jpg";
import image_4 from "./books_images/books_4.jpg";
import image_5 from "./books_images/books_5.jpg";
import image_06 from "./books_images/books_06.jpg";
import image_07 from "./books_images/books_07.jpg";
import image_08 from "./books_images/books_08.jpg";
import image_09 from "./books_images/books_09.jpg";
import image_10 from "./books_images/books_10.jpg";
import image_11 from "./books_images/books_11.jpg";
import image_12 from "./books_images/books_12.jpg";
import image_13 from "./books_images/books_13.jpg";
import image_14 from "./books_images/books_14.jpg";
import image_15 from "./books_images/books_15.jpg";
import image_16 from "./books_images/books_16.jpg";
import image_17 from "./books_images/books_17.jpg";
import image_18 from "./books_images/books_18.jpg";
import image_19 from "./books_images/books_19.jpg";
import image_20 from "./books_images/books_20.jpg";
import image_21 from "./books_images/books_21.jpg";
import image_22 from "./books_images/books_22.jpg";
import image_23 from "./books_images/books_23.jpg";
import image_24 from "./books_images/books_24.jpg";
import image_25 from "./books_images/books_25.jpg";
import image_26 from "./books_images/books_26.jpg";
import Paper from '@material-ui/core/Paper';



const myStyles = makeStyles({
	main: {
		
	},
	newImports: {
		backgroundColor: "red",
		paddingTop: "50px",
	},
	mostlyRead: {
		backgroundColor: "red",
		marginTop: "50px",
		paddingTop: "50px",
	},
	slider: {
		backgroundColor: "blue",
		height: "380px",
		width: "100vw",

	},
	card: {
		height: "380px",
		width: "150px",
		
	},
	cardMedia: {
		height: "95%",
		width: "100%",
	},
	author: {
		padding: "0",
		margin: "0",
	}
}); 

export default function () {
	const styles = myStyles();
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 5,
		slidesToScroll: 4,
	};

	

	return (
		<Box className={styles.main}>
			<Box className={styles.newImports}>
				<Slider {...settings} className={styles.slider}>
					<Card elevation={3} className={styles.card}>
						<Box
							 className={styles.cardMedia}
							 style={{backgroundImage: `url("${image_01}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
						>
							
						</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
					<Card elevation={3} className={styles.card}>
					<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_02}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
							>

							</Box>
							<CardContent
							className={styles.author}
							>This is image</CardContent>
					</Card>
					<Card elevation={3} className={styles.card}>
					<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_3}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
							>

							</Box>
							<CardContent
							className={styles.author}
							>This is image</CardContent>
					</Card>
					<Card elevation={3} className={styles.card}>
							<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_4}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
							>

							</Box>
							<CardContent
							className={styles.author}
							>This is image</CardContent>
					</Card>
					<Card elevation={3} className={styles.card}>
					<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_5}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
							>

							</Box>
							<CardContent
							className={styles.author}
							>This is image</CardContent>
					</Card>
					<Card elevation={3} className={styles.card}>
					<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_06}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
							>

							</Box>
							<CardContent
							className={styles.author}
							>This is image</CardContent>
					</Card>
					<Card elevation={3} className={styles.card}>
					<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_07}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
							>

							</Box>
							<CardContent
							className={styles.author}
							>This is image</CardContent>
					</Card>
					<Card elevation={3} className={styles.card}>
					<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_08}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
							>

							</Box>
							<CardContent
							className={styles.author}
							>This is image</CardContent>
					</Card>
					<Card elevation={3} className={styles.card}>
					<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_09}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
							>

							</Box>
							<CardContent
							className={styles.author}
							>This is image</CardContent>
					</Card>
					<Card elevation={3} className={styles.card}>
					<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_10}")`, backgroundSize: "contain", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}
							>

							</Box>
							<CardContent
							className={styles.author}
							>This is image</CardContent>
					</Card>
					 
				</Slider>
					

			</Box>
			<Box className={styles.mostlyRead} >
				<Slider {...settings} className={styles.slider}>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_11}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_12}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_13}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_14}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_15}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_16}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_17}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_18}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_19}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				<Card elevation={3} className={styles.card}>
				<Box
								className={styles.cardMedia} 
								style={{backgroundImage: `url("${image_20}")`, backgroundSize: "cover"}}
							>

							</Box>
						<CardContent
							className={styles.author}
						>This is image</CardContent>
					</Card>
				</Slider>

			</Box>
			
		</Box>
		
	);
}
	
