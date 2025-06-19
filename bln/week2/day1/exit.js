// // Convert seconds to milliseconds
// const secondsToMs = (sec) => sec * 1000;

// function timerCallback(label) {
//   console.log(`✅ ${label}`);
// }

// // Function to start a timer with delay in seconds
// function startTimer(seconds, label, callback) {
//   setTimeout(() => {
//     callback(label);
//   }, secondsToMs(seconds));
// }

// // Start each timer
// startTimer(5, 'Timer 1: 5 seconds passed', timerCallback);
// startTimer(10, 'Timer 2: 10 seconds passed', timerCallback);
// startTimer(15, 'Timer 3: 15 seconds passed', timerCallback);
// startTimer(20, 'Timer 4: 20 seconds passed', timerCallback);
// startTimer(25, 'Timer 5: 25 seconds passed', timerCallback);

// // Exit after all timers are done
// setTimeout(() => {
//   console.log('👋 All timers done. Exiting now.');
//   process.exit(0);
// }, secondsToMs(10) + 2000); // Exit 2 seconds after last message


// A simple callback function
function sayHello(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

// The callback to run after saying hello
function done() {
  console.log('Done with everything, exiting now.');
  ; // Exit the program
}

// Run the function with the callback
sayHello('Friend', done);

process.exit(1)
