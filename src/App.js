import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import logo from './images/logo/default.svg';
import iconSearch from './images/icon/search.svg'
import logoSmall from './images/logo/small.svg';
import postThumnailDesktop from './images/post_thumbnail/desktop.png'
import iconPlus from './images/icon/plus.svg';
import iconMinus from './images/icon/minus.svg';
import postThumbnailCircle from './images/post_thumbnail/circle.svg';

function App() {
  const likesCounter = '37';
  return (
    <div className="App">
      <header>
        <div>
          <img src={logo} />
        </div>
        <div>
        <form>
          <input type="search" name="search" value="" />
          <button name="button"><img src={iconSearch} /></button>
        </form>
        </div>
      </header>
      <main>
        <section>
          <article>
            <h3>Musk reinstates Trump's suspended Twitter account following poll</h3>
            <a href="#">
              <img src={postThumnailDesktop} />
            </a>
            <div>
              <div>
                <button><img src={iconPlus} /></button>
                <span>{likesCounter}</span>
                <button><img src={iconMinus} /></button>
              </div>
            </div>
          </article>
          <article>
            <h3>Musk reinstates Trump's suspended Twitter account following poll</h3>
            <a href="#">
              <img src={postThumnailDesktop} />
            </a>
            <div>
              <div>
                <button><img src={iconPlus} /></button>
                <span>{likesCounter}</span>
                <button><img src={iconMinus} /></button>
              </div>
            </div>
          </article>
          <article>
            <h3>Musk reinstates Trump's suspended Twitter account following poll</h3>
            <a href="#">
              <img src={postThumnailDesktop} />
            </a>
            <div>
              <div>
                <button><img src={iconPlus} /></button>
                <span>{likesCounter}</span>
                <button><img src={iconMinus} /></button>
              </div>
            </div>
          </article>
        </section>
        <aside>

          <aside>
              <div>Subreddits</div>
              <div>
                <ul>
                  <li>
                    <img src={postThumbnailCircle} />
                    <h3>r/WhitePeopleTwitter</h3>
                  </li>
                  <li>
                    <img src={postThumbnailCircle} />
                    <h3>r/WhitePeopleTwitter</h3>
                  </li>
                  <li>
                    <img src={postThumbnailCircle} />
                    <h3>r/WhitePeopleTwitter</h3>
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
