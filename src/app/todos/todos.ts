/// <reference path="../../../typings/index.d.ts" />

class Todo {
  id: number;
  completed: boolean;
  text: string;
  state: string;
}

const initialTodo: Todo[] = [
  {
    text: 'State Pattern',
    completed: false,
    id: 0,
    state: 'state'
  },
  {
    text: 'Observer Pattern',
    completed: false,
    id: 1,
    state: 'observer'
  },
  {
    text: 'Bridge and Null Object Pattern',
    completed: false,
    id: 2,
    state: 'bridge-null'
  },
  {
    text: 'Chain Of Responsibility Pattern',
    completed: false,
    id: 3,
    state: 'chain-responsibility'
  },
  {
    text: 'Interpret Pattern',
    completed: false,
    id: 4,
    state: 'interpret'
  }
];

class TodoService {
  addTodo(text: string, state: string, todos: Todo[]) {
    return [
      {
        id: (todos.length === 0) ? 0 : todos[0].id + 1,
        completed: false,
        text,
        state
      }
    ].concat(todos);
  }

  completeTodo(id: number, todos: Todo[]) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {completed: !todo.completed}) :
        todo;
    });
  }

  deleteTodo(id: number, todos: Todo[]) {
    return todos.filter(todo => todo.id !== id);
  }

  editTodo(id: number, text: string, todos: Todo[]) {
    return todos.map(todo => {
      return todo.id === id ?
        Object.assign({}, todo, {text}) :
        todo;
    });
  }

  completeAll(todos: Todo[]) {
    const areAllMarked = todos.every(todo => todo.completed);
    return todos.map(todo => Object.assign({}, todo, {completed: !areAllMarked}));
  }

  clearCompleted(todos: Todo[]) {
    return todos.filter(todo => {
      return todo.completed === false;
    });
  }
}

