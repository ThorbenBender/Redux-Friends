import React from 'react';
import { connect } from 'react-redux';
import { login } from '../state/actionCreator';


export class LoginForm extends React.Component {
    render() {
        return (
            <div>
                <input type="text" />
                <input type="password" />
                <button type="submit" onClick={this.props.login}>Log in</button>
                <button onClick={() => localStorage.clear()}>Log out</button>
            </div>
        )
    }
}

export default connect(st => st, { login })(LoginForm);