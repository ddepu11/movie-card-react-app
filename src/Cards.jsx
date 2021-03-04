function Cards({ src, name, address, title }) {
  return (
    <div className="card">
      <img src={src} alt="pic" className="card__img" />
      <div className="card__info">
        <span className="card__category">{title}</span>
        <h3 className="card__title">{name}</h3>
        <a className="btn" href={address} rel="noreferrer" target="_blank">
          Watch Now
        </a>
      </div>
    </div>
  );
}

export default Cards;
