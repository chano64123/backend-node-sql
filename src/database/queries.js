export const queries = {
  getClients: `SELECT * FROM Clients`,
  countClients: `SELECT COUNT(*) FROM Clients`,
  getClient: `SELECT * FROM Clients WHERE id = @id`,
  createClient: `INSERT INTO Clients (dni, nombres, apellidoPaterno, apellidoMaterno, telefono, correo) VALUES (@dni, @nombres, @apellidoPaterno, @apellidoMaterno, @telefono, @correo)`,
  updateClient: `UPDATE Clients SET dni = @dni, nombres = @nombres, apellidoPaterno = @apellidoPaterno, apellidoMaterno = @apellidoMaterno, telefono = @telefono, correo = @correo WHERE id = @id`,
  deleteClient: `DELETE FROM Clients WHERE id = @id`
}