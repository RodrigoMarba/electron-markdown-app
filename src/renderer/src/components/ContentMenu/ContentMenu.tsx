import React, { useEffect, useState, Dispatch, SetStateAction } from 'react'
import './ContentMenu.scss'
import { listFiles } from './../../filesManager'

interface Props {
  //handleClick: React.MouseEventHandler<HTMLButtonElement>
  setText: Dispatch<SetStateAction<string>>
}

const ContentMenu: React.FC<Props> = ({ setText }) => {
  const [titles, setTitles] = useState<string[]>([])
  const [activeIndex, setActiveIndex] = useState<number>()

  useEffect(() => {
    listFiles()
      .then((titlesList) => {
        setTitles(titlesList)
      })
      .catch((error) => {
        console.error('Error reading file names:', error)
      })
  }, [])

  const handleClick = (title, index) => {
    setActiveIndex(index)
    console.log(title)
    setText(title)
    console.log('onChild e os caralhos')
  }

  return (
    <div className="viewer">
      <div className="manager">
        <h1 className="title">Table of contents</h1>
        <ul className="list">
          {titles.map((title, index) => (
            <li
              className={index === activeIndex ? 'item-active' : 'item'}
              id="randon"
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
