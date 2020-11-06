import React from 'react'
import Qinbin from './qinbin'
import {Route , Link ,Redirect} from 'react-router-dom'

import {connect} from 'react-redux'

import {LOGINGUN,saxios} from './app.redux'

function yiying(){
    return <h1>一营</h1>
}

function erying(){
    return <h1>二营</h1>
}

@connect(
    state => state.btn,
    {LOGINGUN,saxios}
)


class App extends React.Component{
    componentDidMount(){
        this.props.saxios()
    }
    render(){
        const user = (
            <div>
                {this.props.LOGIN ? null : <Redirect to="/login"></Redirect>}
                登陆用户名：{this.props.user}
                年龄：{this.props.age}
                <button onClick={this.props.LOGINGUN}>点击注销</button>
                <ul>
                    <li>
                        <Link to='/ds/'>一营</Link>
                    </li>
                    <li>
                        <Link to='/ds/erying'>二营</Link>
                    </li>
                    <li>
                        <Link to='/ds/qinbin'>骑兵营</Link>
                    </li>
                </ul>
                <Route path="/ds/" exact component={yiying}></Route>
                <Route path="/ds/erying" component={erying}></Route>
                <Route path="/ds/qinbin" component={Qinbin}></Route>
            </div>

        )
        return this.props.LOGIN ? user : <Redirect to="/login"></Redirect>
    }
}

export default App