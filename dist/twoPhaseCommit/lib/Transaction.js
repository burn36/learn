'use strict';

const StateMachine = require('./StateMachine');


class Transaction {
  constructor (tid, tbody) {
    this.tid = tid;
    this.tbody = tbody;
    this.stateMachine = new StateMachine('initial', {
      'initial': {
        'voting': true
      },
      'voting': {
        'success': true,
        'failure': true
      }
    });
  }

  receive (command) {
    return new Promise((resolve, reject) => {
      const stateChanged = this.stateMachine.changeState(command);
      if (stateMachine == false) {
        return reject(new Error(`cannot process command ${command}`));
      }
      resolve(true);
    });
  }
}


module.exports = Transaction;
