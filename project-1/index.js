const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require('fs')

const app = express();
const PORT = 8000;

//Middleware - plugins

app.use(express.urlencoded({extended: false}))

//routes

// Server side rendering via html
app.get("/users", (req, res) => {
    const html =`
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});


//REST API

//  GET /users = List all users
app.get("/api/users", (req, res) => {
    return res.json(users);
});

 
// GET /users/1 - Get the user with ID1

app.get("/api/users/:id", (req, res) => {
    return res.json(user);
});

app.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.patch((req, res) => {
  // Edit user with id
  return res.json({status: "pending"})
})
.delete((req, res) => {
    // Edit user with id 
    return res.json({status: "pending"});
})

app.post("/api/users", (req, res) => {
     const body = req.body;
     users.push({...body, id: users.length + 1});
     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
        return res.json({status: "pending"});
     });
    
});


app.listen(PORT,() => console.log(`server started at Port:${PORT}`))