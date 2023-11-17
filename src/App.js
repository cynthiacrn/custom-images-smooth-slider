import './tailwind.css';
import { useHorizontalScroll } from "./hooks/useHorizontalScroll";

function App() {
  const sliderRef = useHorizontalScroll();
  const slides = [
    {
      image: './images/1.jpg',
      title: 'MONOCHROME',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/2.jpg',
      title: 'SERENDIPITY',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/3.jpg',
      title: 'KALEIDOSCOPE',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/4.jpg',
      title: 'EPHEMERAL',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/5.jpg',
      title: 'WHIMSICAL',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/6.jpg',
      title: 'PANACHE',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/7.jpg',
      title: 'MELLIFLUOUS',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/8.jpg',
      title: 'NEBULOUS',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/9.jpg',
      title: 'LABYRINTHINE',
      subtitle: 'Lorem ipsum dolor'
    },
    {
      image: './images/10.jpg',
      title: 'EFFERVESCENT',
      subtitle: 'Lorem ipsum dolor'
    },
  ]

  return (
    <div className="slider-images__container hide-scroll" ref={sliderRef}>
      {slides.map((slide, index) => (
        <div className="slider-images__container-image">
          <img className="slider-images__image" key={index} src={slide.image} alt={slide.title} />
          <div className="slider-images__description-positioner">
            <div className="slider-images__description-container">
              <h1 className="slider-images__description-title">{slide.title}</h1>
              <p className="slider-images__description-subtitle">{slide.subtitle}</p>
            </div>
          </div>
        </div>

      ))}
    </div>
  );
}

export default App;
