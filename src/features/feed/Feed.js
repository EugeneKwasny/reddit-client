import postThumnailDesktop from '../../images/post_thumbnail/desktop.png'
import iconPlus from '../../images/icon/plus.svg';
import iconMinus from '../../images/icon/minus.svg';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link
  } from "react-router-dom";

export default function Home(){
    const likesCounter = 37;
    return(
        <section>
          <article>
            <h3>Musk reinstates Trump's suspended Twitter account following poll</h3>
            <Link to={'post/:id'}>
              <img src={postThumnailDesktop} />
            </Link>
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
            <Link to={'post/:id'}>
              <img src={postThumnailDesktop} />
            </Link>
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
            <Link to={'post/:id'}>
              <img src={postThumnailDesktop} />
            </Link>
            <div>
              <div>
                <button><img src={iconPlus} /></button>
                <span>{likesCounter}</span>
                <button><img src={iconMinus} /></button>
              </div>
            </div>
          </article>
        </section>
    )
}