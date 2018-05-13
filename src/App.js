import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import History from "./History";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">
                        Roads ? Where we're going we don't need... roads.
                    </h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to
                    reload.
                </p>
                <NavLink
                    className="navbar navbar1 btn btn-secondary"
                    exact
                    to="/"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    Accueil
                </NavLink>
                <NavLink
                    className="navbar btn btn-secondary"
                    to="/notre-histoire"
                    activeStyle={{
                        color: "red"
                    }}
                >
                    Historique
                </NavLink>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/notre-histoire" component={History} />
                </Switch>
            </div>
        );
    }
}

export default App;
