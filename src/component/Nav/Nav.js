import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function Nav(props){
    console.log(props.profile_pic)
    if( props.location.pathname !== '/') {
      const {profile_pic, username} = props
    return(
      <div><p>Nav</p>
       
     <Link to='/dashboard'><button>Home</button></Link>
     <Link to='/post/:postid'><button>New Post</button></Link>
     <Link to='/'><button>Logout</button></Link>
    
      <img src={profile_pic} alt=""></img>
     <div>{username}</div>
      </div>
    )
  }
  return null
}
const mapStateToProps = (reduxState) => {
  return {
    username: reduxState.username,
    profile_pic: reduxState.profile_pic
  }
}

export default connect(mapStateToProps)(Nav)
