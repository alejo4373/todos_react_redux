import React, { useState, useEffect, useRef } from 'react'
import '../../styles/MoreMenu.css'

export const MoreMenu = ({ handleEditClick, handleDeleteClick }) => {
  const moreMenuWrapperRef = useRef(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.addEventListener("click", handleClickOutside)
    else document.removeEventListener("click", handleClickOutside)

    return () => document.removeEventListener("click", handleClickOutside)
  }, [open])

  const toggleMoreMenu = () => {
    setOpen(!open)
  }

  const handleClickOutside = (e) => {
    setOpen(false)
  }

  const handleEdit = (e) => {
    // handleEditClick(e)
    console.log('edit clicked')
  }

  const handleDelete = (e) => {
    // handleDeleteClick(e)
    console.log('delete clicked')
  }

  return (
    <div ref={moreMenuWrapperRef}>
      <button className="more-btn" onClick={toggleMoreMenu}>
        <img src="/icons/more.png" alt="more menu" />
      </button>

      <div className={`more-menu ${open && "more-menu--open"}`}>
        <button className="more-menu__btn" onClick={handleEdit}>
          <img className="more-menu__icon" src="/icons/pencil-edit.png" alt="edit pencil" />
          <span className="more-menu__label">Edit</span>
        </button>
        <button className="more-menu__btn" onClick={handleDelete}>
          <img className="more-menu__icon" src="/icons/trash.png" alt="edit pencil" />
          <span className="more-menu__label" >Delete</span>
        </button>
      </div>
    </div>
  )
}
