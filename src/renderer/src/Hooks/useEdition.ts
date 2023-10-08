export const useEdition = () => {
  const fs = window.require('fs')

  async function listFiles(): Promise<string[]> {
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

  async function getContent(item: string): Promise<string> {
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

  async function saveDocument(filename: string, doc: string) {
    const file = `./Content/${filename}.md`

    fs.writeFile(file, doc, (err) => {
      if (err) {
        throw new Error(err)
      }
    })
  }

  async function renameDocument(filename: string, newFilemane: string) {
    const filePath = `./Content/${filename}.md`
    const newFilePath = `./Content/${newFilemane}.md`

    fs.rename(filePath, newFilePath, (err) => {
      console.log(filename, 'renamed => ', newFilemane)
      if (err) throw new Error(err)
    })
  }

  async function deleteDocument(filename: string) {
    const filePath = `./Content/${filename}.md`

    fs.unlink(filePath, (err) => {
      console.log('Deleted file: ', filename)
      if (err) throw new Error(err)
    })
  }

  async function createDocument(filename: string) {
    const filePath = `./Content/${filename}.md`

    fs.appendFile(filePath, `# ${filename}`, (err) => {
      if (err) throw new Error(err)
    })
  }

  return {
    listFiles,
    getContent,
    saveDocument,
    renameDocument,
    deleteDocument,
    createDocument
  }
}
