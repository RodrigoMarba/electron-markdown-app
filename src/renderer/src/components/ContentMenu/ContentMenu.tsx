import React, { useEffect, useState } from 'react'
import './ContentMenu.scss'
// import { listFiles } from './../../filesManager'

interface Props {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  edit: boolean
}

const ContentMenu: React.FC<Props> = () => {
  const [titles, setTitles] = useState<string[]>(['test 1.md', 'test 2.md'])

  //  useEffect(() => {
  //    listFiles()
  //      .then((titlesList) => {
  //        setTitles(titlesList)
  //      })
  //    .catch((error) => {
  //    console.error('Error reading file names:', error)
  //  })
  //}, [])

  return (
    <div className="viewer">
      <div className="manager">
        <h1 className="title">Table of contents</h1>
        <ul className="list">
          <li className="item-active">Text Markdown example</li>
          {
            // comment
          }
          {titles.map((title) => (
            <li className="item" id="randon" key={Math.random()}>
              {title}
            </li>
          ))}
          {
            //comment
          }
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
