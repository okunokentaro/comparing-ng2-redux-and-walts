import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { FooterComponent } from './footer.component'
import { HeaderComponent } from './header.component'
import { MainSectionComponent } from './main-section.component'
import { TodoItemComponent } from './todo-item.component'
import { TodoTextInputComponent } from './todo-text-input.component'

import { AppActions } from './app.actions'
import { TodosRepository } from './todos.repository'
import { AppDispatcher } from './app.dispatcher'
import { AppStore } from './app.store'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainSectionComponent,
    TodoItemComponent,
    TodoTextInputComponent
  ],
  providers: [
    AppActions,
    TodosRepository,
    AppDispatcher,
    AppStore
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}