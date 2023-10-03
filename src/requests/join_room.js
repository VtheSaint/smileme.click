import EnxRtc from '../EnxRtc';
export const joinRoom = (token) => { 
    return EnxRtc.EnxRoom({token:token})
}