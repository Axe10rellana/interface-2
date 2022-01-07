import Card from "./Card";

//imagenes
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";

const cards = [
  {
    id: 1,
    title: "July 2014",
    city: "SAN FRANCISCO",
    image1: image1,
    image2: image2,
    image3: image3,
    icono1: "fas fa-coffee",
    icono2: "fas fa-bread-slice",
    icono3: "fas fa-dumbbell",
    service1: "COFFEE SHOP",
    service2: "BAKERY",
    service3: "CLIMBING GYM",
    times1: "5 times",
    times2: "5 times",
    times3: "3 times",
  },
  {
    id: 2,
    title: "June 2014",
    city: "CHINA AND 10 OTHER CITIES",
    image1: image4,
    image2: image5,
    image3: image6,
    icono1: "fas fa-plane",
    icono2: "fas fa-coffee",
    icono3: "fas fa-gopuram",
    service1: "AIRPORT",
    service2: "COFFEE SHOP",
    service3: "TEMPLE",
    times1: "12 times",
    times2: "7 times",
    times3: "5 times",
  },
  {
    id: 3,
    title: "May 2014",
    city: "JAPAN",
    image1: image7,
    image2: image8,
    image3: image9,
    icono1: "fas fa-hotel",
    icono2: "fas fa-plane",
    icono3: "fas fa-store-alt",
    service1: "RESORT",
    service2: "AIRPORT",
    service3: "MALL",
    times1: "33 times",
    times2: "20 times",
    times3: "8 times",
  },
  {
    id: 4,
    title: "April 2014",
    city: "SAN FRANCISCO PUTEAUX VERSAILLES AND 11 OTHER CITIES",
    image1: image10,
    image2: image11,
    image3: image12,
    iconoA: "🌯",
    icono2: "fas fa-coffee",
    icono3: "fas fa-bread-slice",
    service1: "BURRITOS",
    service2: "COFFEE SHOP",
    service3: "BAKERY",
    times1: "8 times",
    times2: "8 times",
    times3: "8 times",
  },
  {
    id: 5,
    title: "March 2014",
    city: "PARIS TREMBLAY EN FRANCE SAN FRANCISCO AND 1 OTHER CITY",
    image1: image13,
    image2: image14,
    image3: image15,
    icono1: "fas fa-landmark",
    iconoB: "🗼",
    icono3: "fas fa-plane",
    service1: "LANDMARK",
    service2: "FRENCH",
    service3: "AIRPORT",
    times1: "3 times",
    times2: "3 times",
    times3: "3 times",
  },
];

const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        {cards.map((card, index) => (
          <div key={index} className="col-md-6">
            <Card
              title={card.title}
              city={card.city}
              image1={card.image1}
              image2={card.image2}
              image3={card.image3}
              iconoA={card.iconoA}
              iconoB={card.iconoB}
              icono1={card.icono1}
              icono2={card.icono2}
              icono3={card.icono3}
              service1={card.service1}
              service2={card.service2}
              service3={card.service3}
              times1={card.times1}
              times2={card.times2}
              times3={card.times3}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
