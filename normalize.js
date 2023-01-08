function normalize(point) {
    // Assume point is array
    let mag = Math.sqrt(point.map(e => Math.pow(e,2)).reduce((a,b) => a+b,0));
    return point.map(e => e/mag);
}