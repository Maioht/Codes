const {calculate_distance,calculate_speed} = require('./main');
//loads functions

test ("calculating distance", () => {
    let a = {x: 0, y: 0};
    let b = {x: 5, y: 5};
    expect (calculate_distance(a,b )).toBe(7.0710678118654755);
});

test ("calculating distance", () => {
    let a = {x: 0, y: 0};
    let b = {x: 5, y: 5};
    expect (calculate_distance(a,b )).not.toBe(4);
});

test ("calculating distance", () => {
    let a = {x: 10, y: 10};
    let b = {x: 5, y: 5};
    expect (calculate_distance(a,b )).toBe(7.0710678118654755);
});

test("calculate_speed", ()=>{
    let station = {x: 10, y: 10, reach:3};
    let distance = 2.4;
    expect(calculate_speed(station, distance)).toBe(0.3600000000000001);
});

test("calculate_speed", ()=>{
    let station = {x: 10, y: 10, reach:3};
    let distance = 2.4;
    expect(calculate_speed(station, distance)).not.toBe(0);
});

test("calculate_speed", ()=>{
    let station = {x: 10, y: 10, reach:3};
    let distance = 5;
    expect(calculate_speed(station, distance)).toBe(0);
});

