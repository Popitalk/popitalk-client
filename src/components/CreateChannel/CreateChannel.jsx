import React, { useState } from "react";
import Input4 from "../Input4";
import Textarea2 from "../Textarea2";
import Select from "../Select";
import ToggleCheck from "../ToggleCheck";
import ImageUpload from "../ImageUpload";
import FormSubmitPopup from "../FormSubmitPopup";
import "./CreateChannel.css";

const options = ["x1", "y2", "z2", "x3", "y3", "z3"];

export default function CreateChannel() {
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
    <div className="CreateChannel--container">
      <div className="CreateChannel--top" />
      <section>
        <div className="CreateChannel--header">
          <h1>Create a Channel</h1>
          <h2>
            Create a channel to broadcast scheduled videos and create you own
            community on Playnows!
          </h2>
        </div>
        <div className="CreateChannel--main">
          <div className="CreateChannel--icon">
            <ImageUpload
              icon={displayedIcon}
              onUpload={handleUpload}
              onRemove={handleRemove}
              disabled={false}
            />
          </div>
          <div className="CreateChannel--inputs">
            <Input4
              header="Channel Name"
              type="text"
              placeholder="Name your channel"
              value={name}
              onChange={e => setName(e.target.value)}
              maxLength={30}
              spellCheck={false}
            />
            <Textarea2
              header="Description"
              placeholder="Describe your channel"
              value={description}
              onChange={e => setDescription(e.target.value)}
              maxLength={150}
            />
            <Select
              header="Category"
              placeholder="Add a category to get discovered"
              options={options}
              name="categories"
              value={categories}
              onChange={s => {
                if (!s) setCategories([]);
                else setCategories(s.map(val => val.value));
              }}
              maxOptions={5}
            />
            <div className="CreateChannel--private">
              <i className="fas fa-lock fa-lg" />
              <div className="CreateChannel--private--info">
                <h4>Private Group</h4>
                <p>
                  Users will have to request to follow your group in order to
                  see your content
                </p>
              </div>
              <ToggleCheck
                checked={privateGroup}
                onChange={() => setPrivateGroup(!privateGroup)}
              />
            </div>
          </div>
          <FormSubmitPopup type="create" />
        </div>
      </section>
    </div>
  );
}
