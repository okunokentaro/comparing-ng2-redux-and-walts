import 'core-js';
import 'rxjs/Rx';
import 'zone.js/dist/zone';

import { bootstrap } from '@angular/platform-browser-dynamic';
import { NgRedux } from 'ng2-redux';
import App from './containers/App';

bootstrap(App, [NgRedux]);
