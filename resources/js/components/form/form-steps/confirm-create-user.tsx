function goToHome() {

}

export default function ConfirmCreateUser() {
    return (
        <div className="success-content">
            <div className="success-icon">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="success-title">Welcome to AguaNaCasa!</h3>
            <p className="success-text">Your account has been successfully created.</p>
            
            <div className="info-card">
              <div className="info-item">
                <i className="fas fa-user"></i>
                <span id="displayName"></span>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <span id="displayAddress"></span>
              </div>
              <div className="info-item">
                <i className="fas fa-envelope"></i>
                <span id="displayEmail"></span>
              </div>
              <div className="info-item">
                <i className="fas fa-phone"></i>
                <span id="displayPhone"></span>
              </div>
            </div>

            <button className="btn btn-primary" onClick={() => goToHome()}>
              Continue <i className="fas fa-sign-in-alt"></i>
            </button>
          </div>
    );
}