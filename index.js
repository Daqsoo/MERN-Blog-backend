import express from "express";

const app = express();

app.get('/', (req,res) => {
    res.send('Hello world');
});

app.listen(4444, (err) => {
    if(err)
        {
            return console.log('ERROR, Cant Start Server');
        }
    console.log('Server OK');
});