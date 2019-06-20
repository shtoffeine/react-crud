import React from 'react';


class FormAdd extends React.Component{

    titleRef = React.createRef();
    bodyRef = React.createRef();


    createPost = (e) => {
        e.preventDefault();

        const post = {
            title: this.titleRef.current.value,
            body: this.bodyRef.current.value,
            userId: 1
        };

        this.props.createPost(post)
    };


    render() {
        return(
            <form onSubmit={this.createPost} className='col-8'>
                <div className="form-group">
                    <label>Название:</label>
                    <input type="text" ref={this.titleRef} className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Контент:</label>
                    <textarea className="form-control" ref={this.bodyRef}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Добавить посты</button>
            </form>
        );
    }

}

export default FormAdd;
