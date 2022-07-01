import { Prisma } from '@prisma/client'

export type BusinessExtended = Prisma.BusinessGetPayload<{
  include: {
    people: {
      include: {
        executives: true
        founders: true
        investors: true
      }
    }
    employees: true
    social: true
    contact: true
  }
}>
