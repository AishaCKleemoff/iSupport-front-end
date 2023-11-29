import { useState, useEffect } from "react";
import SupportGroup from "./SupportGroup";

const API = import.meta.env.VITE_API_URL;

function SupportGroups() {
  const [supportGroups, setSupportGroups] = useState([]);
  useEffect(() => {
    fetch(`${API}/support_groups`)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        setSupportGroups(responseJSON);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="SupportGroups">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>iSUPPORT</th>
              <th>Your Support Group</th>
            </tr>
          </thead>
          <tbody>
            {supportGroups.map((supportGroup) => {
              return (
                <SupportGroup
                  key={supportGroup.id}
                  supportGroup={supportGroup}
                />
              );
              return (
                <SupportGroup
                  key={supportGroup.id}
                  supportGroup={supportGroup}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default SupportGroups;
