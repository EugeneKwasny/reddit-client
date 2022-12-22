/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import postThumnailDesktop from '../../../images/post_thumbnail/desktop.png'
import iconPlus from '../../../images/icon/plus.svg';
import iconMinus from '../../../images/icon/minus.svg';
import iconAuthor from '../../../images/icon/author.svg';
import iconCalendar from '../../../images/icon/calendar.svg';
import iconComments from '../../../images/icon/comments.svg';
import {
    Link
} from "react-router-dom";

export default function Article (props)
{
    return (
        <article
            css={css`
                & + article{
                    margin-top: 56px;
                }
            `}
        >
            <h3
             css={css`
              font-family: 'Inter';
              font-style: normal;
              font-weight: 400;
              font-size: 24px;
              line-height: 32px;
              margin: 0 0 24px 0;
            `}
            >{props.title}</h3>
            <Link to={props.link}>
              <img src={postThumnailDesktop} alt={props.title} 

                css={css`
                    max-width: 100%;
                `}
              />
            </Link>
            <div css={css`
                display: flex;
                flex-wrap: wrap;
                column-gap: 33px;
                row-gap: 24px;
                margin-top: 24px;
            `}>
                <div>
                    <img src={iconAuthor} alt="icon-author" /> John Dow
                </div>
                <div>
                    <img src={iconCalendar} alt="icon-calendar" /> 2 hours ago   
                </div>
                <div>
                    <img src={iconComments} alt="icon-comments" />  3 comments
                </div>
                <div>
                    <button><img src={iconPlus} alt="plus"/></button>
                    <span>{props.likesCounter}</span>
                    <button><img src={iconMinus} alt="minus"/></button>
                </div>
            </div>
          </article>
    )
}