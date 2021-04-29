import React from 'react';
import Slider from 'infinite-react-carousel';
import Background from './Background';

export default function Arrow(props) {
  const {SlideData} = props;
  const listItems = SlideData.map((data,id) =>
  <Background  keys={id} data={data}/>
  );
    return (
        <div style={{width:'100%', height:'100px'}}>      
            <Slider>      
              {listItems}
            </Slider>   
            </div>         
    )
}
