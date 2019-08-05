/**
 * Composes two or more classes to one.
 * It looses the ability to use YourInstance instanceof YourClass.
 * You can use isComposedWith instead.
 *
 * @param classes
 * @constructor
 */
export function Compose(...classes: any): any {
    // Create a name for the class.
    let composedClassName = classes.map(singleClass => singleClass.prototype.constructor.name).join('');

    /**
     * This is the class name we will use.
     */
    class NewClass {
        public prototypes: Object;

        /**
         * constructor, you can feed it an object keyed by the class names of the composed class.
         * @param composedData
         */
        constructor (composedData) {
            // For each class we copy the properties and the methods.
            Object.keys(this.prototypes).forEach(className => {
                // Create an instance of the class.
                const classInstance = new this.prototypes[className](composedData[className]);

                // Copy all the things from the instance to our class.
                Object.defineProperties(this, Object.getOwnPropertyDescriptors(classInstance));
            });
        }

        /**
         * instanceof replacement.
         * @param className
         */
        isComposedWith (className) {
            return Object.keys(this.prototypes).includes(className);
        }
    }

    NewClass.prototype.prototypes = {};

    /**
     * Traverses the prototype chain and copies all properties and methods onto our class.
     * @param prototype
     */
    const copyProperties = (prototype) => {
        // For every prototype.
        while (prototype) {
            const { ...propertyDescriptors } = Object.getOwnPropertyDescriptors(prototype);
            Object.defineProperties(NewClass.prototype, propertyDescriptors);

            // Process the next prototype.
            prototype = Object.getPrototypeOf(prototype);
        }
    };

    // Place all the prototypes in the class for reference.
    for (const singleClass of classes) {
        copyProperties(singleClass.prototype);
        NewClass.prototype.prototypes[singleClass.prototype.constructor.name] = singleClass;
    }

    // Set the class name to a combined name of all given classes.
    Object.defineProperty (NewClass, 'name', { value: composedClassName });

    return NewClass;
}