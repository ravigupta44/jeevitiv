import { useContext, useState } from "react";
import "./CreateBlog.css";
import axios from "axios";
import uploadimage from "./upload.png";
import ReactMarkdown from 'react-markdown'
// import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  // const { user } = useContext(Context)
  console.log(desc);

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
      desc,
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
      const res = await axios.post("http://localhost:8080/api/posts", newPost);
      window.location.replace("/Blog/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
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
          <textarea
            placeholder="Tell your story..."
            type="text"
            value={desc}
            className="writeInput writeText"
            onChange={(e) => setDesc(e.target.value)}
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
