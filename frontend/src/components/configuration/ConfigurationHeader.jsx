import React from 'react'

const ConfigurationHeader = ({configuration}) => {
  return (
    <div style={{display: 'flex', flexDirection:'row'}}>
        <img src="#" alt="Store Image" />
       <div>
          <h2>{configuration.storeName}</h2>
          {configuration.district},
          {configuration.state},
          {configuration.country}
        </div>
    </div>
  )
}

export default ConfigurationHeader