// // Convert minutes to milliseconds
// const minutes = (min) => min * 60 * 1000;

// // Set up 5 timeouts
// setTimeout(() => async{
//    await console.log('✅ Timer 1: 5 minutes passed');
// }, minutes(5));

// setTimeout(() => {
//   console.log('✅ Timer 2: 10 minutes passed');
// }, minutes(10));

// setTimeout(() => {
//   console.log('✅ Timer 3: 15 minutes passed');
// }, minutes(15));

// setTimeout(() => {
//   console.log('✅ Timer 4: 20 minutes passed');
// }, minutes(20));

// setTimeout(() => {
//   console.log('✅ Timer 5: 25 minutes passed');
// }, minutes(25));


// process.exit(0);

// // Exit the process a little after the last timer
// setTimeout(() => {
//   console.log('👋 All timers done. Exiting now.');
//   process.exit(0); // Exit with success code
// }, minutes(25) + 2000); // 2 seconds later




const minutes = (min) => min * 1 * 1000;

// A function that returns a promise that resolves after given minutes
function waitMinutes(min) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Timer 1: ${min} minutes passed`);
      resolve();
    }, minutes(min));
  });
}

async function main() {
  // Wait for the first timer to finish
  await waitMinutes(5);

  // Other timers just fire normally (no await)
  setTimeout(() => {
    console.log('✅ Timer 2: 10 minutes passed');
  }, minutes(10));

  setTimeout(() => {
    console.log('✅ Timer 3: 15 minutes passed');
  }, minutes(15));

  setTimeout(() => {
    console.log('✅ Timer 4: 20 minutes passed');
  }, minutes(20));

  setTimeout(() => {
    console.log('✅ Timer 5: 25 minutes passed');
  }, minutes(25));


  

  // Exit 2 seconds after the last timer
  setTimeout(() => {
    console.log('👋 All timers done. Exiting now.');
    process.exit(0);
  }, minutes(2) + 2000);
}

main();

