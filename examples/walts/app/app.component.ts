import { Component } from '@angular/core'

@Component({
  selector: 'ex-app',
  template: `
    <div class="todoapp">
      <ex-header></ex-header>
      <ex-main-section></ex-main-section>
    </div>
  `,
})
export class AppComponent {}
