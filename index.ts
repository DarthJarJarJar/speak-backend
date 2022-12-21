import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.get('/', async(_, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})


app.use(express.json())
app.post('/user', async(req, res) => {
   console.log("hi")
    console.log(req.body)
    const { name, email } = req.body
    const user = await prisma.user.create({
        data: {
            name,
            email
        }
    })
    res.json(user)
})


const server = app.listen(3000, () => console.log("Running server"))
