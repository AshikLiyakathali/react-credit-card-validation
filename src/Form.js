import React, { Component } from "react";
import { FormErrors } from "./FormErrors";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardholderName: "",
      cardNumber: "",
      CVV: "",
      formErrors: { cardholderName: "", cardNumber: "", CVV: "" },
      cardholderNameValid: false,
      cardNumberValid: false,
      CVVValid: false,
      formValid: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let cardholderNameValid = this.state.cardholderNameValid;
    let cardNumberValid = this.state.cardNumberValid;
    let CVVValid = this.state.CVVValid;

    switch (fieldName) {
      case "cardholderName":
        cardholderNameValid = value.match(/^([\w.%+-]+)$/i);
        fieldValidationErrors.cardholderName = cardholderNameValid
          ? ""
          : " is invalid";
        break;
      case "cardNumber":
        cardNumberValid = value.length == 16;
        fieldValidationErrors.cardNumber = cardNumberValid
          ? ""
          : " should be 16 digits";
        break;
      case "CVV":
        CVVValid = value.length == 3;
        fieldValidationErrors.CVV = CVVValid ? "" : " should be 3 digits";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        cardholderNameValid: cardholderNameValid,
        cardNumberValid: cardNumberValid,
        CVVValid: CVVValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.cardholderNameValid &&
        this.state.cardNumberValid &&
        this.state.CVVValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <form className="demoForm">
        <h2>Enter Your Credit Card Details</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.cardholderName
          )}`}
        >
          <label htmlFor="cardholderName">Name On Card</label>
          <input
            type="cardholderName"
            required
            className="form-control"
            name="cardholderName"
            placeholder="Name On Card"
            value={this.state.cardholderName}
            onChange={this.handleUserInput}
            type="string"
          />
        </div>
        <div
          className={`form-group ${this.errorClass(
            this.state.formErrors.cardNumber
          )}`}
        >
          <label htmlFor="cardNumber">Card Number</label>
          <input
            type="cardNumber"
            className="form-control"
            name="cardNumber"
            placeholder="Card Number"
            value={this.state.cardNumber}
            onChange={this.handleUserInput}
            type="number"
          />
        </div>
        <div
          className={`form-group ${this.errorClass(this.state.formErrors.CVV)}`}
        >
          <label htmlFor="CVV">CVV</label>
          <input
            type="CVV"
            className="form-control"
            name="CVV"
            placeholder="CVV"
            value={this.state.CVV}
            onChange={this.handleUserInput}
            type="number"
          />
        </div>
        <div>
          <label>
            Valid Until: Month
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </label>

          <label>
            Year
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </label>
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          disabled={this.state.formValid}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
