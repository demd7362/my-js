let memberArr = ['egoing','graphittie','leezche']
console.group('array loop');
for(member of memberArr){
    console.log(member);
}

console.groupEnd('array loop');

console.group('object loop');


let memberObject = {
    manager : 'egoing',
    developer : 'graphittie',
    designer : 'leezche'
}
for(let member in memberObject){
    console.log(member+' : '+memberObject[member]);
}

console.groupEnd('object loop');