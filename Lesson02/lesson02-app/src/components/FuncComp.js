import React from 'react'

export default function FuncComp(props) {
  return (
    <div className='alert alert-success'>
        <h1>FuncComp Demo</h1>
        <p>Welcome to, {props.renderFullName}</p>
        <h5>Company: {props.renderCompany}</h5>
    </div>
  )
}
