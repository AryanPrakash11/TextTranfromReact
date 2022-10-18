import React from 'react'

const Alert = (props) => {
    const captialsie =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
     }
  return (
   
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
  <strong>{captialsie(props.alert.type)}</strong>:{props.alert.msg}
</div>
  )
}

export default Alert
