import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { interval } from './QuestionAndAnswers';
import { disableButton } from '../action';

function Timer(props) {
  if (props.timer < 1 && props.timer !== null) {
    clearInterval(props.intervalo);
    props.disableButton(true);
  }

  return (
    <div>
      <h1 id="timer" style={props.timer > 20 ? {'color':'#00DB05'}: props.timer > 10 ?{'color':'orange'} : {'color':'red'}}>{props.timer}</h1>
    </div>
  );
}

// style={isClicked ? answer.style : null}
// style: {
//   border: '3px solid rgb(255, 0, 0)',
// },
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
  intervalo: PropTypes.number.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
