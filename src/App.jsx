import "./App.css";

import { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  categories = [
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];
  
  render() {
    return (
      <>
        <Navbar categories={this.categories} />
        <Routes>
          <Route exact path="/" element={
            <News key="headlines" country="in" pageSize={15} heading="Top Headlines"/>
          } />
          {this.categories.map(category => {
            return (
              <Route exact key={category} path={category} element={ 
                <News key={category} country="in" pageSize={15} category={category} heading={category}/> 
              }/>
            );
          })}
        </Routes>
      </>
    );
  }
}
