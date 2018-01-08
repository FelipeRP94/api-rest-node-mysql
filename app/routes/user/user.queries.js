const getAllUsers = 'SELECT * FROM usuarios';
const insertUser = 'INSERT INTO usuarios (nombre, apellidos, email, password, telefono, direccion, dni) VALUES (?,?,?,?,?,?,?)';
const updateUser = 'UPDATE usuarios SET nombre = ?, apellidos = ?, email = ?, password = ?, telefono = ?, dni = ?, direccion = ? where id = ?';
const deleteUser = 'DELETE FROM usuarios WHERE id = ?';

module.exports = {
    getAllUsers,
    insertUser,
    updateUser,
    deleteUser
}