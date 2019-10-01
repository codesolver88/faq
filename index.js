const express= require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express()

app.get('/api', (req,res) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(data => {
        res.json({users:data.data})
    })
})

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname,"client","build","index.html"))
    })
}
const port = process.env.PORT || 4000;
app.listen(port, ()=>{
    console.log(`listening to port ${port}`)
})