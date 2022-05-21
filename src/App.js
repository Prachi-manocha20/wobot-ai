import "./App.css";
import siteLogo from "./assets/wobotLogo.png";
import siteIcon from "./assets/wobotIcon.png";
function App() {
  return (
    <div className="page">
      <div className="formContainer">
        <div className="formBody">
          <div className="formLogo">
            <img style={{ margin: "auto" }} src={siteIcon}></img>
          </div>
          <div className="formTitle">It's a delight to have you <br></br>onboard</div>
          <div className="formDescription">
            Help us know you better.
            <br></br> (This is how we optimize Wobot as per your
            business needs)
          </div>
          <div className="formFields">
            <div className="formField">
              <div className="fieldTitle">Company Name</div>
              <div className="fieldInput">
                <input></input>
              </div>
            </div>
            <div className="formField">
              <div className="fieldTitle">Industry</div>
              <div className="fieldInput">
                <select name="Industry" id="Industry">
                  <option value="volvo">Industry 1</option>
                  <option value="saab">Industry 2</option>
                  <option value="opel">Industry 3</option>
                  <option value="audi">Industry 4</option>
                </select>
              </div>
            </div>
          </div>
          <div className="formField">
            <div className="fieldTitle">Company size</div>
            <div className="fieldInput">
              <div className="companySize">
                <div className="companySizeOption">1-21</div>
                <div className="companySizeOption">21-50</div>
                <div className="companySizeOption" style={{background:"#3766E8"}}>51-200</div>
                <div className="companySizeOption">201-500</div>
                <div className="companySizeOption">500+</div>
              </div>
            </div>
          </div>

          <div className="formAction">
            <div className="submitButton">Get Started</div>
          </div>
        </div>
      </div>
      <div className="appLogo">
        <img src={siteLogo}></img>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
