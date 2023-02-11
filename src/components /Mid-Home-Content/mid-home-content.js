import NewTweet from "../New_Tweet/new-tweet";
import ListOfTweets from "./list-of-twits";
import SearchSide from "../Search/search";
import { GIRL, GLASMEN, MEN, } from '../images/images';
import { Component } from "react";
import './style.css'



export default class MidHomeContent extends Component {
  constructor() {
    super();
    this.state = {
      filter: '',
      content: '',
      tweets: [
        {
          id: 0,
          authorName: 'Cameron Dias',
          authorUserName: 'USA',
          img: GIRL,
          text: 'These words of Cicely Berry the voice director of the Royal Shakespeare Company speak to anyone who needs to speak his or her piece ä in any arena at sales meetings or religious revivals.',
          retweets: 1304,
          replic: 200,
          likes: 500,
          topic: 'politics'

        },
        {
          id: 1,
          authorName: 'Bradly Cooper',
          authorUserName: 'Africa',
          img: GLASMEN,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tenetur temporibus quod accusantium nemo voluptatem! Maiores et aliquam neque labore debitis dolorum, sequi tenetur provident, aliquid autem voluptatum ipsa cupiditate.',
          retweets: 30,
          replic: 20,
          likes: 300,
          topic: 'sport'

        },
        {
          id: 2,
          authorName: 'BORAT',
          authorUserName: 'KZ',
          img: MEN,
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis praesentium suscipit similique sapiente minima asperiores mollitia nostrum hic, maxime veniam blanditiis. Suscipit itaque deserunt iusto dignissimos dicta blanditiis, voluptatibus animi!',
          retweets: 130,
          replic: 10,
          likes: 5,
          topic: 'education'

        },
      ],
      
    }
  }

  onChangeInput = (e) => {

    this.setState({
      content: e.target.value
    })
  }
  addToTweets = () => {
    const nt = {
      id: this.state.tweets.length,
      authorName: 'ALI',
      authorUserName: '@zhanabekov',
      img: MEN,
      text: this.state.content,
      retweets: 0,
      replic: 0,
      likes: 0
    }
    this.setState({
      tweets: [nt, ...this.state.tweets],
      content: ''
    })
  }

  deleteTweet = (event) => {
    this.setState({
      tweets: this.state.tweets.filter((item) => item.id !== event)
    })
  }

  addInputValue = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  filterTopic = () => {
    this.setState({
      tweets: this.state.tweets.filter((item) => {
        return item.topic === this.state.filter
      })
    })
  }

  render() {
    const { tweets, content } = this.state
    return (
      <div className="mt-3 mx-3" style={{ width: 700 }}>
        <h5>Home</h5>
        <NewTweet content={content} onChangeInput={this.onChangeInput} addToTweets={this.addToTweets} />
        <ListOfTweets deleteTweet={this.deleteTweet} tweets={tweets} />
        <SearchSide content={this.content} addInputValue={this.addInputValue} filterTopic={this.filterTopic} />
      </div>

    )
  }
}

