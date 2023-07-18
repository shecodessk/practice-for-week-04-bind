const { Employee } = require('./employee')

const employee = new Employee("John Wick", "Dog Lover")


/*-------------------------------------------------------*/
//Exercise 2
let bound = employee.sayName.bind(employee)

setTimeout(bound, 2000)

//Exercise 3


let occupation = employee.sayOccupation.bind(employee);

setTimeout(occupation, 3000)