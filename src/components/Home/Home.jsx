import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loginData: {
                userLogin: null,
                password: null
            },
            result: null,
            error: null
          }
    }

    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }

    renderRedirect = (target) => {
        if (this.state.redirect) {
            return <Redirect to={target} />
        }
    }

    handleLogin = (event) => {

        event.preventDefault();

        fetch(this.props.baseUrl+'/usuario/entrar', {
            method: 'POST',
            body: JSON.stringify(this.state.loginData)
        }).then((response) => {
            if ( response.status === 200 ) {
                return response.json();
            }
        })
        .then((responseJSON) => {
            this.setState({
                token: responseJSON
            })
            localStorage.setItem('TOKEN', responseJSON)
            this.setRedirect()
        })
        .catch((responseError) => {
            this.setState({
                error: responseError
            })
        })
    }

    render() {
        return (
            <div>
                {this.renderRedirect('/about', this.props)}
                <form id="formLogin" action="/" onSubmit={this.onLogin}>
                    <input type='text' />
                    <button onClick={this.handleLogin}>Fazer Login</button>    
                </form>
            </div>
        )
    }
}
