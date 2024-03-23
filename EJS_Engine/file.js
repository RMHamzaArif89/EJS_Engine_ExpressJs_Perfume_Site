const express=require('express')
const app=express()
const path=require('path')


app.use(express.static('static'))

app.set('view engine','ejs')
app.set('views','views')



app.get('/home',(req,res)=>{
    res.render('index')
})


app.listen(3000,()=>{
    console.log('port is listening')
})