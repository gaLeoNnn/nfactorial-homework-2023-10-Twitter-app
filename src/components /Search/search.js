

export default function SearchSide({content, addInputValue, filterTopic}) {
  
return(
  <div>
    <input onChange={addInputValue} value={content} type="text" placeholder=" Search" style={{borderRadius:50, marginTop:'20px', marginLeft:'10px'}} />
    <button onClick={filterTopic} style={{borderRadius:30, marginLeft:'10px'}}>Search</button>
  </div>
    

)

}