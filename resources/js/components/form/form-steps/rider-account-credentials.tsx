function checkPasswordStrength() {

}

function checkPasswordMatch() {

}

function handleFileUpload() {

}

function removeFile() {

}

export default function RiderCredentialsForm({updateFormStep} : {updateFormStep: (step: number) => void}) {
    return (
      <div className="form-step active">
        <form id="stationForm">
          <div className="form-group">
            <label><i className="fas fa-user"></i> Full Name</label>
              <div className="input-wrapper">
                <i className="fas fa-user"></i>
                <input type="text" id="fullName" placeholder="Enter your full name" required />
              </div>
          </div>

          <div className="form-group">
            <label><i className="fas fa-map-marker-alt"></i>Address</label>
            <div className="input-wrapper">
              <i className="fas fa-map-marker-alt"></i><input type="text" id="address" placeholder="Enter your complete address" required />
            </div>
          </div>

          <div className="form-group">
            <label><i className="fas fa-envelope"></i> Email Address</label>
            <div className="input-wrapper">
              <i className="fas fa-envelope"></i><input type="email" id="email" placeholder="Enter business email" required />
            </div>
          </div>
          
          <div className="form-group">
            <label><i className="fas fa-phone"></i> Contact Number</label>
            <div className="input-wrapper">
              <i className="fas fa-phone"></i><input type="tel" id="contactNumber" placeholder="Enter contact number" required />
            </div>
          </div>

          <div className="form-group">
            <label><i className="fas fa-lock"></i> Password</label>
            <div className="input-wrapper">
              <i className="fas fa-lock"></i><input type="password" id="password" placeholder="Create a password" required onKeyUp={() => checkPasswordStrength()} />
            </div>
            <div className="password-strength"><div className="strength-bar" id="strengthBar"></div></div>
            <div className="strength-text" id="strengthText">Enter a password</div>
          </div>

          <div className="form-group">
            <label><i className="fas fa-lock"></i> Confirm Password</label>
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input type="password" id="confirmPassword" placeholder="Confirm your password" required onKeyUp={() => checkPasswordMatch()} />
            </div>
            <div id="passwordMatch" style={{fontSize: "12px", marginTop: "5px"}}></div>
          </div>

          <div className="form-group">
            <label><i className="fas fa-phone"></i> Mobile Number</label>
            <div className="input-wrapper">
              <i className="fas fa-phone"></i>
              <input type="tel" id="phoneNumber" placeholder="Enter your mobile number" required />
            </div>
          </div>

          <button type="button" className="btn btn-primary" onClick={() => updateFormStep(1)} id="nextBtn1">
            Continue <i className="fas fa-arrow-right"></i>
          </button>
        </form>
      </div>
    );
}