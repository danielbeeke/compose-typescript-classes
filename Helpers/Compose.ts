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

    const copyProperties = (prototype) => {
        while (prototype) {
            const { constructor, ...propertyDescriptors } = Object.getOwnPropertyDescriptors(prototype);
            Object.defineProperties(NewClass.prototype, propertyDescriptors);
            prototype = Object.getPrototypeOf(prototype);
        }
    };

    for (const singleClass of classes) {
        copyProperties(singleClass.prototype);
        NewClass.prototype.prototypes[singleClass.prototype.constructor.name] = singleClass;
    }

    return NewClass;
}