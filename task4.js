// 4.Task: Sorting Objects

// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const cars = [
    { make: 'Toyota', model: 'Corolla', year: 2020 },
    { make: 'Honda', model: 'Civic', year: 2018 },
    { make: 'Ford', model: 'Mustang', year: 2021 },
    { make: 'Chevrolet', model: 'Malibu', year: 2019 },
    { make: 'BMW', model: 'X5', year: 2017 }
];

function sortCars(carsArray) {
    carArray.sort((a, b) => a.year - b.year);
    return carArray;
}

const sortedCar = sortCars(cars);

console.log(sortedCars);
