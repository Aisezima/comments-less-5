import './Avatar.css'
const  Avatar =  (userLogo, logoTitle) => {

    return  <img className='avatar' src={userLogo} alt={logoTitle}  />
}

export default Avatar