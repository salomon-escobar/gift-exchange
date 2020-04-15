import React from 'react';
import ImageGallery from 'react-image-gallery';


const images = [
  {
    original:  'https://picsum.photos/id/1018/1000/300/',
    thumbnail: 'https://picsum.photos/id/1018/1000/150/',
  }
];

class MyGallery extends React.Component {
  render() {
    return (
      <ImageGallery items={images} />
    );
  }
}

export default MyGallery;