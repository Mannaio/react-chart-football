import {
  REQUEST_LEAGUES_LIST,
  RECEIVE_LEAGUES_LIST,
  RECEIVE_TEAMS_DETAIL,
  REQUEST_TEAMS_STATS,
  RECEIVE_TEAMS_STATS,
  RECEIVE_LEAGUE,
} from "../actions";

const initialState = {
  leagueId: [],
  leaguesList: [],
  teamsDetail: [],
  teamsStats:[],
  isLeagueListLoading: false,
  isTeamsDetailLoading: false,
  isTeamsStatsLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LEAGUES_LIST:
      return { ...state, isLeagueListLoading: true };
    case RECEIVE_LEAGUES_LIST:
      return { ...state, leaguesList: action.json, isLeagueListLoading: false };
    case RECEIVE_LEAGUE:
      return { ...state, leagueId: action.json };
    case REQUEST_TEAMS_STATS:
      return { ...state, isTeamsStatsLoading: true };
    case RECEIVE_TEAMS_STATS:
      // console.log("Action", action);
      return {
        ...state,
        [action.teamtype]:{
          ...action.json
        },
        ...action.json,
        isTeamsStatsLoading: false
      };
    case RECEIVE_TEAMS_DETAIL:
      return {
        ...state,
        teamsDetail: action.json,
        isTeamsDetailLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
