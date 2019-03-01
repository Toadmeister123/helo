import React, {Component} from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import {updateUser} from './../../ducks/reducer'

class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
        this.register = this.register.bind(this)
        this.login = this.login.bind(this)
    }

    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
      }
      async register() {
        let user = {
          usernmae: this.state.username,
          password: this.state.password
        }
        try{
          let res = await axios.post('/auth/register', user)
          this.props.updateUser(res.data)
          this.props.history.push('/dashboard')
        } catch (err) {
          alert('Username taken')
          console.log(err)
        }
      }
      async login() {
        let user = {
          username: this.state.username,
          password: this.state.password
        }
        try{
          let res = await axios.post('/auth/login', user)
          this.props.updateUser(res.data)
          this.props.history.push('/dashboard')
        } catch (err) {
          alert('Incorrect username or password')
          console.log(err)
        }
      }
    
    render(){
      const {username, password} = this.state
        return(
            <div>
              <h1>Auth</h1>
            <input value={username} onChange={e => {this.handleChange('username', e.target.value)}}></input>
            <input value={password} type='password' onChange={e => {this.handleChange('password', e.target.value)}}></input>
            <button onClick={this.register}>Register</button>
            <button onClick={this.login}>Login</button>

            </div>
        )
    }

}

const mapStateToProps = (reduxState) => {
  return{
    id: reduxState.id
  }
}
const mapDispatchToProps ={
  updateUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);