import react, { useState} from "react";
import Searchbtn from "./Searchbtn";
import Searchbar from "./Searchbar"
function Search() {
  const [allData, setAllData] = useState([]);
  const [text , setText] = useState('')

  const apiGet = (textValue) => {
    setText(textValue)
    fetch(`https://g.tenor.com/v1/search?q=${textValue}&key=LIVDSRZULELA&limit=6`)
      .then((response) => response.json())
      .then((json) => {
        const gif = (json.results);
        if (textValue == '') {
          setAllData([])
          return
        }
        setAllData(gif);
      });
     
  };
  return (
    <div className="main">
      <h1>Search For GIF's</h1>
    <Searchbar  text= {text} GetInput = {apiGet} />
      <Searchbtn Getvalue={apiGet} />
     
      {allData.length == 0 ?
        <h1 className="search-alert" >No GIF Found</h1>
        :
        <div style={{ textAlign: 'center' }} className="searchdata">

          {allData.map((item) => {
            return (
              <div className="maindata">
                <h4>{item.content_description}</h4>
                <img src={item.media[0].tinygif.url} alt="" />
                <br></br>
              </div>
            )
          })
          }
        </div>}
    </div>
  )
}
export default Search;