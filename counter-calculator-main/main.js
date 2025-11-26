// First fetch txt files for stations and device locations, and parse file.
const fs = require('fs');
const networkStation = JSON.parse(fs.readFileSync('networkStation.txt'));
const devices = JSON.parse(fs.readFileSync('devices.txt'));

const main = () => {
    for (let i = 0; i < networkStation.length; i++) {
        let station = networkStation[i];
        // console.log(station); Take Station one by one
        for (let j = 0; j < devices.length; j++) {
            let oneDevice = devices[j];
            // console.log(oneDevice); take device one by one and count per on station
            let distance = calculate_distance(station, oneDevice);
            let speed = calculate_speed(station, distance);
            //every station distance count to every location
            // console.log("STATION: ", station, "DISTANCE TO:", oneDevice, "IS: ", distance);
            // console.log("STATION: ", station, "DEVICE", oneDevice, "SPEED", speed);

            if (speed > oneDevice.bestSpeed) {
                oneDevice.bestSpeed = speed;
                oneDevice.bestStation = station;
                //Find best of the best.
                //console.log("Best STATION: ", station, "DEVICE", oneDevice, "SPEED", speed);
            }

        }
    }

    for (let j = 0; j < devices.length; j++) {
        let oneDevice = devices[j];
        if (oneDevice.bestStation != null) {
            console.log("Best network station for point:", oneDevice.x, ",", oneDevice.y, " is ", oneDevice.bestStation.x, ",", oneDevice.bestStation.y, " with speed", oneDevice.bestSpeed);
            //the best values are found by comparison
        }
        else
            console.log("no network station within reach for point:", oneDevice.x, ",", oneDevice.y);
        //if there is no desired result
    }
}

//calculate the distances
function calculate_distance(a, b) {
    let distance = 0;
    let x1 = a.x,
        x2 = b.x,
        y1 = a.y,
        y2 = b.y;
    distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distance;
}

//calculate the speed
function calculate_speed(station, distance) {
    let reach;
    let speed = 0;
    reach = station.reach;
    if (reach > distance) {
        speed = Math.pow((reach - distance), 2);
    }

    return speed;
}

main();

module.exports.calculate_distance = calculate_distance;
module.exports.calculate_speed = calculate_speed;
//Exports both functions to unit test main.test.js, without overwrite another.