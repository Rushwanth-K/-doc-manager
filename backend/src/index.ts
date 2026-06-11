import express from 'express'
import cors from 'cors'
import templatesRouter from './routes/templates'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())

app.use('/api/templates', templatesRouter)

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`)
})