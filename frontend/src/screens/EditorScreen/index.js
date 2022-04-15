import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Split from 'react-split'

import Editor from '../../components/EditorComponent/CodeEditor'
import EditorSideNav from '../../components/EditorComponent/EditorSideNav'
import VideoSideBar from '../../components/EditorComponent/VideoSideBar'

const EditorScreen = (props) => {
  const { room } = useParams()
  const { socket } = props

  useEffect(() => {

    socket.emit('join_room', room);
    socket.emit('user_joins', room);

  }, [room, socket])

  return (
    <div className='editor-screen'>
      <div className='editor-row'>
        <div className='sidenav-column'>
          <EditorSideNav />
        </div>
        <Split
          className='split-screen-column'
          sizes={[12, 88]}
          minSize={[5, 95]}
          expandToMin={false}
          gutterSize={3}
          gutterAlign='center'
          snapOffset={30}
          dragInterval={1}
          direction='horizontal'
          cursor='col-resize'
        >
          <div className='detail-column'>
            <h4
              style={{
                color: 'white',
                fontFamily: 'sans-serif',
                marginLeft: '20px',
              }}
              className='m-0'
            >
              main.cpp
            </h4>
          </div>
          <div className='editor-column'>
            <Editor socket={socket} room={room} />
          </div>
        </Split>
        <div className='video-column'>
          <VideoSideBar socket={socket} room={room} />
        </div>
      </div>
    </div>
  )
}

export default EditorScreen
