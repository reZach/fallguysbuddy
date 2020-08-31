import React, { Component } from "react";
import apple from "./fruit/apple.svg";
import bananas from "./fruit/bananas.svg";
import cherry from "./fruit/cherry.svg";
import grape from "./fruit/grape.svg";
import orange from "./fruit/orange.svg";
import watermelon from "./fruit/watermelon.svg";
import "./App.css";

class App extends Component {

  constructor(){
    super();

    this.state = {
      selectedFruit: "",
      grid: ["", "", "", "",
            "", "", "", "",
            "", "", "", "",
            "", "", "", ""]
    }

    // Bindings
    this.selectFruit = this.selectFruit.bind(this);
    this.updateCell = this.updateCell.bind(this);
    this.clear = this.clear.bind(this);
    this.renderGrid = this.renderGrid.bind(this);
  }

  selectFruit(event){
    const target = event.target;

    this.setState((state) => ({
      selectedFruit: target.src.replace(window.location.origin, "")
    }));
  }

  updateCell(event, index){
    if (this.state.selectedFruit === ""){
      return;
    }

    let newGrid = this.state.grid;
    newGrid[index] = this.state.selectedFruit;
    this.setState((state) => ({
      grid: newGrid
    }));
  }

  clear(event){
    this.setState((state) => ({
      grid: ["", "", "", "",
            "", "", "", "",
            "", "", "", "",
            "", "", "", ""]
    }))
  }

  renderGrid(index){
    if (this.state.grid[index].length > 0){
      return <img className="square fruit" src={this.state.grid[index]} onClick={(event) => this.updateCell(event, index)}></img>;
    } else {
      return <div className="square" onClick={(event) => this.updateCell(event, index)}></div>;
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.renderGrid(0)}
          {this.renderGrid(1)}
          {this.renderGrid(2)}
          {this.renderGrid(3)}
          <div></div>
          <img className={`fruit ${this.state.selectedFruit === grape ? "selected" : ""}`} alt="grape" src={grape} onClick={this.selectFruit} />
        </div>
        <div className="container">
          {this.renderGrid(4)}
          {this.renderGrid(5)}
          {this.renderGrid(6)}
          {this.renderGrid(7)}
          <div></div>
          <img className={`fruit ${this.state.selectedFruit === apple ? "selected" : ""}`} alt="apple" src={apple} onClick={this.selectFruit} />
        </div>
        <div className="container">
          {this.renderGrid(8)}
          {this.renderGrid(9)}
          {this.renderGrid(10)}
          {this.renderGrid(11)}
          <div></div>
          <img className={`fruit ${this.state.selectedFruit === orange ? "selected" : ""}`} alt="orange" src={orange} onClick={this.selectFruit} />
        </div>
        <div className="container">
          {this.renderGrid(12)}
          {this.renderGrid(13)}
          {this.renderGrid(14)}
          {this.renderGrid(15)}
          <div></div>
          <img className={`fruit ${this.state.selectedFruit === cherry ? "selected" : ""}`} alt="cherry" src={cherry} onClick={this.selectFruit} />
        </div>
        <div className="container-wide">
          <div>
              <div >
                  Grape icon made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
                  <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a><br />
                  Rest of the icons made by <a href="https://www.flaticon.com/authors/icongeek26"
                      title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/"
                      title="Flaticon">www.flaticon.com</a>
              </div>
          </div>
          <div></div>
          <img className={`fruit ${this.state.selectedFruit === watermelon ? "selected" : ""}`} alt="watermelon" src={watermelon} onClick={this.selectFruit} />
        </div>
        <div className="container-wide">
            <div className="clear" onClick={this.clear}>
                <h1>RESET</h1>
            </div>
            <div></div>
            <img className={`fruit ${this.state.selectedFruit === bananas ? "selected" : ""}`} alt="bananas" src={bananas} onClick={this.selectFruit} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;