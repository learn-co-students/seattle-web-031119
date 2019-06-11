const redux = require('redux');
const keypress = require('keypress');

/* Our Reducer function will go here
 *
 * We'll need cases for each of the following:
 * Buy lunch (-20)
 * Buy used car (-3000)
 * Gamble (-1000 || +3000)
 * Get Paid (+2000)
 *
 */

const reducer = (state, action) => {
	console.log("action:", action)
	switch (action.type) {
		case "BUY_LUNCH": // => {type: "BUY_LUNCH", payload: 10}
			return {balance: state.balance - action.payload}

		case "BUY_CAR":
			return {balance: state.balance - action.payload}
		
		case "GAMBLE":
			let x = Math.random();
			if (x < 0.5) {
				return {balance: state.balance + action.payload}
			} else {
				return {balance: state.balance - action.payload}
			}

		case "GET_PAID":
			return {balance: state.balance + action.payload}

		case "DOSTUFF":
			return {balance: state.balance + action.payload}
			

		default:
			return state
	}
}

const MENU = '(l) buy lunch (c) buy car (g) gamble (p) get paid (x) exit';

const initialState = { balance: 75 }

const store = redux.createStore(reducer, initialState)

store.subscribe(() => {
  const state = store.getState(); // grab our state

  console.log();
  console.log('Your bank account: ', state); // print out our balance

  console.log();
  console.log(MENU); // display the menu
  console.log();
});

store.dispatch({type: "RANDOM_ACTION"})

// This next bit sets up our CLI
keypress(process.stdin)

process.stdin.on('keypress', (_ch, key) => {
  if (key) switch (key.name) {
    case 'l':
      store.dispatch({type: "DOSTUFF", payload: -10});
      break;

    case 'c':
      store.dispatch({type: "DOSTUFF", payload: -75000});
      break;

    case 'g':
			let x = Math.random()
			if (x < 0.5) {
				store.dispatch({type: "DOSTUFF", payload: -75000});
				break;
			} else {
				store.dispatch({type: "DOSTUFF", payload: 250000});
				break;
			}

    case 'p':
      store.dispatch({type: "DOSTUFF", payload: 8});
      break;

    case 'x':
      process.stdin.pause();

    default:
      break;
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
