//Easy
// To Be Or Not To Be

//Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".


function expect(val) {

    return {
        toBe: function (value) {
            if(val === value) {
                return true;
            }else{
                throw new Error("Not Equal")
            }
        },
        notToBe: function (value) {
            if(val !== value) {
                return true;
            }else{
                throw new Error("Equal")
            }
        }
    }
}

function runTest(fun){
    try {
        const res = fun();
        return { value: res}
    } catch (error) {
        return {error: error.message}
    }
}

const fun1 = () => expect(5).toBe(5);
console.log(runTest(fun1))


const fun2 = () => expect(5).notToBe(6);
console.log(runTest(fun2))