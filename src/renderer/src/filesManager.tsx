import fs from 'fs'
import path from 'path'

export function listFiles(): Promise<string[]> {
  const folderPath = path.resolve(__dirname, './Content')
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err)
      } else {
        const fileNames = files.filter((file) => {
          return fs.statSync(path.join(folderPath, file)).isFile()
        })
        resolve(fileNames)
      }
    })
  })
}
