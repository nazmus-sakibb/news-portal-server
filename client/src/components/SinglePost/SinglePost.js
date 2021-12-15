import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './SinglePost.css';

const SinglePost = () => {
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [post, setPost] = useState({});
    const PF = "https://news-portal2.herokuapp.com/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            console.log(res);
            setPost(res.data);
            setTitle(res.data.title);
            setDescription(res.data.description);
        };
        getPost();
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            });
            window.location.raplace("/");
        } catch (err) { }
    };


    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                description
            });
            setUpdateMode(false);
        } catch (err) { }
    }

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo && (
                    <img src={PF + post.photo} alt="" className="singlePostImage" />
                )}

                {
                    updateMode ? <input type="text" value={title} className="singlePostTitleInput" autoFocus onChange={(e) => setTitle(e.target.value)} /> : (
                        <h1 className="singlePostTitle">{title}
                            {post.username === user?.username &&
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon editIcon far fa-edit" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon deleteIcon far fa-trash-alt" onClick={handleDelete}></i>
                                </div>
                            }
                        </h1>
                    )
                }
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:
                        <Link to={`/?user=${post.username}`} className="link">
                            <strong>{post.username}</strong>
                        </Link>
                    </span>

                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? <textarea className="singlePostDescriptionInput" value={description} onChange={(e) => setDescription(e.target.value)} /> :
                    <p className="singlePostDescription">{description}</p>
                }

                {updateMode &&
                    <button className="singlePostButton" onClick={handleUpdate}>Update</button>
                }
            </div>
        </div>
    );
};

export default SinglePost;