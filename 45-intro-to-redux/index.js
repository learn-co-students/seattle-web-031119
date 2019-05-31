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

const MENU = '(l) buy lunch (c) buy car (g) gamble (p) get paid (x) exit';

// store.subscribe(() => {
//   const state = store.getState(); // grab our state
// 
//   console.log();
//   console.log('Your bank account: ', state); // print out our balance
// 
//   console.log();
//   console.log(MENU); // display the menu
//   console.log();
// });

// This next bit sets up our CLI
keypress(process.stdin)

process.stdin.on('keypress', (_ch, key) => {
  if (key) switch (key.name) {
    case 'l':
      store.dispatch({type: /* buy lunch */});
      break;

    case 'c':
      store.dispatch({type: /* buy car */});
      break;

    case 'g':
      store.dispatch({type: /* gamble  */});
      break;

    case 'p':
      store.dispatch({type: /* get paid */});
      break;

    case 'x':
      process.stdin.pause();

    default:
      break;
  }
});

process.stdin.setRawMode(true);
process.stdin.resume();
