import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import './ContentMenu.scss'
import { useEdition } from '@renderer/Hooks/useEdition'
import TitleList from '../TitleList/TitleList'

interface Props {
  setText: Dispatch<SetStateAction<string>>
  setEdit: Dispatch<SetStateAction<boolean>>
}

const ContentMenu: React.FC<Props> = ({ setText, setEdit }) => {
  const [titles, setTitles] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState<number>()

  const { listFiles } = useEdition()

  useEffect(() => {
    listFiles()
      .then((titlesList) => {
        setTitles(titlesList)
        console.log('reprocessou a lista de arquivos!')
      })
      .catch((error) => {
        console.error('Error reading file names:', error)
      })
  }, [])

  const handleClick = (title: string, index: number) => {
    setEdit(false)
    setActiveIndex(index)
    setText(title)
    console.log('setText: ', title)
  }

  return (
    <div className="viewer">
      <div className="manager">
        <div className="create-container">
          <button className="create-button">Create new +</button>
        </div>
        <TitleList titles={titles} activeIndex={activeIndex} handleClick={handleClick} />
      </div>
    </div>
  )
}

export default ContentMenu
