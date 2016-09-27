import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core'

const INPUT = 'INPUT'

@Component({
  selector: 'ex-todo-text-input',
  template: `
    <input
      #INPUT
      [class.edit]="editing"
      [class.new-todo]="newTodo"
      type="text"
      [attr.placeholder]="placeholder"
      [(ngModel)]="text"
      (blur)="handleBlur($event)"
      (keydown)="handleSubmit($event)"
    >
  `,
})
class TodoTextInput {
  @Input() text: string
  @Input() editing: boolean
  @Input() newTodo: boolean
  @Input() placeholder: string
  @Output() save = new EventEmitter()
  @ViewChild(INPUT) inputRef: ElementRef

  ngOnInit() {
    if (this.inputRef) {
      this.inputRef.nativeElement.focus()
    }
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

  handleBlur(e: any) {
    if (!this.newTodo) {
      this.save.emit(e.target.value)
    }
  }
}

export default TodoTextInput
