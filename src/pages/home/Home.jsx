import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
// import { BsFillPersonFill } from 'react-icons/bs';


const Home = () => {
  return (
    <>
        <Topbar />
        <div className="homecontainer">
          <Sidebar />
          <Feed />
          <Rightbar />

        </div>
    </>
  )
}

export default Home