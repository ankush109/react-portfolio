import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-credits">
					<div className="footer-credits-text">
						Made with &nbsp;
						<span className="footer-credits-heart">❤</span> by&nbsp;
						Ankush Banerjee
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
