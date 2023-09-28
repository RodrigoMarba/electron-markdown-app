import { useCallback, useState, useEffect } from 'react'
import './App.scss'
import Editor from './components/Editor/Editor'
import Preview from './components/Preview/Preview'
import ContentMenu from './components/ContentMenu/ContentMenu'
import { getContent } from './filesManager'

const App: React.FC = () => {
  const [edit, setEdit] = useState<boolean>(false)
  const [text, setText] = useState<string>('')

  function handleClick() {
    setEdit(!edit)
  }

  const [doc, setDoc] = useState<string>('')

  useEffect(() => {
    const data = text == null ? 'text.md' : text
    getContent(data)
      .then((content) => {
        setDoc(content.toString())
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [text])

  const handleDocChange = useCallback((newDoc: string) => {
    setDoc(newDoc)
  }, [])

  return (
    <div className="app">
      <ContentMenu setText={setText} />
      {edit ? <Editor onChange={handleDocChange} initialDoc={doc} /> : <Preview doc={doc} />}
      <div className="text-controller">
        <button className="button-text-controller" onClick={handleClick}>
          {edit ? 'Preview' : 'Edit'}
        </button>
      </div>
    </div>
  )
}

export default App
