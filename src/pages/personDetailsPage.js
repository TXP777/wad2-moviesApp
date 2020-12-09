import React from "react";
import { Link, withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import usePerson from "../hooks/usePerson";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)
  return (
    <>
    {person ? (
      <>
        <PageTemplate person={person}>
          <PersonDetails person={person} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/words") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/person/${id}/words`}
              >
                What you want to say to he/her ?
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/person/${id}`}
              >
                Hide the words
              </Link>
            )}
          </div>
        </div>
   
  
      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  </>
  );
}

  export default withRouter(PersonPage);