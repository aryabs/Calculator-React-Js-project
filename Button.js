import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
	serveButtonvalueToPanel = () => {
		this.props.readByButton(this.props.name);
	}
  render() {
    return (
      <button onClick={this.serveButtonvalueToPanel}>
      	{this.props.name}
      </button>
    );
  }
}
Button.propTypes = {
	name: PropTypes.string,
	readByButton: PropTypes.func
};
export default Button;