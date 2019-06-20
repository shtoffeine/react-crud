import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {

    return (
        <div className="row">
            <div className="col-md-6">
                <Link className="btn btn-primary" to={'/'}>
                    Показать все посты
                </Link>
            </div>

            <div className="col-md-6">
                <Link className="btn btn-success" to={'/create'}>
                    Добавить пост
                </Link>
            </div>
        </div>
    )

};

export default Navigation;
