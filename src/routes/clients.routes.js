import { Router } from "express"
import { getClients, getClient, createClient, updateClient, deleteClient, countClients } from "../controllers/clients.controller"

const router = Router()

router.get("/api/clients", getClients)
router.get("/api/clients/count", countClients)
router.get("/api/clients/:id", getClient)
router.post("/api/clients", createClient)
router.put("/api/clients/:id", updateClient)
router.delete("/api/clients/:id", deleteClient)

export default router
