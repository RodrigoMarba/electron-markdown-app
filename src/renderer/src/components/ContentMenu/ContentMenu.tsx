import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import './ContentMenu.scss'
import { useEdition } from '@renderer/Hooks/useEdition'
import TitleList from '../TitleList/TitleList'

interface Props {
  setText: Dispatch<SetStateAction<string>>
  setEdit: Dispatch<SetStateAction<boolean>>
  text: string
}

const ContentMenu: React.FC<Props> = ({ text, setText, setEdit }) => {
  const [titles, setTitles] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState<number>()
  const [newTitle, setNewTitle] = useState<string>('')
  const [create, setCreate] = useState<boolean>(false)

  const { listFiles, createDocument } = useEdition()

  useEffect(() => {
    async function getFiles() {
      listFiles()
        .then((titlesList) => {
          setTitles(titlesList)
        })
        .catch((error) => {
          console.error('Error reading file names:', error)
        })
    }
    getFiles()
  }, [text, setText])

  const changeText = (title: string, index: number) => {
    setEdit(false)
    setActiveIndex(index)
    setText(title)
  }

  function handleCreate(newTitle) {
    createDocument(newTitle)
      .then(() => {
        setCreate(false)
        setEdit(false)
        setNewTitle('')
        listFiles()
          .then((titlesList) => {
            setTitles(titlesList)
            console.log('Updated titles:', titlesList)

            const newIndex = titlesList.findIndex((title) => title === newTitle)
            console.log('New index:', newIndex)
            setText(newTitle)
            setActiveIndex(newIndex)
          })
          .catch((error) => {
            console.error('Error reading file names:', error)
          })
      })
      .catch((error) => {
        console.error('Error creating document:', error)
      })
  }

  return (
    <div className="viewer">
      <div className="manager">
        <div className="create-container">
          {create ? (
            <div
              onClick={(e) => {
                if (e.target != e.currentTarget) {
                  setCreate(false)
                }
              }}
            >
              <input
                autoFocus
                className="create-input"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    handleCreate(newTitle)
                  }
                }}
              />
            </div>
          ) : (
            <button onClick={() => setCreate(true)} className="create-button">
              Create new +
            </button>
          )}
        </div>
        <TitleList
          titles={titles}
          setText={setText}
          activeIndex={activeIndex}
          changeText={changeText}
        />
      </div>
    </div>
  )
}

export default ContentMenu
