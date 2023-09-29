import { useState, useEffect } from 'react'
import './App.scss'
import Editor from './components/Editor/Editor'
import Preview from './components/Preview/Preview'
import ContentMenu from './components/ContentMenu/ContentMenu'

import { useEdition } from './Hooks/useEdition'

const App: React.FC = () => {
  const [edit, setEdit] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  const { getContent, saveDocument } = useEdition()

  function handleClick() {
    setEdit(!edit)
  }

  const [doc, setDoc] = useState<string>(
    '# Hello, World!\n\nThis is my text editor desktop App\n> It was created to edit markdown text\n\n```js\nfunction myFunction() {\n console.log("You can use it for code notes")\n}\n```\n\n### Create diferent kinds of lists\n\n- normal list\n- of items\n\n1. or create a \n2. numeric list\n\n- [x] create a to do list\n- [ ] with items you should do\n\n\n**And overall create text take notes and use it as you wish.**'
  )

  useEffect(() => {
    if (text) {
      console.log('useEffect get text: ', text)
      getContent(text)
        .then((content) => {
          setDoc(content.toString())
          console.log(text)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [text])

  const handleDocChange = (newDoc: string) => {
    setDoc(newDoc)
    console.log('handleDocChange saveDocument: ', text)
    saveDocument(text, newDoc)
  }

  return (
    <div className="app">
      <ContentMenu setText={setText} setEdit={setEdit} />
      {edit ? <Editor onChange={handleDocChange} initialDoc={doc} /> : <Preview doc={doc} />}
      <div className="text-controller">
        {text && (
          <button className="button-text-controller" onClick={handleClick}>
            {edit ? 'Preview' : 'Edit'}
          </button>
        )}
      </div>
    </div>
  )
}

export default App
