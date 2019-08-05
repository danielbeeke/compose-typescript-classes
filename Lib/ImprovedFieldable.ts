// @ts-ignore
import {Fieldable} from './Fieldable.ts';

export class ImprovedFieldable extends Fieldable {

    public isImprovedFieldable: boolean;

    constructor (data) {
        super(data);
        this.isImprovedFieldable = true;
    }

    shouldRender (field): boolean {
        // @ts-ignore
        let widgetInfo = this.getFieldWidgetInfo(field);
        return !!widgetInfo;
    }

}