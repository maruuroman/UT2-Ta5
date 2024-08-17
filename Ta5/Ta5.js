function leapYears(año){

    if (año%4 == 0) {
        return true;
    }

    if (año%100 == 0 || año%400 == 0) {
        return true; 
    }

    return false
}

console.log(leapYears(2022));