/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Images from '../components/Images';

const searchForm = {
    form: css({
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        maxWidth: '293px',
        width: '100%'
    }),
    input: css({
        padding: '10px 15px',
        background: '#EFF5F5',
        borderRadius: '4px',
        border:'none',
        fontSize: '12px',
        lineHeight: '24px',
        width: '100%'
    }),
    button: css({
        position: 'absolute',
        border:'none',
        right:'0',
        backgroundColor: 'transparent',
        display: 'flex'
    })
}

export default function SearchForm()
{
    return(
        <form  css={searchForm.form}>
            <input css={searchForm.input} type="search" name="search" defaultValue="" placeholder='Search'/>
            <button name="button" css={searchForm.button}><img src={Images.icon.search} alt="icon-search"/></button>
        </form>
    )
}