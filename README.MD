# Understanding Asynchronous Code

Not all Javascript code happens in the order it's written - it is often **asynchronous**, as Javascript will continue to execute subsequent functions if previous calls need to wait for a response. We have many tools we can utilise to handle this, and this sprint focuses on **callbacks**.

Callbacks are a common way that programmers can work with results from asynchronous functions, and underlie all other methods of handling asynchronous code. A callback is a function passed elsewhere to be invoked, allowing data to be passed back to the original function. During this sprint we will focus on the core concepts of async code. You will make calls to other functions that have already been written for you - it's your job to tie the functions together to return the response we're looking for.

## Objectives

1.  To understand the mechanisms and terminology of asynchronous code.
2.  Using TDD to ensure we're writing quality code.

## Functions Available To You

Don't worry about the utils folder. Pretend that these functions are third-party APIs that you are requesting data from and that will respond after a short period of time.

These are the functions available to you and a sample response from each one: 

```js

getSingleAuthor(yourCallback); //=> 'book name'

// your callBackinvoked with(error, bookName)

getAllAuthors(yourCallback);
//=> [an array of author names]

// yourCallback invoked with (error, authors)

getBookName(book, yourCallback); // => 'Book Name'

//youCallback invoked with (error, BookName)

getFile (filename, yourCallback); // => 'File contents of filename'
// yourCallBack invoked with (error, fileContents)

getManyFile(filename, yourCallback) // =>  your callback will be called multiple times

// yourCallback invoked with (error, fileContents) each time

``` 

## Stage 1 

1. Write a function called BlockMyEcho that takes a string, It then waits two seconds from now, using, using a while loop, then returns a string.

2.  Asychronous code allows Javascript to continue running whilst waiting on results. Rewrite the previous function, call it `asyncMyEcho` and use setTimeout. It should take a string and an error-first callback as its arguments. This is now non-blocking code - Javascript will deal with other things and then, when the timer ends, it will deal with the callback. Call this function three times to see how long it takes.