

export default function ComponentMenu ({item}) {

  return(
    <div className='d-flex mt-4'>
      <div style={{ width: 30, height: 30 }}>
        {item.icon}
      </div>
      <p className='mx-3' style={{ fontSize: 20, color: 'black' }} >{item.text}</p>
    </div>
  )
}