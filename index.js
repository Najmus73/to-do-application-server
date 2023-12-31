const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


app.get('/', (req,res) => {
    res.send('To do app is running')
})

app.listen(port, () => {
    console.log(`To do app server is running on port ${port}`);
})