import "./com.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3>quick links</h3>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> home
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> services
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> about
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> doctors
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> book
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> review
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> blogs
          </a>
        </div>

        <div className="box">
          <h3>our services</h3>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> dental care
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> message therpay
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> cardioloty
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> diagnosis
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> book
          </a>
          <a href="#">
            <i className="fa-solid fa-caret-right"></i> ambulance service
          </a>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <a href="#">
            <i className="fas fa-phone"></i> +123-456-7895
          </a>
          <a href="#">
            <i className="fas fa-phone"></i> +181-685-7895
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> clinc@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-envelope"></i> medicamo@gmail.com
          </a>
          <a href="#">
            <i className="fas fa-map-marker-alt"></i> Egypt,Cairo-45450
          </a>
        </div>

        <div className="box">
          <h3>follow us</h3>
          <a href="#">
            <i className="fa-brands fa-facebook-f"></i> facebook
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i> instagram
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i> twitter
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in"></i> linkedin
          </a>
          <a href="#">
            <i className="fa-brands fa-pinterest-p"></i> pinterest
          </a>
        </div>
      </div>

      <div className="credit">
        Created by <span>medicamo</span> | all rights reserved
      </div>
    </section>
  );
}
