import './../Lib/Reflect.ts';

export class Fieldable {
    getFieldWidgetInfo (field) {
        return Reflect.getMetadata('field.widget.definition', this, field);
    }
}
