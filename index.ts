import express from 'express'
import { PrismaClient } from '@prisma/client'
const cors = require('cors')

const prisma = new PrismaClient()
const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
  }));
  
  

app.get('/', async(_, res) => {
    const words = await prisma.word.findMany()
    res.json(words)
})


app.use(express.json())
app.post('/word', async(req, res) => {
   
    console.log(req.body)
    const { title, audio, image, catID } = req.body
    const word = await prisma.word.create({
        data: {
            title,
            audio,
            image,
            catID
        }
    })
    res.json(word)
})

app.put('/word/:id', async (req, res) => {
    let id = req.params.id
    const { title, audio, image, catID } = req.body
    const word = await prisma.word.update({
        where: {
            id: +id
        },
        data: {
            title,
            image,
            audio,
            catID
        }
    })
    res.json(word)
})

app.delete('/word/:id',async (req, res) => {
    let id = +req.params.id
    const word = await prisma.word.delete({
        where: {
            id
        }
    })
    res.json(word)
})

app.post('/category',async (req, res) => {
    const { name, thumbnail } = req.body
    const category = await prisma.category.create({
        data: {
            name,
            thumbnail
        }
    })
    res.json(category)

})



const server = app.listen(3000, () => console.log("Running server"))
