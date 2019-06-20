import React, { Component } from 'react';


class SinglePost extends Component{

    renderPost = (props) => {

        const { title, body, userId } = this.props.post;
        return (
            <React.Fragment>
                <h3 className="text-center">{title}</h3>
                <p>Author Id: {userId}</p>
                <p>{body}</p>
            </React.Fragment>
        )
    };


    render() {

        return(

            <div className="col-12 col-md-8">
                { this.renderPost(this.props) }
            </div>
        );
    }

}

export default SinglePost;
