// Load express module
const express = require('express');

// Create express server
const app = express();

// Define port
const port = 3000;

// Serve static files (needed to import CSS file)
app.use(express.static('public'));

// Load handlebars module
const handlebars = require('express-handlebars');

// Set our app to use handlebars engine
app.set('view engine', 'hbs');

// Set handlebars configurations
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'planB'
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  // Serves the body of the page to the container
  res.render('main', {layout: 'index'});
});

// Make the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
