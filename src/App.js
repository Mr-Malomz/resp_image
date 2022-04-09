import './App.css';
import { Cloudinary } from '@cloudinary/url-gen';
import {
  AdvancedImage,
  responsive,
  lazyload,
  placeholder,
  accessibility
} from '@cloudinary/react';

function App() {
  //create cloudinary instance
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
    },
  });

  const myImage = cld.image('photo-1649486116313-d04e42c24590');

  return (
    <div className='App'>
      <header>
        <h1>Responsive Image</h1>
      </header>
        <AdvancedImage
          cldImg={myImage}
          plugins={[
            lazyload(),
            responsive({ steps: [200, 400] }),
            accessibility(),
            placeholder(),
          ]}
        />
    </div>
  );
}

export default App;
