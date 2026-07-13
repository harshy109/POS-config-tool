import { Button } from 'antd'
import React from 'react'
import "./Configuration.css"
const ConfigurationActions = ({isEditing, setIsEditing}) => {
  return (
    <div className='configuration-action'>
    {isEditing ?
    <>
    <Button type="success">Save</Button>
    <Button onClick={()=>setIsEditing(!isEditing)}>Cancel</Button></>
    :<Button type='primary' onClick={()=>setIsEditing(!isEditing)}>Edit</Button>}
    </div>
  )
}

export default ConfigurationActions