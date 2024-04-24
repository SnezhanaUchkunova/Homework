// task #1:

let name;

function greeting(name){
    console.log('Hello, ' + name);
}
greeting('Snezhka');

// task #2:

let age;

let areYouYoung = (age) => {
    console.log(age < 40)};

areYouYoung(20);

// task 3:

let beYoung = (age) => {
    if (age < 40) {
        console.log(age);
    }
    else if (age => 40){
        console.log(age - 20);
    }
}
beYoung(50);