import axios from "axios";
export const REQUEST_LEAGUES_LIST = "REQUEST_LEAGUES_LIST";
export const RECEIVE_LEAGUES_LIST = "RECEIVE_LEAGUES_LIST";
export const REQUEST_TEAMS_DETAIL = "REQUEST_LEAGUE_DETAIL";
export const RECEIVE_TEAMS_DETAIL = "RECEIVE_LEAGUE_DETAIL";
export const REQUEST_TEAMS_STATS = "REQUEST_TEAMS_STAT";
export const RECEIVE_TEAMS_STATS_WIN_HOME = "RECEIVE_TEAMS_STATS_WIN_HOME";
export const RECEIVE_TEAMS_STATS_WIN_AWAY = "RECEIVE_TEAMS_STATS_WIN_AWAY";
export const RECEIVE_TEAMS_STATS_DRAW_HOME = "RECEIVE_TEAMS_STATS_DRAW_HOME";
export const RECEIVE_TEAMS_STATS_DRAW_AWAY = "RECEIVE_TEAMS_STATS_DRAW_AWAY";
export const RECEIVE_TEAMS_STATS_LOSE_HOME = "RECEIVE_TEAMS_STATS_LOSE_HOME";
export const RECEIVE_TEAMS_STATS_LOSE_AWAY = "RECEIVE_TEAMS_STATS_LOSE_AWAy";


export const requestLeaguesList = () => ({
  type: REQUEST_LEAGUES_LIST
});

export const receivedLeaguesList = json => ({
  type: RECEIVE_LEAGUES_LIST,
  json: json
});

export const requestTeamsDetail = (leagueId) => ({
  type: REQUEST_TEAMS_DETAIL,
  leagueId
});

export const receivedTeamsDetail = json => ({
  type: RECEIVE_TEAMS_DETAIL,
  json: json
});

export const requestTeamsStat = (leagueId, teamId) => ({
  type: REQUEST_TEAMS_STATS,
  leagueId,
  teamId
});

export const receivedTeamsStatWinHome = json => ({
  type: RECEIVE_TEAMS_STATS_WIN_HOME,
  json: json
});

export const receivedTeamsStatWinAway = json => ({
  type: RECEIVE_TEAMS_STATS_WIN_AWAY,
  json: json
});

export const receivedTeamsStatDrawHome = json => ({
  type: RECEIVE_TEAMS_STATS_DRAW_HOME,
  json: json
});

export const receivedTeamsStatDrawAway = json => ({
  type: RECEIVE_TEAMS_STATS_DRAW_AWAY,
  json: json
});

export const receivedTeamsStatLoseHome = json => ({
  type: RECEIVE_TEAMS_STATS_LOSE_HOME,
  json: json
});

export const receivedTeamsStatLoseAway = json => ({
  type: RECEIVE_TEAMS_STATS_LOSE_AWAY,
  json: json
});

// API Call

export function fetchLeaguesList() {
  return function (dispatch) {
    dispatch(requestLeaguesList());
    dispatch(requestTeamsDetail());
    dispatch(requestTeamsStat());
    const api = false;
    if (api) {
      return axios
        ({ method: 'get', url:'https://api-football-v1.p.rapidapi.com/v2/leagues/', headers: { "x-rapidapi-host": "api-football-v1.p.rapidapi.com", "x-rapidapi-key": "4dee647009mshd9a77b663ece0e7p136dbejsn22ccc6e7749e"}})
        .then(res => {
          let leagues = res.data.api.leagues
          dispatch(receivedLeaguesList(leagues));
          /** To initially load the first league details into the details component */
          dispatch(getTeamsDetailById(leagues[0].league_id));
          //dispatch(getTeamsStats(leagues[0].league_id, leagues[0].league_id[357].team_id[19]));
          dispatch(receivedLeaguesList(leagues));
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      return axios
        .get("https://www.api-football.com/demo/api/v2/leagues")
        .then(res => {
          let leagues = res.data.api.leagues
          /** To initially load the first league details into the details component */
          dispatch(getTeamsDetailById(leagues[0].league_id));
          dispatch(getTeamsStats(leagues[0].league_id, 19));
          dispatch(receivedLeaguesList(leagues));
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
}

// API Call

export function getTeamsDetailById(id) {
  return function (dispatch) {
    const api = false;
    if (api) {
      return axios
        ({ method: 'get', url:`https://api-football-v1.p.rapidapi.com/v2/teams/league/${id}`, headers: { "x-rapidapi-host": "api-football-v1.p.rapidapi.com", "x-rapidapi-key": "4dee647009mshd9a77b663ece0e7p136dbejsn22ccc6e7749e"}})
        .then(res => {
          let teams = res.data.api.teams
          dispatch(receivedTeamsDetail(teams));
        })
        .catch(e => {
          console.log(e);
        });
    } else {
        return axios
        .get(`https://www.api-football.com/demo/api/v2/teams/league/${id}`)
        .then(res => {
          let teams = res.data.api.teams
          dispatch(receivedTeamsDetail(teams));
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
}

export function getTeamsStats(league,team) {
  return function (dispatch) {
    const api = false;
    if (api){
      return axios
      ({method: 'get', url:`https://api-football-v1.p.rapidapi.com/v2/statistics/${league}/${team}`, headers: { "x-rapidapi-host": "api-football-v1.p.rapidapi.com", "x-rapidapi-key": "4dee647009mshd9a77b663ece0e7p136dbejsn22ccc6e7749e"}})
      .then(res => {
        let homewins = res.data.api.statistics
        dispatch(receivedTeamsStatWinHome(homewins));
      })
      .catch(e => {
        console.log(e);
      });
    } else {
      return axios
      .get(`https://www.api-football.com/demo/api/v2/statistics/${league}/${team}`)
      .then(res => {
        let homewins = res.data.api.statistics.matchs.wins.home
        dispatch(receivedTeamsStatWinHome(homewins));
        let awaywins = res.data.api.statistics.matchs.wins.away;
        dispatch(receivedTeamsStatWinAway(awaywins));
        let drawhome = res.data.api.statistics.matchs.draws.home;
        dispatch(receivedTeamsStatDrawHome(drawhome));
        let drawaway = res.data.api.statistics.matchs.draws.away;
        dispatch(receivedTeamsStatDrawAway(drawaway));
        let losehome = res.data.api.statistics.matchs.loses.home;
        dispatch(receivedTeamsStatLoseHome(losehome));
        let loseaway = res.data.api.statistics.matchs.loses.away;
        dispatch(receivedTeamsStatLoseAway(loseaway));
      })
      .catch(e => {
        console.log(e);
      });
    }
  };
}

