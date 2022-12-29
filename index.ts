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
    try {
        const word = await prisma.word.create({
            data: {
                title,
                audio,
                image,
                catID
            }
        })
        res.json(word)
    } catch {
        res.status(500).send('Something broke!')
    }
    
})

app.put('/word/:id', async (req, res) => {
    let id = req.params.id
    const { title, audio, image, catID } = req.body
    try {
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
    } catch {
        res.status(500).send("Something broke")
    }
    
})

app.delete('/word/:id',async (req, res) => {
    let id = +req.params.id
    try {
        const word = await prisma.word.delete({
            where: {
                id
            }
        })
        res.json(word)
    } catch {
        res.status(500).send("Something broke")
    }
    
})

app.get('/category', async (req, res) => {
    const categories = await prisma.category.findMany({
        include: {
            words: true
        }
    })       
    res.json(categories)
})


app.post('/category',async (req, res) => {
    const { name, thumbnail, audio } = req.body
    try {
        const category = await prisma.category.create({
            data: {
                name,
                thumbnail,
                audio
            }
        })
        res.json(category)
    } catch {
        res.status(500).send("Something broke")
    }
    

})

app.put('/category/:id', async (req, res) => {
    try {
        const id = +req.params.id
        const { name, thumbnail, audio } = req.body

        const category = await prisma.category.update({
        where: {
            id
        },
        data: {
            name,
            thumbnail,
            audio
        }
        })

        res.json(category)
    } catch {
        res.status(500).send("Something broke")
    }
    
})

app.delete('/category/:id', async (req, res) => {
    try {
        const id = +req.params.id
    await prisma.word.deleteMany({
         where: {
             catID: id
         }
     })

    const categories = await prisma.category.delete({
        where: {
            id
        }
    })

    res.json(categories)
    } catch {
        res.status(500).send("Something broke")
    }
    
})



const server = app.listen(5174, () => console.log("Running server"))
