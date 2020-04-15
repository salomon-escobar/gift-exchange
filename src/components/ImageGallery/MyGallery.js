import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/150/',
  },
];

class MyGallery extends React.Component {
  constructor() {
    super();
    this.state = {
      showThumbnails: false,
      showFullscreenButton: false,
      showGalleryFullscreenButton: false,
      showPlayButton: false,
      showGalleryPlayButton: false,
      fullscreen: false,
      showNav: false
    }
  }
  render() {
    return (
      <ImageGallery
        items={images}
        showFullscreenButton={this.state.showFullscreenButton}
        showPlayButton={this.state.showPlayButton}
        showThumbnails={this.state.showThumbnails}
        showGalleryFullscreenButton={this.state.showGalleryFullscreenButton}
        showNav={this.state.showNav}
      />
    )
  }
}

export default MyGallery;