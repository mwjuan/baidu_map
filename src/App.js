import { Map, Marker } from 'react-bmapgl'
import star from './hotel.svg'
import { useState } from 'react'
import list from './data.json';

function App() {
  const [one, setOne] = useState()
  const onSelect = (uid) => {
    let one = list.find(p => p.uid === uid);
    setOne(one);
  }

  return (
    <div>
      <div style={{ zIndex: 100, position: 'absolute', width: 500, height: 200, bottom: 0, background: '#ffffff', overflow: 'auto' }}>
        {
          list.map(item => {
            return <div key={item.uid} style={{ display: 'flex', flexDirection: 'column', padding: 10, height: 30, borderBottom: '1px solid #efefef', background: one && item.uid === one.uid ? '#f9a216' : '', cursor: 'pointer' }} onClick={() => onSelect(item.uid)}>
              <span style={{ fontSize: 14 }}>{item.name}</span>
              <span style={{ fontSize: 8, color: 'gray' }}>{item.address}</span>
            </div>
          })
        }
      </div>
      <Map
        center={one ? new window.BMapGL.Point(one.location.lng, one.location.lat) : new window.BMapGL.Point(106.560162, 29.561205)}
        zoom={one ? 14 : 6}
        autoViewport={false}
        enableScrollWheelZoom={true}
        enableDragging={true}
        enableDoubleClickZoom={true}
        style={{ height: '100vh' }}
      >
        {
          list.map(p => {
            return <Marker
              onClick={() => onSelect(p.uid)}
              key={p.uid}
              icon={new window.BMapGL.Icon(star, new window.BMapGL.Size(30, 30))}
              position={new window.BMapGL.Point(p.location.lng, p.location.lat)}
            />
          })
        }
      </Map>
    </div>
  );
}

export default App;
