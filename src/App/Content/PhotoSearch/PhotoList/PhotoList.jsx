import { Empty, List } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import PhotoCard from './PhotoCard/PhotoCard'

const PhotoList = (props) => {
  const { photos } = props

  return (
    <List
      style={{ width: 700, margin: 'auto' }}
      grid={{ gutter: 16, column: 5 }}
      dataSource={photos}
      renderItem={(item) => {
        return (
          <List.Item>
            <PhotoCard
              photo={item}
            />
          </List.Item>
        )
      }}
    >
      {
        (photos.length === 0) &&
          <Empty />
      }
    </List>
  )
}

PhotoList.propTypes = {
  photos: PropTypes.array.isRequired
}

export default PhotoList
