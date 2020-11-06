import React from 'react'

import {connect} from 'react-redux'

import {add ,rem ,async} from './redux'

@connect(
    state => ({num:state.rounder}),
    {add ,rem ,async}
)

class Qinbin extends React.Component{
    render(){
        return (
            <div>
                <div>还剩{this.props.num}把机关枪</div>
                <button onClick={this.props.add}>申请武器</button>
                <button onClick={this.props.rem}>上缴武器</button>
                <button onClick={this.props.async}>缓两天在给</button>
            </div>
        )
    }
}

export default Qinbin