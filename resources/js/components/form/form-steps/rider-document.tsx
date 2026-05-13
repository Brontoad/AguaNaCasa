function handleFileUpload() {}
 
function removeFile() {}

function submitDocuments() {}

export default function RiderDocumentForm({updateFormStep} : {updateFormStep: (step: number) => void}) {
    return (
        <>
            <div className="verification-status pending">
                <div className="status-icon pending"><i className="fas fa-file-upload"></i></div>
                <div className="status-text">Upload Required Documents</div>
                <div className="status-desc">Please upload clear photos of your documents</div>
            </div>

            <div className="file-upload-group">
                <label className="file-upload-label"><i className="fas fa-file-pdf"></i> OR/CR (Official Receipt/Certificate of Registration)</label>
                <div className="file-upload-area" id="orCrUploadArea">
                    <i className="fas fa-cloud-upload-alt"></i><p>Click to upload OR/CR</p>
                    <small>Supported: JPG, PNG, PDF (Max 5MB)</small>
                    <input type="file" id="orCrFile" accept=".jpg,.jpeg,.png,.pdf" onChange={() => handleFileUpload()}/>
                </div>
                <div className="file-preview" id="orCrPreview">
                    <i className="fas fa-check-circle"></i><span id="orCrFileName">No file chosen</span>
                    <button type="button" onClick={() => removeFile()}><i className="fas fa-times"></i></button>
                </div>
            </div>

            <div className="file-upload-group">
                <label className="file-upload-label"><i className="fas fa-id-card"></i> Driver's License (Front & Back)</label>
                <div className="file-upload-area" id="licenseUploadArea">
                <i className="fas fa-cloud-upload-alt"></i><p>Click to upload license</p>
                <small>Supported: JPG, PNG, PDF (Max 5MB)</small>
                <input type="file" id="licenseFile" accept=".jpg,.jpeg,.png,.pdf" onChange={() => handleFileUpload()} />
                </div>
                <div className="file-preview" id="licensePreview">
                <i className="fas fa-check-circle"></i><span id="licenseFileName">No file chosen</span>
                <button type="button" onClick={() => removeFile()}><i className="fas fa-times"></i></button>
                </div>
            </div>

            <div className="file-upload-group">
                <label className="file-upload-label"><i className="fas fa-camera"></i> Plate Number Photo</label>
                <div className="file-upload-area" id="platePhotoUploadArea">
                <i className="fas fa-cloud-upload-alt"></i><p>Click to upload plate number photo</p>
                <small>Supported: JPG, PNG (Max 5MB)</small>
                <input type="file" id="platePhotoFile" accept=".jpg,.jpeg,.png" onChange={() => handleFileUpload()} />
                </div>
                <div className="file-preview" id="platePhotoPreview">
                <i className="fas fa-check-circle"></i>
                <span id="platePhotoFileName">No file chosen</span>
                <button type="button" onClick={() => removeFile()}><i className="fas fa-times"></i></button>
                </div>
            </div>

            <div className="form-group">
                <div className="term" style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    margin: "20px 0"}}>
                <input type="checkbox" id="verifyDocs" style={{width: "18px", height: "18px"}} />
                <label style={{fontWeight: "normal"}}>I confirm that all uploaded documents are authentic and my own</label>
                </div>
            </div>

            <div className="button-group">
                <button type="button" className="btn btn-secondary" onClick={() => updateFormStep(4)}><i className="fas fa-arrow-left"></i> Back</button>
                <button type="button" className="btn btn-primary" onClick={() => submitDocuments()} id="submitDocsBtn">
                Submit for Verification <i className="fas fa-check"></i>
                </button>
            </div>
        </>
    )
}