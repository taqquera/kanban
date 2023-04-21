import React, {useState, useEffect} from 'react'

const DragItem = ({data}) => {

    let  [todos, setTodos] = useState([])
    let {issueTitle, id, date, author, comments} = data
  

  return (
    <div className='dragItem'>
        <div className='itemWrapper'>
            <h3>{issueTitle}</h3>
            <span>{id}</span>
            <span> {date}</span>
            <span>{author}</span>
            <span>{comments}</span>
        </div>
      
    </div>
  )
}

export default DragItem
