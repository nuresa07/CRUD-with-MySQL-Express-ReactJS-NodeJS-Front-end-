import express from 'express'
import { getUser, Login, Logout, Register } from '../controllers/Users.js'
import { verifyToken } from '../middleware/VerifyToken.js'
import { refreshToken } from '../controllers/RefreshToken.js'

const router = express.Router()

router.get('/users', verifyToken, getUser)
router.post('/users', Register)
router.post('/login', Login)
router.get('/token', refreshToken)
router.delete('/logout', Logout)

export default router

// class express {
//   Router() {
      // get(a,b)
//   }
// }

// const router = new express()