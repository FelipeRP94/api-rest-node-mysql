const getAllTratamientos = 'SELECT * FROM tratamiento';
const getTratamientoById = 'SELECT * FROM tratamiento WHERE id = ?';
const insertTratamiento = 'INSERT INTO tratamiento (nombre, descripcion, duracion) VALUES (?,?,?)';
const updateTratamiento = 'UPDATE tratamiento SET nombre = ?, descripcion = ?, duracion = ? where id = ?';
const deleteTratamiento = 'DELETE FROM tratamiento WHERE id = ?';

module.exports = {
    getTratamientoById,
    getAllTratamientos,
    insertTratamiento,
    updateTratamiento,
    deleteTratamiento
}