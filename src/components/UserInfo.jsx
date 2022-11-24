import React from "react"
import Avatar from "./Avatar/Avatar"
const userInfo = (props) => {

     return(
     <div className="userInfo"> 
     <Avatar logoTitle = {props.userTitle} userLogo={props.userLogo} />
     <h3>{props.title}</h3>
     </div>

     )

}
export default userInfo