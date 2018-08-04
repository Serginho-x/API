import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { Store } from '@ngrx/store';

@Injectable()
export class TodoDataService {
  public lastId = 0;
  public todos: Todo[] = [];

  constructor(private _store: Store<any>) {
    _store.select('todos').subscribe(todos => {
      this.todos = todos;
    });
  }

  // Simulate POST /todos
  public addTodo(todo: Todo): void {
    this._store.dispatch({
      type: 'ADD_TODO',
      payload: {
        id: ++this.lastId,
        title: todo.name,
        complete: todo.complete
      }
    });
  }

  // Simulate DELETE /todos/:id
  public deleteTodoById(todoId: number): void {
    this._store.dispatch({
      type: 'REMOVE_TODO',
      payload: { id: todoId }
    });
  }
  public toggleTodoComplete(todoId: number): void {
    this._store.dispatch({
      type: 'TOGGLE_COMPLETE',
      payload: { id: todoId }
    });
  }

  public getCompleteTodos(): Todo[] {
    return this.todos.filter(todo => todo.complete === true);
  }

  public getIncompleteTodos(): Todo[] {
    return this.todos.filter(todo => todo.complete === false);
  }


}
