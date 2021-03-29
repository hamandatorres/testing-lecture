import axios from 'axios';


module.exports = {
  add: (num1, num2) => num1 + num2, 
  subtract: (num1, num2) => num1 - num2,
  multiply: (num1, num2) => num1 * num2,
  divide: (num1, num2) => num1 / num2,
  sayHello: () => 'hello',
  getUser: async () => {
    const user = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    .catch(err => console.log(err))
    return user.data;
  } 
}