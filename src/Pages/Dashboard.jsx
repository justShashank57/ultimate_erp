import React from 'react';
import { Link } from 'react-router-dom';
import DashBoardData from '../Data/dashboardData';
import MetricCard from '../Components/MetricCard';
import LineChart from '../Components/LineChart';
import PieChart from '../Components/PieChart';
import AreaChart from '../Components/AreaChart';

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
       <div id='parentMetric'>
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
       </div>

       {/* charts */}
       <div id="parentLineCharts">
            <h1 id='analysis' style={{fontWeight:"600",padding:"1rem 4rem"}}>Analysis</h1>
            <div id='lineCharts' style={{padding:"2rem 4rem"}}>
                 
                 <div className='lineChart' id='salesLineChart'>
                   <LineChart chartObject={chartsArray[1]}/>
                 </div>
     
                 <div className='lineChart' id='orderLineChart'>
                   <LineChart chartObject={chartsArray[2]}/>
                 </div>
            </div>
       </div>
       <div id='parentPieChart'>
            <div id="areaChart">
               <AreaChart chartObject={chartsArray[3]}/>
            </div>
            <div id="pieChart">
               <PieChart chartObject={chartsArray[0]}/>
            </div>
       </div>

       {/* navigation links */}
       <div id="parentLinks">
            <h3 style={{fontWeight:"500",padding:"0rem 4rem"}}>Quick Link</h3>
            <div id='linkRoot'>
              {quickLinkElements}
            </div>
       </div>
    </>
  )
}

export default Dashboard