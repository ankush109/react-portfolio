import React from "react";
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
import "./styles/skills.css";

const loadSkills = [
	{
		icon: <SiHtml5 color="" style={{ fontSize: "50px" }} />,
		tech: "HTML 5",
	},
	{
		icon: <SiCss3 color="" style={{ fontSize: "50px" }} />,
		tech: "CSS",
	},
	{
		icon: <SiJavascript color="" style={{ fontSize: "50px" }} />,
		tech: "JAVASCRIPT",
	},
	{
		icon: <SiReact style={{ fontSize: "50px" }} />,
		tech: "REACT",
	},
	{
		icon: <SiMongodb style={{ fontSize: "50px" }} />,
		tech: "MONGODB",
	},
	{
		icon: <SiNodedotjs style={{ fontSize: "50px" }} />,
		tech: "NODE JS",
	},
	{
		icon: <SiSolidity style={{ fontSize: "50px" }} />,
		tech: "SOLIDITY",
	},

	{
		icon: <DiJava style={{ fontSize: "50px" }} />,
		tech: "JAVA",
	},

	{
		icon: <SiPython style={{ fontSize: "50px" }} />,
		tech: "PYTHON",
	},
	{
		icon: <SiFirebase style={{ fontSize: "50px" }} />,
		tech: "FIREBASE",
	},
	{
		icon: <BsGithub style={{ fontSize: "50px" }} />,
		tech: "GIT HUB",
	},
	{
		icon: <SiVercel style={{ fontSize: "50px" }} />,
		tech: "VERCEL",
	},
];
function Skills() {
	return (
		<div className="op">
			<div className="head">
				<h1>Skills</h1>
			</div>
			<div className="skills">
				{loadSkills.map((obj, id) => (
					<div className="item space-y-2 " key={id}>
						<p className="text-primary w-full flex flex-row justify-center ">
							{obj.icon}
						</p>
						<p>{obj.tech}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
