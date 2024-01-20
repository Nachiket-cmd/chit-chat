import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic(
        '1943b935-8196-4d9e-91c8-8d65736c9c39',
        props.user.username,
        props.user.secret
    );
    return (
    <div style= {{height: '100vh'}}>
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
    )
}
export default ChatsPage