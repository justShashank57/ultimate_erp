import React from 'react'

function MetricCard(props) {
  return (
    <div id='metricCard'>
       <h1 className='metricValue'>{props.obj.value}</h1>
       <p className='metricTitle'>{props.obj.metricName}</p>
    </div>
  )
}

export default MetricCard