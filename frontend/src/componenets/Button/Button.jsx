// import React from "react";

// const Buttons = () => (
  //   <div className="div">
  //     <Flex
  //     disabled={true}
  //       vertical
  //       gap="small"
  //       style={{
    //         width: "100%",
    //       }}
    //     >
    //       <Button onClick={() => Signup} type="primary" block>
    //         Sign Up
    //       </Button>
    //     </Flex>
    //   </div>
    // );
    // export default Buttons;
    
    import React from 'react'
    import "./Buttons.scss"
    import { Button, Flex } from "antd";
import { Link, useNavigate } from 'react-router-dom';


const Buttons = () => {

  let navigate = useNavigate()
  
  const Signup = () => {
    navigate("/home")
    console.log("gya")
  }
  return (
  <div className="div">
    <Flex
    disabled={true}
      vertical
      gap="small"
      style={{
        width: "100%",
      }}
    >
      <Button onClick={Signup} type="primary" block>
        Sign Up
      </Button>
    </Flex>
  </div>
  )
}

export default Buttons
