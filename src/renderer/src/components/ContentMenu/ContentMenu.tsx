import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import './ContentMenu.scss'
import { listFiles } from './../../filesManager'

interface Props {
  //handleClick: React.MouseEventHandler<HTMLButtonElement>
  setText: Dispatch<SetStateAction<string>>
  setEdit: Dispatch<SetStateAction<boolean>>
}

const ContentMenu: React.FC<Props> = ({ setText, setEdit }) => {
  const [titles, setTitles] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState<number>()

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
  }

  return (
    <div className="viewer">
      <div className="manager">
        <h1 className="title">Table of contents</h1>
        <ul className="list">
          {titles.map((title, index) => (
            <li
              className={index === activeIndex ? 'item-active' : 'item'}
              key={index}
              onClick={() => handleClick(title, index)}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
      <div className="create-container">
        <button className="create-button" disabled>
          to do +
        </button>
      </div>
    </div>
  )
}

export default ContentMenu
