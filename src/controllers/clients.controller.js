import { getConnection, sql, queries } from "../database"

export const getClients = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.getClients)
    res.json(result.recordset)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({error: error.message})
  }
}

export const countClients = async (req, res) => {
  try {
    const pool = await getConnection()
    const result = await pool.request().query(queries.countClients)
    res.json({cantidadClientes: result.recordset[0]['']})
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

export const getClient = async (req, res) => {
  try {
    const id = req.params.id
    const pool = await getConnection()
    const result = await pool.request().input("id", sql.Int, id).query(queries.getClient)
    res.json(result.recordset)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

export const createClient = async (req, res) => {
  try {
    const {dni, nombres, apellidoPaterno, apellidoMaterno, telefono, correo}  = req.body
    
    if(dni == null || nombres == null || apellidoPaterno == null || apellidoMaterno == null || telefono == null || correo == null){
      res.status(400).json({
        message: "Faltan datos"
      })
    }
    
    const pool = await getConnection()
    await pool
    .request()
    .input("dni", sql.NVarChar, dni)
    .input("nombres", sql.NVarChar, nombres)
    .input("apellidoPaterno", sql.NVarChar, apellidoPaterno)
    .input("apellidoMaterno", sql.NVarChar, apellidoMaterno)
    .input("telefono", sql.NVarChar, telefono)
    .input("correo", sql.NVarChar, correo)
    .query(queries.createClient)
    
    res.json({ dni, nombres, apellidoPaterno, apellidoMaterno, telefono, correo })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

export const updateClient = async (req, res) => {
  try {
    const {dni, nombres, apellidoPaterno, apellidoMaterno, telefono, correo}  = req.body
    const id = req.params.id
    
    if(dni == null || nombres == null || apellidoPaterno == null || apellidoMaterno == null || telefono == null || correo == null){
      res.status(400).json({
        message: "Faltan datos"
      })
    }
    
    const pool = await getConnection()
    await pool
    .request()
    .input("id", sql.NVarChar, id)
    .input("dni", sql.NVarChar, dni)
    .input("nombres", sql.NVarChar, nombres)
    .input("apellidoPaterno", sql.NVarChar, apellidoPaterno)
    .input("apellidoMaterno", sql.NVarChar, apellidoMaterno)
    .input("telefono", sql.NVarChar, telefono)
    .input("correo", sql.NVarChar, correo)
    .query(queries.updateClient)
    
    res.json({ dni, nombres, apellidoPaterno, apellidoMaterno, telefono, correo })
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

export const deleteClient = async (req, res) => {
  try {
    const id = req.params.id
    const pool = await getConnection()
    const result = await pool.request().input("id", sql.Int, id).query(queries.deleteClient)
    let resultado = result.rowsAffected == 1 ? { message: "Cliente eliminado" } : { message: "Cliente no eliminado" }
    res.json(resultado)
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}
