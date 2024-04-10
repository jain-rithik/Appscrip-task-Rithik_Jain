import React from 'react'
import announcement_bar_icon from "../../assets/icons/announcement_bar_logo.png"
import "./AnnouncementBar.css"

const Announcement_Bar = () => {
  return (
    <div className='announcement-bar'>
      <div className='announcement-bar-item'>
        <img src={announcement_bar_icon} alt="announcement bar icon" />
        <p>Lorem ipsum dolor</p>
      </div>
      <div className='announcement-bar-item m-hide-announcement-item'>
      <img src={announcement_bar_icon} alt="announcement bar icon" />
        <p>Lorem ipsum dolor</p>
      </div>
      <div className='announcement-bar-item hide-announcement-item'>
      <img src={announcement_bar_icon} alt="announcement bar icon" />
        <p>Lorem ipsum dolor</p>
      </div>
    </div>
  )
}

export default Announcement_Bar