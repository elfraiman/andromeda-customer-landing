import { PrismaClient as PrismaClientApp } from './../../prisma/generated/app'
import { PrismaClient as PrismaClientBase } from './../../prisma/generated/base'


export const prisma = new PrismaClientApp();
export const prismaGeneralDb = new PrismaClientBase();