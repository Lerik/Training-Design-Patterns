/// <reference path="../../../typings/index.d.ts" />

class TodoItem {
  editing: boolean = false;
  onSave: Function;
  onDestroy: Function;
  todo: any;

  constructor(public $state: any) {
  }

  handleDoubleClick() {
    this.editing = true;
  }

  handleSave(text: string) {
    this.onSave({
      todo: {
        text,
        id: this.todo.id
      }
    });
    this.editing = false;
  }

  handleDestroy(id: number) {
    this.onDestroy({id});
  }

  changeState(state: string) {
    this.$state.go(state);
  }
}

angular
  .module('app')
  .component('todoItem', {
    templateUrl: 'app/components/TodoItem.html',
    controller: TodoItem,
    bindings: {
      todo: '<',
      onDestroy: '&',
      onChange: '&',
      onSave: '&'
    }
  });
