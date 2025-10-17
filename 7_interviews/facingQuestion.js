//  1.  If I have want to store the data in db and sending the data using object. in obje I have three parameters.. if any one missing I       want to throw the error.. I need high level example for this using nodeJs and middleware.

import { invalid } from "moment";

//  Ans: 1st will create the middleware function and write the validation code.
    export const validateBody = (body, requiredFields, []) =>{
        for(let field of requiredFields){
            if(!body[field]){
                return {
                isValid: false,
                
                };
            }
        }
        return{
            invalid: true
        }
    }

// Then we can import this middlewar in the main handler and send the event body.. and varify the require fields..After validateion it will return true or false.. if false we give the error message for this.
