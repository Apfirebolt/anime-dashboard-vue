import path from 'path'
import express from 'express'

const app = express()
const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


const PORT = 5000

app.listen(
  PORT,
  console.log(
    `Server runninn on port ${PORT}`
  )
)

export default app