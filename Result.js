import React from 'react';
import PropTypes from 'prop-types';
import './Result.css';

class Result extends React.Component {
  render() {
    return (
      <div className="result">
        <div>
          {this.props.value}
        </div>
      </div>
    );
  }
}
Result.propTypes = {
  value: PropTypes.string,
};
export default Result;