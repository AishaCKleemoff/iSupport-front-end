/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SupportGroupNewForm() {
  const navigate = useNavigate();
  const [supportGroup, setSupportGroup] = useState({
    group_name: "",
    meeting_time: "",
    location: "",
    description: "",
    email: "",
    is_favorite: false,
  });

  const addSupportGroup = () => {
    fetch(`${API}/support_groups`, {
      method: "POST",
      body: JSON.stringify(supportGroup),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        navigate(`/support_groups`);
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setSupportGroup({ ...supportGroup, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSupportGroup({
      ...supportGroup,
      is_favorite: !supportGroup.is_favorite,
    });

    const handleSubmit = (event) => {
      event.preventDefault();
      addSupportGroup();
    };

    return (
      <div className="New">
        <form onSubmit={handleSubmit}>
          <label htmlFor="group_name">Group Name:</label>
          <input
            id="group_name"
            value={supportGroup.group_name}
            type="text"
            onChange={handleTextChange}
            placeholder="New Support Group"
            required
          />
          <label htmlFor="meeting_time">Meeting Time</label>
          <input
            id="meeting_time"
            type="text"
            value={supportGroup.meeting_time}
            placeholder="12:15AM"
            onChange={handleTextChange}
          />
          <label htmlFor="location">Location:</label>
          <input
            id="location"
            type="text"
            name="location"
            value={supportGroup.location}
            placeholder="Atlanta, Charlotte, ..."
            onChange={handleTextChange}
          />
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            name="description"
            value={supportGroup.description}
            placeholder="Describe your Support Group, ..."
            onChange={handleTextChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="text"
            name="email"
            value={supportGroup.email}
            placeholder="memail@wemail.com, ..."
            onChange={handleTextChange}
          />
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={supportGroup.is_favorite}
          />
        </form>
      </div>
    );
  };
}

export default SupportGroupNewForm;
