'use client'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const staticMessages = [
  {
    id: 1,
    sender: 'lordseif07',
    userType: 'Client',
    message: 'Hello , I need more details about HP Victus 15-fa0031dx Gaming Laptop . Can you clarify its features and availability?',
    timestamp: '2:08 PM 12 Dec 2024',
    isAdmin: false,
    height: 145
  },
  {
    id: 2,
    sender: 'Seif',
    userType: 'Admin',
    message: "Thank you for reaching out! HP Victus 15-fa0031dx Gaming Laptop offer is currently available and can visit product page for more details, Let me know if you'd like further assistance or wish to place an order.",
    timestamp: '2:10 PM 12 Dec 2024',
    isAdmin: true,
    height: 175
  },
  {
    id: 3,
    sender: 'lordseif07',
    userType: 'Client',
    message: 'What are the specifications of the laptop? Particularly interested in the processor and graphics card.',
    timestamp: '2:15 PM 12 Dec 2024',
    isAdmin: false,
    height: 145
  },
  {
    id: 4,
    sender: 'Seif',
    userType: 'Admin',
    message: 'The HP Victus features an Intel Core i5 processor, NVIDIA GeForce RTX 3050 graphics, 16GB RAM, and 512GB SSD. Would you like more specific details about any of these components?',
    timestamp: '2:18 PM 12 Dec 2024',
    isAdmin: true,
    height: 175
  },
  {
    id: 5,
    sender: 'lordseif07',
    userType: 'Client',
    message: 'That sounds good. What about the display and battery life?',
    timestamp: '2:20 PM 12 Dec 2024',
    isAdmin: false,
    height: 145
  },
  {
    id: 6,
    sender: 'Seif',
    userType: 'Admin',
    message: 'It has a 15.6" Full HD display with 144Hz refresh rate. The battery life is approximately 6-7 hours for normal usage. The fast charging feature can charge up to 50% in about 30 minutes.',
    timestamp: '2:22 PM 12 Dec 2024',
    isAdmin: true,
    height: 175
  },
  {
    id: 7,
    sender: 'lordseif07',
    userType: 'Client',
    message: 'What about the warranty and after-sales support?',
    timestamp: '2:25 PM 12 Dec 2024',
    isAdmin: false,
    height: 145
  },
  {
    id: 8,
    sender: 'Seif',
    userType: 'Admin',
    message: 'The laptop comes with a 1-year manufacturer warranty covering hardware defects. We also provide 24/7 customer support and authorized service centers nationwide.',
    timestamp: '2:27 PM 12 Dec 2024',
    isAdmin: true,
    height: 175
  }
]

