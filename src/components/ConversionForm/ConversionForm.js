import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

const api_url = `http://localhost:3001/api/v1/currencies`

class ConversionForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      currencies: [],
      amount: "",
      result: "",
      fromCurrency: "USD",
      toCurrency: "USD"
    }
  };

  componentDidMount() {
    this.getCurrencies();
  };

  getCurrencies() {
    fetch(api_url)
      .then(response => response.json())
      .then(response_currencies => {
        this.setState({
          currencies: response_currencies
        })
      });
  };

  calculate = () => {
    this.getCurrencies();
    const { currencies, amount, fromCurrency, toCurrency } = this.state;

    if (amount === isNaN) {
      return;
    } else {
      const fromRate = currencies.filter(currency => currency.name === fromCurrency)[0].rate;
      const toRate = currencies.filter(currency => currency.name === toCurrency)[0].rate;
      
      const usValue = (amount / fromRate).toFixed(2);
      const result = (usValue * toRate).toFixed(2);

      this.setState({
        result
      });
    }
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: ""
      },
    );
  };

  handleInput = e => {
    this.setState(
      {
        amount: e.target.valueAsNumber,
        result: "",
      },
    );
  };

  render() {
    const { currencies, amount, result, fromCurrency, toCurrency } = this.state;

    return (
      <div className="row">
        <div className="col-lg-10 mx-auto">
          <div className="card card-body">
            <h5>
              {amount} {fromCurrency} is
            </h5>
            <h2>
              {result} {toCurrency}
            </h2>
            <div className="row">
              <div className="col-lg-10">
                <form className="form-inline mb-4">
                  <input
                    type="number"
                    value={amount}
                    onChange={this.handleInput}
                    className="form-control form-control-lg mx-3"
                  />
                  <select
                    name="fromCurrency"
                    value={fromCurrency}
                    onChange={this.handleSelect}
                    className="form-control form-control-lg"
                  >
                    { currencies.map(currency => (
                      <option key={currency.name} value={currency.name}>
                        {currency.name}
                      </option>
                    ))}
                  </select>
                </form>

                <div className='form-inline'>
                  <h1 className="swap word-wrap-normal">
                    &#8595;&#8593;
                  </h1>
                </div>

                <form className="form-inline mb-4">
                  <input
                    disabled={true}
                    value={result}
                    className="form-control form-control-lg mx-3"
                  />
                  <select
                    name="toCurrency"
                    value={toCurrency}
                    onChange={this.handleSelect}
                    className="form-control form-control-lg"
                  >
                    { currencies.map(currency => (
                      <option key={currency.name} value={currency.name}>
                        {currency.name}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <Button variant="outline-primary" onClick={this.calculate}>Convert</Button>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ConversionForm;