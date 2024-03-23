const express=require('express')
const app=express()
const path=require('path')


app.use(express.static('static'))

app.set('view engine','ejs')
app.set('views','views')



app.get('/index',(req,res)=>{
    res.render('index',{title:'Home|page'})
})
app.get('/product',(req,res)=>{
    res.render('product',{title:'Product|page'})
})
app.get('/about',(req,res)=>{
    res.render('about',{title:'About|Page'})
})
app.get('/register',(req,res)=>{
    res.render('register',{title:'Regiser|Page'})
})


app.listen(3000,()=>{
    console.log('port is listening')
})