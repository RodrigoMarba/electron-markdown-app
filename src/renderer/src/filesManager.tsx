const path = window.require('path')
const fs = window.require('fs')

export async function listFiles(): Promise<string[]> {
  const folderPath = './Content'

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

export function getContent(item: string): Promise<string> {
  const filePath = `./Content/${item}`

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        throw new Error(err)
        reject(err)
      } else {
        const text = data
        resolve(text)
      }
    })
  })
}
