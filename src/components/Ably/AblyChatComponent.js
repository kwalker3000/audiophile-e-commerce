import React, { useEffect, useState } from 'react'
import { useChannel } from './AblyReactEffect'
import styles from '../../../styles/modules/AblyChatComponent.module.css'

import { Logo } from '../Logo'
import { PlaneIcon } from './PlaneIcon'

export default function AblyChatComponent() {
  let inputBox = null
  let messageEnd = null

  const [messageText, setMessageText] = useState('')
  const [receivedMessages, setMessages] = useState([])
  const messageTextIsEmpty = messageText.trim().length === 0

  const [channel, ably] = useChannel('chat-demo', (message) => {
    const history = receivedMessages.slice(-199)
    setMessages([...history, message])
  })

  const sendChatMessage = (messageText) => {
    channel.publish({ name: 'chat-message', data: messageText })
    setMessageText('')
    inputBox.focus()
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    sendChatMessage(messageText)
  }

  const handleKeyPress = (e) => {
    if (e.charCode !== 13 || messageTextIsEmpty) {
      return
    }
    sendChatMessage(messageText)
    e.preventDefault()
  }

  const messages = receivedMessages.map((message, index) => {
    const author = message.connectionId === ably.connection.id ? 'me' : 'other'
    return (
      <>
        <span
          key={index}
          className={`${author == 'me' ? styles.me : styles.other} ${
            styles.message
          }`}
          data-author={author}
        >
          {message.data}
        </span>
        <span className={`${author !== 'me' && styles.care} ${styles.author}`}>
          {author}
        </span>
      </>
    )
  })

  useEffect(() => {
    messageEnd.scrollIntoView({ behaviour: 'smooth' })
  })

  return (
    <div className={styles.chatHolder}>
      <div className={styles.chatHeader}>
        <div className={styles.logoWrap}>
          <Logo />
        </div>
        <div className={styles.outline}></div>
      </div>
      <div className={styles.chatText}>
        {messages}
        <div
          ref={(element) => {
            messageEnd = element
          }}
        ></div>
      </div>

      <form onSubmit={handleFormSubmit} className={styles.form}>
        <textarea
          rows={1}
          ref={(element) => {
            inputBox = element
          }}
          value={messageText}
          placeholder="Type a message..."
          onChange={(e) => setMessageText(e.target.value)}
          onKeyPress={handleKeyPress}
          className={styles.textarea}
        ></textarea>
        <button
          type="submit"
          className={styles.button}
          disabled={messageTextIsEmpty}
        >
          <span className={styles.planeWrap}>
            <PlaneIcon />
          </span>
        </button>
      </form>
    </div>
  )
}
