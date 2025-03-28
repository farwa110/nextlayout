"use client";

const HeroWatch = () => {
  return (
    <section className="hero-watch">
      <div className="watch-section">
        <img src="/herowatch.png" alt="Watch" className="watch-img" />
      </div>
      <div className="color-indicators">
        <div className="indicator">
          <img src="/colorindicator.svg" alt="Gray Indicator" className="indicator-icon active" />
        </div>
      </div>
    </section>
  );
};

export default HeroWatch;
