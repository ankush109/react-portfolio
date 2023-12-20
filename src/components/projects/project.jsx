import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import GitHubIcon from '@mui/icons-material/GitHub';
import "./styles/project.css";

const Project = (props) => {
	const { logo, title, description, linkText, gitlink ,livelink} = props;

	return (
		<React.Fragment>
			<div className="project">
				<div >
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link ">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<Link to={livelink}>
							<div  className="project-link-text">{linkText}</div>
							</Link>
							<Link className="margin" to={gitlink}>
						<GitHubIcon/></Link>
						</div>
					   
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
