import { COMMENTS, LIKES, VIEW, SHARE } from "../images";


const Tweet = (item) => {
  console.log(item)
  return (
    <div className="mt-3 mx-3">
      <p className="mx-5" style={{ fontSize: 13, fontWeight: 600 }}>You might like! <span style={{color:"blue"}}>See More!</span></p>
      <div className="d-flex">
        <img src={item.img} alt="" style={{ width: 50, height: 50, borderRadius: 50 }} />
        <div className="mx-3" >
          <p>{item.authorName} <span style={{color: 'grey'}}>{item.authroUsername}</span></p>
          <p>{item.content}</p>
        </div>
      </div>
      <div className="d-flex justify-content-around ">
        <div className="d-flex">
          <div style={{width:20, height:20}}>{COMMENTS}</div>
          <p className="px-1">{item.replies}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{LIKES}</div>
          <p className="px-1">{item.likes}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{VIEW}</div>
          <p className="px-1">{item.replies}</p>
        </div>
        <div className="d-flex">
          <div style={{ width: 20, height: 20 }}>{SHARE}</div>
          <p className="px-1">{item.retweets}</p>
        </div>
        
            </div>
      </div>
  )
}
export default Tweet;