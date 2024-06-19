export function isAscending (data) {
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] > data[i + 1]) {
            return false;
        }
    }
    return true;
}

export function isDescending (data) {
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] < data[i + 1]) {
            return false;
        }
    }
    return true;
}

export function isLowToHigh (data) {
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] > data[i + 1]) {
            return false;
        }
    }
    return true;
}

export function isHighToLow (data) {
    for (let i = 0; i < data.length - 1; i++) {
        if (data[i] < data[i + 1]) {
            return false;
        }
    }
    return true;
}