import {
  REQUEST_LEAGUES_LIST,
  RECEIVE_LEAGUES_LIST,
  REQUEST_TEAMS_DETAIL,
  RECEIVE_TEAMS_DETAIL,
  REQUEST_TEAMS_STATS,
  RECEIVE_TEAMS_STATS_WIN_HOME,
  RECEIVE_TEAMS_STATS_WIN_AWAY,
  RECEIVE_TEAMS_STATS_DRAW_HOME,
  RECEIVE_TEAMS_STATS_DRAW_AWAY,
  RECEIVE_TEAMS_STATS_LOSE_HOME,
  RECEIVE_TEAMS_STATS_LOSE_AWAY,
  RECEIVE_LEAGUE
} from "../actions";

const initialState = {
  league: [],
  leaguesList: [],
  teamsDetail: [],
  teamsStatsWinHome: [],
  teamsStatsWinAway: [],
  teamsStatsDrawHome: [],
  teamsStatsDrawAway: [],
  teamsStatsLoseHome: [],
  teamsStatsLoseAway: [],
  isLeagueListLoading: false,
  isTeamsDetailLoading: false,
  isTeamsStatsLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LEAGUES_LIST:
      return { ...state, isLeagueListLoading: true };
    case RECEIVE_LEAGUES_LIST:
      return { ...state, leaguesList: action.json, isLeagueListLoading: false };
    case REQUEST_TEAMS_DETAIL:
      return { ...state, isTeamsDetailLoading: true };
    case RECEIVE_TEAMS_DETAIL:
      return {
        ...state,
        teamsDetail: action.json,
        isTeamsDetailLoading: false
      };
    case REQUEST_TEAMS_STATS:
      return { ...state, isTeamsStatsLoading: true };
    case RECEIVE_TEAMS_STATS_WIN_HOME:
      return {
        ...state,
        teamsStatsWinHome: action.json,
        isTeamsStatsLoading: false
      };
    case RECEIVE_TEAMS_STATS_WIN_AWAY:
      return {
        ...state,
        teamsStatsWinAway: action.json,
        isTeamsStatsLoading: false
      };
    case RECEIVE_TEAMS_STATS_DRAW_HOME:
      return {
        ...state,
        teamsStatsDrawHome: action.json,
        isTeamsStatsLoading: false
      };
    case RECEIVE_TEAMS_STATS_DRAW_AWAY:
      return {
        ...state,
        teamsStatsDrawAway: action.json,
        isTeamsStatsLoading: false
      };
    case RECEIVE_TEAMS_STATS_LOSE_HOME:
      return {
        ...state,
        teamsStatsLoseHome: action.json,
        isTeamsStatsLoading: false
      };
    case RECEIVE_TEAMS_STATS_LOSE_AWAY:
      return {
        ...state,
        teamsStatsLoseAway: action.json,
        isTeamsStatsLoading: false
      };
    case RECEIVE_LEAGUE:
      return { ...state, leagueId: action.json };
    default:
      return state;
  }
};

export default reducer;
