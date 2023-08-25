import Marquee from 'react-fast-marquee'
import './hero.scss'

function Hero() {
  const renderTilesMarquee = (displayText: string, offset: string = '') => {
    const characterArray: string[] = []
    for (const char of displayText) characterArray.push(char)
    return characterArray.map((char, index) => (
      <div
        className={`tile ${offset} flex text-center items-center rounded-full bg-white`}
        key={index}
      >
        <h1>{char}</h1>
      </div>
    ))
  }

  return (
    <div className='hero-container full-screen'>
      <Marquee direction='right' autoFill speed={15}>
        {renderTilesMarquee('THREEJS', 'translate-x-1/4')}
      </Marquee>
      <Marquee direction='left' autoFill speed={15}>
        {renderTilesMarquee('THREEJS', '-translate-x-1/4')}
      </Marquee>
      <Marquee direction='right' autoFill speed={15} style={{ overflowX: 'hidden' }}>
        {renderTilesMarquee('PLAYGROUND', 'translate-x-3/4')}
      </Marquee>
      <Marquee direction='left' autoFill speed={15}>
        {renderTilesMarquee('PLAYGROUND', '-translate-x-3/4')}
      </Marquee>
    </div>
  )
}

export default Hero
