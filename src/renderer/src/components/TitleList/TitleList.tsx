import React, { useState } from 'react'
import './TitleList.scss'
import { useEdition } from '@renderer/Hooks/useEdition'

interface Props {
  titles: string[]
  activeIndex?: number
  handleClick: (title: string, index: number) => void
  setText: (text: string) => void
}

const TitleList: React.FC<Props> = ({ titles, setText, activeIndex, handleClick }) => {
  const { renameDocument, deleteDocument } = useEdition()

  const [filenameEdit, setFilenameEdit] = useState(false)

  const handleChange = (title, e) => {
    renameDocument(title, e.target.value)
    setText(e.target.value)
  }

  const handleDelete = (title) => {
    deleteDocument(title)
    console.log(titles[0])
    setText(titles[0])
  }

  return (
    <ul className="list">
      {titles.map((title, index) => (
        <li
          className={index === activeIndex ? 'item-active' : 'item'}
          key={index}
          onClick={() => handleClick(title, index)}
        >
          {filenameEdit && index === activeIndex ? (
            <input type="text" value={title} onChange={(e) => handleChange(title, e)} />
          ) : (
            title
          )}

          {index === activeIndex && !filenameEdit && (
            <div className="edit-buttons">
              <svg
                onClick={() => setFilenameEdit(true)}
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
                onClick={() => handleDelete(title)}
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

          {index === activeIndex && filenameEdit && (
            <div className="edit-buttons">
              <svg
                onClick={() => setFilenameEdit(false)}
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="edit checkmark"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="5,12 10,17 19,6"></polyline>
              </svg>
              <svg
                onClick={() => setFilenameEdit(false)}
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="edit xmark"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="5" y1="19" x2="19" y2="5"></line>
                <line x1="5" y1="5" x2="19" y2="19"></line>
              </svg>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TitleList
