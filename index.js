const express = require('express')
const cors = require('cors')


const app = express();
app.use(express.json());
app.use(cors());

const{ getCart, deleteCart, updateCart}= require('./controller')

app.get('/api/cart' ,getCart)

app.delete('/api/cart', deleteCart)

// app.post('/api/cart' ,updateCart)



app.listen(4004, console.log('listening on port 4004'))