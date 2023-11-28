/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_BASE_URL;

function SupportGroupEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [supportGroup, setSupportGroup] = useState({
    group_name: "",
    meeting_time: "",
    location: "",
    description: "",
    email: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setSupportGroup({
      ...supportGroup,
      [event.target.id]: event.target.value,
    });
  };

  const handleCheckboxChange = () => {
    setSupportGroup({
      ...supportGroup,
      is_favorite: !supportGroup.is_favorite,
    });
  };

  const updateSupportGroup = () => {
    console.log(`${API}/support_groups/${id}`);

    fetch(`${API}/support_groups/${id}`, {
      method: "PUT",
      body: JSON.stringify(supportGroup),
      headers: {
        "Group-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/supportGroups/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  useEffect(() => {
    fetch(`${API}/support_groups/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setSupportGroup(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateSupportGroup();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="group_name">Group Name:</label>
        <input
          id="group_name"
          value={supportGroup.group_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Support Group"
          require
        />
        <label htmlFor="meeting_time">Meeting Time:</label>
        <input
          id="meeting_time"
          type="text"
          name="meeting_time"
          required
          value={supportGroup.meeting_time}
          placeholder="12:00AM"
          onChange={handleTextChange}
        />
        <label htmlFor="location">Location:</label>
        <input
          id="description"
          type="text"
          name="location"
          value={supportGroup.location}
          placeholder="Brooklyn, Atlanta, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxCange}
          checked={supportGroup.is_favorite}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={supportGroup.description}
          onChange={handleTextChange}
          placeholder="Describe your new support group"
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value="{supportGroup.email}"
          onChange={handleTextChange}
          placeholder="your-name@wemail.com"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/supportGroups/${id}`}>
        <button>Submit</button>
      </Link>
    </div>
  );
}

export default SupportGroupEditForm;
