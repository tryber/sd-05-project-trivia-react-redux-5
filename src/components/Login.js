import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfigButton from './ConfigButton';
import GameButton from './GameButton';
import { addUser } from '../action';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  isAvailable() {
    return !(this.state.name && this.state.email);
  }

  render() {
    const { addUserProps } = this.props;
    return (
      <div>
        <input
          name="name"
          value={this.state.value}
          type="text"
          placeholder="Name"
          data-testid="input-player-name"
          onChange={(e) => this.handleInput(e.target.name, e.target.value)}
        />
        <input
          name="email"
          value={this.state.email}
          type="email"
          placeholder="Email"
          data-testid="input-gravatar-email"
          onChange={(e) => this.handleInput(e.target.name, e.target.value)}
        />
        <GameButton click={() => addUserProps(this.state)} isAvailable={this.isAvailable()} />
        <ConfigButton />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUserProps: (e) => dispatch(addUser(e)),
});

Login.propTypes = {
  addUserProps: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);

