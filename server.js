import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 4173
const DIST = join(__dirname, 'dist')

// Serve static files from dist
app.use(express.static(DIST))

// SPA fallback — all non-file routes serve index.html
app.use((req, res, next) => {
  res.sendFile(join(DIST, 'index.html'))
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Mozambique Transit UX running on port ${PORT}`)
})
