import 'core-js';
import 'rxjs/Rx';
import 'zone.js/dist/zone';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { createStore } from 'redux';
import { provider } from  'ng2-redux';
import { default as App } from './containers/App';
import rootReducer from './reducers/index';

const store = createStore(rootReducer);

bootstrap(App, [provider(store)]);
