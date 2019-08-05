export function Compose(...classes: any): any {

    function NewClass () {}

    let copyPropertiesFromPrototype = (prototype) => {
        while (prototype) {
            Object.getOwnPropertyNames(prototype).forEach(methodName => {
                if (!NewClass.prototype[methodName]) {
                    NewClass.prototype[methodName] = prototype[methodName];
                }
            });

            // Traverse the chain.
            prototype = prototype.__proto__;
        }
    };

    classes.forEach(singleClass => {
        copyPropertiesFromPrototype(singleClass.prototype);
    });

    NewClass.prototype.constructor = NewClass;

    return NewClass;
}