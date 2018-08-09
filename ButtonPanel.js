import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  retrieveFromButton = (buttonName) => {
    this.props.readFromButtonPanel(buttonName);
  }
  render() {
    return (
      <div className="button-panel">      
        <div>
          <Button name="9" readByButton={this.retrieveFromButton}></Button>
          <Button name="8" readByButton={this.retrieveFromButton}></Button>
          <Button name="7" readByButton={this.retrieveFromButton}></Button>
          <Button name="÷" readByButton={this.retrieveFromButton}></Button>
        </div>     
        <div>
          <Button name="6" readByButton={this.retrieveFromButton}></Button>
          <Button name="5" readByButton={this.retrieveFromButton}></Button>
          <Button name="4" readByButton={this.retrieveFromButton}></Button>
          <Button name="x" readByButton={this.retrieveFromButton}></Button>
        </div>     
        <div>
          <Button name="3" readByButton={this.retrieveFromButton}></Button>
          <Button name="2" readByButton={this.retrieveFromButton}></Button>
          <Button name="1" readByButton={this.retrieveFromButton}></Button>
          <Button name="-" readByButton={this.retrieveFromButton}></Button>
        </div>     
        <div>
          <Button name="AC" readByButton={this.retrieveFromButton}></Button>
          <Button name="0" readByButton={this.retrieveFromButton}></Button>
          <Button name="=" readByButton={this.retrieveFromButton}></Button>
          <Button name="+" readByButton={this.retrieveFromButton}></Button>
        </div>
      </div>
    );
  }
}
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};
export default ButtonPanel;