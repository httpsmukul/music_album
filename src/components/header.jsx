import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import "./header.css";
import logo1 from "./img/login.png";
export const Header = () => {
	const [login_bar, setlogin_bar] = useState(false);
	const [filter, setfilter] = useState(false);
	const [flag, setflag] = useState(false);
	const [search, setsearch] = useState(null);
	const [search_res, setsearch_res] = useState("");
	const [song, setsongs] = useState([]);
	const [show, setshow] = useState(true);
	//
	//
	const handel_login_bar = () => {
		console.log("handel_lgin _bar ");
		setlogin_bar(!login_bar);
		setfilter(false);
	};
	const handel_filter = () => {
		setlogin_bar(false);
		setfilter(!filter);
		console.log("filter");
	};
	const handel_search = () => {
		// console.log("give me command");
		setshow(false);
		// setflag(true);
		// console.log(search);

		setsearch_res(song.filter((song) => song.album_name == search));
		console.log(search_res);
		// const result = words.filter(word => word.length > 6);
	};
	useEffect(() => {
		console.log("Songs");
		axios
			.get("http://localhost:3001/play_list")
			.then(function (response) {
				// handle success

				console.log(response.data);
				setsongs(response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	}, []);
	const song_list = (e) => {
		console.log(e.target.id);
		axios
			.post("http://localhost:3001/profile", {
				id: e.target.id,
			})
			.then((res) => {
				console.log(res);
			});
	};
	return (
		<>
			<div className="header_main">
				<div>
					<input
						placeholder="Search"
						type="string"
						className="search"
						onChange={(e) => setsearch(e.target.value)}
					></input>
					<button className="sort" onClick={handel_search}>
						search
					</button>
				</div>

				<h1 className=""> MUSIC ALBUMS</h1>
				<img className="img_login" src={logo1} onClick={handel_login_bar}></img>
			</div>
			{login_bar && (
				<div className="login_bar">
					<Link to="./login">
						<div>Login</div>
					</Link>
					<hr />
					<div>Signup</div>
					<hr />
					<div>Profile</div>
					<hr />
					<div>More</div>
				</div>
			)}
			{filter && (
				<div className="filter">
					<div>ALL</div>
					<hr />
					<div>2000 - 2005</div>
					<hr />
					<div>2006 - 2010</div>
					<hr />
					<div>2011 - 2015</div>
					<hr />
					<div>2016 - 2022</div>
				</div>
			)}
			<br />
			{show &&
				song.map((e) => (
					<div id={e.id} className="albums" onClick={song_list}>
						<Link to="./profile">
							<img src={e.img}></img>
						</Link>

						<div>Album : {e.album_name}</div>
						<div>Artist : {e.artist}</div>
						<div>songs list : {e.songs.length}</div>
					</div>
				))}
			{!show &&
				search_res.map((e) => (
					<div id={e.id} className="albums">
						<img src={e.img}></img>
						<div>Album : {e.album_name}</div>
						<div>Artist : {e.artist}</div>
						<div>songs list : {e.songs.length}</div>
					</div>
				))}
		</>
	);
};
