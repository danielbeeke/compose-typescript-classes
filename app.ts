import { green, bold } from "https://deno.land/std/colors/mod.ts";
import { User } from './EntityType/User.ts';

let user = new User({
  firstName: 'henk',
  uid: 7
});

console.log(
    green('The composed class instance:'),
    bold(JSON.stringify(user))
);

console.log(
    green('A method from Fieldable: ::getFieldWidgetInfo(\'firstName\')'),
    bold(JSON.stringify(user.getFieldWidgetInfo('firstName')))
);

console.log(
    green('A method from ImprovedFieldable: ::shouldRender(\'firstName\')'),
    bold(JSON.stringify(user.shouldRender('firstName')))
);

console.log(
    green('A method from Entity: ::type:'),
    bold(user.type)
);