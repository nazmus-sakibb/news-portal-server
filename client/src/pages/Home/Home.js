import React, { useEffect, useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useLocation } from 'react-router';
import { axiosInstance } from '../../config';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axiosInstance.get("/posts" + search);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);

    return (
        <div>
            <Header />
            <div className="home">
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </div>
    );
};

export default Home;