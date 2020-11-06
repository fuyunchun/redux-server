
const jjjj = '加机关枪'
const cccc = '减机关枪'

function rounder(state=0,action){
    switch(action.type){
        case jjjj :return state + 1
        case cccc : return state - 1
        default : return 10
    }
}


function add(){
    return {type:jjjj}
}

function rem(){
    return {type:cccc}
}

function async(){
    return dispatch => {
        setTimeout(()=>{
            dispatch(add())
        },2000)
    }
}

export{
    rounder,
    add,
    rem,
    async
}