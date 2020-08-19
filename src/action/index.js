export const ADD_USER = 'ADD_USER';

export function addUser({name, email}) {
  return ({
    type: ADD_USER,
    name,
    email,
  });
}
