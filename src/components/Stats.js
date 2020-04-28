import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

let Stats = ({
  teamsTotalMatchsPlayed,
  teamsStatsTotalStats,
  loading,
  home={},
  away={}
}) => {
  let stats = "";


  stats = (
    <div className="col-sm-6">
      <div className="card detail-card border-0 rounded-0 bg-transparent">
        <div className="card-body text-decoration-none text-secondary">
          Tot:{home.totalCal} /
          Total Matchs Played: {home.matchsPlayed}
        </div>
        <div className="card-body text-decoration-none text-secondary">
          Tot:{away.totalCal} /
          Total Matchs Played: {away.matchsPlayed}
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
  teamsTotalMatchsPlayed: state.matchsPlayed,
  teamsStatsTotalStats: state.totalCal,
  loading: state.isTeamsStatsLoading,
  home: state.home,
  away: state.away,
  });

Stats = connect(
  mapStateToProps,
  null
)(Stats);

export default Stats;
