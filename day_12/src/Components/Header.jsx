
import React from 'react'
const Footer = () => {
  return (
    <div>
      <nav style={{
        display: "flex",
        gap: "25px",
        backgroundColor: "black",
        color: "white",
        fontSize: "40px",
        justifyContent: "space-evenly"
      }}>
        <div>
          My App
        </div>

        <div style={{ display: "flex", gap: "25px" }}>
          <div>Home</div>
          <div>Product</div>
          <div>About</div>
          <div>Cart</div>
        </div>
      </nav>
    </div>
  )
}

export default Footer
