import React, { useEffect, useState, CSSProperties } from "react";

import RingLoader from "react-spinners/HashLoader";
import Homepage from "./homepage.jsx";

const Home = () => {
	const [loading, setLoading] = useState(false);
	const override = {
		display: "block",
		margin: "20% auto",
		borderColor: "red",
	};
	useEffect(() => {
		// setLoading(true);
		// setTimeout(() => {
		// 	setLoading(false);
		// }, 3000);
	}, []);
	return (
		<div className="caller">
			{loading ? (
				<RingLoader
					color={"#008080"}
					loading={loading}
					cssOverride={override}
					size={80}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			) : (
				<Homepage />
			)}
		</div>
	);
};

export default Home;
