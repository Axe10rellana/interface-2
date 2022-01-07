const Card = ({
  title,
  city,
  image1,
  image2,
  image3,
  iconoA,
  iconoB,
  icono1,
  icono2,
  icono3,
  service1,
  service2,
  service3,
  times1,
  times2,
  times3,
}) => {
  return (
    <section>
      <div className="card text-center bg-light animate__animated animate__fadeInUp">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <small className="card__small">{city}</small>
        </div>
        <div className="overflow">
          <img src={image1} alt={city} className="card__img" />
          <img src={image2} alt={city} className="card__img" />
          <img src={image3} alt={city} className="card__img" />
        </div>
        <div className="card-body">
          <div className="card__data">
            {iconoA ? <p>{iconoA}</p> : <i className={icono1}></i>}
            <h3>{service1}</h3>
            <small>{times1}</small>
          </div>
          <div className="card__data">
            {iconoB ? <p>{iconoB}</p> : <i className={icono2}></i>}
            <h3>{service2}</h3>
            <small>{times2}</small>
          </div>
          <div className="card__data">
            <i className={icono3}></i>
            <h3>{service3}</h3>
            <small>{times3}</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
