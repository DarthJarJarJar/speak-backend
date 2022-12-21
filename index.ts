import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const app = express()

app.get('/', async(_, res) => {
    const users = await prisma.user.findMany()
    res.json(users)
})

const server = app.listen(3000)
