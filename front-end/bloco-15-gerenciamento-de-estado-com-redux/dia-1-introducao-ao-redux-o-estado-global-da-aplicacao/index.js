const Redux = require('redux');

const INITIAL_STATE = {
  login: false,
  email: ''
}

const loggingIn = (email) => ({
  type: 'LOGIN',
  email,
})

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
      };
    default:
      return state;
  }
} 

const store = Redux.createStore(reducer);

store.dispatch(loggingIn('alguem@gmail.com'));

console.log(store.getState());