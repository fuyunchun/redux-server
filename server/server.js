const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Hello world example</h1>')
})

app.get('/user',(req,res)=>{
    res.json({
        name:'老赵',
        age:15
    })
})

app.listen(8091,function(){
    console.log('Hello express nodejs')
})