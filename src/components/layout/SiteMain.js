/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const siteMainCss = css({
    padding:'64px 0'
});
export default function SiteMain({children})
{
    return(
        <main css={siteMainCss}>
            {children}
        </main>
    )
}