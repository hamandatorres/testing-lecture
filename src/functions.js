const axios = require('axios');

module.exports = {
  sum: function(a, b) {
    return a + b
  },
  add: function( num1, num2 ) {
    return num1 + num2;
  },
  subtract: function( num1, num2 ) {
    return num1 - num2;
  },
  multiply: function( num1, num2 ) {
    return num1 * num2;
  },
  divide: function( num1, num2 ) {
    return num1 / num2;
  },
  sayHello: function() {
    return 'hello'
  },
  fetchUser: async () => {
    const user = await axios.get('https://jsonplaceholder.typicode.com/users/1')
      .catch(err => console.log(err))
    return user.data
  }
}
