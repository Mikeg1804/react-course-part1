import React from 'react'

interface Props {
    cartItemsCount: number
}

function MikeNavBar({cartItemsCount}:Props) {
  return (
    <div>
     NavBar: {cartItemsCount} 
    </div>
  )
}

export default MikeNavBar
