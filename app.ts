import { User } from './EntityType/User.ts';

let user = new User({
  firstName: 'henk'
});

console.log(
    user,
    user.getFieldWidgetInfo('firstName'),
    user.shouldRender('firstName'),
    user.type()
);