import functions from "firebase-functions";
import express from "express"
import cors from "cors"
import { addAlcohol, deleteAlcohol, getAllAlcohol, updateAlcohol } from "./src/alcohol.js"

const app = express()
app.use(cors())
app.use(express.json())

app.post("/alcohol", addAlcohol)
app.get("/alcohol", getAllAlcohol)
app.patch("/alcohol/:id", updateAlcohol)
app.delete("/alcohol/:id", deleteAlcohol)

export const api = functions.https.onRequest(app)