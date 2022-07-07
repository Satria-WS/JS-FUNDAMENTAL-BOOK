
//##synchronous 
- In a synchronous programming model, things happen one at a time.
When you call a function that performs a long-running action, it returns only when the
action has finished and it can return the result. This stops your program for
the time the action takes.

- synchronous have single thread of control and two threads of control

//## asynchronous
An asynchronous model allows multiple things to happen at the same time


//##Promise
Promises make this easier. They can be either resolved (the action finished successfully) or rejected (it failed).