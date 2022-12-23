/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react'

import Article from '../../components/Article';

// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Link
//   } from "react-router-dom";

export default function Home(){
  const posts = [
    {
      title: 'Post title',
      link: 'post/:id',
      likesCounter: 37
    },
    {
      title: 'Post title 123',
      link: 'post/:id',
      likesCounter: 45
    },{
      title: 'Post title 456',
      link: 'post/:id',
      likesCounter: 7
    }
  ];

  return(
      <section>
        {posts.map((post, index) => <Article key={index} title={post.title} link={post.link} likesCounter={post.likesCounter}/>)} 
      </section>
  )
}