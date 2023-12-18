let express = require('express')
let app = express()
app.set('view engine','ejs')
let port = process.env.PORT || 3000;
app.get('/',(req,res) =>{
    res.render('home')
})

app.get('/about',(req,res) =>{
    res.render('about')
})
app.listen(port,() =>{
    console.log(`Server is running on port ${port}`)
})