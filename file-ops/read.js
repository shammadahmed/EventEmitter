const fsp = require('./fsp');

fsp.readFile('./lorem.txt')
  .then(function(data) {
    // Outputs the file data
    console.log(data);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.writeFile('./test.txt', 'Hello!')
  .then(function(res) {
    // Outputs the file data
    // after writing
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });

fsp.appendFile('./test.txt', 'Hello again!')
  .then(function(res) {
    // Outputs the file data
    // after appending
    console.log(res);
  })
  .catch(function(err) {
    console.error(err);
  });