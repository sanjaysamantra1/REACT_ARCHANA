import React from 'react';
import './Main.css';
import Conditional_Demo_1 from '../conditional/Conditional_Demo_1';
import ListDemo1 from '../ListItem/ListDemo1';
import ListDemo2 from '../ListItem/ListDemo2';
import GreetDemo1 from '../props/GreetDemo1';
import UserList from '../props/UserList';
import ProductList from '../products/ProductList';
import Counter from '../state/Counter';
import Counter_With_State from '../state/Counter_With_State';
import ToggleVisibility from '../state/ToggleVisibility';
import RemainingCharacter from '../state/RemainingCharacter';
import SelectedCountry from '../state/SelectedCountry';
import Addition from '../state/Addition';
import FolderExplorer from '../state/FolderExplorer';
import folderInfo from '../state/folderData.json';
import TrafficLight from '../state/TrafficLight';
import ToDoCRUD from '../todo/ToDoCRUD';
import HttpDemo1 from '../http/HttpDemo1';
import HttpDemo2 from '../http/HttpDemo2';
import HttpDemo3 from '../http/HttpDemo3';
import HttpDemo4 from '../http/HttpDemo4';
import HttpDemo5 from '../http/HttpDemo5';
import HttpCRUD from '../http/HttpCRUD';
import FetchUsers from '../http/FetchUsers';
import FetchComments from '../http/FetchComments';

export default function Main() {
  return <div className='container main'>
    {/* <div className='text-center'>This is Main Component</div> */}
    {/* <Conditional_Demo_1 /> */}
    {/* <ListDemo1 /> */}
    {/* <ListDemo2 /> */}
    {/* <GreetDemo1 name='sanjay' msg="good morning" />
    <GreetDemo1 name='Archana' msg="good Evening" />
    <GreetDemo1 name="deepak" msg="good afternoon" /> */}
    {/* <UserList /> */}
    {/* <ProductList /> */}
    {/* <Counter /> */}
    {/* <Counter_With_State /> */}
    {/* <ToggleVisibility /> */}
    {/* <RemainingCharacter /> */}
    {/* <SelectedCountry />  */}
    {/* <Addition /> */}
    {/* <FolderExplorer folderInfo={folderInfo} /> */}
    {/* <TrafficLight /> */}
    {/* <ToDoCRUD /> */}
    {/* <HttpDemo1 /> */}
    {/* <HttpDemo2 /> */}
    {/* <HttpDemo3 /> */}
    {/* <HttpDemo4 /> */}
    {/* <HttpDemo5 /> */}
    {/* <HttpCRUD /> */}
    <FetchUsers /><hr/>
    <FetchComments />
  </div>
}
