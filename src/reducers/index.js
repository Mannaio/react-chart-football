import {
  REQUEST_LEAGUES_LIST,
  RECEIVE_LEAGUES_LIST,
  RECEIVE_TEAMS_DETAIL,
  REQUEST_TEAMS_STATS,
  RECEIVE_TEAMS_STATS,
  RECEIVE_LEAGUE,
  RECEIVE_FIRST_TEAM_NAME,
} from "../actions";

const initialState = {
  firstTeamNameHome: [],
  firstTeamNameAway: [],
  leagueId: [],
  leaguesList: [],
  teamsDetail: [],
  teamname: [],
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
        [action.teamname]:{
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
    case RECEIVE_FIRST_TEAM_NAME:
      return {
        ...state,
        firstTeamNameHome: action.json,
        firstTeamNameAway: action.json
       };
    default:
      return state;
  }
};

export default reducer;
