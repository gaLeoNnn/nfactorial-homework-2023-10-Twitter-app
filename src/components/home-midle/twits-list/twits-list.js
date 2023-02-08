import { DELIVERY, LEAF, WATCH } from "../images";
import Tweet from "./tweet";




const TwitsList = ({twits, deleteTweet}) => {
  
  return (
    twits.map((item, index) => (
      <Tweet item={item} key={index} deleteTweet={deleteTweet}/>
    ))
  )
}

export default TwitsList;