
function myEach(arr, callback) {
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            callback(arr[i])
        }
    } else if (typeof arr === 'object') {
        for (let key in arr) {
            callback(arr[key])
        }
    }

    return arr;
};

function myMap(collection, callback) {
    if (Array.isArray(collection)) {
    return collection.map(callback);
    } else if (typeof collection === 'object' && collection !== null) {
    const result = [];
    for (const key in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, key)) {
    result.push(callback(collection[key], key, collection));
        }
}
    return result;
}
    return [];
}

function myReduce(arr, callback, initialValue) {
    if (Array.isArray(arr)) {  
    if (initialValue === undefined) {
    initialValue = arr[0];
    arr = arr.slice(1);
    }
    for (let i = 0; i < arr.length; i++) {
        initialValue = callback(initialValue, arr[i], i, arr);
    }
    } else if (typeof arr === 'object' && arr !== null) {
    if (initialValue === undefined) {
    initialValue = Object.values(arr)[0];
    arr = Object.values(arr).slice(1);
    }
    for (let i = 0; i < Object.keys(arr).length; i++) {
        initialValue = callback(initialValue, arr[Object.keys(arr)[i]], Object.keys(arr)[i], arr);
    }
    }
    return initialValue;
    
}
function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
        return collection[i];
        }    
    }    
    } else if (typeof collection === 'object' && collection !== null) {
    for (const key in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, key)) {
        if (predicate(collection[key], key, collection)) {
        return collection[key];
        }
        }
    }    
    }
    }


function myFilter(collection, predicate) {
    if (Array.isArray(collection)) {
    return collection.filter(predicate);
    } else if (typeof collection === 'object' && collection !== null) {
    const result = [];
    for (const key in collection) { 
        if (Object.prototype.hasOwnProperty.call(collection, key)) {
        if (predicate(collection[key], key, collection)) {
        result.push(collection[key]);
        } 
        } 
    } 
    return result;
    } 
    return [];
}

function mySize(collection) {  
    if (Array.isArray(collection)) {
    return collection.length;
    } else if (typeof collection === 'object' && collection !== null) {
    return Object.keys(collection).length;
    } 
    return 0;
}
function myFirst(collection , n) {
    if (n !== undefined) {
    return collection.slice(0, n);
} 
    if (Array.isArray(collection)) {
    return collection[0];
    } else if (typeof collection === 'object' && collection !== null) {
    return Object.values(collection)[0];
    } 
    return undefined;
}

function myLast(collection, n) { 
    if (n !== undefined) {
    return collection.slice(-n);
} 
    if (Array.isArray(collection)) {
    return collection[collection.length - 1];
    } else if (typeof collection === 'object' && collection !== null) {
    return Object.values(collection)[Object.keys(collection).length - 1];
    } 
    return undefined; 
}

function myKeys(obj) {  
    if (typeof obj === 'object' && obj !== null) {
    return Object.keys(obj);
    } 
    return [];
}

function myValues(obj) {  
    if (typeof obj === 'object' && obj !== null) {
    return Object.values(obj);
    } 
    return [];
}