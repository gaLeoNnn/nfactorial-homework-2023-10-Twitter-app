import { DELIVERY, LEAF, WATCH } from "../images";
import Tweet from "./tweet";
const TwitsList = ()=> {
  const twits = [
    {
      authorName: 'Free KZ today',
      authroUsername: '@kz',
      img: LEAF,
      content: 'Alibek says he has not conasdhahsdkasdpsadkjsakdjaslkdkasdasldkas',
      replies: 200,
      retweets: 1000,
      likes: 500
      
    },
    {
      authorName: 'nFactorial',
      authroUsername: '@nfactroial',
      img: WATCH,
      content: 'HELLO GUYS HOW ARE YOU',
      replies: 200,
      retweets: 1000,
      likes: 500

    },
    {
      authorName: 'nFactorial',
      authroUsername: '@nfactroial',
      img: WATCH,
      content: 'HELLO GUYS HOW ARE YOU',
      replies: 200,
      retweets: 1000,
      likes: 500

    },
    {
      authorName: 'nFactorial',
      authroUsername: '@nfactroial',
      img: WATCH,
      content: 'HELLO GUYS HOW ARE YOU',
      replies: 200,
      retweets: 1000,
      likes: 500

    },
    {
      authorName: 'nFactorial',
      authroUsername: '@nfactroial',
      img: WATCH,
      content: 'HELLO GUYS HOW ARE YOU',
      replies: 200,
      retweets: 1000,
      likes: 500

    },
  ]
  return(
   twits.map((item, index) => (
    <Tweet {...item} key={index}/>
   ))
  )
}

export default TwitsList;