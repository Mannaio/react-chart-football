import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

let Stats = ({
  teamsStatsWinHome,
  teamsStatsWinAway,
  teamsStatsDrawHome,
  teamsStatsDrawAway,
  teamsStatsLoseHome,
  teamsStatsLoseAway,
  teamStats,
  loading,
  home={},
  away={}
}) => {
  let stats = "";


  // Home Team UseStates

  const [stateHomeTeamStatsWinHome, setStateHomeTeamStatsWinHome] = useState(
    home.teamsStatsWinHome
  );
  const [stateHomeTeamStatsWinAway, setStateHomeTeamStatsWinAway] = useState(
    home.teamsStatsWinAway
  );
  const [stateHomeTeamStatsDrawHome, setStateHomeTeamStatsDrawHome] = useState(
    home.teamsStatsDrawHome
  );
  const [stateHomeTeamStatsDrawAway, setStateHomeTeamStatsDrawAway] = useState(
    home.teamsStatsDrawAway
  );
  const [stateHomeTeamStatsLoseHome, setStateHomeTeamStatsLoseHome] = useState(
    home.teamsStatsLoseHome
  );
  const [stateHomeTeamStatsLoseAway, setStateHomeTeamStatsLoseAway] = useState(
    home.teamsStatsLoseAway
  );

  // Away Team UseStates

  const [stateAwayTeamStatsWinHome, setStateAwayTeamStatsWinHome] = useState(
    away.teamsStatsWinHome
  );
  const [stateAwayTeamStatsWinAway, setStateAwayTeamStatsWinAway] = useState(
    away.teamsStatsWinAway
  );
  const [stateAwayTeamStatsDrawHome, setStateAwayTeamStatsDrawHome] = useState(
    away.teamsStatsDrawHome
  );
  const [stateAwayTeamStatsDrawAway, setStateAwayTeamStatsDrawAway] = useState(
    away.teamsStatsDrawAway
  );
  const [stateAwayTeamStatsLoseHome, setStateAwayTeamStatsLoseHome] = useState(
    away.teamsStatsLoseHome
  );
  const [stateAwayTeamStatsLoseAway, setStateAwayTeamStatsLoseAway] = useState(
    away.teamsStatsLoseAway
  );

  // Home Team Initial States

  const initialHomeTeamStates = [
    stateHomeTeamStatsWinHome,
    stateHomeTeamStatsWinAway,
    stateHomeTeamStatsDrawHome,
    stateHomeTeamStatsDrawAway,
    stateHomeTeamStatsLoseHome,
    stateHomeTeamStatsLoseAway
  ];

  // Away Team Initial States

  const initialAwayTeamStates = [
    stateAwayTeamStatsWinHome,
    stateAwayTeamStatsWinAway,
    stateAwayTeamStatsDrawHome,
    stateAwayTeamStatsDrawAway,
    stateAwayTeamStatsLoseHome,
    stateAwayTeamStatsLoseAway
  ];

  // Home Team Total Calculation UseState

  const [stateHomeTeamStatsTotal, setHomeStateTeamStatsTotal] = useState(
    initialHomeTeamStates
  );

  // Away Team Total Calculation UseState

  const [stateAwayTeamStatsTotal, setAwayStateTeamStatsTotal] = useState(
    initialAwayTeamStates
  );

  // Home Team Total Calculation useEffect

  useEffect(() => {
      const homeNewteamStatsTotal =
        stateHomeTeamStatsWinHome +
        stateHomeTeamStatsWinAway +
        stateHomeTeamStatsDrawHome +
        stateHomeTeamStatsDrawAway +
        stateHomeTeamStatsLoseHome +
        stateHomeTeamStatsLoseAway;
        setHomeStateTeamStatsTotal(homeNewteamStatsTotal);
  },[initialHomeTeamStates]);

  // Away Team Total Calculation useEffect

  useEffect(() => {
      const awayNewteamStatsTotal =
        stateAwayTeamStatsWinHome +
        stateAwayTeamStatsWinAway +
        stateAwayTeamStatsDrawHome +
        stateAwayTeamStatsDrawAway +
        stateAwayTeamStatsLoseHome +
        stateAwayTeamStatsLoseAway;
        setAwayStateTeamStatsTotal(awayNewteamStatsTotal);
  },[initialAwayTeamStates]);

  // Home Team useEffect

  useEffect(() => {
    const newteamStatsWinHome = home.teamsStatsWinHome * 0;
    setStateHomeTeamStatsWinHome(newteamStatsWinHome);
  }, [home.teamsStatsWinHome]);

  useEffect(() => {
    const newteamStatsWinAway = home.teamsStatsWinAway * 2;
    setStateHomeTeamStatsWinAway(newteamStatsWinAway);
  }, [home.teamsStatsWinAway]);

  useEffect(() => {
    const newteamStatsDrawHome = home.teamsStatsDrawHome * -2;
    setStateHomeTeamStatsDrawHome(newteamStatsDrawHome);
  }, [home.teamsStatsDrawHome]);

  useEffect(() => {
    const newteamStatsDrawAway = home.teamsStatsDrawAway * 0;
    setStateHomeTeamStatsDrawAway(newteamStatsDrawAway);
  }, [home.teamsStatsDrawAway]);

  useEffect(() => {
    const newteamStatsLoseHome = home.teamsStatsLoseHome * -3;
    setStateHomeTeamStatsLoseHome(newteamStatsLoseHome);
  },[home.teamsStatsLoseHome]);

  useEffect(() => {
    const newteamStatsLoseAway = home.teamsStatsLoseAway * -1;
    setStateHomeTeamStatsLoseAway(newteamStatsLoseAway);
  },[home.teamsStatsLoseAway]);

  // Away Team useEffect

  useEffect(() => {
    const newteamStatsWinHome = away.teamsStatsWinHome * 0;
    setStateAwayTeamStatsWinHome(newteamStatsWinHome);
  },[away.teamsStatsWinHome]);

  useEffect(() => {
    const newteamStatsWinAway = away.teamsStatsWinAway * 2;
    setStateAwayTeamStatsWinAway(newteamStatsWinAway);
  },[away.teamsStatsWinAway]);

  useEffect(() => {
    const newteamStatsDrawHome = away.teamsStatsDrawHome * -2;
    setStateAwayTeamStatsDrawHome(newteamStatsDrawHome);
  },[away.teamsStatsDrawHome]);

  useEffect(() => {
    const newteamStatsDrawAway = away.teamsStatsDrawAway * 0;
    setStateAwayTeamStatsDrawAway(newteamStatsDrawAway);
  },[away.teamsStatsDrawAway]);

  useEffect(() => {
    const newteamStatsLoseHome = away.teamsStatsLoseHome * -3;
    setStateAwayTeamStatsLoseHome(newteamStatsLoseHome);
  },[away.teamsStatsLoseHome]);

  useEffect(() => {
    const newteamStatsLoseAway = away.teamsStatsLoseAway * -1;
    setStateAwayTeamStatsLoseAway(newteamStatsLoseAway);
  },[away.teamsStatsLoseAway]);

  stats = (
    <div className="col-sm-6">
      <div className="card detail-card border-0 rounded-0 bg-transparent">
        <div className="card-body text-decoration-none text-secondary">
          Tot:{stateHomeTeamStatsTotal}
        </div>
        <div className="card-body text-decoration-none text-secondary">
          Tot:{stateAwayTeamStatsTotal}
        </div>
      </div>
    </div>
  );

  if (loading) {
    stats = (
      <div className="col-12">
        <div className="card border-0 rounded-0">
          <div className="card-body">
            <h3 className="text-center">Loading...</h3>
          </div>
        </div>
      </div>
    );
  }

  return <div className="row no-gutters details-wrapper">{stats}</div>;
};

const mapStateToProps = state => ({
  teamsStatsWinHome: state.teamsStatsWinHome,
  teamsStatsWinAway: state.teamsStatsWinAway,
  teamsStatsDrawHome: state.teamsStatsDrawHome,
  teamsStatsDrawAway: state.teamsStatsDrawAway,
  teamsStatsLoseHome: state.teamsStatsLoseHome,
  teamsStatsLoseAway: state.teamsStatsLoseAway,
  loading: state.isTeamsStatsLoading,
  home: state.home,
  away: state.away,
  });

Stats = connect(
  mapStateToProps,
  null
)(Stats);

export default Stats;
