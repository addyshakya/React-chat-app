import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) =>{
    return <div style={{height: "100vh"}} >
        <PrettyChatWindow
            projectId='7cc1e642-0734-4046-90ab-5621b6604b4b'
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        />
        </div>
}

export default ChatsPage;