import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import "./styles/skills.css";
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiMongodb,
	SiReact,
	SiNodedotjs,
	SiSolidity,
	SiPython,
	SiFirebase,
	SiVercel,
	SiNetlify,
	SiGooglefonts,
	SiBootstrap,
} from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
import { DiJava, DiHeroku } from "react-icons/di";
import { BsGithub } from "react-icons/bs";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faGithub,
	faStackOverflow,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useRef } from "react";
import { motion } from "framer-motion";
import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";

import INFO from "../data/user";
import a from "./ankush.jpeg";
import SEO from "../data/seo";

import { Typewriter } from "react-simple-typewriter";
import "./styles/homepage.css";
import Skills from "./Skills";
import Exerience from "./Exerience";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	const svgStyle = {
		hidden: { rotate: -180 },

		visible: {
			rotate: 0,

			transition: {
				duration: 1,
				delay: 1.4,
			},
		},
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			let scroll = Math.round(window.pageYOffset, 2);

			let newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [logoSize, oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 4000);
	}, []);

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
	};

	return (
		<motion.div
			initial={{
				x: "-100vw",
			}}
			animate={{
				x: 0,
			}}
			transition={{
				type: "spring",
				stiffness: 35,
				delay: 0.2,
			}}
			exit="exit"
		>
			<Helmet>
				<title>{INFO.main.title}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />
				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<motion.div
							variants={svgStyle}
							initial="hidden"
							animate="visible"
						>
							<Logo width={logoSize} link={false} />
						</motion.div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									<span
										style={{
											marginLeft: "10px",
											position: "relative",
											display: "inline-block",
											color: "#008080",
										}}
									>
										<Typewriter
											words={[
												"FULL STACK DEVELOPER",
												"MOBILE APP DEVELOPER",
												"PROBLEM SOLVER",
												"PASSIONATE LEARNER",
											]}
											loop
											cursor
											cursorStyle="_"
											typeSpeed={100}
											deleteSpeed={100}
											delaySpeed={1000}
										/>
									</span>
								</div>
								<div className="subtitle homepage-subtitle">
									{INFO.homepage.description}
								</div>
								<div className="res">
									<div className="homepage-socials">
										<a
											href={INFO.socials.github}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faGithub}
												className="homepage-social-icon"
											/>
										</a>

										<a
											href={INFO.socials.instagram}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faInstagram}
												className="homepage-social-icon"
											/>
										</a>
										<a
											href={`mailto:${INFO.main.email}`}
											target="_blank"
											rel="noreferrer"
										>
											<FontAwesomeIcon
												icon={faLinkedin}
												className="homepage-social-icon"
											/>
										</a>
									</div>
									<a href="https://drive.google.com/file/d/1sp-eQmaDzqW7zTZ3K9apiZ_HUXy55aaH/view?usp=sharing">
										<div
											style={{
												paddingTop: "20px",
											}}
										>
											<motion.button
												onClick={() => {}}
												variant="contained"
												color="primary"
												whileHover={{
													scale: 1.1,
													boxShadow:
														"0px 0px 8px rgb(255,255,255)",
												}}
												style={{
													marginRight: "20px",
													color: "white",
													fontWeight: "bold",
													border: "none",
													outline: "none",
													marginBottom: "20px",
													padding: "10px 20px",
													backgroundColor: "#14b8a6",
													borderRadius: "20px",
												}}
											>
												My Resume
											</motion.button>
										</div>
									</a>
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src={a}
											alt="about"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* <div className="homepage-projects">
							<AllProjects />
						</div> */}
						<Skills />
						<Exerience />
						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Homepage;
