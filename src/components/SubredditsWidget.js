import Images from '../components/Images';

export default function SubredditsWidget()
{
    return(
        <aside>
        <div>Subreddits</div>
        <div>
            <ul>
            <li>
                <img src={Images.postThumbnail.circle} alt="WhitePeopleTwitter"/>
                <a href="/">r/WhitePeopleTwitter</a>
            </li>
            <li>
                <img src={Images.postThumbnail.circle} alt="WhitePeopleTwitter" />
                <a href="/">r/WhitePeopleTwitter</a>
            </li>
            <li>
                <img src={Images.postThumbnail.circle} alt="WhitePeopleTwitter"/>
                <a href="/">r/WhitePeopleTwitter</a>
            </li>
            </ul>
        </div>
    </aside>
    )
}