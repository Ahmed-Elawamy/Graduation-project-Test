import Header from "../components/Header";
import "../components/com.css";
import Special from "../components/Special";
import Best from "../components/Best";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
      <Header />
      <section className="home">
        <div className="content">
          <h1>Find Your Docter !</h1>
          <h3>Book With Your Docter In Clinic</h3>
          <form>
            <select
              class="form-select"
              aria-label="Default select example"
              
            >
              <option selected>Choose a special</option>
              <option value="1">General Surgery</option>
              <option value="2">Pediatrics</option>
              <option value="3">Obstetrics and Gynecology</option>
              <option value="4">Ophthalmology</option>
              <option value="5">Cardiology</option>
              <option value="6">Dentistry</option>
            </select>

            <select class="form-select" aria-label="Default select example">
              <option selected>Choose A city</option>
              <option value="1">Cairo</option>
              <option value="2">Alex</option>
              <option value="3">Nasr City</option>
              <option value="4">6 October</option>
              <option value="5">Elminiya</option>
              <option value="6">Assuit</option>
            </select>
            <input
              type="text"
              className="form-control add"
              id="formGroupExampleInput"
              placeholder="Doctor Name"
            />
            <button className="submit" type="submit">
              BOOK NOW
            </button>
          </form>
        </div>

        <div className="image">
          <img src="/orthopedic-animate.svg" alt="Orthopedic Animation" />
        </div>
      </section>

      <section className="services">
        <h1 className="heading">Medicamo Your Healthcare Companion Delivers</h1>
        <div className="service">
          <div className="icon">
            <i className="fa-solid fa-bed-pulse"></i>
            <h4>Constant follow-up</h4>
          </div>
          {/* icon */}

          <div className="icon">
            <i className="fa-solid fa-hand-holding-medical"></i>
            <h4>Offers And Services</h4>
          </div>
          {/* icon */}

          <div className="icon">
            <i className="fa-solid fa-house-medical"></i>
            <h4>Home Visit</h4>
          </div>
          {/* icon */}

          <div className="icon">
            <i className="fa-solid fa-capsules"></i>
            <h4>Lab Test</h4>
          </div>
          {/* icon */}
        </div>
      </section>

      
      <Special />
      <Best />
      <Footer />

    </>
  );
}
