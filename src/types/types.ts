export type User = {
    
    firstName: string
    lastName: string
    phoneNumber: string
    avatar: string
    id: number

}

export type Message = {

    userId: number
    messageText: string
    conversationId: number
    id: number

}

export type Conversation = {

    userId: number
    participantId: number
    id: number

}

export type Props = {

    users: User[]
    messages: Message[]
    conversations: Conversation[]
    setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>
    modal: string
    setModal: React.Dispatch<React.SetStateAction<string>>
    currentUser: User | null
    logOut: Function

}

export type PropsNew = {

    users: User[]
    logIn: Function
    setModal: React.Dispatch<React.SetStateAction<string>>

}