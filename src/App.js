import { Map, CustomOverlay, ZoomControl } from 'react-bmapgl'
import star from './star.svg'
import { useState } from 'react'

function DOM(props) {
  return <div className="custom" >
    <img src={props.img} width={22} />
  </div>
}

function App() {
  const [one, setOne] = useState()
  // 从接口获取地址列表
  const [list, setList] = useState([
    {
      "name": "上海1号私藏菜(黄浦店)",
      "location": {
        "lat": 31.231318,
        "lng": 121.487748
      },
      "address": "上海市黄浦区西藏南路237号新尚数码广场6楼",
      "province": "上海市",
      "city": "上海市",
      "area": "黄浦区",
      "street_id": "be1ea5effbd080a614948ed9",
      "telephone": "(021)33317779",
      "detail": 1,
      "uid": "be1ea5effbd080a614948ed9"
    },
    {
      "name": "王家沙(南京西路总店)",
      "location": {
        "lat": 31.236826,
        "lng": 121.467632
      },
      "address": "上海市静安区南京西路805号",
      "province": "上海市",
      "city": "上海市",
      "area": "静安区",
      "street_id": "e6ee2fd2e9b6e3512a11d19f",
      "telephone": "(021)62530404",
      "detail": 1,
      "uid": "e6ee2fd2e9b6e3512a11d19f"
    },
    {
      "name": "香港龙凤楼(巨鹿路店)",
      "location": {
        "lat": 31.224141,
        "lng": 121.455078
      },
      "address": "上海市静安区巨鹿路889弄",
      "province": "上海市",
      "city": "上海市",
      "area": "静安区",
      "street_id": "753f223435f66efff5231072",
      "telephone": "(021)64458082,(021)64678866",
      "detail": 1,
      "uid": "753f223435f66efff5231072"
    },
    {
      "name": "南翔馒头店(豫园路店)",
      "location": {
        "lat": 31.232302,
        "lng": 121.498052
      },
      "address": "上海市黄浦区豫园路87号",
      "province": "上海市",
      "city": "上海市",
      "area": "黄浦区",
      "street_id": "631c41570d2cfd7830f71d8c",
      "telephone": "(021)63554206",
      "detail": 1,
      "uid": "631c41570d2cfd7830f71d8c"
    },
    {
      "name": "红辣椒(安信商业广场店)",
      "location": {
        "lat": 31.399969,
        "lng": 121.495346
      },
      "address": "上海市宝山区牡丹江路1255号安信商业广场3层",
      "province": "上海市",
      "city": "上海市",
      "area": "宝山区",
      "street_id": "49a02a7a3bab51592a201ab1",
      "telephone": "(021)66595017,(021)66595026",
      "detail": 1,
      "uid": "49a02a7a3bab51592a201ab1"
    },
    {
      "name": "双塔老饭店",
      "location": {
        "lat": 31.297236,
        "lng": 121.314823
      },
      "address": "上海市嘉定区人民街61号",
      "province": "上海市",
      "city": "上海市",
      "area": "嘉定区",
      "street_id": "1790af888c637fc26f3e1b51",
      "telephone": "(021)59128825",
      "detail": 1,
      "uid": "1790af888c637fc26f3e1b51"
    },
    {
      "name": "苏浙汇(南京西路店)",
      "location": {
        "lat": 31.238199,
        "lng": 121.476821
      },
      "address": "上海市黄浦区南京西路288弄",
      "province": "上海市",
      "city": "上海市",
      "area": "黄浦区",
      "street_id": "5c2dc21d8c05e71d6fc02cd8",
      "telephone": "(021)33663777",
      "detail": 1,
      "uid": "5c2dc21d8c05e71d6fc02cd8"
    },
    {
      "name": "丰茂烤串(昌平路店)",
      "location": {
        "lat": 31.243068,
        "lng": 121.455602
      },
      "address": "上海市静安区昌平路317号-5号",
      "province": "上海市",
      "city": "上海市",
      "area": "静安区",
      "street_id": "3e2fb69ead8ef0870782c23c",
      "telephone": "17616274653",
      "detail": 1,
      "uid": "3e2fb69ead8ef0870782c23c"
    },
    {
      "name": "上海小南国(国发店)",
      "location": {
        "lat": 31.24258,
        "lng": 121.517118
      },
      "address": "上海市浦东新区浦东南路500号国家开发银行大厦4层",
      "province": "上海市",
      "city": "上海市",
      "area": "浦东新区",
      "street_id": "d146b388092e57c774026924",
      "telephone": "(021)58762277,4008209777",
      "detail": 1,
      "uid": "d146b388092e57c774026924"
    },
    {
      "name": "膳道(虹口店)",
      "location": {
        "lat": 31.268112,
        "lng": 121.495012
      },
      "address": "上海市虹口区溧阳路1155号溧阳公馆3层",
      "province": "上海市",
      "city": "上海市",
      "area": "虹口区",
      "street_id": "cfe195d1cb7169202fb17e3f",
      "telephone": "(021)36563777,(021)63066767",
      "detail": 1,
      "uid": "cfe195d1cb7169202fb17e3f"
    }
  ])

  const onSelect = (uid) => {
    let one = list.find(p => p.uid === uid);
    setOne(one);
  }

  return (
    <div>
      <div style={{ zIndex: 100, position: 'absolute', width: 800, height: 300, bottom: 0, background: '#ffffff', overflow: 'auto' }}>
        {
          list.map(item => {
            return <div style={{ padding: 10, borderBottom: '1px solid #efefef', background: one && item.uid === one.uid ? '#efefef' : '', cursor: 'pointer' }} onClick={() => onSelect(item.uid)}>
              <p style={{ fontSize: 14 }}>{item.name}</p>
              <p style={{ fontSize: 10 }}>{item.address}</p>
            </div>
          })
        }
      </div>
      <Map
        center={one ? new window.BMapGL.Point(one.location.lng, one.location.lat) : new window.BMapGL.Point(121.404343, 31.170954)}
        zoom={14}
        autoViewport={false}
        // tilt={40}
        style={{ height: '100vh' }}
      >
        <ZoomControl />
        {
          one &&
          <CustomOverlay position={new window.BMapGL.Point(one.location.lng, one.location.lat)}>
            <DOM img={star} />
          </CustomOverlay>
        }
      </Map>
    </div>
  );
}

export default App;
