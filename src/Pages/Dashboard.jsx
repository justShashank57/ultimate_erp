import React from 'react';
import { Link } from 'react-router-dom';
import DashBoardData from '../Data/dashboardData';
import MetricCard from '../Components/MetricCard';

function Dashboard() {
  const[lastDays,setLastDays] = React.useState(0);
  
  const metricArray = DashBoardData[lastDays];

  const quickLinkArray = DashBoardData[4];
  const chartsArray = DashBoardData[5];

  
  const metricElements = metricArray.map((obj)=>{
        return(
              <MetricCard obj={obj}/>
        )
  })
  const quickLinkElements = quickLinkArray.map((obj)=>{
       return(
           <span style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"}}>
             <img style={{width:"1.5rem"}}  id='linkLogo' src="link.png" alt="link" />
             <Link style={{textDecoration:"none",color:"#575757"}} to={obj.url}>{obj.name}</Link>
           </span>
       )
  })
  function handleSelect(){
           const element = document.getElementById('selectDays');
           const index = element.selectedIndex;
           setLastDays(index); 
  }
  return (
    <>
      {/* metric */}
       <h1 id='overview'>Overview</h1>
       <div id='metricRoot'>
          <div id='lastDays'>
            <select name="" id="selectDays">
               <option onClick={handleSelect}>Last 30 days</option>
               <option onClick={handleSelect}>Last Quarter</option>
               <option onClick={handleSelect}>Last 6 months</option>
               <option onClick={handleSelect}>Last 365 days</option>
            </select>
          </div>
          {metricElements}
       </div>
       {/* navigation links */}
       <h3 style={{fontWeight:"500",padding:"0rem 4rem"}}>Quick Link</h3>
       <div id='linkRoot'>
         {quickLinkElements}
       </div>
    </>
  )
}

export default Dashboard