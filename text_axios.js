const axios = require('axios');


// Optionally the request above could also be done as
axios.get('https://api.github.com/repos/879285390/879285390.github.io/issues', {
    params: {
      creator: '879285390'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })