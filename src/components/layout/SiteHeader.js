/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const siteHeaderCss = css({
    display: 'flex',
    columnGap: '20px',
    margin: '0 auto',
    padding: '12px 32px',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.05)'
  });

export default function SiteHeader({children})
{
    return(
        <header css={siteHeaderCss}>
         {children}
        </header>
    )
}