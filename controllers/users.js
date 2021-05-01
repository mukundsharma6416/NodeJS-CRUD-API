import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export const createUser = (req, res) => {
    const userId = uuidv4();

    const user = req.body;
    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database.`);
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const deleteUser = users.find((user) => user.id != id);

    res.send(`User with ${id} has been deleted successfully`);
}

export const patchUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    const user = users.find((user) => user.id === id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User ${id} has been updated successfully`);
}