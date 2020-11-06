import axios from 'axios'

const aaa = '登陆'
const ccc = '注销'
const isAut = '数据'

function btn(state={LOGIN:false,user:'李云龙'},action){
    switch(action.type){
        case aaa : return {...state,LOGIN:true}
        case ccc : return {...state,LOGIN:false}
        case isAut : return {...state,user:action.copy.name,age:action.copy.age}
        default : return state
    }
}

function LOGINGUT(){
    return {type:aaa}
}

function LOGINGUN(){
    return {type:ccc}
}

function saxios(){
    return dispatch => {
        axios.get('/user').then(res=>{
            var copy = res.data
            dispatch(AXIOS(copy))
        })
    }
}

function AXIOS(copy){
    return {type:isAut,copy:copy}
}

export {
    btn,LOGINGUT,LOGINGUN,saxios,AXIOS
}