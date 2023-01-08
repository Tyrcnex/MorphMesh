function interpolate(obj1, obj2) {
    obj1 = parseObj(obj1);
    obj2 = parseObj(obj2);

    let nvObj1 = obj1.vertices.map(e => normalize(e));
    let nvObj2 = obj2.vertices.map(e => normalize(e));

    if (nvObj1.length !== nvObj2.length) return "Hey! I said, the number of vertices has to be the same!"

    function distSq(a,b) {
        return a.map((e,i) => Math.pow(e-b[i],2)).reduce((a,b) => a+b,0);
    }

    let pair = [];
    let nvLength = nvObj1.length;
    let onvObj2 = [...nvObj2];

    for (let i = 0; i < nvLength; i++) {
        /*
            1. Get the first element of nvObj1
            2. Sort nvObj2 of proximity to first element of nvObj1, and get the first element.
            3. Pair them up, and remove them from the list.
        */
        let paired = nvObj2.map((e) => [onvObj2.indexOf(e),distSq(e, nvObj1[0])]).sort((a,b) => a[1]-b[1])[0];
        console.log(onvObj2)
        pair.push(paired[0]);
        nvObj1.shift();
        nvObj2.splice(paired[0],1);
    }

    return pair;
}