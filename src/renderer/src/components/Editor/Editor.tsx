import React, { useCallback, useEffect, Dispatch, SetStateAction } from 'react'
import './editor.scss'
import useCodeMirror from './../Helper/useCodeMirror'

interface Props {
  initialDoc: string
  onChange: (doc: string) => void
  setText: Dispatch<SetStateAction<string>>
}

const Editor: React.FC<Props> = (props) => {
  const { onChange, initialDoc, setText } = props

  const handleChange = useCallback(
    (state: any) => {
      onChange(state.doc.toString())
    },
    [onChange]
  )

  const [refContainer, editorView] = useCodeMirror<HTMLDivElement>({
    initialDoc: initialDoc,
    onChange: handleChange
  })

  useEffect(() => {
    if (editorView) {
      // Do nothing
      setText('text')
      console.log('ALTERAÇÃO NO EDITORVIEW')
    }
  }, [editorView])

  return <div className="editor-wrapper animeRight" ref={refContainer}></div>
}

export default Editor
