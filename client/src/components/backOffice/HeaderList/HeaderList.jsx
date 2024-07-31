import { useLoaderData } from "react-router-dom";

import DivComponent from "../../divComponent/DivComponent";
import trad from "../../../assets/lang/trad.json";

function HeaderList() {
  const data = useLoaderData();
  return (
    <section className="company-card">
      <DivComponent className="company-info" data="Liens détails :" />
      {Object.keys(data[0])
        .filter((key) => key !== "id")
        .map((key) => (
          <DivComponent
            className="company-info"
            data={`${trad[key]} :`}
            key={trad[key]}
          />
        ))}
    </section>
  );
}

export default HeaderList;
