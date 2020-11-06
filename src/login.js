import React from 'react'
import {LOGINGUT} from './app.redux'

import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'

@connect(
    state => state.btn,
    {LOGINGUT}
)

class Login extends React.Component{
    render(){
        return (
            <div>
                {this.props.LOGIN ? <Redirect to="/ds"></Redirect> : null}
                <h1>你暂且没有权限，请先登录</h1>
                <button onClick={this.props.LOGINGUT}>点击登陆</button>
            </div>
        )
    }
}

export default Login