/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react'
import React from 'react';

import SiteHeader from './components/layout/SiteHeader';
import Sidebar from './components/layout/Sidebar';
import SiteFooter from './components/layout/SiteFooter';
import SiteMain from './components/layout/SiteMain';

import Logo from './components/Logo';
import SearchForm from './components/SearchForm';
import LogoSmall from './components/LogoSmall';
import CopyRight from './components/Copyright';
import SubredditsWidget from './components/SubredditsWidget';


import {
  Outlet,
  // NavLink,
  //Link,
  // useLoaderData,
  // Form,
  // redirect,
} from "react-router-dom";



export default function App() {
  return (
    <div className="App">
      <SiteHeader>
        <Logo />
        <SearchForm />
      </SiteHeader>
      <SiteMain>
        <Outlet />
        <Sidebar>
          <SubredditsWidget/>
        </Sidebar>
      </SiteMain>
      <SiteFooter>
        <LogoSmall />
        <CopyRight />
      </SiteFooter>
    </div>
  );
}