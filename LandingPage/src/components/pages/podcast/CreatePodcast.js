import { useContext, useState } from "react";
import "./CreatePodcast.css";
import axios from "axios";
import uploadimage from "./upload.png";
import ReactMarkdown from "react-markdown";
// import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [heading1, setHeading1] = useState("");
  const [desc1, setDesc1] = useState("");
  const [heading2, setHeading2] = useState("");
  const [desc2, setDesc2] = useState("");
  const [heading3, setHeading3] = useState("");
  const [desc3, setDesc3] = useState("");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
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
      title,
      link,
      heading1,
      desc1,
      heading2,
      desc2,
      heading3,
      desc3,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:8080/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post(
        "http://localhost:8080/api/podcasts",
        newPost
      );
      console.log(res.data);
      window.location.replace("/Podcast/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      <h1>This is Podcast page</h1>
      {file && <img src={URL.createObjectURL(file)} alt="" />}
      {/* <div class="banner">
        <input type="file" accept="image/*" id="banner-upload" hidden />
        <label for="banner-upload" className="banner-upload-btn"><img src={uploadimage} alt="upload banner"/></label>
    </div> */}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
        <input
            type="url"
            placeholder="link"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setLink(e.target.value)}
          />
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
            placeholder="description 1..."
            type="text"
            value={desc1}
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
            placeholder="description 2..."
            type="text"
            value={desc2}
            className="writeInput writeText"
            onChange={(e) => setDesc2(e.target.value)}
          ></textarea>
        </div>


        <div className="writeFormGroup">
        <input
            type="text"
            placeholder="Heading 3"
            className="writeInput"
            autoFocus={true}
            onChange={(e) => setHeading3(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="description 3..."
            type="text"
            value={desc3}
            className="writeInput writeText"
            onChange={(e) => setDesc3(e.target.value)}
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
