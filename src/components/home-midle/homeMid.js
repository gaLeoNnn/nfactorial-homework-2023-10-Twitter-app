import NewTwit from "./new-twit/new-twit";
import TwitsList from "./twits-list/twits-list";
import { DELIVERY, LEAF, WATCH } from "./images";
import React from "react";


class HomeMid extends React.Component {
  constructor() {
    super()
    this.state = {
      content: '',
      twits: [
        {
          id: 1,
          authorName: 'Free KZ today',
          authroUsername: '@kz',
          img: LEAF,
          content: 'Alibek says he has not conasdhahsdkasdpsadkjsakdjaslkdkasdasldkas',
          replies: 200,
          retweets: 1000,
          likes: 500

        },
        {
          id: 2,
          authorName: 'nFactorial',
          authroUsername: '@nfactroial',
          img: WATCH,
          content: 'HELLO GUYS HOW ARE YOU',
          replies: 200,
          retweets: 1000,
          likes: 500

        },
        {
          id: 3,
          authorName: 'nFactorial',
          authroUsername: '@nfactroial',
          img: WATCH,
          content: 'HELLO GUYS HOW ARE YOU',
          replies: 200,
          retweets: 1000,
          likes: 500

        },
        {
          id: 4,
          authorName: 'nFactorial',
          authroUsername: '@nfactroial',
          img: WATCH,
          content: 'HELLO GUYS HOW ARE YOU',
          replies: 200,
          retweets: 1000,
          likes: 500

        },
        { id:5,
          authorName: 'nFactorial',
          authroUsername: '@nfactroial',
          img: WATCH,
          content: 'HELLO GUYS HOW ARE YOU',
          replies: 200,
          retweets: 1000,
          likes: 500

        },
      ]
    }
    
  }


  onChangeTextInput = (e) => {
    console.log(e)
    this.setState({
      content: e.target.value,
    })
  }
  addToTwits = () => {
    console.log('hi')
    const newTweet = {
      id: 0,
      authorName: 'Ali',
      authroUsername: '@nfactroial',
      img: DELIVERY,
      content: this.state.content,
      replies: 0,
      retweets: 0,
      likes: 0

    }
    this.setState({
      twits: [...this.state.twits, newTweet],
      content: ''
    })
  }
  deleteTweet = (id) => {
    console.log('hi', id)
    this.setState({
      twits: this.state.twits.filter(item => item.id != id)
    })
  }


  render() {
const {twits, content} = this.state;


    return (
      <div className="w-50 mt-3">
        <div>
          <button onClick={this.decrement}>Decrement</button>
          <p>{this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
        </div>
        <h3 className="mx-3">Home</h3>
        <NewTwit content={content} 
        onChangeTextInput={this.onChangeTextInput}
         onTweet={this.addToTwits}/>
        <TwitsList twits={twits} deleteTweet={this.deleteTweet}/>
      </div>
    )

  }
}




export default HomeMid;