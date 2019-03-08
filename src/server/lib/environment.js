import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'

if(!fs.existsSync(path.join('.env'))) {
  console.log('Could not find .env!')
  process.exit()
}

dotenv.load({ path: path.join('.env') })
