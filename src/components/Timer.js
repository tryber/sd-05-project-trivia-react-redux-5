import React from 'react';
import { connect } from 'react-redux';
// import { interval } from './QuestionAndAnswers';
import { disableButton } from '../action';
import PropTypes from 'prop-types';

function Timer(props) {
  if (props.timer < 1 && props.timer !== null) {
    clearInterval(props.intervalo);
    props.disableButton(true);
  }

  return (
    <div>
      <h1 id="timer">{props.timer}</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  timer: state.timerReducer.timer,
});

const mapDispatchToProps = (dispatch) => ({
  // setTimer: (e) => dispatch(setTimer(e)),
  disableButton: (e) => dispatch(disableButton(e)),
});

Timer.propTypes = {
  timer: PropTypes.number.isRequired,
  // setTimer: PropTypes.func.isRequired,
  disableButton: PropTypes.func.isRequired,
  intervalo: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
