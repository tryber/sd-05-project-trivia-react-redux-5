import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    }
  }

  handleInput(name, value) {
    this.setState({
      [name]: value,
    });
  }

  render() {
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
        <div>
          <Link to="/game" data-testid="btn-play">
            <button disabled={!(this.state.name && this.state.email)}>Jogar</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Login;