export default function ChatPage({ params }) {
  const [messages, setMessages] = useState(staticMessages)
  const [newMessage, setNewMessage] = useState('')
  const [scrollPosition, setScrollPosition] = useState(0)
  const messagesContainerRef = useRef(null)
  const thumbRef = useRef(null)
  const isDragging = useRef(false)
  const startY = useRef(0)
  const startScrollTop = useRef(0)

  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current
      const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100
      setScrollPosition(scrollPercentage)
    }
  }

  const handleThumbMouseDown = (e) => {
    isDragging.current = true
    startY.current = e.clientY
    startScrollTop.current = messagesContainerRef.current.scrollTop
    document.addEventListener('mousemove', handleThumbMouseMove)
    document.addEventListener('mouseup', handleThumbMouseUp)
  }

  const handleThumbMouseMove = (e) => {
    if (!isDragging.current) return
    e.preventDefault()
    const deltaY = e.clientY - startY.current
    const { scrollHeight, clientHeight } = messagesContainerRef.current
    const scrollableHeight = scrollHeight - clientHeight
    const thumbTrackHeight = 700 - 400 // container height - thumb height
    const scrollDelta = (deltaY / thumbTrackHeight) * scrollableHeight
    messagesContainerRef.current.scrollTop = startScrollTop.current + scrollDelta
  }

  const handleThumbMouseUp = () => {
    isDragging.current = false
    document.removeEventListener('mousemove', handleThumbMouseMove)
    document.removeEventListener('mouseup', handleThumbMouseUp)
  }

  useEffect(() => {
    const messagesContainer = messagesContainerRef.current
    if (messagesContainer) {
      messagesContainer.addEventListener('scroll', handleScroll)
      return () => messagesContainer.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    const newMsg = {
      id: messages.length + 1,
      sender: 'Seif',
      userType: 'Admin',
      message: newMessage,
      timestamp: new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      isAdmin: true,
      height: 175
    }

    setMessages([...messages, newMsg])
    setNewMessage('')
  }

  return (
    <div className="flex-1 bg-[#F4F4F4] overflow-auto p-4 md:p-8">
      <div className="max-w-[1105px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-12 w-full">
          {/* Frame 48443 - Messages Container */}
          <div className="flex flex-col gap-6 md:gap-8 w-full h-[500px] md:h-[780px]">
            {/* Title */}
            <div className="flex items-center gap-2.5 md:gap-4 w-full">
              <Image
                src="/icons/rectangle-chat-dashboard.svg"
                width={20}
                height={50}
                alt="Chat indicator"
                className="w-5 md:w-7"
              />
              <span className="font-poppins font-semibold text-xl md:text-3xl text-[#061404] truncate">
                {params.userId}
              </span>
              <div className="hidden md:block w-0 h-[30px] border-[3px] border-black" />
              <span className="hidden md:block font-poppins font-semibold text-xl md:text-3xl text-[#787777] truncate">
                HP Victus 15-fa0031dx Gaming Laptop
              </span>
            </div>

            {/* Frame 48442 - Messages and Scrollbar */}
            <div className="flex gap-5 w-full h-[500px] md:h-[700px]">
              {/* Messages Area */}
              <div 
                ref={messagesContainerRef}
                className="relative flex-1 h-full overflow-y-scroll scrollbar-hide"
              >
                <div className="absolute w-full" style={{ minHeight: '100%' }}>
                  {messages.map((msg, index) => (
                    <div
                      key={msg.id}
                      className={`absolute w-[85%] md:w-[900px] rounded-[20px]`}
                      style={{ 
                        height: `${msg.height}px`,
                        left: msg.isAdmin ? '15%' : '0px',
                        top: `${index * 195}px`,
                        background: msg.isAdmin 
                          ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #11A900'
                          : '#FFFFFF'
                      }}
                    >
                      {/* User Info */}
                      <div className="flex items-center gap-2.5 absolute w-full md:w-[205px] h-[30px] left-4 top-4">
                        <span className={`font-poppins font-semibold text-base md:text-xl leading-[30px] ${msg.isAdmin ? 'text-[#FFFFFF]' : 'text-[#11A900]'}`}>
                          @{msg.sender}
                        </span>
                        <div className={`hidden md:block w-0 h-5 border-[2px] ${msg.isAdmin ? 'border-[#FFFFFF]' : 'border-[#000000]'}`} />
                        <span className={`hidden md:block font-poppins font-semibold text-base md:text-xl leading-[30px] ${msg.isAdmin ? 'text-[rgba(255,255,255,0.8)]' : 'text-[#11A900]'}`}>
                          {msg.userType}
                        </span>
                      </div>

                      {/* Timestamp */}
                      <div className="absolute text-right w-auto md:w-[202px] h-[30px] right-4 top-4 font-poppins font-normal text-sm md:text-xl leading-[30px]" style={{
                        color: msg.isAdmin ? 'rgba(255, 255, 255, 0.8)' : '#AEADAD'
                      }}>
                        {msg.timestamp}
                      </div>

                      {/* Message Text */}
                      <div className="absolute w-[90%] left-4 top-16 font-poppins font-medium text-sm md:text-xl leading-relaxed md:leading-[30px]" style={{
                        color: msg.isAdmin ? '#FFFFFF' : '#787777'
                      }}>
                        {msg.message}
                      </div>

                      {/* Message Pointer */}
                      {msg.isAdmin && (
                        <Image
                          src="/icons/sender-shape.svg"
                          width={40}
                          height={40}
                          alt="Sender indicator"
                          className="absolute w-8 md:w-10"
                          style={{
                            right: '0px',
                            bottom: '-9.5px',
                            transform: 'rotate(0deg)'
                          }}
                        />
                      )}
                      {!msg.isAdmin && (
                        <div className="absolute w-2.5 h-2.5 left-[-10px] bottom-[40px] bg-[#FFFFFF]" style={{
                          clipPath: 'polygon(100% 0, 100% 100%, 0 50%)'
                        }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Custom Scrollbar */}
              <div className="hidden md:block relative w-[15px] h-full bg-[rgba(17,169,0,0.2)]">
                <div 
                  ref={thumbRef}
                  onMouseDown={handleThumbMouseDown}
                  className="absolute w-[15px] h-[400px] cursor-pointer"
                  style={{
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #11A900',
                    top: `${scrollPosition * (700 - 400) / 100}px`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="flex flex-col gap-4 w-full">
            {/* Input Form */}
            <form onSubmit={handleSendMessage} className="flex items-center px-4 md:px-5 gap-2.5 w-full h-20 md:h-24 bg-white border border-[#11A900] rounded-[25px] md:rounded-[50px]">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 font-poppins text-base md:text-xl text-[#787777] outline-none"
              />
              <button
                type="submit"
                className="flex justify-center items-center w-10 h-10 md:w-[50px] md:h-[50px] bg-[#11A900] rounded-full"
              >
                <Image
                  src='/icons/send-msg-dashboard.svg'
                  width={20}
                  height={23}
                  className="w-5 md:w-7"
                  alt="Send message"
                />
              </button>
              <div className="flex justify-center items-center w-10 h-10 md:w-[50px] md:h-[50px] border border-[#11A900] rounded-full">
                <Image
                  src='/icons/upload-msg-dashboard.svg'
                  width={20}
                  height={20}
                  className="w-5 md:w-6"
                  alt="Upload file"
                />
              </div>
            </form>

            {/* Help Text */}
            <p className="text-xs md:text-sm leading-relaxed text-[#787777]">
              Always maintain a kind, professional, and helpful tone when communicating with clients. Be patient and ensure their concerns are addressed promptly and effectively. Remember, all chat interactions are monitored by the management team to ensure quality and professionalism. Your communication reflects the values of our company, so strive to create a positive and satisfying experience for every client.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
