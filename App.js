import React from 'react';
import Result from './Result/Result';
import ButtonPanel from './ButtonPanel/ButtonPanel';
import calculate from '../Service/calculate';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      last: null,
      operation: null,
    };
  }
  processForCalculate = (buttonName) => {
    console.log(buttonName)
    this.setState(calculate(this.state, buttonName));
  }
  render() {
    return (
      <div className="component-app">
        <Result value={this.state.last || this.state.total} />
        <ButtonPanel readFromButtonPanel={this.processForCalculate}></ButtonPanel>
      </div>
    );
  }
}
export default App;