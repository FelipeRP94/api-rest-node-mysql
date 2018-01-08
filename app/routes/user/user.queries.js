const getAllUsers = 'SELECT * FROM usuarios';
const getUserById = 'SELECT * FROM usuarios WHERE id = ?';
const insertUser = 'INSERT INTO usuarios (nombre, apellidos, email, password, telefono, direccion, dni) VALUES (?,?,?,?,?,?,?)';
const updateUser = 'UPDATE usuarios SET nombre = ?, apellidos = ?, email = ?, password = ?, telefono = ?, dni = ?, direccion = ? where id = ?';
const deleteUser = 'DELETE FROM usuarios WHERE id = ?';

module.exports = {
    getAllUsers,
    getUserById,
    insertUser,
    updateUser,
    deleteUser
}