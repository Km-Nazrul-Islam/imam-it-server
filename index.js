const express = require('express')
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

const tutorials = require('./allData/tutorials.json');
const item = require('./allData/item.json');

app.get('/', (req, res) => {
    res.send('Item API Running');
});

app.get('/item-tutorials', (req, res) => {
    res.send(tutorials)
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '08'){
        res.send(item)
    }
    else {

        const category_item = item.filter(i => i.category_id === id);
        res.send(category_item);
    }
});

app.get('/item', (req, res) => {
    res.send(item);
})

app.get('/item/:id', (req, res) => {
    const id = req.params.id;
    const selectedItem = item.find(i => i._id === id);
    res.send(selectedItem);
})

app.listen(port, () => {
    console.log('Imam IT Foundation Running on port', port)
})