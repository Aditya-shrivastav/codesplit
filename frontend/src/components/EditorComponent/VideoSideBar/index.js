import React, { useEffect, useState, useRef } from 'react'
import { Box, useTheme, AppBar, Typography, Button, Grid, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Phone, PhoneDisabled } from '@mui/icons-material'
import axios from 'axios'
import Peer from 'simple-peer'

const useStyle = makeStyles(() => ({
    appBar: {
        marginBottom: '1em',
    },
    video: {
        width: '100%',
    },
    paper: {
        backgroundColor: '#1b1b1b',
        color: 'white',
        border: '2px solid white',
        width: '100%',
        margin: '10px',
    },
    callButton: {
        backgroundColor: 'green',
        width: '100%',
        color: 'white',
    },
    endCallButton: {
        backgroundColor: 'red',
        width: '100%',
        color: 'white',
    }
}))

const VideoSideBar = (props) => {

    const { socket, room } = props;
    const classes = useStyle();

    const [otherUser, setUser] = useState()
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState();
    const [call, setCall] = useState({});
    const [callingUser, setCallingUser] = useState(false);

    const myVideo = useRef();
    const userVideo = useRef();
    const connectionRef = useRef();

    const theme = useTheme()

    useEffect(() => {

        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
            setStream(currentStream);
            myVideo.current.srcObject = currentStream;
        })

        socket.on('user_joined', (payload) => {
            setUser(payload.filter(user => user !== socket.id)[0])
        })

        socket.on('call_user', ({ from, signal }) => {
            console.log('call user on', signal)
            setCall({ isReceivingCall: true, from, signal })
        })

        socket.on('leave_call', ({ success }) => {
            if (success) {
                connectionRef.current.destroy();
                window.location.reload();
            }
        })

        getClients();

    }, [])


    const getClients = () => {
        axios.get('http://localhost:5000/user/getClients', { params: { room: room } }).then((res) => {
            console.log(res.data)
            setUser(res.data.users.filter(user => user !== socket.id)[0]);
        })
    }

    const answerCall = () => {

        setCallAccepted(true);

        const peer = new Peer({ initiator: false, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('answer_call', { signal: data, to: call.from });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        peer.signal(call.signal);

        connectionRef.current = peer;
    };

    const callUser = (id) => {

        setCallingUser(true)

        const peer = new Peer({ initiator: true, trickle: false, stream });

        peer.on('signal', (data) => {
            socket.emit('call_user', { userToCall: id, signalData: data, from: socket.id });
        });

        peer.on('stream', (currentStream) => {
            userVideo.current.srcObject = currentStream;
        });

        socket.on('call_accepted', (signal) => {
            setCallAccepted(true);
            console.log('answer call on', signal)
            peer.signal(signal);
        });

        connectionRef.current = peer;
    };

    const leaveCall = () => {

        setCallEnded(true);
        setCallingUser(false);

        socket.emit('leave_call', otherUser)

        connectionRef.current.destroy();

        window.location.reload();
    };

    return (
        <Box
            className='video-sidenav-container'
            sx={{
                [theme.breakpoints.down('md')]: {
                    width: '100%',
                },
                backgroundColor: '#1b1b1b',
                color: 'white',
            }}
        >
            <AppBar position='static' className={classes.appBar}>
                <Typography variant='h4' align='center'>Users</Typography>
            </AppBar>
            <Grid container className={classes.gridContainer}>
                {
                    stream && (
                        <Paper className={classes.paper}>
                            <Grid item xs={12} textAlign="center" padding="0 5px">
                                <Typography variant="h5" gutterBottom>{/*socket.id*/} You</Typography>
                                <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                            </Grid>
                        </Paper>
                    )
                }
                {
                    callAccepted && !callEnded ?
                        <Paper className={classes.paper}>
                            <Grid item xs={12} textAlign="center" padding="0 5px">
                                <Typography variant="h5" gutterBottom>{/*otherUser*/}
                                    {call?.name ? call.name : 'User 2'}
                                </Typography>
                                <video playsInline ref={userVideo} autoPlay className={classes.video} />
                            </Grid>
                        </Paper>
                        :
                        otherUser && call.isReceivingCall && !callAccepted ?
                            <Paper className={classes.paper}>
                                <Grid item xs={12} textAlign="center" padding="10px">
                                    <Typography variant="h5" gutterBottom>{call?.name ? call.name : 'User 2'} is Calling....</Typography>
                                </Grid>
                                <Grid item xs={12} padding="10px">
                                    <Button onClick={answerCall} className={classes.callButton}>Answer</Button>
                                </Grid>
                            </Paper>
                            :
                            otherUser ?
                                <Paper className={classes.paper}>
                                    <Grid item xs={12} textAlign="center" padding="10px">
                                        <Typography variant="h5" gutterBottom className="col-4">{/*otherUser*/}{call?.name ? call.name : 'User 2'}</Typography>
                                    </Grid>
                                    <Grid item xs={12} padding="10px">
                                        <Button className={classes.callButton} onClick={() => callUser(otherUser)}><Phone />
                                            {callingUser ? 'Calling User 2.....' : 'Call'}
                                        </Button>
                                    </Grid>
                                </Paper>
                                :
                                null
                }
                {
                    callAccepted && !callEnded && (
                        <Grid item xs={12} padding="10px">
                            <Button className={classes.endCallButton} onClick={leaveCall}>End Call &nbsp;<PhoneDisabled /></Button>
                        </Grid>
                    )
                }
            </Grid>
        </Box>
    )
}

export default VideoSideBar;
