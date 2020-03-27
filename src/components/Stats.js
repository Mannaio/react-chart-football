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
  home={},
  away={},
  loading
}) => {
  console.log("home", home);
  console.log("away", away);
  let stats;
  stats = (
    <div className="col-sm-6">
      <div className="card detail-card border-0 rounded-0 bg-transparent">
        <div className="card-body text-decoration-none text-secondary">
          Tot:
          {home.teamsStatsWinHome +
            home.teamsStatsDrawHome +
            home.teamsStatsLoseHome}
        </div>
      </div>
      <div className="card detail-card border-0 rounded-0 bg-transparent">
        <div className="card-body text-decoration-none text-secondary">
          Tot:
          {away.teamsStatsWinAway +
            away.teamsStatsDrawAway +
            away.teamsStatsLoseAway}
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
  isHomeTeam: state.isHomeTeam,
  isAwayTeam: state.isAwayTeam,
  home: state.home,
  away: state.away,
  stateTeamsStatsTotalAway: state.stateTeamsStatsTotalAway
});

Stats = connect(
  mapStateToProps,
  null
)(Stats);

export default Stats;
