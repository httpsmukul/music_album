import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useState, useEffect } from "react";
import "./header.css";
import logo1 from "./img/login.png";
import axios from "axios";
export const Login = () => {
	const [username, setusername] = useState("");
	const [pass, setpass] = useState("");

	const handel_login = () => {
		// console.log("hey");
		axios
			.post("http://localhost:3001/user", {
				UserName: username,
				pass: pass,
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
		console.log(username);
		console.log(pass);
	};
	return (
		<>
			<div className="login_main">
				<img src={logo1}></img>
				<h1 className="h1">LOGIN</h1>
			</div>
			<br />
			<div className="box">
				<input
					placeholder="Username"
					className="input"
					type="String"
					onChange={(e) => setusername(e.target.value)}
				></input>
				<br />
				<hr></hr>
				<input
					placeholder="Password"
					className="input"
					type="password"
					onChange={(e) => setpass(e.target.value)}
				></input>
				<br />

				<hr></hr>
				<br />
				<br />
				<Link to="./">
					<input
						placeholder="Password"
						className="input_submit"
						type="submit"
						onClick={handel_login}
					></input>
				</Link>
			</div>
		</>
	);
};
