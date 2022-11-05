import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3">
        {'An application witch detects faces upon any image!'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa1 w-70 center" type="text" />
          <button className="w-30 grow f4 pa1 link ph3 dib white bg-green">Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;