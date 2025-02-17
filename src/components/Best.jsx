import './com.css'
export default function Best() {
  return (
    <section className="best">
      <h1 className="heading">Why Medicamo is the best choice for you?</h1>
      <div className="best-container">
        <div className="best-card">
          <i className="fa-solid fa-circle-check"></i>
          <h4>Free Check up</h4>
          <p>
            Free re-examination for life, and free check-up for the first time
          </p>
        </div>
        {/* card */}
        <div className="best-card">
          <i className="fa-solid fa-person"></i>
          <h4>Discover the specialty</h4>
          <p>
            Enter your symptoms, and we will recommend the most appropriate
            specialty for your condition.
          </p>
        </div>
        {/* card */}
        <div className="best-card">
          <i className="fa-solid fa-user-doctor"></i>
          <h4>Top doctors </h4>
          <p>
            Discover and check reviews from previous patients. Explore
            healthcare providers' experience, profiles, videos, articles, and
            services offered
          </p>
        </div>
        {/* card */}

        <div className="best-card">
          <i className="fa-solid fa-hand-holding-dollar"></i>
          <h4>Free Service</h4>
          <p>
            Payment is remitted at the clinic or upon availing of medical
            services, with no additional fees incurred.
          </p>
        </div>
        {/* card */}
        <div className="best-card">
          <i className="fa-regular fa-clock"></i>
          <h4>Healthcare on Your Terms</h4>
          <p>book your doctor or healthcare provider anytime, anywhere 24\7</p>
        </div>
        {/* card */}
        <div className="best-card">
          <i className="fa-regular fa-newspaper"></i>
          <h4>Personalized articles</h4>
          <p>
            Personalized articles and medical content tailored to your condition
            are sent to you using AI.
          </p>
        </div>
        {/* card */}
      </div>
    </section>
  );
}
