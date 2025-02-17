import Footer from "./Footer";
import Header from "./Header";
import './com.css'

export default function SpecialComponent() {
  return (
    <>
      <Header />

      <form>
        <select className="form-select" aria-label="Default select example" defaultValue="1">
          <option value="1">Choose a special</option>
          <option value="1">General Surgery</option>
          <option value="2">Pediatrics</option>
          <option value="3">Obstetrics and Gynecology</option>
          <option value="4">Ophthalmology</option>
          <option value="5">Cardiology</option>
          <option value="6">Dentistry</option>
        </select>

        <select className="form-select" aria-label="Default select example" defaultValue="1">
          <option value="1">Choose A city</option>
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


      <Footer />
    </>
  );
}
