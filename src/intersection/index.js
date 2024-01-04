function intersection(a, b) {
    const mapA = new Map();
    const setB = new Set();
    for(let i = 0; i < a.length; i++){
        mapA.set(a[i], i);
    }
    for(let e of b){
        if(mapA.has(e)){
            setB.add(e);
        }
    }
    return [...setB];
}

module.exports = intersection;
