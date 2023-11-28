import { useState, useEffect } from "react";
import { Link, useParms, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function SupportGroupDetails() {
  const [support_group, setSupportGroup] = useState([]);
  const { id } = useParms();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/support_groups/${id}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setSupportGroup(responseJSON);
      })
      .catch((error) => console.log(error));
  }, [id, API]);

  const handleDelete = () => {
    deleteSupportGroup();
  };
  return (
    <article>
      <h3>{true ? <span>👍🏾</span> : null}</h3>
      <h5>
        <span>
          <a href={support_group.email}>{support_group.name}</a>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp; {support_group.email}
      </h5>
      <h6>{support_group.location}</h6>
      <p>{support_group.description}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/support_group`}>
            <button>Home</button>
          </Link>
        </div>
        <div>
          <Link to={`/support_groups/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </article>
  );
}

export default SupportGroupDetails;
