import { AKTER } from "../images/images"

export default function NewTweet({ content, onChangeInput, addToTweets }) {

  return(
      <div className="mt-3 my-5" style={{borderBottom: '2px solid whitesmoke'}} >
        <img  style={{width:50, height:50, borderRadius:50}} src={AKTER} alt="" />
      <input onChange={onChangeInput} value={content} style={{border: 'none', fontSize:18, outline: 'none'}} className="mx-3" type="text" placeholder="What`s Happening" />
      <button onClick={addToTweets} style={{borderRadius:50, backgroundColor:'black', color: 'white'}}>TEXT</button>
      </div>
  )
};