import Head from 'next/head'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import React from 'react';

export default function Home() {
  return (
    <div className={"flex flex-col min-h-screen min-w-screen justify-center items-center"}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="title">
        <h1>BIBLISC<span className={'magicO'}>O</span>VERY</h1>
      </div>
      <div className="subtitle">
        <h2>Discover your sources. Discover the world.</h2>
      </div>
      <SearchBox />
      <div>
        <Item />
      </div>
    </div>
  )
}

class Item extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return <div>test</div>;
  }
}

class SearchBox extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return (
    <form className='searchbox' action="">
      <input type='search' placeholder='Start your journey...'></input>
      <button type='button'><FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass}/><span class="searchtext">Search</span></button>
    </form>);
  }
}