//a
var array1 = [5, 12, 8, 130, 44];
var found = array1.find(function (element) { return element === array1[3]; });
console.log(found);
//b
var user1 = {
    name: "bindu",
    address: {
        city: "Bangalore",
        state: "karnataka",
        pin: "560076"
    }
};
console.log(user1.address.pin);