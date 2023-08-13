import React from "react";
import "./styles/exp.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Experience() {
	return (
		<div className="container">
			<div className="f">
				<h1>Experience</h1>
			</div>
			<div className="card">
				<div>
					<div className="header-container">
						<h2 className="inline-heading">
							Software Developer Intern @
						</h2>
						<h2 className="inline-heading2">
							Anicca Data Services
						</h2>
					</div>
					<div className="point">
						<div>
							<ArrowForwardIosIcon
								style={{
									fontSize: "15px",
									paddingRight: "10px",
								}}
							/>
						</div>
						<div>
							Worked closely with the design team and Backend Team
							to develop the web application using Angular 11 and
							TypeScript.
						</div>
					</div>
					<div className="point">
						<div>
							<ArrowForwardIosIcon
								style={{
									fontSize: "15px",
									paddingRight: "10px",
								}}
							/>
						</div>
						<div>
							Worked on Resturant Management Application for
							McDonald’s using Angular
						</div>
					</div>
					<div className="point">
						<div>
							<ArrowForwardIosIcon
								style={{
									fontSize: "15px",
									paddingRight: "10px",
								}}
							/>
						</div>
						<div>
							Worked on improving the Product UI and UX using
							Angular Material.
						</div>
					</div>
					<div className="point">
						<div>
							<ArrowForwardIosIcon
								style={{
									fontSize: "15px",
									paddingRight: "10px",
								}}
							/>
						</div>
						<div>
							Learned about the Agile Methodology and worked on
							the Scrum Board to manage the tasks and the project.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
