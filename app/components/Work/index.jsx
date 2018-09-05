import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { decrement, increment } from '../../actions/actionTypes';

const Work = props => (
  <div className="work">
    <div className="work-header">
      <h2>Work</h2>
    </div>
    <div className="actions">
    </div>
  </div>
);

Work.propTypes = {
  count: PropTypes.number.isRequired,
  decrement: PropTypes.func.isRequired,
  increment: PropTypes.func.isRequired
};

export default connect(
  ({ count }) => ({ count }),
  { decrement, increment },
)(Work);
