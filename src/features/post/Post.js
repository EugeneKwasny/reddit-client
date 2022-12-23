import Images from '../../components/Images';

export default function Post()
{
    const likesCounter = 47;
    return (
        <article>
            <h3>Musk reinstates Trump's suspended Twitter account following poll</h3>
            <img src={Images.postThumbnail.desktop} alt="Musk reinstates Trump's suspended Twitter account following poll"/>
            <div>
              <div>
                <button><img src={Images.icon.plus} alt="icon-plus"/></button>
                <span>{likesCounter}</span>
                <button><img src={Images.icon.minus} alt="icon-minus"/></button>
              </div>
            </div>
        </article>
    )
}