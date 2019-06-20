import React, { Component } from 'react';
import Post from "./Post";


class Posts extends Component{
    state = {};

    renderPosts = () =>{
        const posts = this.props.posts;

        return (
            <React.Fragment>
                { Object.keys(posts).map(post => (
                    <Post
                        key={post}
                        info={this.props.posts[post]}
                        deletePost={this.props.deletePost}
                    />
                ))}
            </React.Fragment>
        )
      };

    render() {
        return(
            <table className="table">
                <tbody>
                { this.renderPosts() }
                </tbody>
            </table>
        );
    }

}

export default Posts;
