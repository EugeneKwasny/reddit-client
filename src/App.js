/** @jsxImportSource @emotion/react */
import React from 'react';
import './App.css';
import { css } from '@emotion/react'


import logo from './images/logo/default.svg';
import iconSearch from './images/icon/search.svg'
import logoSmall from './images/logo/small.svg';
import postThumbnailCircle from './images/post_thumbnail/circle.png';

import {
  Outlet,
  NavLink,
  Link,
  useLoaderData,
  Form,
  redirect,
} from "react-router-dom";


function App() {
  const likesCounter = '37';
  return (
    <div className="App">
    <header css={css`
      display: flex;
      column-gap: 20px;
      margin: 0 auto;
      padding: 12px 32px;
      justify-content: space-between;
      background-color: white;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    `}>
    <div css={css`
      width:50px; 
      overflow:clip;
    `}>
      <Link to={'/'}>
        <img src={logo} />
      </Link>
    </div>
    <form 
      css={css`
        position: relative;
        display: flex;
        align-items: center;
        max-width: 293px;
        width: 100%;
      `}>
      <input type="search" name="search" defaultValue="" placeholder='Search'
      css={css`
        padding: 10px 15px;
        background: #EFF5F5;
        border-radius: 4px;
        border:none;
        font-size: 12px;
        line-height: 24px;
        width: 100%;
      `}
      />
      <button name="button"
      css={css`
        position: absolute;
        border:none;
        right:0;
        background-color: transparent;
        display: flex;
      `}
      ><img src={iconSearch} /></button>
    </form>
  </header>
  <main>
        <Outlet />
    <aside>
        <aside>
            <div>Subreddits</div>
            <div>
                <ul>
                <li>
                    <img src={postThumbnailCircle} />
                    <a href="#">r/WhitePeopleTwitter</a>
                </li>
                <li>
                    <img src={postThumbnailCircle} />
                    <a href="#">r/WhitePeopleTwitter</a>
                </li>
                <li>
                    <img src={postThumbnailCircle} />
                    <a href="#">r/WhitePeopleTwitter</a>
                </li>
                </ul>
            </div>
        </aside>
        </aside>
  </main>
  <footer>
    <div>
      <img src={logoSmall} />
    </div>
    <div>
     2022 &copy; All rights reserved
    </div>
  </footer>
</div>
  );
}

export default App;
