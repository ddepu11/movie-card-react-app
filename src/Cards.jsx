function Cards({ src, name, address, title }) {
  return (
    <div className="card">
      <img src={src} alt="pic" className="card__img" />
      <div className="movie-info">
        <span className="heading">{title}</span>
        <h3 className="movie-name">{name}</h3>
        <a className="btn" href={address} rel="noreferrer" target="_blank">
          Watch Now
        </a>
      </div>
    </div>
  );
}

export default Cards;
