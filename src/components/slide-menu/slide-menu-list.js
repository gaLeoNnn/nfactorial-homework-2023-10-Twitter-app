
 const SlideMenuList = ({item, key}) => {
  console.log(item);
  return(
    <div className='d-flex my-4'>
      <div className='' style={{ width: 28, height: 28 }}>
         {item.img}
      </div>
      <p className='mx-3'>{item.name}</p>
    </div>
  )
}
export default SlideMenuList;