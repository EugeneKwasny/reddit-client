/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Images from './Images';

import {
    Link
} from "react-router-dom";

const articleCss = {
    container: css(css`
        & + article{
            margin-top: 56px;
        }
    `),
    heading: css({
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '24px',
        lineHeight: '32px',
        margin: '0 0 24px 0'
    }),
    image: css({
        maxWidth: '100%'
    }),
    metaContainer: css({
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '33px',
        roGap: '24px',
        marginTop: '24px'
    })
}
export default function Article (props)
{
    return (
        <article key={props.index} css={articleCss.container}>
            <h3 css={articleCss.heading}>{props.title}</h3>
            <Link to={props.link}>
              <img src={Images.postThumbnail.desktop} alt={props.title} css={articleCss.image} />
            </Link>
            <div css={articleCss.metaContainer}>
                <div>
                    <img src={Images.icon.author} alt="icon-author" /> John Dow
                </div>
                <div>
                    <img src={Images.icon.calendar} alt="icon-calendar" /> 2 hours ago   
                </div>
                <div>
                    <img src={Images.icon.comments} alt="icon-comments" />  3 comments
                </div>
                <div>
                    <button><img src={Images.icon.plus} alt="plus"/></button>
                    <span>{props.likesCounter}</span>
                    <button><img src={Images.icon.minus} alt="minus"/></button>
                </div>
            </div>
        </article>
    )
}