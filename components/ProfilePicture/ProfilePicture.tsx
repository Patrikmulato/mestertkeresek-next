import { Avatar } from '@material-ui/core'
import React from 'react'

interface ProfilePictureInterface {
  name: string
  src: string
  classes: Record<'avatar', string>
}

const ProfilePicture: React.FC<ProfilePictureInterface> = ({ name, src, classes }) => {
  if (!name) {
    return null
  }
  return (
    <Avatar src={src} alt={name} className={classes.avatar}>
      {name
        .split(' ')
        .map((n) => n[0])
        .join('')}
    </Avatar>
  )
}

export default ProfilePicture
