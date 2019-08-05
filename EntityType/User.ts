import {Fieldable} from '../Decorator/Fieldable.ts';
import {FieldWidget} from '../Decorator/FieldWidget.ts';
import {Entity} from './Entity.ts';
import {Compose} from '../Helpers/Compose.ts'

export class User extends Compose (Entity, Fieldable) {

    @FieldWidget({
        label: 'Voornaam'
    })
    protected firstName: string;

    constructor (data) {
        super();
        Object.assign(this, data);
    }
}
