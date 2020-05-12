import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getTeamsStats } from "../actions";

let Details = ({ teamsDetail, loading, getStats, leagueId}) => {

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
    getStats(leagueId, value, 'home');
  };

  const selectAwayTeamStat = evt => {
    const { value } = evt.target;
    const item = items.find(item => item.team_id == value);
    setSelectedAwayOption(value);
    setSelectedAwayName(item.name);
    getStats(leagueId, value, 'away');
  };

  useEffect(() => {
    console.log('Home Team name:', selectedHomeName, 'Home Team Option:', selectedHomeOption);
    getStats(leagueId, selectedHomeOption, selectedHomeName);
  },[selectedHomeName, selectedHomeOption]);

  useEffect(() => {
    console.log('Away Team name:', selectedAwayName, 'Away Team Option:', selectedAwayOption);
    getStats(leagueId, selectedAwayOption, selectedAwayName);
  },[selectedAwayOption, selectedAwayName])

  let details = "";

  if (teamsDetail.length) {
    details = (
      <>
        <strong>Home Team</strong>{selectedHomeName}
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
          <strong>Away Team</strong>{selectedAwayName}
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
