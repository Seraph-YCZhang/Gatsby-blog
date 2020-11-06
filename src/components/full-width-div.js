import React from 'react';

const FullDiv = ({children, ...otherprops}) => {
  return <div style={{width:'100%'}} {...otherprops}>
    {children}
  </div>
}

export default FullDiv