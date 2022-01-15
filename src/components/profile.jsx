import React from "react";
import { useState, useEffect } from "react";
import "./header.css";
import logo1 from "./img/login.png";
import axios from "axios";

export const Profile = () => {
	const [data, setdata] = useState(0);
	const [arr, setarr] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:3001/profile")
			.then((res) => {
				setdata(res.data[res.data.length - 1].id);
			})
			.catch((res) => {
				console.log(res);
			});

		axios
			.get("http://localhost:3001/play_list")
			.then((res) => {
				console.log(res.data[data - 1]);
				setarr(res.data[0]);
				// setarr(res.data[data - 1]);
			})
			.catch((res) => {
				console.log(res);
			});
	}, []);
	console.log(arr);
	useEffect(() => {}, [data]);

	return (
		<>
			<div className="header_main">
				<div className="profile_loop">Home</div>
				<div className="profile_loop">Sort</div>
				<img src={logo1}></img>
			</div>
			<div className="profile_main">
				<img src={arr.img}></img>
				<h3>Album : {arr.album_name}</h3>
				<div>Artist : {arr.artist}</div>
				<div>
					{/* {arr.songs.map((e) => ( */}
					{/* <div>{arr.songs[0]}</div> */}
					{/* ))} */}
				</div>
				<div className="song_main">
					<h5>1 </h5>
					<h4> | Song Name : Guilty</h4>
				</div>
				<hr />
				<div className="song_main">
					<h5>2 </h5>
					<h4> | Song Name : 2 AM</h4>
				</div>
				<hr />

				<div className="song_main">
					<h5>3 </h5>
					<h4> | Song Name : So High</h4>
				</div>
				<hr />

				<div className="song_main">
					<h5>4 </h5>
					<h4> | Song Name : Royi Na</h4>
				</div>
				<hr />

				<div className="song_main">
					<h5>5 </h5>
					<h4> | Song Name : Baby Baby</h4>
				</div>
			</div>
		</>
	);
};
