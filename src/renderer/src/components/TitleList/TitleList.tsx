import React from 'react'
import './TitleList.scss'
import { useEdition } from '@renderer/Hooks/useEdition'

interface Props {
  titles: string[]
  activeIndex?: number
  handleClick: (title: string, index: number) => void
}

const TitleList: React.FC<Props> = ({ titles, activeIndex, handleClick }) => {
  const { renameDocument } = useEdition()

  const handleEdit = (filename, newFilename) => {
    // rename method
    renameDocument(filename, newFilename)
  }

  const handleDelete = () => {
    // delete method
  }

  return (
    <ul className="list">
      {titles.map((title, index) => (
        <li
          className={index === activeIndex ? 'item-active' : 'item'}
          key={index}
          onClick={() => handleClick(title, index)}
        >
          {title}
          {index === activeIndex && (
            <div className="edit-buttons">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="edit rename"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="edit delete"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                <line x1="10" y1="11" x2="10" y2="17"></line>
                <line x1="14" y1="11" x2="14" y2="17"></line>
              </svg>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TitleList
