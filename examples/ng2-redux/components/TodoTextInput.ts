import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ex-todo-text-input',
  template: `
    <input
      [class.edit]="editing"
      [class.new-todo]="newTodo"
      type="text"
      [attr.placeholder]="placeholder"
      autoFocus="true"
      [(ngModel)]="text"
      (blur)="handleBlur($event)"
      (keydown)="handleSubmit($event)"
    >
  `,
})
class TodoTextInput {
  @Input() text: string;
  @Input() editing: boolean;
  @Input() newTodo: boolean;
  @Input() placeholder: string;
  @Output() save = new EventEmitter();

  handleSubmit(e: any) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.save.emit(text);
      if (this.newTodo) {
        this.text = '';
      }
    }
  }

  handleBlur(e: any) {
    if (!this.newTodo) {
      this.save.emit(e.target.value);
    }
  }
}

export default TodoTextInput;