import { Map, CustomOverlay } from 'react-bmapgl'
import star from './star.svg'
import dinner from './dinner.svg'

function DOM(props) {
  return <div className="custom" >
    <img src={props.img} width={22} />
  </div>
}

function App() {
  return (
    <Map
      center={new window.BMapGL.Point(121.404343,31.170954)}
      zoom={18}
      tilt={40}
      style={{ height: '100vh' }}
    >
      <CustomOverlay position={new window.BMapGL.Point(121.400432, 31.170453)}>
        <DOM img={star} />
      </CustomOverlay>
      <CustomOverlay position={new window.BMapGL.Point(121.402807,31.172746)}>
        <DOM img={star} />
      </CustomOverlay>
      <CustomOverlay position={new window.BMapGL.Point(121.405376, 31.171271)}>
        <DOM img={dinner} />
      </CustomOverlay>
    </Map>
  );
}

export default App;
