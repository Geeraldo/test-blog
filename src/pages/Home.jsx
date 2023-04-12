import React, { useEffect,useState } from 'react';
import axios from 'axios';
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Content from '../components/Content'


const Home = () => {
  useEffect(() => {
    getAllPost();
    const timer = setTimeout(() => {
      getAllPost();
      return () => clearTimeout(timer);
    }, 5000);

  }, [])
  const [post ,getPost] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts"
  const getAllPost = async () => {
   await axios.get(url).then((response) => {
      const allPost = response.data
      getPost(allPost)
    })
    .catch(Error)
  }
  return (
    <>
    <Logo />
    <Navbar />
    <Hero />
    <Content data={post} />
    </>
  )
}

export default Home