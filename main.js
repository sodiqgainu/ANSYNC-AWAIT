// Task 01: Iterating with Async/Await
async function iterateWithAsyncAwait(array) {
    for (const value of array) {
      await new Promise(resolve => setTimeout(() => {
        console.log(value);
        resolve();
      }, 1000));
    }
  }
  
  // Task 02: Awaiting a Call
  async function awaitCall() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Failed to fetch data:', error.message);
    }
  }
  
  // Task 03: Handling Errors with Async/Await
  async function awaitCallWithErrorHandling() {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  // Task 04: Chaining Async/Await
  async function chainedAsyncFunctions() {
    await logAfterDelay('First function', 1000);
    await logAfterDelay('Second function', 1000);
    await logAfterDelay('Third function', 1000);
  }
  
  async function logAfterDelay(message, delay) {
    await new Promise(resolve => setTimeout(() => {
      console.log(message);
      resolve();
    }, delay));
  }
  
  // Task 05: Awaiting Concurrent Requests
  async function concurrentRequests() {
    const [response1, response2] = await Promise.all([
      fetch('https://api.example.com/data1'),
      fetch('https://api.example.com/data2')
    ]);
  
    const data1 = await response1.json();
    const data2 = await response2.json();
  
    console.log('Response 1:', data1);
    console.log('Response 2:', data2);
  }
  
  // Task 06: Awaiting Parallel Calls
  async function parallelCalls(urls) {
    const responses = await Promise.all(urls.map(url => fetch(url)));
    const data = await Promise.all(responses.map(response => response.json()));
    console.log('Responses:', data);
  }
  
  // Example usage
  iterateWithAsyncAwait([1, 2, 3]);
  awaitCall();
  awaitCallWithErrorHandling();
  chainedAsyncFunctions();
  concurrentRequests();
  parallelCalls(['https://api.example.com/data1', 'https://api.example.com/data2']);
  