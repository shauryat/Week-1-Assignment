/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  Todo() {
    this.List = [];
    this.index = 1;
  }

  add(task) {
    this.List.push(task);
    this.index++;
  }

  remove(index) {}
}

module.exports = Todo;
