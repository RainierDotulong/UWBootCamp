import { gql } from '@apollo/client';

export const QUERY_MATCHUPS = gql`
  query getMatchups {
    allMatchups {
      _id
      tech1
      tech2
    }
  }
`;
export const QUERY_TECH = gql`
  query getTech {
    allTech {
      _id
      name
    }
  }
`;
export const SINGLE_MATCHUP = gql`
  query SingleMatchup($matchupId: ID!) {
    singleMatchup(matchupId: $matchupId) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
