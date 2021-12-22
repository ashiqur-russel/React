import React,{useState,useEffect} from "react";
import './App.css'
import Axios from "axios";

function App() {
      const [name,setName]= useState('');
      const [review,setReview]= useState('');
      const [list,setList] = useState([]);

      useEffect(() => {
        Axios.get('http://localhost:3001/api/get').then((response)=>{
          console.log(response.data)
          setList(response.data);
        })
      }, [])

      const handleSubmit = (e)=>{
          e.preventDefault();

        if( name && review){

                    Axios.post('http://localhost:3001/api/insert',{name:name,review:review});

            setList([...list,{name:name,review:review}]);
        }
        
      };


      //Delete
 
      const deleteName = ()=>{
        Axios.delete('http://localhost:3001/api/delete/${movie}');
      }

  return (
    < >
    
    <article className="container">
      <h1>Crud Application</h1>
        <form className="form">
          <div className="form-control">
            <label>Movie Name :</label>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
          </div>
          <div className="form-control">
            <label> Review :</label>
            <input type='text' value={review} onChange={(e)=>setReview(e.target.value)}></input>
          </div>
        </form>
        <button className="btn" type='submit' onClick={handleSubmit}>Submit</button>
</article>   
          {
          list.map((data,index)=>{
            return(
              <div className="card" key={data.id}>
                    <h3>{data.name} </h3>           
                    <p>{data.review}</p>
                    <button id="btn" onClick={()=>{deleteName(data.name)}}>Remove</button>
                    <button id="btn">Update</button>
              </div>
            )
          })
        }    
    
    </>
    
  );
}

export default App;
