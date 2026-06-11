import fs from 'fs'
import path from 'path'

const DB_PATH = path.join(__dirname, '../db.json')

export function readDB() {
  const raw = fs.readFileSync(DB_PATH, 'utf-8')
  return JSON.parse(raw)
}

export function writeDB(data: object) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
}