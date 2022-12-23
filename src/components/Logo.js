
/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react'


import Images from '../components/Images';

import {
    // Outlet,
    // NavLink,
    Link,
    // useLoaderData,
    // Form,
    // redirect,
  } from "react-router-dom";


const logoCss = css({
        width:'50px',
        overflow:'clip'

});

export default function Logo()
{
    return(
        <div css={logoCss}>
        <Link to={'/'}>
          <img src={Images.logo.default} alt="logo"/>
        </Link>
      </div>
    );

}