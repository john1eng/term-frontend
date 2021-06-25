import React from "react";
import "../utilities/spinner.css";
import "./Term.css";
import Term from "./Term"
import { fetchAllTerms } from "../api/fetchAllTerms";


const TermList = () => {
  const [terms, setTerms] = React.useState();

  const fetchHandler = async () => {
    const response = await fetchAllTerms();
    setTerms(response);
  }

  React.useEffect(() => {
    fetchHandler();
  }, []);

  let termDis;

  if (!terms) termDis = <div className="loader">Loading...</div>;
  else
    termDis = (terms.map(d=><Term term={d}/>)
    );

  return (
    <React.Fragment>
      {termDis}
    </React.Fragment>
  );
};

export default TermList;
