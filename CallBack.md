#Node JS Callback

1). Node JS handle all asynchronous calls via callback,function passing to another function…!! what’s going on here..?? let me give a simple example of callback. In this example function passing 2 argument one file path and second argument is a function, which is nothing but a callback function.

                        fs.stat('input.txt', (error, stat)=> {
                            if(error){
                                console.log(error)
                            } else {
                                console.log(stat)
                                console.log('Got File info successfully ...!')
                            }
                        })


#Note : According to coding convention of Node JS, the first argument in callback function is for an error object and second argument is for a successful response.

2). Callbacks are to be used when we don’t know when something will be done. Again, think of something like an API call, fetching data from a database or I/O with the hard drive. All of these will take time, so we want our callback to be called when the event we are waiting for is done. Hence the term event-driven programming.

                        This will work fine 
                        fs.readFile(funFileName, function(err, file) {
                            if(err)
                                handleError(err);
                            console.log("file: ", file)
                        })

                        This will not work fine
                        let file = fs.readFile(fooFileName);
                        console.log("file: ", file);

                        This will work fine
                        let file = 1+1;
                        console.log("file: ", file);

#CallBack Hell Problem, This is probably not what you want your code to look like

                        const createUser = function(username, password, picture, callback) {
                        dataBase.createUser(username, password, (error, userID) => {
                            if (error) {
                                callback(error)
                            } else {
                                cloudinary.uploadPicture(picture, (error, path) => {
                                    if (error) {
                                        callback(error)
                                    } else {
                                        dataBase.updatePicture(userID, path, (error) => {
                                            if (error) {
                                                callback(error);
                                            } else {
                                                callback(null);
                                            }
                                        })
                                    }
                                })
                            }
                        })
                        };
