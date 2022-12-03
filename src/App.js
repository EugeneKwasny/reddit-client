import React from 'react';
import './App.css';


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
    <header>
    <div>
      <Link to={'/'}>
        <img src={logo} />
      </Link>
    </div>
    <div>
    <form>
      <input type="search" name="search" defaultValue="" />
      <button name="button"><img src={iconSearch} /></button>
    </form>
    </div>
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
