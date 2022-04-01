import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
function Banner() {
  return (
    <div className='relative'>
      <div className='absolute h-32 w-full bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20'/>
<Carousel 
autoPlay
infiniteLoop
showStatus={false}
showIndicators={false}
showThumbs={false}
interval={5000}>

<div>
<img loading="lazy" src="https://i.ibb.co/1Z77sgG/711-Y9-Al9-RNL-SX3000-22.jpg" alt="" />
</div>
<img loading="lazy" src="https://links.papareact.com/6ff" alt="" />
<div>
<img loading="lazy" src="https://links.papareact.com/7ma" alt="" />
</div>
<div>
<img loading="lazy" src="https://i.ibb.co/Wt4V1cM/71qid7-QFWJL-SX3000.jpg" alt="" />
</div>
</Carousel>
    </div>
  )
}

export default Banner