import React from 'react';


class EditPostForm extends React.Component{

    // crear los ref
    titleRef = React.createRef()
    bodyRef = React.createRef()


    editPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value,
            userId: 1,
            id: this.props.post.id
        };

        this.props.editPost(post)

    };

    renderEditForm = () => {
        const {title, body} = this.props.post;

        return(
            <form onSubmit={this.editPost} className='col-8'>
                <div className="form-group">
                    <label>Название:</label>
                    <input type="text" ref={this.titleRef} className="form-control" defaultValue={title}/>
                </div>
                <div className="form-group">
                    <label>Контент:</label>
                    <textarea className="form-control" ref={this.bodyRef} defaultValue={body}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">изменить</button>
            </form>
        )
    };


    render() {

        return(
            <React.Fragment>
                {this.renderEditForm()}
            </React.Fragment>

        );
    }

}

export default EditPostForm;
