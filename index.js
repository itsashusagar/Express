const express = require("express");
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs')
app.use(express.static('views'))

app.get('/' , (req, res) => {
    res.render('index', {
        pageTitle: "Ashu Portfolio",
        name: "Ashu Sagar",
        currentDate: new Date().toDateString()
    })
});

app.listen(PORT, () => {
    console.log(`Server is Started on Port ${PORT}`)
})