import { useEffect, useState } from "react";
import {getCredits} from '../api/tmdb-api'

const useCredit = id => {
  const [credit, setCredit] = useState(null);
  useEffect(() => {
    getCredits(id).then(credit => {
      setCredit(credit);
    });
  }, [id]);
  return [credit, setCredit];
};

export default useCredit