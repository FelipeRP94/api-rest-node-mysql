const getAllTratamientos = 'SELECT * FROM tratamientos';
const getTratamientoById = 'SELECT * FROM tratamientos WHERE id = ?';
const insertTratamiento = 'INSERT INTO tratamientos (nombre, descripcion, duracion) VALUES (?,?,?)';
const updateTratamiento = 'UPDATE tratamientos SET nombre = ?, descripcion = ?, duracion = ? where id = ?';
const deleteTratamiento = 'DELETE FROM tratamientos WHERE id = ?';

module.exports = {
    getTratamientoById,
    getAllTratamientos,
    insertTratamiento,
    updateTratamiento,
    deleteTratamiento
}