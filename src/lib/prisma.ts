import { PrismaClient } from '@prisma/client'
import { colours } from '@utils/index'
console.log(colours.fg.yellow, 'PRISMA CLIENT INITIALIZED')
export const prisma = new PrismaClient()
