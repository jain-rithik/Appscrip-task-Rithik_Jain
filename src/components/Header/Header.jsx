import React from 'react'
import companyLogo from "../../assets/icons/company-logo.png"
import searchIcon from "../../assets/icons/search-normal.png"
import heartIcon from "../../assets/icons/heart.png"
import shoppingBag from "../../assets/icons/shopping-bag.png"
import profileIcon from "../../assets/icons/profile.png"
import downArrow from "../../assets/icons/down-arrow.png"
import AnnouncementBar from './AnnouncementBar'
import "./Header.css"

const Header = () => {
  return (
    <div>
        <AnnouncementBar />
        <div className='main-header'>
            <div className='top-header'>
                <img src={companyLogo} alt="company's logo" />
                <h1>LOGO</h1>
                <div className='header-nav-icons'>
                    <img src={searchIcon} alt="search icon" />
                    <img src={heartIcon} alt="heart icon" />
                    <img src={shoppingBag} alt="shopping bag icon" />
                    <img src={profileIcon} alt="user profile icon" />
                    <span>
                        <b>ENG</b>
                        <img src={downArrow} alt="down arrow icon" />
                    </span>
                </div>
            </div>
            <div className='bottom-header'>
                <ul>
                    <li>SHOP</li>
                    <li>SKILLS</li>
                    <li>STORIES</li>
                    <li>ABOUT</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header