import {
  REQUEST_LEAGUES_LIST,
  RECEIVE_LEAGUES_LIST,
  RECEIVE_TEAMS_DETAIL,
  REQUEST_TEAMS_STATS,
  RECEIVE_TEAMS_STATS_WIN_HOME,
  RECEIVE_TEAMS_STATS_WIN_AWAY,
  RECEIVE_TEAMS_STATS_DRAW_HOME,
  RECEIVE_TEAMS_STATS_DRAW_AWAY,
  RECEIVE_TEAMS_STATS_LOSE_HOME,
  RECEIVE_TEAMS_STATS_LOSE_AWAY,
  RECEIVE_LEAGUE,
  RECEIVE_TEAMS_STATS,
  RECEIVE_FIRST_TEAM_STATS,
  SET_HOME_TEAM,
  SET_AWAY_TEAM
} from "../actions";

const initialState = {
  league: [],
  leaguesList: [],
  teamsDetail: [],
  teamStats: [],
  teamsStatsWinHome: [],
  teamsStatsWinAway: [],
  teamsStatsDrawHome: [],
  teamsStatsDrawAway: [],
  teamsStatsLoseHome: [],
  teamsStatsLoseAway: [],
  firstTeamStats: [],
  isLeagueListLoading: false,
  isTeamsDetailLoading: false,
  isTeamsStatsLoading: false,
  isHomeTeam: true,
  isAwayTeam: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOME_TEAM:
      return { ...state, isHomeTeam: true, isAwayTeam: false };
    case SET_AWAY_TEAM:
      return { ...state, isHomeTeam: false, isAwayTeam: true };
    case REQUEST_LEAGUES_LIST:
      return { ...state, isLeagueListLoading: true };
    case RECEIVE_LEAGUES_LIST:
      return { ...state, leaguesList: action.json, isLeagueListLoading: false };
    case REQUEST_TEAMS_STATS:
      return { ...state, isTeamsStatsLoading: true };
    case RECEIVE_LEAGUE:
      return { ...state, leagueId: action.json };
    case RECEIVE_TEAMS_STATS:
      return {
        ...state,
        ...action.json,
        isTeamsStatsLoading: false
      };
    case RECEIVE_TEAMS_DETAIL:
      return {
        ...state,
        teamsDetail: action.json,
        isTeamsDetailLoading: false
      };
    case RECEIVE_FIRST_TEAM_STATS:
      return {
        ...state,
        firstTeamStats: action.json,
        isTeamsDetailLoading: false
      };
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
    default:
      return state;
  }
};

export default reducer;
