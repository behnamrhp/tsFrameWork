import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'NAME', age: 20 });
console.log(user);
const root = document.getElementById('root');
if(root){
    const userForm = new UserForm(root, user);

    userForm.render();
    
}else{
    throw new Error('root not found')
}
