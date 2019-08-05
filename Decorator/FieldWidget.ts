import './../Lib/Reflect.ts';

export function FieldWidget(definition: object): Function {
    return (target: any, key: string): void => {
        Reflect.defineMetadata('field.widget.definition', definition, target, key);
    }
}