import React from 'react'
import styled from 'styled-components'

const URL = '../static/'
const FILE = 'vincent-bianciotto-2'
const PHOTO_SIZE = 150

const StyledProfilePic = styled.div`
  border-radius: 50%;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  img {
    margin: 0;
    display: block;
  }
`

const ProfilePic = () => {
  const PHOTO = URL + `${FILE}.jpg`;
  const PHOTO_2X = URL + `${FILE}_2x.jpg`;
  const PHOTO_3X = URL + `${FILE}_3x.jpg`;

  return (
    <StyledProfilePic>
      <img
        src={PHOTO}
        srcSet={`${PHOTO} 1x, ${PHOTO_2X} 2x, ${PHOTO_3X} 3x`}
        width={PHOTO_SIZE}
        height={PHOTO_SIZE}
        alt={FILE}
      />
    </StyledProfilePic>
  )
}

export default ProfilePic
