import logo from "./logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { Header } from "./components/header.jsx";
import { Login } from "./components/login.jsx";
import { Profile } from "./components/profile";

function App() {
	return (
		<div className="App">
			{/* <div>hey its working</div> */}
			{/* <Header></Header> */}
			{/* <Login></Login> */}
			<Switch>
				<Route exact path="/he">
					<h1>yes</h1>
				</Route>
				<Route exact path="/">
					<Header></Header>
				</Route>
				<Route exact path="/profile">
					<Profile></Profile>
				</Route>
				<Route exact path="/login">
					<Login></Login>
				</Route>
			</Switch>
		</div>
	);
}

export default App;
