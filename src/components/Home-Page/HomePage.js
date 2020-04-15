import React from 'react';
import './home-page.styles.css';
import '../ImageGallery/MyGallery';
import MyGallery from '../ImageGallery/MyGallery';

class HomePage extends React.Component {
  render() {
    return (
      <h1 className='home-page-header'>
        <strong>Home Page</strong>
        <MyGallery />
        <br></br>
        <br></br>
        <p className='paragraph'>
          {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

          Posuere urna nec tincidunt praesent semper. Maecenas sed enim ut sem viverra aliquet. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Semper auctor neque vitae tempus quam pellentesque nec nam aliquam. Et pharetra pharetra massa massa ultricies mi. Ac turpis egestas sed tempus urna et pharetra pharetra massa. Sit amet nisl purus in mollis nunc sed. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Tellus in metus vulputate eu scelerisque.

          Proin gravida hendrerit lectus a. Imperdiet sed euismod nisi porta lorem mollis aliquam. Tincidunt eget nullam non nisi est sit amet facilisis. Pretium lectus quam id leo in vitae turpis. Feugiat vivamus at augue eget arcu dictum varius duis. Vitae nunc sed velit dignissim sodales ut eu sem. Diam volutpat commodo sed egestas egestas fringilla phasellus. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Posuere morbi leo urna molestie at elementum.


          Varius morbi enim nunc faucibus. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis. Risus quis varius quam quisque id diam vel. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Duis at tellus at urna condimentum mattis.

          Elit ut aliquam purus sit amet luctus venenatis. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Quam elementum pulvinar etiam non. Tristique risus nec feugiat in. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et. Eu nisl nunc mi ipsum faucibus vitae.

          Mattis ullamcorper velit sed ullamcorper. Dolor sit amet consectetur adipiscing. Libero nunc consequat interdum varius. Blandit aliquam etiam erat velit scelerisque in. Sagittis aliquam malesuada bibendum arcu.


          Eget mi proin sed libero enim sed faucibus turpis in. Augue neque gravida in fermentum. Congue quisque egestas diam in arcu cursus euismod. Eget lorem dolor sed viverra. Id porta nibh venenatis cras sed felis eget velit. Tortor at auctor urna nunc id cursus. Adipiscing elit pellentesque habitant morbi tristique senectus. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Dui sapien eget mi proin. Pulvinar elementum integer enim neque.`}
        </p>
      </h1>
    );
  }
};

export default HomePage;