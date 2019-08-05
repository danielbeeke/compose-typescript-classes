import { User } from './EntityType/User.ts';

let user = new User({
  firstName: 'henk'
});

let info = user.getFieldWidgetInfo('firstName');

console.log(user, info)