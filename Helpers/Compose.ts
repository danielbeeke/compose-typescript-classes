export function Compose(...classes: any): any {

    function newClass () {}

    classes.forEach(singleClass => {
        newClass.prototype = Object.create(singleClass.prototype);
    });

    return newClass;
}