import "./topbar.css"
import { BsSearch, BsFillPersonFill, BsFillChatLeftTextFill } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';

const Topbar = () => {
  return (
    <div className="topbarContainer">

      {/* Left Bar */}
      <div className="topbarLeft">
        <span className="logo">Social Media</span>
      </div>

      {/* Center bar */}
      <div className="topbarCenter">
        <div className="searchBar">
          <BsSearch className="searchIcon" />
          <input className="searchInput" placeholder="Search for friend & post" />
        </div>
      </div>

      {/* Right Bar */}
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <BsFillPersonFill/>
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <BsFillChatLeftTextFill/>
            <span className="topbarIconBadge">5</span>
          </div>
          <div className="topbarIconItem">
            <MdNotifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  )
}

export default Topbar