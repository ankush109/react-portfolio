import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";
import { motion } from "framer-motion";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

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
				stiffness: 30,
				delay: 0.2,
			}}
		>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									{INFO.about.description}
								</div>
								<div className="main-edu">
									<div className="edu">
										<h1
											style={{
												color: "#14b8a6",
											}}
										>
											Education
										</h1>
										<p>
											<strong
												style={{
													fontSize: "20px",
													fontWeight: "900px",
												}}
											>
												Techno Main Salt Lake
											</strong>
											<br />
											Computer Science, B.Tech
											<br />
											Cgpa : 8.5
											<br />
											August 2021 - August 2025
										</p>
									</div>
									<div className="edu2">
										<p>
											<strong
												style={{
													fontSize: "20px",
													fontWeight: "900px",
												}}
											>
												Nava Nalanda High School
											</strong>
											<br />
											Science, 12th
											<br />
											Percentage: 85%
										</p>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="https://images.immediate.co.uk/production/volatile/sites/3/2023/03/Jujutsu-Kaisen-Cropped-dbe733b.jpg?resize=620,413"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>

						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
