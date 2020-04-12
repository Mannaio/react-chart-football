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


  // Home

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

  // Away

  // const [stateAwayTeamsStatsWinHome, setStateAwayTeamsStatsWinHome] = useState(
  //   away.teamsStatsWinHome
  // );
  // const [stateAwayTeamsStatsWinAway, setStateAwayTeamsStatsWinAway] = useState(
  //   away.teamsStatsWinAway
  // );
  // const [stateAwayTeamsStatsDrawHome, setStateAwayTeamsStatsDrawHome] = useState(
  //   away.teamsStatsDrawHome
  // );
  // const [stateAwayTeamsStatsDrawAway, setStateAwayTeamsStatsDrawAway] = useState(
  //   away.teamsStatsDrawAway
  // );
  // const [stateAwayTeamsStatsLoseHome, setStateAwayTeamsStatsLoseHome] = useState(
  //   away.teamsStatsLoseHome
  // );
  // const [stateAwayTeamsStatsLoseAway, setStateAwayTeamsStatsLoseAway] = useState(
  //   away.teamsStatsLoseAway
  // );


  const initialHomeStates = [
    stateHomeTeamStatsWinHome,
    stateHomeTeamStatsWinAway,
    stateHomeTeamStatsDrawHome,
    stateHomeTeamStatsDrawAway,
    stateHomeTeamStatsLoseHome,
    stateHomeTeamStatsLoseAway
  ];

  const [stateHomeTeamStatsTotal, setHomeStateTeamStatsTotal] = useState(
    initialHomeStates
  );

  // Away

  // const [stateAwayTeamStatsTotal, setAwayStateTeamStatsTotal] = useState(
  //   initialValue
  // );

  useEffect(() => {
    if (
      typeof (stateHomeTeamStatsWinHome &&
        stateHomeTeamStatsWinAway &&
        stateHomeTeamStatsDrawHome &&
        stateHomeTeamStatsDrawAway,
        stateHomeTeamStatsLoseHome,
        stateHomeTeamStatsLoseAway) == "number"
    ) {
      const homeNewteamsStatsTotal =
        stateHomeTeamStatsWinHome +
        stateHomeTeamStatsWinAway +
        stateHomeTeamStatsDrawHome +
        stateHomeTeamStatsDrawAway +
        stateHomeTeamStatsLoseHome +
        stateHomeTeamStatsLoseAway;
        setHomeStateTeamStatsTotal(homeNewteamsStatsTotal);
    }
  }, [initialHomeStates]);

  useEffect(() => {
    if (typeof home.teamsStatsWinHome == "number") {
      const newteamsStatsWinHome = home.teamsStatsWinHome * 0;
      setStateHomeTeamStatsWinHome(newteamsStatsWinHome);
    }
  }, [home.teamsStatsWinHome]);

  useEffect(() => {
    if (typeof home.teamsStatsWinAway == "number") {
      const newteamsStatsWinAway = home.teamsStatsWinAway * 2;
      setStateHomeTeamStatsWinAway(newteamsStatsWinAway);
    }
  }, [home.teamsStatsWinAway]);

  useEffect(() => {
    if (typeof home.teamsStatsDrawHome == "number") {
      const newteamsStatsDrawHome = home.teamsStatsDrawHome * -2;
      setStateHomeTeamStatsDrawHome(newteamsStatsDrawHome);
    }
  }, [home.teamsStatsDrawHome]);

  useEffect(() => {
    if (typeof home.teamsStatsDrawAway == "number") {
      const newteamsStatsDrawAway = home.teamsStatsDrawAway * 0;
      setStateHomeTeamStatsDrawAway(newteamsStatsDrawAway);
    }
  }, [home.teamsStatsDrawAway]);

  useEffect(() => {
    if (typeof home.teamsStatsLoseHome == "number") {
      const newteamsStatsLoseHome = home.teamsStatsLoseHome * -3;
      setStateHomeTeamStatsLoseHome(newteamsStatsLoseHome);
    }
  }, [home.teamsStatsLoseHome]);

  useEffect(() => {
    if (typeof home.teamsStatsLoseAway == "number") {
      const newteamsStatsLoseAway = home.teamsStatsLoseAway * -1;
      setStateHomeTeamStatsLoseAway(newteamsStatsLoseAway);
    }
  }, [home.teamsStatsLoseAway]);

  if (
    typeof (
      home.teamsStatsWinHome &&
      home.teamsStatsWinAway &&
      home.teamsStatsDrawHome &&
      home.teamsStatsDrawAway &&
      home.teamsStatsLoseHome &&
      home.teamsStatsLoseAway
    ) == "number"
  ) {
    stats = (
      <div className="col-sm-6">
        <div className="card detail-card border-0 rounded-0 bg-transparent">
          <div className="card-body text-decoration-none text-secondary">
            Tot:{stateHomeTeamStatsTotal}
          </div>
          <div className="card-body text-decoration-none text-secondary">
            Tot:
          </div>
        </div>
      </div>
    );
  }

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
