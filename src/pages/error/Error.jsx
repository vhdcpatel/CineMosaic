import React from 'react'

const Error = () => {
  // console.log("inside error page");
  const inlineStyles = {
    color: "white",
    minHeight: "80vh",
    fontSize: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // Add more CSS properties as needed
  };

  return (
    <div style={inlineStyles}>Page not found</div>
  )
}

export default Error