import React, { useState, useEffect } from 'react';
import {useQuery} from "@apollo/client"
import { Link } from 'react-router-dom';
import {QUERY_MATCHUPS } from '../utils/queries';

const Home = () => {
  const {data,loading} = useQuery(QUERY_MATCHUPS);
  const matchupList = data?.allMatchups||[];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Tech Matchup!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of matchups you can vote on:</h2>
        {loading?(<h3>Loading</h3>):(

          <ul className="square">
          {matchupList.map((matchup) => {
            return (
              <li key={matchup._id}>
                <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                  {matchup.tech1} vs. {matchup.tech2}
                </Link>
              </li>
            );
          })}
        </ul>
          )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to create a new matchup?</h2>
        <Link to="/matchup">
          <button className="btn btn-lg btn-danger">Create Matchup!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
