function checkPasswordStrength() {

}

function checkPasswordMatch() {

}

function handleFileUpload() {

}

function removeFile() {

}

export default function StationCredentialsForm({updateFormStep} : {updateFormStep: (step: number) => void}) {
    return (
        <div className="form-step active" id="step1-form">
          <form id="stationForm">
            <div className="form-group">
              <label><i className="fas fa-store"></i> Station Name</label>
              <div className="input-wrapper">
                <i className="fas fa-store"></i><input type="text" id="stationName" placeholder="Enter your water station name" required />
              </div>
            </div>

            <div className="form-group">
              <label><i className="fas fa-map-marker-alt"></i> Station Address</label>
              <div className="input-wrapper">
                <i className="fas fa-map-marker-alt"></i><input type="text" id="stationAddress" placeholder="Enter complete station address" required />
              </div>
            </div>

            <div className="form-group">
              <label><i className="fas fa-phone"></i> Contact Number</label>
              <div className="input-wrapper">
                <i className="fas fa-phone"></i><input type="tel" id="contactNumber" placeholder="Enter contact number" required />
              </div>
            </div>

            <div className="form-group">
              <label><i className="fas fa-envelope"></i> Email Address</label>
              <div className="input-wrapper">
                <i className="fas fa-envelope"></i><input type="email" id="email" placeholder="Enter business email" required />
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
              <label><i className="fas fa-file-contract"></i> Business License/Permit Number</label>
              <div className="input-wrapper">
                <i className="fas fa-file-contract"></i><input type="text" id="businessLicense" placeholder="Enter DTI/Business permit number" required />
              </div>
            </div>

            <div className="file-upload-group">
              <label className="file-upload-label"><i className="fas fa-file-pdf"></i> Upload Business Permit (Optional)</label>
              <div className="file-upload-area" id="permitUploadArea">
                <i className="fas fa-cloud-upload-alt"></i><p>Click to upload business permit</p>
                <small>Supported: JPG, PNG, PDF (Max 5MB)</small>
                <input type="file" id="permitFile" accept=".jpg,.jpeg,.png,.pdf" onChange={() => handleFileUpload()} />
              </div>
              <div className="file-preview" id="permitPreview">
                <i className="fas fa-check-circle"></i>
                <span id="permitFileName">No file chosen</span>
                <button type="button" onClick={() => removeFile()}><i className="fas fa-times"></i></button>
              </div>
            </div>

            <div className="form-group">
              <div className="term" style={{
                    display: "flex", 
                    alignItems: "center", 
                    gap: "10px", 
                    margin: "10px 0"}}>
                <input type="checkbox" id="termsCheck" style={{width: "18px", height: "18px"}} required />
                <label style={{fontWeight: "normal"}}>I agree to the <a href="#" style={{backgroundColor: "#19A7CE"}}>Terms and Conditions</a></label>
              </div>
            </div>

            <button type="button" className="btn btn-primary" onClick={() => updateFormStep(1)} id="nextBtn1">
              Register Station <i className="fas fa-arrow-right"></i>
            </button>
          </form>
        </div>
    );
}