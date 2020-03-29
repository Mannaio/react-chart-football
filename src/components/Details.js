import React, { useState } from "react";
import { connect } from "react-redux";
import { getTeamsStats } from "../actions";

export const RECEIVE_TEAM_TYPE = "RECEIVE_TEAM_TYPE";


let Details = ({ teamsDetail, loading, getStats, leagueId, firstTeamStats, isHomeTeam, isAwayTeam, stateTeamsStatsTotalAway}) => {

  const [selectedHomeOption, setSelectedHomeOption] = useState("");
  const [selectedAwayOption, setSelectedAwayOption] = useState("");

  const selectHomeTeamStat = evt => {
    const { value } = evt.target;
    setSelectedHomeOption(value);
    getStats(leagueId, value, 'home');
  };

  const selectAwayTeamStat = evt => {
    const { value } = evt.target;
    setSelectedAwayOption(value);
    getStats(leagueId, value, 'away');
  };

  let details = "";

  if (teamsDetail.length) {
    details = (
      <>
        <strong>Home Team</strong>
        <select value={selectedHomeOption} onChange={selectHomeTeamStat}>
          {teamsDetail && teamsDetail.length > 0
            ? teamsDetail.map(item => (
                <option key={`${item.team_id}`} value={item.team_id}>
                  {item.name}
                </option>
              ))
            : null}
        </select>
        <>
          <strong>Away Team</strong>
          <select value={selectedAwayOption} onChange={selectAwayTeamStat}>
            {teamsDetail && teamsDetail.length > 0
              ? teamsDetail.map(item => (
                  <option key={`${item.team_id}`} value={item.team_id}>
                    {item.name}
                  </option>
                ))
              : null}
          </select>
        </>
      </>
    );
  }

  if (loading) {
    details = (
      <div className="col-12">
        <div className="card border-0 rounded-0">
          <div className="card-body">
            <h3 className="text-center">Loading....</h3>
          </div>
        </div>
      </div>
    );
  }

  return <div className="row no-gutters details-wrapper">{details}</div>;
};

const mapStateToProps = state => ({
  teamsDetail: state.teamsDetail,
  loading: state.isLeagueDetailLoading,
  leagueId: state.leagueId
});


const mapDispatchToProps = {
  getStats: getTeamsStats,
};

Details = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Details);

export default Details;
