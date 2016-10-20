/// <reference path="../../../typings/index.d.ts" />

class Header {
  todos: Todo[];

  /** @ngInject */
  constructor(public todoService: TodoService) {
  }

  handleSave(text: string, state: string) {
    if (text.length !== 0) {
      this.todos = this.todoService.addTodo(text, state, this.todos);
    }
  }
}

angular
  .module('app')
  .component('headerComponent', {
    templateUrl: 'app/components/Header.html',
    controller: Header,
    bindings: {
      todos: '='
    }
  });
