import './PostDate.css'
function PostDate(props) {
    let postDate =  props.data.toLocaleString()

    return(
        <div className="postDate">{postDate} </div>
    )
}

export default PostDate