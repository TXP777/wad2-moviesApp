import React from "react";
import {Link,Route,withRouter } from "react-router-dom";
import PersonDetails from "../components/personDetails";
import usePerson from "../hooks/usePerson";
import useCredit from "../hooks/useCredit";
import ReviewForm from '../components/reviewForm'
import useMovie from "../hooks/useMovie"


const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = usePerson(id)
  const [credit] = useCredit(id)
  const [movie] = useMovie(id)




  return (
    <>
    {person ? (
      <>
    
          <PersonDetails person={person} credit={credit}/>
      
      </>
    ) : (
      <p>Waiting for person details</p>
    )}
  
      <>
          <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/words") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/people/${id}/words`}
              >
                What do you want to say to him/her?
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/people/${id}`}
              >
                Back
              </Link>
            )}
             <Route
          path={`/people/:id/words`}
          render={props => <ReviewForm movie={movie} {...props} />}
        />
          </div>
        </div>
      </>
    

  </>
  );
};

export default withRouter(PersonPage);
      