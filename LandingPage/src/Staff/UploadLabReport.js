import React, { Component } from 'react'
import './Upload.css'
import Browse from '../Assets/BrowseFiles.svg'
import Cloud from '../Assets/cloud.svg'
class UploadLabReport extends Component{
    render() {
        return (
            <div className="UploadMain">
                <span className="UploadHeading">Upload Reports</span> <br />
                <div className="UploadHeading2">Upload Reports in PDF or DOC Format</div> 
                <div className="UploadBox">
                    <img style={{ marginTop: "3%" }} src={Cloud}></img> <br />
                    <div className="UploadHeading2">Drag and drop your files here</div>
                    <div className="UploadHeading2">OR</div> 
                    <img style={{ marginTop: "3%",marginBottom: "3%" ,width:"30%"}} src={Browse}></img> 
                </div>
                <div className="UploadHeading3">Upload Lab Reports</div>
            </div>
           
        )
    }
}

export default UploadLabReport;
