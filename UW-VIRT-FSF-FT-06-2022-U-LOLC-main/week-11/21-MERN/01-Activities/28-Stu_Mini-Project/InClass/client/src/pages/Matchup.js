import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTech, createMatchup } from '../utils/api';
import { QUERY_TECH,QUERY_MATCHUPS } from '../utils/queries';
import { ADD_MATCHUP } from '../utils/mutations';
import {useQuery,useMutation} from"@apollo/client";

const Matchup = () => {
  const {data,loading} = useQuery(QUERY_TECH);
  const techList = data?.allTech||[]

  const [addMatchup,{error}]= useMutation(ADD_MATCHUP,{
    refetchQueries:[
      {query:QUERY_MATCHUPS}
    ]
  })

  const [formData, setFormData] = useState({
    tech1: 'JavaScript',
    tech2: 'JavaScript',
  });
  let navigate = useNavigate();


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
     const res = await addMatchup({variables:formData});
     console.log(res)
      navigate(`/matchup/${res?.data?.createMatchup._id}`);
      // navigate(`/`);
    } catch (err) {
      console.error(err);
    }

    setFormData({
      tech1: 'JavaScript',
      tech2: 'JavaScript',
    });
  };

  return (
    <div className="card bg-white card-rounded w-25">
      <div className="card-header bg-dark text-center">
        <h1>Let's create a matchup!</h1>
      </div>
      {loading?<h3>Loading</h3>:(
      <div className="card-body m-5">
        <form onSubmit={handleFormSubmit}>
          <label>Tech 1: </label>
          <select name="tech1" onChange={handleInputChange}>
            {techList.map((tech) => {
              return (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              );
            })}
          </select>
          <label>Tech 2: </label>
          <select name="tech2" onChange={handleInputChange}>
            {techList.map((tech) => {
              return (
                <option key={tech._id} value={tech.name}>
                  {tech.name}
                </option>
              );
            })}
          </select>
          <button className="btn btn-danger" type="submit">
            Create Matchup!
          </button>
        </form>
      </div>
      )}
    </div>
  );
};

export default Matchup;
