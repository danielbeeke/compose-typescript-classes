import './../Lib/Reflect.ts';
import {FieldWidgetInfo} from "../Interfaces/FieldWidgetInfo.ts";

export class Fieldable {

    public isFieldable: boolean;

    constructor (data: any) {
        this.isFieldable = true;
    }

    getFieldWidgetInfo (field: string) : FieldWidgetInfo {
        return Reflect.getMetadata('field.widget.definition', this, field);
    }
}