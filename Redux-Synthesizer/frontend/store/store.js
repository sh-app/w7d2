import { createStore } from 'redux';
import {reducer} from '../reducer/index';

export default configureStore = ()=>( createStore(reducer));
