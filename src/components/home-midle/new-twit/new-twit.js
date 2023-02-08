import { DELIVERY } from '../images'

const NewTwit = ({content, onChangeTextInput, onTweet}) => {
  return(
    <div className="p-3" style={{ borderBottom: '2px solid whitesmoke'}}>
      <img src={DELIVERY} alt="" style={{width: 50, height:50, borderRadius: 50}}/>
      <input onChange={onChangeTextInput} value={content} type="text" placeholder='Whats happening?' style={{ border: 0, fontSize:18, outline:'none' }} className="mx-3" />
      <button onClick={onTweet} className='mx-3'>Text </button>
    </div>
  )
}

export default NewTwit;