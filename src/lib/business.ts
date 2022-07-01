import { prisma } from './prisma'
import { colours } from '@utils/index'
import { Prisma } from '@prisma/client'

export const business = {
  async create(data: Prisma.BusinessCreateInput) {
    console.log(colours.fg.cyan, 'wait:', colours.reset, 'business.create...')
    try {
      const res = await prisma.business.create({
        data: {
          ...data,
        },
      })
      console.log(colours.fg.green, '> SUCCESS (business.create)')
      return res
    } catch (e) {
      console.log(colours.fg.red, '> ERROR (business.create)')
    }
  },
  async get(options: Prisma.BusinessFindManyArgs) {
    console.log(colours.fg.cyan, 'wait:', colours.reset, 'business.get...')
    try {
      const res = await prisma.business.findMany({
        ...options,
      })
      console.log(colours.fg.green, '> SUCCESS (business.get)')
      return res
    } catch (e) {
      console.log(colours.fg.red, '> ERROR (business.get)')
    }
  },
  async update(id: string, data: Prisma.BusinessUpdateInput) {
    console.log(colours.fg.cyan, 'wait:', colours.reset, 'business.update...')
    try {
      const res = await prisma.business.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      })
      console.log(colours.fg.green, '> SUCCESS (business.update)')
      return res
    } catch (e) {
      console.log(colours.fg.red, '> ERROR (business.update)')
    }
  },
}
