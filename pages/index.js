
import Layout from '@/Component/Layout'
import Table from '@/Component/Table/Table'
import axios from 'axios';
import { useEffect, useState } from 'react';

// var d = 0;

var g = 0;


export async function getStaticProps() {
  const { data } = await axios.get('http://localhost:3000/api/hello');
  
  return {
    props: {
      data,
    }
  }

  console.log(data)
  
}



function Sagun({ data }) {
 
  var [g,setG] = useState(0)
  var [rs,setRs] = useState(0)


 useEffect(() =>{
  data.map((i) =>{
    if(i.gift){
      setG(Math.floor((g+=1)/2))
    }
    setRs(Math.floor((rs+=i.rs)/2))

   
  })
 },[])

  return (

    <Layout title='Home || Sagun || Shadi ka chuman'>
    
      {/* <div className="container">
      <h3 className=''>Welcome, Deepak</h3>
      <h3>Total Ruppes:- {rs}</h3>
      <h3>Total Gift Including Bartan:- {g}</h3>
      </div> */}

      <div className="container dashboard">
        <div className="box1">
        <h3>Total Rs</h3>
        <h3>{rs}</h3>
        </div>
        <div className="box2">
          <h3>Total Gift</h3>
          <h3>{g}</h3>
        </div>

        <div className="box3">
          {/* <input type="text" name="" id="" /> */}
          <h3>Search</h3>
          <h3>{g}</h3>
        </div>
      </div>

      <Table data={data} />
      
    </Layout>
  )
}

export default Sagun;