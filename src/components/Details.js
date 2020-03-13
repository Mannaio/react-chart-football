import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getTeamsStats} from "../actions";

let Details = ({teamsDetail, loading, getStats}) => {

  const onClick = (evt, league_id, team_id) => {
    evt.preventDefault();
    getStats(league_id, team_id);
  };

  let details = "";

  if (teamsDetail.length) {
    details = (
      <select>
        {teamsDetail && teamsDetail.length >  0 ?
          teamsDetail.map((item) => (
          <option key={`${item.team_id}`}>
              {item.name}
          </option>
        )): null }
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

  return (
    <div className="row no-gutters details-wrapper">
      {details}
    </div>
  );
};

const mapStateToProps = state => ({
  teamsDetail: state.teamsDetail,
  loading: state.isLeagueDetailLoading
});

const mapDispatchToProps = {
  getStats: getTeamsStats
};


Details = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Details);

export default Details;
