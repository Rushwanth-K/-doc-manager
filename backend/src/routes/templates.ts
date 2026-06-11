import { Router } from 'express'
import { readDB } from '../db'

const router = Router()

router.get('/', (req, res) => {
  const db = readDB()
  res.json(db.templates)
})

export default router