const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static(path.join(__dirname, 'dist/toDoListApp')));

app.listen(process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , 'dist/toDoListApp/index.html'));
});

app.get('/getTodos', (req, res) => {
    res.json(getDataFromFile())
});

app.post('/addTodo', (req, res) => {

    let todo = {
        title: req.body.title,
        description: req.body.description,
        limit: req.body.limit,
        isDone: req.body.isDone,
        index: 0
    };

    let newDB = getDataFromFile();

    todo.index = newDB.length + 1;
    
    newDB.push(todo);
    
    console.log('TAREFA ADICIONADA ' + todo.title);

    saveOnFile(newDB);

    res.status(200).json(newDB);
});

app.post('/refresh', (req, res) => {
    let myList = req.body;

    console.log('LISTA ATUALIZADA');
    
    myList = myList.filter((todo) => {return todo.isDone == false});

    refreshFile(myList);

    res.json(myList);

});

app.post('/erase', (req, res) => {
    let myList = [];

    console.log('LISTA COMPLETAMENTE DELETADA');

    refreshFile(myList);

    res.json(myList);


});

console.log('server is running');

function getDataFromFile (){
    return JSON.parse(fs.readFileSync('./data/data.json'));
    
}

function saveOnFile(todos){
    fs.writeFileSync('./data/data.json', JSON.stringify(todos));
}

function refreshFile(todos){

    for(let i = 0; i < todos.length; i += 1){
        todos[i].index = i + 1;
    }

    fs.writeFileSync('./data/data.json', JSON.stringify(todos));
}