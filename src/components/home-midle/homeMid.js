import NewTwit from "./new-twit/new-twit";
import TwitsList from "./twits-list/twits-list";




const HomeMid = () => {
  return(
    <div className="w-50 mt-3">
      <h3 className="mx-3">Home</h3>
      <NewTwit/>
      <TwitsList/>
    </div>
  )
}

export default HomeMid;