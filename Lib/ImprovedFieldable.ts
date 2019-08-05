import {Fieldable} from './Fieldable.ts';

export class ImprovedFieldable extends Fieldable {
    shouldRender (field) {
        let widgetInfo = this.getFieldWidgetInfo(field);
        return !!widgetInfo;
    }
}