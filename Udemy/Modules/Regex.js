/*  */
/* Simple validation regex to test an array or dictionary contains letters */
const letterValidation = (object) => {
        let validation = /[a-zA-Z]+/g
        //check if is an Array
        if (Array.isArray(object)) {
            if (validation.test(object)) {
                throw new Error( 'Array contains letters, must be numbers only')
            }
        }
        else if (object == undefined) {
            throw new Error('object was \'undefined\' ');
        }
        else('Something else goes here')
    }



module.exports = {
    letterValidation: letterValidation
}