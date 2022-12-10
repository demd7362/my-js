let memberArr = ['egoing','graphittie','leezche']


let memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezche'
}

memberObject.designer='leetzche';
console.log('memberObject.designer '+memberObject.designer);
console.log('memberObject.designer '+memberObject['designer']);

delete memberObject.manager;

console.log('memberObject.designer '+memberObject.manager);
