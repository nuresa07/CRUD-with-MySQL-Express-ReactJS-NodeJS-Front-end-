import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import db from './config/Database.js'
import router from './routes/index.js'
// import Users from './models/UserModel.js'

dotenv.config()
const app = express()

try {
  await db.authenticate()
  console.log('database connected');
  // await Users.sync()
} catch (error) {
  console.log(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
app.use(express.json())
app.use(cookieParser()) ///
app.use(router)

app.listen(5000, () => console.log('server running at port 5000'))