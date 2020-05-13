import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getTeamsStats } from "../actions";

let Details = ({ teamsDetail, loading, getStats, leagueId, home={}, away={} }) => {

  const [selectedHomeOption, setSelectedHomeOption] = useState("");
  const [selectedAwayOption, setSelectedAwayOption] = useState("");
  const [selectedHomeName, setSelectedHomeName] = useState("");
  const [selectedAwayName, setSelectedAwayName] = useState("");

  const [items, setItemsName] = useState([teamsDetail]);

  useEffect(() => {
    const newItemsNames = teamsDetail;
    setItemsName(newItemsNames);
  }, [teamsDetail]);

  // const selectHomeTeamStat = (evt) => {
  //   const { value } = evt.target;
  //   setSelectedHomeOption(value);
  // }
  //
  // useEffect(() => {
  //   debugger
  //   const item = items.find((item) => item.team_id == selectedHomeOption);
  //   getStats(leagueId, selectedHomeOption, item.name);
  // }, [leagueId, items, selectedHomeOption]);

  const selectHomeTeamStat = evt => {
    const { value } = evt.target;
    const item = items.find(item => item.team_id == value);
    setSelectedHomeOption(value);
    setSelectedHomeName(item.name);
  };

  const selectAwayTeamStat = evt => {
    const { value } = evt.target;
    const item = items.find(item => item.team_id == value);
    setSelectedAwayOption(value);
    setSelectedAwayName(item.name);
  };

  useEffect(() => {
    console.log('Home Team name:', selectedHomeName, 'Home Team Option:', selectedHomeOption);
    getStats(leagueId, selectedHomeOption, 'home', selectedHomeName);
  },[selectedHomeName, selectedHomeOption]);

  useEffect(() => {
    console.log('Away Team name:', selectedAwayName, 'Away Team Option:', selectedAwayOption);
    getStats(leagueId, selectedAwayOption, 'away', selectedAwayName);
  },[selectedAwayOption, selectedAwayName])

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
        <div className="col-sm-12">
          <div className="card detail-card border-0 rounded-0 bg-transparent">
            <div className="card-body text-decoration-none text-secondary">
              <ul>
                <li>Team Name:{selectedHomeName}</li>
                <li>Calculation:{home.totalCal}</li>
                <li>Total Matchs Played:{home.matchsPlayed}</li>
              </ul>
            </div>
            <div className="card-body text-decoration-none text-secondary">
              <ul>
                <li>Team Name:{selectedAwayName}</li>
                <li>Calculation:{away.totalCal}</li>
                <li>Total Matchs Played:{away.matchsPlayed}</li>
              </ul>
            </div>
          </div>
        </div>
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
  leagueId: state.leagueId,
  home: state.home,
  away: state.away,
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
