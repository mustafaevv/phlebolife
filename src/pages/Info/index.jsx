import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import JSONData from "./servicesItems.json";
import Information from "./Information";

const Info = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const filterData = JSONData.information.find((info) => info.id == id);
    setData(filterData);
  }, [id]);
  return (
    <>
      <Information {...data} />
    </>
  );
};

export default Info;
