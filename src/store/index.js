import { createStore } from 'vuex';
import userState from './modules/user';

const store = createStore({
  userState,
});

console.log(store);
export default store;
