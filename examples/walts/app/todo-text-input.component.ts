import { Component, Input, Output, EventEmitter } from '@angular/core'

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
      (blur)="onBlur($event)"
      (keydown)="onKeydown($event)"
    >
  `,
})
export class TodoTextInputComponent {
  @Input() text: string
  @Input() editing: boolean
  @Input() newTodo: boolean
  @Input() placeholder: string
  @Output() save = new EventEmitter()

  onKeydown(e: any) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.save.emit(text)
      if (this.newTodo) {
        this.text = ''
      }
    }
  }

  onBlur(e: any) {
    if (!this.newTodo) {
      this.save.emit(e.target.value)
    }
  }
}
