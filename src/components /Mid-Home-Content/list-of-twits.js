import ComponentTweets from "./Components-For-Home";



export default function ListOfTweets({tweets, deleteTweet}) {
// console.log(deleteTweet)
 return tweets.map((item) => <ComponentTweets item={item} key={item.id} 
 deleteTweet={deleteTweet} /> )
  
}