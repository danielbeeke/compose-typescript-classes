import './../Lib/Reflect.ts';
import {FieldWidgetInfo} from "../Interfaces/FieldWidgetInfo.ts";

export function FieldWidget(definition: FieldWidgetInfo): Function {
    return (target: any, key: string): void => {
        Reflect.defineMetadata('field.widget.definition', definition, target, key);
    }
}