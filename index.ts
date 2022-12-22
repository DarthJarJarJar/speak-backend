import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.get('/', async(_, res) => {
    const words = await prisma.word.findMany()
    res.json(words)
})


app.use(express.json())
app.post('/word', async(req, res) => {
   
    console.log(req.body)
    const { title, audio, image } = req.body
    const word = await prisma.word.create({
        data: {
            title,
            audio,
            image
        }
    })
    res.json(word)
})



const server = app.listen(3000, () => console.log("Running server"))
