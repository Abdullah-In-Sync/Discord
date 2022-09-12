import { Avatar } from '@mui/material'
import React from 'react'
import "./features/Messages.css"

export const Messages = () => {
  return (
    <div className="message">
        <Avatar />
        <div className="message__info">
            <h4>
                @abdullah.mars
                <span className="message__timestamp">this is a timestamp</span>
            </h4>
        </div>
    </div>
  )
}
