import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgRedux } from 'ng2-redux';
import { AppState } from './containers/App';
import rootReducer from "./reducers/index";
import App from './containers/App';
import Header from './components/Header';
import MainSection from './components/MainSection';
import TodoTextInput from './components/TodoTextInput';
import TodoItem from './components/TodoItem';
import Footer from './components/Footer';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    App,
    Header,
    MainSection,
    TodoTextInput,
    TodoItem,
    Footer
  ],
  providers: [NgRedux],
  bootstrap: [App]
})
export default class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, {});
  }
}
