
// -- Self Introduction
// -- Asked to write  a program to fetch the data from url and router everything.Asked
// ---> Asked to input validation program and use middleware how will show the error message in cloudwatch.
//          1. I will use middleware to validate the incoming request.
//          2. Will check all required field are available or not before it reached controller.
//          3. If any thing miss will throw the 400 bad request error.

const validateRequest = (req, res, next) => {
    if (!req.body.email) {
        console.log('Email is not available');

        return res.status(400).json({
            message: 'Email is required',
            status: 400
        });
    }
    next();
}

app.post('/users', validateRequest, (req, res) => {
    res.status(200).json({
        message: "userCreated"
    });
});

// -- Event loop
// -- What is Cold start.
// -- What is Provesancy concurrency and reserved concurrency and difference.'