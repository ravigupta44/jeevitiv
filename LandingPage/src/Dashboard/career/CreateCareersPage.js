import { useContext, useState } from "react";
import "./CreateCareersPage.css";
import axios from "axios";
// import uploadimage from "./upload.png";
import ReactMarkdown from "react-markdown";
// import { Context } from "../../context/Context";

export default function Write() {
  const [postname, setPostname] = useState("");
  const [numberofpost, setNumberofpost] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [positiondesc, setPositiondesc] = useState("");
  const [heading1, setHeading1] = useState("");
  const [desc1, setDesc1] = useState("");
  const [heading2, setHeading2] = useState("");
  const [desc2, setDesc2] = useState("");
  const [compensationdesc, setCompensationdesc] = useState("");



//   const [file, setFile] = useState(null);
  // const { user } = useContext(Context)
  //console.log(desc);

  //   const addImageToTextArea =() =>{
  //     //let stringImage = `![${img.name}](${img.image_src})`;
  //     let {textArea} = this.refs;
  //     let value = textArea.value;
  //     let position = textArea.selectionStart;
  //     textArea.value = `${value.substr(0,position)}${value.substr(position)}`;
  // }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: "ADMIN",
      postname,
      numberofpost,
      city,
      country,
      positiondesc,
      heading1,
      desc1,
      heading2,
      desc2,
      compensationdesc,
    };
    // if (file) {
    //   const data = new FormData();
    //   const filename = Date.now() + file.name;
    //   data.append("name", filename);
    //   data.append("file", file);
    //   newPost.photo = filename;
    //   try {
    //     await axios.post("http://localhost:8080/api/upload", data);
    //   } catch (err) {}
    // }
    try {
      const res = await axios.post(
        "http://localhost:8080/api/careersPage",
        newPost
      );
      console.log(res.data);
      window.location.replace("/career/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      <h1>This is Careers page</h1>
      {/* {file && <img src={URL.createObjectURL(file)} alt="" />} */}
      {/* <div class="banner">
        <input type="file" accept="image/*" id="banner-upload" hidden />
        <label for="banner-upload" className="banner-upload-btn"><img src={uploadimage} alt="upload banner"/></label>
    </div> */}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          
          <input
            type="text"
            placeholder="Post Name"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setPostname(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
        <input
            type="text"
            placeholder="Number of post"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setNumberofpost(e.target.value)}
          />
        </div>

        <div className="writeFormGroup">
        <input
            type="text"
            placeholder="City"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div className="writeFormGroup">
        <input
            type="text"
            placeholder="Country"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>

        
        <div className="writeFormGroup">
          <textarea
            placeholder="Positon description"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setPositiondesc(e.target.value)}
          ></textarea>
        </div>

        <div className="writeFormGroup">
        <input
            type="text"
            placeholder="Heading 1"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setHeading1(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="desc 1"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc1(e.target.value)}
          ></textarea>
        </div>


        <div className="writeFormGroup">
        <input
            type="text"
            placeholder="Heading 2"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setHeading2(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="desc 2"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setDesc2(e.target.value)}
          ></textarea>
        </div>
        
        <div className="writeFormGroup">
          <textarea
            placeholder="compensation desc"
            type="text"
            className="writeInput writeText"
            onChange={(e) => setCompensationdesc(e.target.value)}
          ></textarea>
        </div>
        
        
        
        <button className="writeSubmit" type="submit">
          Publish
        </button>
        {/* <div className="blog-options">
        
        <input type="file" accept="image/*" id="image-upload" hidden />
        <label for="image-upload" className="writeSubmit upload-btn">Upload Image</label>
    </div> */}
      </form>
    </div>
  );
}
