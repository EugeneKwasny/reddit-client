import postThumnailDesktop from '../../images/post_thumbnail/desktop.png'
import iconPlus from '../../images/icon/plus.svg';
import iconMinus from '../../images/icon/minus.svg';

export default function Post()
{
    const likesCounter = 47;
    return (
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
    )
}