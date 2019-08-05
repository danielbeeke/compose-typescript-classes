import {ImprovedFieldable} from '../Lib/ImprovedFieldable.ts';
import {Entity} from './Entity.ts';
import {FieldWidget} from '../Decorator/FieldWidget.ts';
import {Compose} from '../Helpers/Compose.ts'

export class User extends Compose (Entity, ImprovedFieldable) {

    @FieldWidget({
        label: 'Voornaam'
    })
    protected firstName: string;

    constructor ({ firstName, uid }) {
        super({
            Entity: { uid, firstName },
            ImprovedFieldable: {  }
        });
    }
}
