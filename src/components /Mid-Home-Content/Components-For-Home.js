// import { GIRL } from "../images/images"
import { COMMENTS, LIKES, SHARE, VIEW } from "../images/images";

export default function ComponentTweets({item, deleteTweet}) {

      return(
         <div className="mt-4">
          <div className="d-flex justify-content-between mt-3" >
            <p className="mx-5" style={{fontSize:14, fontWeight:'600'}}>You might like! <span style={{color:'blue'}}>See more!</span></p>
            <button onClick={()=> deleteTweet(item.id)} style={{ height: 25, backgroundColor: "white", border: 'none' }}>X</button>
          </div>
          <div className="d-flex">
            <img style={{width:50, height:50, borderRadius:50}} src={item.img} alt="" />
            <div className="mx-3"><p>{item.authorName} <span>{item.authorUserName}</span></p>
            <p>{item.text}</p></div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex">
              <div style={{ width: 18, height: 18 }}>{COMMENTS}</div>
              <p className="px-2">{item.replic}</p>
            </div>
            <div className="d-flex">
              <div style={{ width: 18, height: 18 }}>{LIKES}</div>
              <p className="px-2">{item.likes}</p>
            </div>
            <div className="d-flex">
              <div style={{ width: 18, height: 18 }}>{VIEW}</div>
              <p className="px-2">{item.retweets}</p>
            </div>
            <div className="d-flex">
              <div style={{ width: 18, height: 18 }}>{SHARE}</div>
            </div>
          </div>
         </div>
       
          
      )
}