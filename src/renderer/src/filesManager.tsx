// const path = window.require('path')
const fs = window.require('fs')

export async function listFiles(): Promise<string[]> {
  const folderPath = './Content'

  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        reject(err)
      } else {
        let fileNames: string[] = []
        files.forEach((file) => {
          fileNames.push(file.replace('.md', ''))
        })
        resolve(fileNames)
      }
    })
  })
}

export async function getContent(item: string): Promise<string> {
  const filePath = `./Content/${item}.md`

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

export async function saveDocument(filename: string, doc: string) {
  console.log('started')
  const file = `./Content/${filename}.md`

  fs.writeFile(file, doc, (err) => {
    if (err) {
      throw new Error(err)
    }
  })
  console.log('ended')
}

//export async function saveDocument(filename: string, doc: string) {
//  console.log('started')
//  const file = filename + '.md'
//  let writer = fs.createWriteStream(file)
//  writer.write(doc)
//  console.log('ended')
//}
