// @ts-ignore
import {ImprovedFieldable} from '../Lib/ImprovedFieldable.ts';
// @ts-ignore
import {Entity} from './Entity.ts';
// @ts-ignore
import {FieldWidget} from '../Decorator/FieldWidget.ts';
// @ts-ignore
import {Compose} from '../Helpers/Compose.ts'

export class User extends Compose (Entity, ImprovedFieldable) {

    @FieldWidget({
        label: 'Voornaam',
    })
    protected firstName: string;

    constructor ({ firstName, uid }) {
        super({
            Entity: { uid, firstName },
            ImprovedFieldable: {}
        });
    }
}
