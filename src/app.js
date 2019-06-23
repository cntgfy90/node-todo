const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/todo');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The app is up and ready.');
});
