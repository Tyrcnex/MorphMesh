function triangulate(input) {
    // If it's not in a form like [1,2,3] and is instead in a form like 'f 1 2 3', remove the f and turn the thing into an array.
    if (typeof input === 'string') input = input.split(' ').slice(1);
    input = input.map(e => parseFloat(e));

    let listOfInputs = [];
    for (let i = 0; i <= input.length - 3; i++) {
        listOfInputs.push([input[0]].concat(input.slice(i+1, i+3)));
    }
    return listOfInputs;
}

function parseObj(obj) {
    let returnData = {
        vertices: [],
        faces: [],
    };

    obj = obj.split(/\r?\n/).map(e => {
        let newE = e;
        if (e[0] === 'f') newE = triangulate(e).map(q => `f ${q.join(' ')}`).join('\n');
        return newE;
    }).join('\n').split(/\r?\n/);;

    for (let line of obj) {
        if (line.startsWith('v ')) returnData.vertices.push(line.replace('v ','').split(' ').map(e => parseFloat(e)));
        else if (line.startsWith('f ')) returnData.faces.push(line.replace('f ','').split(' ').map(e => parseInt(e.split('/')[0])));
    }

    return returnData;
}