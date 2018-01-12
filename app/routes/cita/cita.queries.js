const getAllCitas = "SELECT * FROM citas";
const getCitasDeUsuario = "SELECT * FROM citas WHERE usuario = ? order by fecha";
const getCitasDeTratamiento = "SELECT * FROM citas WHERE tratamiento = ? order by fecha";
const getCitasEntreFecha = "SELECT * FROM citas WHERE fecha BETWEEN ? AND ?";
const getCitaById = "SELECT * FROM citas WHERE id = ?";
const insertCita = "INSERT cita (usuario, tratamiento, fecha) VALUES (?,?,?)";
const updateCita = "UPDATE cita SET usuario = ?, tratamiento = ?, fecha = ? WHERE id = ?";
const deleteCita = "DELETE FROM cita WHERE id = ?";

module.exports = {
    getAllCitas,
    getCitasDeUsuario,
    getCitasDeTratamiento,
    getCitasEntreFecha,
    insertCita,
    updateCita,
    deleteCita
}