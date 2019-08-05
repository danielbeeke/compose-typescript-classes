export class Entity {

    protected _label: string;
    public uid: bigint;

    constructor (data) {
        Object.assign(this, data);
    }

    get type () {
        return this.constructor.name;
    }

    set label (value) {
        this._label = value;
    }

}