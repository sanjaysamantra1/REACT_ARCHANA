import React from 'react';
import './Main.css';
import Conditional_Demo_1 from '../conditional/Conditional_Demo_1';
import ListDemo1 from '../ListItem/ListDemo1';
import ListDemo2 from '../ListItem/ListDemo2';
import GreetDemo1 from '../props/GreetDemo1';
import UserList from '../props/UserList';

export default function Main() {
  return <div className='container main'>
    {/* <div className='text-center'>This is Main Component</div> */}
    {/* <Conditional_Demo_1 /> */}
    {/* <ListDemo1 /> */}
    {/* <ListDemo2 /> */}
    {/* <GreetDemo1 name='sanjay' msg="good morning" />
    <GreetDemo1 name='Archana' msg="good Evening" />
    <GreetDemo1 name="deepak" msg="good afternoon" /> */}
    <UserList />
  </div>
}
