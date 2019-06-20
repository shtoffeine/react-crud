import React, {Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import axios from "axios";

import Navigation from "./Navigation";
import Posts from "./Posts";
import SinglePost from "./SinglePost";
import FormAdd from './FormAdd';
import EditPostForm from "./EditPostForm";


class Router extends Component {
    // Данные приложения
    state = {
        posts: []
    };

    // Компонент отрисован
    componentDidMount() {
        // Загружаем посты
        this.loadPosts();
    }

    // загрузка  постов
    loadPosts = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(data => {
                // Сохраняем полученные данные в state
                this.setState({
                    posts: data.data
                })
            })
    };

    //удаление поста
    deletePost = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(data => {
                // берем старые посты из state
                const old_posts = [...this.state.posts];
                //удаляем из старых постов пост с указанным ид
                //сохраняем новый список постов без указанного
                let posts = old_posts.filter(post => (
                    post.id !== id
                ));
                this.setState({
                    posts: posts
                });
            })
    };

    createPost = (post) => {
        axios.post(`https://jsonplaceholder.typicode.com/posts`, {post: post})
            .then(data => {
                const newPost = Object.assign({}, data.data.post, data.data.id)
                
                // берем старое состояние и добавляем новый пост
                this.setState(prevState => ({
                    posts: [...prevState.posts, newPost]
                }))
            })
    };

    editPost = (post) => {
        const { id} = post;
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {post: post})
            .then( data => {
                let postId = data.data.id;

                // выбираем старые посты из состояния
                const posts = [...this.state.posts];
                //находим в нем редактируемый пост
                const editingPost = posts.findIndex(post => postId === post.id)
                // присваиваем отредактированные данные
                posts[editingPost] = post;
                this.setState({
                    posts: posts
                })
            });
    };

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                <Navigation/>
                    <div className="row justify-content-center">
                        <Switch>
                            <Route exact path="/" render={() => {
                                return (
                                    <Posts
                                        posts={this.state.posts}
                                        deletePost={this.deletePost}
                                    >

                                    </Posts>
                                )
                            }}/>

                            <Route
                                exact path="/post/:postId" render={(props) => {
                                let idPost = props.location.pathname.replace('/post/', '');
                                const posts = this.state.posts;
                                let filter;
                                filter = posts.filter(post => (
                                    post.id === Number(idPost)
                                ));
                                return (
                                    <SinglePost
                                        post={filter[0]}
                                    />
                                )
                            }}

                            />

                            <Route
                                exact path='/create' render={() => {
                                return (
                                    <FormAdd
                                        createPost={this.createPost}

                                    />
                                )
                            }}
                            />


                            <Route
                                exact path="/edit/:postId" render={(props) => {
                                let idPost = props.location.pathname.replace('/edit/', '');
                                const posts = this.state.posts;
                                let filter;
                                filter = posts.filter(post => (
                                    post.id === Number(idPost)
                                ));
                                return (
                                    <EditPostForm
                                        post={filter[0]}
                                        editPost={this.editPost}
                                    />
                                )
                            }}

                            />

                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;
