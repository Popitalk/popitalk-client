import React, { useState } from "react";
import Input4 from "../Input4";
import Textarea2 from "../Textarea2";
import Select from "../Select";
import ToggleCheck from "../ToggleCheck";
import ImageUpload from "../ImageUpload";
import "./UpdateChannel.css";

const options = ["x1", "y2", "z2", "x3", "y3", "z3"];

export default function UpdateChannel() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [privateGroup, setPrivateGroup] = useState(false);
  const [categories, setCategories] = useState(null);
  const [displayedIcon, setDisplayedIcon] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleSubmit = () => {
    console.log("SUBMITTING");
  };

  const handleUpload = e => {
    if (e.target.files[0]) {
      setUploadedImage(e.target.files[0]);
      setDisplayedIcon(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleRemove = () => {
    setDisplayedIcon(false);
    setUploadedImage(null);
  };

  return (
    <div className="UpdateChannel--container">
      <div className="UpdateChannel--top" />
      {/* <div className="UpdateChannel--header">
        <h1>Create a Channel</h1>
        <h2>
          Create a channel to broadcast scheduled videos and create you own
          community on Playnows! To get started choose a Channel category.
        </h2>
      </div> */}
      <div className="UpdateChannel--main">
        <div className="UpdateChannel--icon">
          <ImageUpload
            icon={displayedIcon}
            onUpload={handleUpload}
            onRemove={handleRemove}
            disabled={false}
          />
        </div>
        <div className="UpdateChannel--inputs">
          <Input4
            header="Channel Name"
            type="text"
            placeholder="Name your channel"
            value={name}
            onChange={e => setName(e.target.value)}
            maxLength={50}
          />
          <Textarea2
            header="Description"
            placeholder="Describe your channel"
            value={description}
            onChange={e => setDescription(e.target.value)}
            maxLength={220}
          />
          <Select
            header="Category"
            placeholder="Add a category to get discovered"
            options={options}
            name="categories"
            value={categories}
            onChange={s => setCategories(s)}
          />
          <div className="UpdateChannel--private">
            <i className="fas fa-lock fa-lg" />
            <div className="UpdateChannel--private--info">
              <h4>Private Group</h4>
              <p>
                Users will have to request to follow your group in order to see
                your content
              </p>
            </div>
            <ToggleCheck
              checked={privateGroup}
              onChange={() => setPrivateGroup(!privateGroup)}
            />
          </div>
          <div className="UpdateChannel--buttons">
            <button
              type="button"
              className="button pill lg"
              onClick={handleSubmit}
            >
              Create
            </button>
            <button
              type="button"
              className="button pill"
              onClick={handleSubmit}
            >
              Delete Channel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
