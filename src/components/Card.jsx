export default function Card({src , name}) {
  return (
    <div className="card border-0 swiper-slide">
      <div className="image-content">
        <span className="overlay"></span>
        <div className="card-image">
          <img src={src} alt="" className="card-img" />
        </div>
      </div>
      <div className="card-content">
        <h2 className="name">{name}</h2>
      </div>
    </div>
  );
}
