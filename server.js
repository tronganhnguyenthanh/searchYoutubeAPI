import express from "express"
const app = express()
import {config} from "dotenv"
config()
import cors from "cors"
import main from "./models/query.models.js"
const port = process.env.PORT
app.listen(port, () => {
 console.log(`Server is running ${port}`)
})
app.use(express.json())
app.use(cors())
app.post("/api-query-post", main)