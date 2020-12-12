import React from "react";
import {withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import usePerson from "../hooks/usePerson";
import useCredit from "../hooks/useCredit";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)
  const [credit] = useCredit(id)
  return (
    <>
    {person ? (
      <>
          <PersonDetails person={person} credit={credit}/>
      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  </>
  );
};

export default withRouter(PersonPage);
      