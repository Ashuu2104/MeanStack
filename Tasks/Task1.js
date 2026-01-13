console.log('Task 1 started');
function asyncTask1(callback) {
  setTimeout(() => {
    console.log('Task 2 async operation complete');
    callback();
  }, 2000);
}
function task3() {
    console.log('Task 3 executed after Task 2');
}

asyncTask1(task3);
// handle asynchronous operation with callback
// control the order of execution
// avoid blocking the main thread

