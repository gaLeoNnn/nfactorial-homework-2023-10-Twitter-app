import './left-side-menu.css'
import { BIRD_PNG } from "../images/images"
import { HOME_SVG, EXPLORE_SVG, NOTIFICATION_SVG, BOOKMARKS_SVG, MESSAGE_SVG } from '../images/images'
import ComponentMenu from './component-for-menu'



export default function LeftSideMenu() {
  const menu = [
    {
      icon: HOME_SVG,
      text: "Home"
    },
    {
      icon: EXPLORE_SVG,
      text: 'Explore'
    },
    {
      icon: NOTIFICATION_SVG,
      text: 'Notification'
    },
    {
      icon: BOOKMARKS_SVG,
      text: "Bookmarks"
    },
    {
      icon: MESSAGE_SVG,
      text: "Message"
    },
  ]


  return (
    <div className="w-25 mt-3 mx-5">
      <img className='logo-icon' src={BIRD_PNG} alt="" />
      {menu.map((item, index) => (<ComponentMenu item={item} key={index}/> ))}
    </div>
  )
} 