import React, { Component } from "react";
import "./App.css";
import CurrenciesList from "./CurrenciesList";

class App extends Component {
  state = {
    product: "gas",
    amount: ""
  };

  static defaultProps = {
    prices: { electricity: 3.1, gas: 2.1, oranges: 2.9 }
  };
  handleChange = e => {
    this.setState({
      product: e.target.value,
      amount: ""
    });
  };

  handleSuffixChange = () => {
    switch (this.state.product) {
      case "gas":
        return "mWh";
      case "electricity":
        return "kWh";
      case "oranges":
        return "pieces";
      default:
        return null;
    }
  };

  componentDidMount = () => {
    fetch("./data.json")
      .then(response => response.json())
      .then(response => (this.data = response))
      .catch(err => console.log("ther is an error: " + err));
  };

  changeInputVal = e => {
    this.currencies = this.data.currencies;
    this.setState({
      amount: e.target.value
    });
  };

  render() {
    return (
      <div>
        Choose product:
        <select onChange={this.handleChange} name="product" id="product">
          <option value="gas">gas</option>
          <option value="oranges">oranges</option>
          <option value="electricity">electricity</option>
        </select>
        <br />
        <input
          value={this.state.amount}
          type="number"
          min="0"
          onChange={this.changeInputVal}
        />
        {this.handleSuffixChange()}
        <CurrenciesList
          amount={this.state.amount}
          product={this.state.product}
          currencies={this.currencies}
          prices={this.props.prices}
        />
      </div>
    );
  }
}

export default App;
