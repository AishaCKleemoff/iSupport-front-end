/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function SupportGroupDetails() {
  const [supportGroup, setSupportGroup] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/supportGroups/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setSupportGroup(responseJSON);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleDelete = () => {
    deleteSupportGroup();
  };

  const deleteSupportGroup = () => {
    const httpOptions = { method: "DELETE" };
    fetch(`${API}/support_groups/${id}`, httpOptions)
      .then(() => navigate(`/support_groups`))
      .catch((error) => console.log(error));
  };
  return (
    <article>
      <h3>{true ? <span>👍🏾</span> : null}</h3>
      <h5>
        <span>
          <a href={supportGroup.email}>{supportGroup.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp; {supportGroup.email}
      </h5>
      <h6>{supportGroup.location}</h6>
      <p>{supportGroup.description}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/supportGroup`}>
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to={`/supportGroups/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default SupportGroupDetails;
