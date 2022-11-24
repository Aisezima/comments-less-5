
import PostDate from '../PostDate/PostDate';
import UserInfo from '../UserInfo';
import Card from '../../ui/Card';
import './Comments.css';
function Comments({userData}){

    return(
        <Card>
            <UserInfo title ={userData.userTitle} 
            logoTitle = {userData.userTitle}  
            userLogo = {userData.avatarUrl}/>
            <div className="commentText">{userData.userText} </div>
            <PostDate data = {userData.date}/>
        
        </Card>
        
    );
};
export default Comments

// props balasy atasynan alat  
// balasy ala alat

















