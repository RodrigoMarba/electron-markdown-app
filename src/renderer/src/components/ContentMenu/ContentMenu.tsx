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

  const { listFiles } = useEdition()

  useEffect(() => {
    async function getFiles() {
      console.log('useEffect listFiles() ')
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

  return (
    <div className="viewer">
      <div className="manager">
        <div className="create-container">
          <button className="create-button">Create new +</button>
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
