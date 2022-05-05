const express = require("express");
const app = express();
app.use(express.json());

let user = [{id: 1, name: 'Meer', phone: 1234, age: 19, department: 'D01' }, {id: 2, name: 'Aman', phone: 4321, age: 19, department: 'D02'}];

app.post('/addUser', (req, res) => {
    user.push(req.body);
    res.json(user);
})

app.post('/deleteUser', (req, res) => {
    const r = req.body.id;
    let i = 0;
    while (i < user.length){
        if (user[i].id == r){
            if (i == 0){
                user.shift();
            }else{
                user.splice(i,i);
            }
        }
        i += 1;

    }
    res.json(user);
})

app.get('/getUserById', (req, res) => {
    const r = req.body.id;
    let i = 0;
    while (i < user.length){
        if (user[i].id == r){
            res.json(user[i])
        }
        i += 1;
    }
})

app.get('/getUserByPhone', (req, res) => {
    const r = req.body.phone;
    let i = 0;
    while (i < user.length){
        if (user[i].phone == r){
            res.json(user[i])
        }
        i += 1;
    }
})

app.listen(4000);