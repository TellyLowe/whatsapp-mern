import React, { useEffect, useState } from 'react';
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined, Unsubscribe } from '@material-ui/icons';
import SidebarChat from "./SidebarChat";
import db from './firebase';

function Sidebar() {
    // const [rooms, setRooms] = useState([]);

    // useEffect(() => {
    //     db.collection('rooms').onSnapshot((snapshot) => 
    //         setRooms(snapshot.docs.map((doc) => 
    //             ({
    //                 id: doc.id,
    //                 data: doc.data(),
    //             }))
    //         )
    //     );

    //     return () => {
    //         Unsubscribe()
    //     }
    // }, [])

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
            <Avatar src="https://pkimgcdn.peekyou.com/3bd322d7c6ab72239c8816e4e58d0b6d.jpeg" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                {/* <SidebarChat addNewChat />
                {rooms.map(room => (
                <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))} */}
            </div>
        </div>
    )
}

export default Sidebar
