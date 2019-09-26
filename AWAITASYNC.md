# Async and Await requires a couple of things:

1). await can ‘wait’ for a async function to resolve or reject a value and allows us to handle the return value without using .then() or .catch()

2). async is a special keyword attached to function declarations to let the Node interpreter know that it’s an asynchronous function.
e.g. async function foo(){...} or async () => {...}

3). Important! await can only be used inside an async function.


# Concurrency & Parallelism

— Concurrency in very simple terms means that two or more processes (or threads) run together, but not at the same time. Only one process executes at once.

— Parallelism on the other hand means that the processes (or threads) run in parallel (surprise surprise); meaning they start at the same time and execute alongside each other at the same time.
