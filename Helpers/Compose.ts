export function Compose(...classes: any): any {

    class NewClass {
        public prototypes: Object;

        constructor (composedData) {
            Object.keys(this.prototypes).forEach(className => {
                const parentInstance = new this.prototypes[className](composedData[className]);
                Object.defineProperties(this, Object.getOwnPropertyDescriptors(parentInstance));
            });
        }
    }

    NewClass.prototype.prototypes = {};

    let copyProperties = (prototype) => {
        while (prototype) {
            Object.getOwnPropertyNames(prototype).forEach(methodName => {
                if (!NewClass.prototype[methodName] && methodName != 'constructor') {
                    NewClass.prototype[methodName] = prototype[methodName];
                }
            });

            prototype = Object.getPrototypeOf(prototype);
        }
    };

    classes.forEach(singleClass => {
        copyProperties(singleClass.prototype);
        NewClass.prototype.prototypes[singleClass.prototype.constructor.name] = singleClass;
    });

    return NewClass;
}