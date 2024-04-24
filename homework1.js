// task #1:

function greeting(name){
    console.log('Hello, ' + name);
}
greeting('Snezhka');

// task #2:

let areYouYoung = (age) => {
    return age < 40
};
console.log(areYouYoung(20));

// task 3:

let beYoung = (age) => {
    if (age < 40) {
        return age;
    }
    else if (age => 40){
        return age - 20;
    }
}
console.log(beYoung(50));
