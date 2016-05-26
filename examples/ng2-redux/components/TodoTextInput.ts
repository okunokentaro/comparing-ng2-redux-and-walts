import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'ex-header',
  template: `
    <input
      [class.edit]="editing"
      [class.newTodo]="newTodo"
      type="text"
      [attr.placeholder]="placeholder"
      autoFocus="true"
      [attr.value]="text"
      (blur)="handleBlur()"
      (change)="handleChange()"
      (keyDown)="handleSubmit()"
    >
  `,
})
class TodoTextInput {
  @Input editing: boolean
  @Input newTodo: boolean
  @Input placeholder: string
  @Output save = new EventEmitter()

  private text: string

  constructor() {
    this.text = ''
  }

  handleSubmit(e: any) {
    const text = e.target.value.trim()
    if (e.which === 13) {
      this.save.emit(text)
      if (this.newTodo) {
        this.text = ''
      }
    }
  }

  handleChange(e) {
    this.text = e.target.value
  }

  handleBlur(e) {
    if (!this.newTodo) {
      this.save.emit(e.target.value)
    }
  }
}

export default TodoTextInput