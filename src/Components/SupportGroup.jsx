import { Link } from "react-router-dom";

function SupportGroup({ support_group }) {
  return (
    <tr>
      <td>
        {support_group.is_favorite ? (
          <span>👍🏾</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <a href={support_group.location} target="_blank" rel="noreferrer">
          {support_group.name}
        </a>
      </td>
      <td>
        <Link to={`/support_groups/${support_group.id}`}></Link>
      </td>
    </tr>
  );
}

export default SupportGroup;
