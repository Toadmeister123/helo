import React, {Component} from 'react'
import Post from '../Post/Post'
class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
          search: '',
          cheacked: true,
          posts: []
        }
    }
    render(){
      let mappedPosts = this.state.posts.map(() => {
        return(
         <Post />

        )
      })
        return(
            <div><h1>Dashboard</h1>
            <input></input>
            <button>Search</button>
            <button>Reset</button>
            <input type="checkbox"/>
            {mappedPosts}
            </div>
        )
    }
}

export default Dashboard;