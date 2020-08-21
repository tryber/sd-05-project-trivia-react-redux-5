import React from 'react';
import { connect } from 'react-redux';
import { interval } from './QuestionAndAnswers';
import { disableButton, setTimer } from '../action';

function Timer(props) {
  if (props.timer < 1 && props.timer !== null) {
    clearInterval(interval);
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
})

const mapDispatchToProps = (dispatch) => ({
  setTimer: (e) => dispatch(setTimer(e)),
  disableButton: (e) => dispatch(disableButton(e)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
