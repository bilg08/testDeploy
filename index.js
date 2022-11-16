const express = require('express');
const app = express();

app.get('/',(req,res)=> {
    res.status(200).json({
        data:'HelloWorld'
    })
})
const PORT = 8000
app.listen(process.env.PORT||PORT,()=> {
    console.log('listening'+PORT)
})