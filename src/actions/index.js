import axios from "axios";
export const REQUEST_LEAGUES_LIST = "REQUEST_LEAGUES_LIST";
export const RECEIVE_LEAGUES_LIST = "RECEIVE_LEAGUES_LIST";
export const RECEIVE_TEAMS_DETAIL = "RECEIVE_LEAGUE_DETAIL";
export const REQUEST_TEAMS_STATS = "REQUEST_TEAMS_STAT";
// export const REQUEST_TEAMS_DETAIL = "REQUEST_TEAMS_DETAIL"
export const RECEIVE_TEAMS_STATS_WIN_HOME = "RECEIVE_TEAMS_STATS_WIN_HOME";
export const RECEIVE_TEAMS_STATS_WIN_AWAY = "RECEIVE_TEAMS_STATS_WIN_AWAY";
export const RECEIVE_TEAMS_STATS_DRAW_HOME = "RECEIVE_TEAMS_STATS_DRAW_HOME";
export const RECEIVE_TEAMS_STATS_DRAW_AWAY = "RECEIVE_TEAMS_STATS_DRAW_AWAY";
export const RECEIVE_TEAMS_STATS_LOSE_HOME = "RECEIVE_TEAMS_STATS_LOSE_HOME";
export const RECEIVE_TEAMS_STATS_LOSE_AWAY = "RECEIVE_TEAMS_STATS_LOSE_AWAy";
export const RECEIVE_LEAGUE = "RECEIVE_LEAGUE";
export const RECEIVE_TEAMS_STATS = "RECEIVE_TEAMS_STATS";
export const SET_HOME_TEAM = "SET_HOME_TEAM";
export const SET_AWAY_TEAM = "SET_AWAY_TEAM";

// export const requestTeamsDetail = leagueId => ({
//   type: REQUEST_TEAMS_DETAIL,
//   leagueId
// });

export const receivedTeamsStat = (json, type) => ({
  type: RECEIVE_TEAMS_STATS,
  json: json,
  teamtype: type,
});

export const receivedLeague = json => ({
  type: RECEIVE_LEAGUE,
  json: json
});

export const requestLeaguesList = () => ({
  type: REQUEST_LEAGUES_LIST
});

export const receivedLeaguesList = json => ({
  type: RECEIVE_LEAGUES_LIST,
  json: json
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
  return function(dispatch) {
    dispatch(requestLeaguesList());
    dispatch(requestTeamsStat());
    const api = false;
    if (api) {
      return axios({
        method: "get",
        url: "https://api-football-v1.p.rapidapi.com/v2/leagues/",
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": ""
        }
      })
        .then(res => {
          let leagues = res.data.api.leagues;
          /** To initially load the first league details into the details component */
          dispatch(getTeamsDetailById(leagues[0].league_id));
          //dispatch(getTeamsStats(leagues[0].league_id, leagues[0].league_id[357].team_id[19]));
          dispatch(getTeamsStats(leagues[0].league_id, 19, 'home'));
          dispatch(receivedLeaguesList(leagues));
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      return axios
        .get("https://www.api-football.com/demo/v2/leagues/")
        .then(res => {
          let leagues = res.data.api.leagues;
          /** To initially load the Leagues names in the Leagues component  */
          dispatch(receivedLeaguesList(leagues));
          /** To initially load the first league details into the Details component, in the Select Option */
          dispatch(getTeamsDetailById(leagues[0].league_id));
          /** To initially load the first teams stats into the Stats component, San Paulo Team in this case */
          dispatch(getTeamsStats(leagues[0].league_id, 19, 'away'));
          dispatch(getTeamsStats(leagues[0].league_id, 19, 'home'));
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
}

// API Call

export function getTeamsDetailById(id) {
  return function(dispatch) {
    const api = false;
    if (api) {
      return axios({
        method: "get",
        url: `https://api-football-v1.p.rapidapi.com/v2/teams/league/${id}`,
        headers: {
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
          "x-rapidapi-key": ""
        }
      })
        .then(res => {
          let teams = res.data.api.teams;
          dispatch(receivedTeamsDetail(teams));
        })
        .catch(e => {
          console.log(e);
        });
    } else {
      return axios
        .get(`https://www.api-football.com/demo/v2/teams/league/${id}`)
        .then(res => {
          let teams = res.data.api.teams;
          /** This is used as first call to fectch the team names in the fetchLeaguesList*/
          dispatch(receivedTeamsDetail(teams));
          /** This is used to get the leagueId state when i want to get the team stats selected in Details Component */
          dispatch(receivedLeague(id));
          /* Get the first team stats anytime i click on a different league*/
          dispatch(getTeamsStats(id, teams[0].team_id, 'home'));
          dispatch(getTeamsStats(id, teams[0].team_id, 'away'));
        })
        .catch(e => {
          console.log(e);
        });
    }
  };
}

export function getTeamsStats(league, team, type) {
  return function(dispatch) {

    const url = "https://www.api-football.com/demo/v2/statistics";
    let dates = ["2019-08-30", "2019-09-30", "2019-10-30"]

    const getAllData = (dates, i) => {
      return Promise.all(dates.map(x => url + '/' + league + '/' + team + '/' + x).map(fetchData));
    }

    const fetchData = (URL) => {
      return axios
        .get(URL)
        .then(res => {
          const {
            matchsPlayed: { total: teamsTotalMatchsPlayed},
            wins: { home: teamsStatsWinHome, away: teamsStatsWinAway },
            draws: { home: teamsStatsDrawHome, away: teamsStatsDrawAway },
            loses: { home: teamsStatsLoseHome, away: teamsStatsLoseAway }
          } = res.data.api.statistics.matchs;
          const matchsPlayed = teamsTotalMatchsPlayed;
          const winHome = teamsStatsWinHome * 0;
          const winHAway = teamsStatsWinAway * 2;
          const drawHome = teamsStatsDrawHome * -2;
          const drawAway = teamsStatsDrawAway * 0;
          const loseHome = teamsStatsLoseHome * -3;
          const loseAway = teamsStatsLoseAway * -1;
          const totalCal = winHome + winHAway + drawHome + drawAway + loseHome + loseAway
          console.log(['matchs:', matchsPlayed, 'Team:', totalCal]);
          const teamStats = {
            matchsPlayed,
            totalCal
           }
          dispatch(receivedTeamsStat(teamStats, type));
        })
        .catch(e => {
          console.log(e);
        });
    }

    getAllData(dates).then(resp=>{console.log(resp)}).catch(e=>{console.log(e)})

  }
}
