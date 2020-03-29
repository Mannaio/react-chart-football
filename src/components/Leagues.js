import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchLeaguesList, getTeamsDetailById, getTeamsStats} from "../actions";

let Leagues = ({getList, getStats, leaguesList, loading, getDetail, teamsDetail}) => {

  useEffect(() => {
    getList();
  },[getList]);

  const onClick = (evt, id) => {
    evt.preventDefault();
    getDetail(id);
  };

  let leagues = "";
  let dummyImage = "https://placeholder.pics/svg/640x480/ECEEFF-D0E3FF/FF0000-FFFFFF/Image%20not%20found";

  if (leaguesList.length && teamsDetail.length) {
    leagues = leaguesList.map((item, index) => (
      <div key={`${index}`} className="col-12 col-sm-6 p-2">
        <div className="card">
          <a href={`#${item.league_id}`}
             onClick={(e) => onClick(e, item.league_id)}
             className="card-body text-dark d-flex align-items-center text-decoration-none">
            <img src={item.flag ? item.flag : dummyImage} className="img-custom" alt={item.name}/>
            <span className="font-weight-bolder h5 mb-0 ellipsis text-uppercase">{item.name}</span>
          </a>
        </div>
      </div>
    ));
  }

  if (loading) {
    leagues = (
      <div className="col-12 p-2">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Loading...</h3>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="col-12 px-sm-1 col-lg-9 col-xl-8">
      <div className="row no-gutters">{leagues}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  teamsDetail: state.teamsDetail,
  leaguesList: state.leaguesList,
  loading: state.isLeagueListLoading,
});

const mapDispatchToProps = {
  getList: fetchLeaguesList,
  getDetail: getTeamsDetailById,
  getStats: getTeamsStats,
};

Leagues = connect(
  mapStateToProps,
  mapDispatchToProps
)(Leagues);

export default Leagues;
