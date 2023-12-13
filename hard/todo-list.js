/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor (){
    this.arr = [];
  }
  add(todo){
    this.arr.push(todo);
  }
  remove(indexOfTodo){
    if(indexOfTodo>=this.arr.length || indexOfTodo<0){
      // throw new Error("index out of bounds error");
      return;
    }
    this.arr.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo){
    if(index>=this.arr.length || index<0){
      // throw new Error("index out of bounds error");
      return;
    }
    this.arr[index] = updatedTodo;
  }
  getAll(){
    return this.arr;
  }
  get(indexOfTodo){
    if(indexOfTodo>=this.arr.length || indexOfTodo<0){
      return null;
    }
    return this.arr[indexOfTodo];
  }
  clear(){
    this.arr.splice(0,);
  }
}

module.exports = Todo;
