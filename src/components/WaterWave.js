import React from 'react'
import Wave from 'react-wavify'
const WaveStyle = ()=>{
    return (
        <style>
            {`
            .top{
                // z-index:-9;
                height:100px;
                width:100%;
                position:relative;
                // top:-100px;
                // margin-bottom:100px;
            }
            .top .wave{
                top:0;
                left:0;
                right:0;
                position:absolute;
            }
            .top .wave2{
                position:absolute;
                opacity:0.6;
            }
            `}
        </style>
    )
}
const WaterWave = () => {
  return (
    <div className='top'>
      <Wave className='wave wave1' fill='#9F005C'
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.20,
          points: 3
        }}
      /> 
      <Wave className='wave wave2' fill='#9F005C'
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.35,
          points: 2
        }}
      /> 
      <WaveStyle/>
    </div>
  )
}

export default WaterWave
