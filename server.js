const express = require('express')
const path = require('path')
const app = express()
const port = 5000;

app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, 'public')));

// bootstrap
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

app.get('/', (req, res) => {
    res.render('index');
});

const pages = [
    "about",
    "booking",
    "services",
    "cities",
    "contact",
    "tariff",
    "vehicles",
    "seo",
    "success",
    "verification",
    "estimation",
   
  ];
  
  

  pages.forEach((page) => { 
    app.get(`/${page}`, (req, res) => {
      res.render(page); // No Firebase call
    });
  });
  

app.listen(port, () => {
    console.log(`FinTaxi running at http://localhost:${port}`);
});