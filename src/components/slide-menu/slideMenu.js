import './slideMenu.css';
import SlideMenuList from './slide-menu-list';
import {BOOK_SVG, CAMERA_SVG, PHOTO_SVG, VIDEO_SVG, BOOKMARKS_SVG } from './images/images';

const SlideMenu = () => {
  const icon = [
    {
      img: BOOK_SVG,
      name: 'Home'
    },
    {
      img: CAMERA_SVG,
      name: 'Explore'
    },
    {
      img: PHOTO_SVG,
      name: 'Notifications'
    },
   
    {
      img: VIDEO_SVG,
      name: 'Message'
    },
    {
      img: BOOKMARKS_SVG,
      name: 'Bookmarks'
    }

  ]

  return (
    < div className="menu-box w-25 mt-3 mx-5">
      <img src={require('./images/twitter.png')} className="logo mb-2" alt="" />
       {icon.map((item, index) => <SlideMenuList item={item} key={index}/>)}
    </ div>
  )
}



export default SlideMenu;