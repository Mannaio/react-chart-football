import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

let Stats = ({
  teamsStatsWinHome,
  teamsStatsWinAway,
  teamsStatsDrawHome,
  teamsStatsDrawAway,
  teamsStatsLoseHome,
  teamsStatsLoseAway,
  loading
}) => {
  let stats = "";

  const [stateTeamsStatsWinHome, setStateTeamsStatsWinHome] = useState(
    teamsStatsWinHome
  );
  const [stateTeamsStatsWinAway, setStateTeamsStatsWinAway] = useState(
    teamsStatsWinAway
  );
  const [stateTeamsStatsDrawHome, setStateTeamsStatsDrawHome] = useState(
    teamsStatsDrawHome
  );
  const [stateTeamsStatsDrawAway, setStateTeamsStatsDrawAway] = useState(
    teamsStatsDrawAway
  );
  const [stateTeamsStatsLoseHome, setStateTeamsStatsLoseHome] = useState(
    teamsStatsLoseHome
  );
  const [stateTeamsStatsLoseAway, setStateTeamsStatsLoseAway] = useState(
    teamsStatsLoseAway
  );

  const initialValue = [
    stateTeamsStatsWinHome,
    stateTeamsStatsWinAway,
    stateTeamsStatsDrawHome,
    stateTeamsStatsDrawAway,
    stateTeamsStatsLoseHome,
    stateTeamsStatsLoseAway
  ];

  const [stateTeamsStatsTotal, setStateTeamsStatsTotal] = useState(
    initialValue
  );

  useEffect(() => {
    if (
      typeof (stateTeamsStatsWinHome &&
        stateTeamsStatsWinAway &&
        stateTeamsStatsDrawHome &&
        stateTeamsStatsDrawAway,
      stateTeamsStatsLoseHome,
      stateTeamsStatsLoseAway) == "number"
    ) {
      const newteamsStatsTotal =
        stateTeamsStatsWinHome +
        stateTeamsStatsWinAway +
        stateTeamsStatsDrawHome +
        stateTeamsStatsDrawAway +
        stateTeamsStatsLoseHome +
        stateTeamsStatsLoseAway;
      setStateTeamsStatsTotal(newteamsStatsTotal);
    }
  }, [
    stateTeamsStatsWinHome,
    stateTeamsStatsWinAway,
    stateTeamsStatsDrawHome,
    stateTeamsStatsDrawAway,
    stateTeamsStatsLoseHome,
    stateTeamsStatsLoseAway
  ]);

  useEffect(() => {
    if (typeof teamsStatsWinHome == "number") {
      const newteamsStatsWinHome = teamsStatsWinHome * 0;
      setStateTeamsStatsWinHome(newteamsStatsWinHome);
    }
  }, [teamsStatsWinHome]);

  useEffect(() => {
    if (typeof teamsStatsWinAway == "number") {
      const newteamsStatsWinAway = teamsStatsWinAway * 2;
      setStateTeamsStatsWinAway(newteamsStatsWinAway);
    }
  }, [teamsStatsWinAway]);

  useEffect(() => {
    if (typeof teamsStatsDrawHome == "number") {
      const newteamsStatsDrawHome = teamsStatsDrawHome * -2;
      setStateTeamsStatsDrawHome(newteamsStatsDrawHome);
    }
  }, [teamsStatsDrawHome]);

  useEffect(() => {
    if (typeof teamsStatsDrawAway == "number") {
      const newteamsStatsDrawAway = teamsStatsDrawAway * 0;
      setStateTeamsStatsDrawAway(newteamsStatsDrawAway);
    }
  }, [teamsStatsDrawAway]);

  useEffect(() => {
    if (typeof teamsStatsDrawAway == "number") {
      const newteamsStatsDrawAway = teamsStatsDrawAway * 0;
      setStateTeamsStatsDrawAway(newteamsStatsDrawAway);
    }
  }, [teamsStatsDrawAway]);

  useEffect(() => {
    if (typeof teamsStatsLoseHome == "number") {
      const newteamsStatsLoseHome = teamsStatsLoseHome * -3;
      setStateTeamsStatsLoseHome(newteamsStatsLoseHome);
    }
  }, [teamsStatsLoseHome]);

  useEffect(() => {
    if (typeof teamsStatsLoseAway == "number") {
      const newteamsStatsLoseAway = teamsStatsLoseAway * -1;
      setStateTeamsStatsLoseAway(newteamsStatsLoseAway);
    }
  }, [teamsStatsLoseAway]);

  if (
    typeof (
      teamsStatsWinHome &&
      teamsStatsWinAway &&
      teamsStatsDrawHome &&
      teamsStatsDrawAway &&
      teamsStatsLoseHome &&
      teamsStatsLoseAway
    ) == "number"
  ) {
    stats = (
      <div className="col-sm-6">
        <div className="card detail-card border-0 rounded-0 bg-transparent">
          <div className="card-body text-decoration-none text-secondary">
            Tot:{stateTeamsStatsTotal}
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
  loading: state.isTeamsStatsLoading
});

Stats = connect(
  mapStateToProps,
  null
)(Stats);

export default Stats;
