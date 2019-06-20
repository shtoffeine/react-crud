import React from 'react'
import {Link} from "react-router-dom";

class Post extends React.Component{


    buttonDelete = () => {
        this.props.deletePost(this.props.info.id)
    };


    render() {
        const { id, title } = this.props.info;
        return(
            <tr>
                <td>{ id }</td>
                <td>{ title }</td>
                <td>
                    <Link
                        to={`/post/${id}`} className="btn btn-primary">
                        посмотреть
                    </Link>
                    <Link
                        to={`/edit/${id}`} className="btn btn-warning">
                        изменить
                    </Link>
                    <button onClick={ this.buttonDelete } className="btn btn-danger" type="button">удалить</button>
                </td>
            </tr>
        )
    }
    
}

export default Post
