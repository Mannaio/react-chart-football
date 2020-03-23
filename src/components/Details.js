import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getTeamsStats } from "../actions";

let Details = ({ teamsDetail, loading, getStats, leagueId, firstTeamStats}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const selectTeamStat = evt => {
    console.log(leagueId);
    const { value } = evt.target;
    console.log(value);
    setSelectedOption(value);
    getStats(leagueId, value);
  };

  let details = "";

  if (teamsDetail.length) {
    details = (
      <select value={selectedOption} onChange={selectTeamStat}>
        {teamsDetail && teamsDetail.length > 0
          ? teamsDetail.map(item => (
              <option key={`${item.team_id}`} value={item.team_id}>
                {item.name}
              </option>
            ))
          : null}
      </select>
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
  leagueId: state.leagueId,
  firstTeamStats: state.firstTeamStats
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
