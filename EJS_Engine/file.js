const express=require('express')
const app=express()
const path=require('path')


app.use(express.static('static'))

app.set('view engine','ejs')
app.set('views','views')



app.get('/index',(req,res)=>{
    res.render('index')
})
app.get('/product',(req,res)=>{
    res.render('product')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/register',(req,res)=>{
    res.render('register')
})


app.listen(3000,()=>{
    console.log('port is listening')
})