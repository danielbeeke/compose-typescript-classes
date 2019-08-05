import './../Lib/Reflect.ts';
import {FieldWidgetInfo} from "../Interfaces/FieldWidgetInfo.ts";

export class Fieldable {

    public isFieldable: boolean;

    constructor (data) {
        this.isFieldable = true;
    }

    getFieldWidgetInfo (field) : FieldWidgetInfo {
        return Reflect.getMetadata('field.widget.definition', this, field);
    }
}
