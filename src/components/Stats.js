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

  stats = (
    <div className="col-sm-6">
      <div className="card detail-card border-0 rounded-0 bg-transparent">
        <div className="card-body text-decoration-none text-secondary">
          Tot: {  home.teamsStatsWinHome * 0 +
                  home.teamsStatsDrawHome * -2 +
                  home.teamsStatsLoseHome * -3 +
                  home.teamsStatsWinAway * 2 +
                  home.teamsStatsDrawAway * 0 +
                  home.teamsStatsLoseAway * -1
               }
        </div>
      </div>
      <div className="card detail-card border-0 rounded-0 bg-transparent">
        <div className="card-body text-decoration-none text-secondary">
        Tot: {  away.teamsStatsWinHome * 0 +
                away.teamsStatsDrawHome * -2 +
                away.teamsStatsLoseHome * -3 +
                away.teamsStatsWinAway * 2 +
                away.teamsStatsDrawAway * 0 +
                away.teamsStatsLoseAway * -1
             }
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
