// Dependancies
const path = require('path');
const express = require('express');

// instantiation of hte server
const app = express();

// everything else should only be a static file
app.use(
  express.static(
    path.join(__dirname, 'source'),
    {
      fallthrough: true,
      extensions: ['html', 'htm', 'js']
    }
  ),
  (req, res) => res.sendStatus(404)
);

// Begin listening
const port = process.env.PORT || 3000;
app.listen(port);

console.log(`The server has started. Please visit your loopback adapter on port ${port}`); // eslint-disable-line no-console
