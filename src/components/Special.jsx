import "./com.css";

export default function Special() {
  return (
    <div className="special">
      <h1 className="heading">Choose The Special</h1>
      <div className="icon-container">
        
        <div className="special-icon">
          <a href="../pages/SpecialPage">
            <i className="fa-solid fa-scissors"></i>
          </a>
          <h4>General Surgery</h4>
        </div>
        <div className="special-icon">
          <a href="../pages/SpecialPage">
            <i className="fa-solid fa-baby"></i>
          </a>
          <h4>Pediatrics</h4>
        </div>

        <div className="special-icon">
          <a href="../pages/SpecialPage">
            <i className="fa-solid fa-person-pregnant"></i>
          </a>
          <h4>Obstetrics and Gynecology</h4>
        </div>

        <div className="special-icon">
          <a href="../pages/SpecialPage">
            <i className="fa-solid fa-eye"></i>
          </a>
          <h4>Ophthalmology</h4>
        </div>

        <div className="special-icon">
          <a href="../pages/SpecialPage">
            <i className="fa-solid fa-heart-pulse"></i>
          </a>
          <h4>Cardiology</h4>
        </div>

        <div className="special-icon">
          <a href="../pages/SpecialPage">
            <i className="fa-solid fa-tooth"></i>
          </a>
          <h4>Dentistry</h4>
        </div>

      </div>
    </div>
  );
}
