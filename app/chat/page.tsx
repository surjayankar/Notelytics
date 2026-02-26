'use client'
import ChatInput from "./components/ChatInput"
import ChatMessages from "./components/ChatMessages"
import ChatSuggestions from "./components/ChatSuggestions"
import useChatAll from "./hooks/useChatAll"

function Chat() {
    const {
        chatInput,
        setChatInput,
        messages,
        showSuggestions,
        isLoading,
        chatSuggestions,
        handleSendMessage,
        handleSuggestionClick,
        handleInputChange
    } = useChatAll()


    return (
        <div className='h-screen bg-background flex flex-col'>
            <div className='flex-1 flex flex-col max-w-4xl mx-auto w-full'>

                <div className='flex-1 p-6 overflow-auto'>
                    {messages.length === 0 && showSuggestions ? (
                        <ChatSuggestions
                            suggestions={chatSuggestions}
                            onSuggestionClick={handleSuggestionClick}
                        />
                    ) : (
                        <ChatMessages
                            messages={messages}
                            isLoading={isLoading}
                        />
                    )}

                </div>
                <ChatInput
                    chatInput={chatInput}
                    onInputChange={handleInputChange}
                    onSendMessage={handleSendMessage}
                    isLoading={isLoading}
                />

            </div>

        </div>
    )
}

export default Chat