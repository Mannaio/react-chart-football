import React, { useState, useEffect, useRef, ref, useImperativeHandle, forwardRef } from "react";
import { connect } from "react-redux";
import { getTeamsStats } from "../actions";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

let Details = ({ fowardedRef, teamsDetail, loading, getStats, leagueId, firstTeamNameHome, firstTeamNameAway, home={}, away={} }) => {

  const [isStateHomeTeam, setStateHomeTeam] = useState(false);
  const [isStateAwayTeam, setStateAwayTeam] = useState(false);
  const [selectedHomeOption, setSelectedHomeOption] = useState("");
  const [selectedAwayOption, setSelectedAwayOption] = useState("");
  const [selectedHomeName, setSelectedHomeName] = useState("");
  const [selectedAwayName, setSelectedAwayName] = useState("");
  const [items, setItemsName] = useState([teamsDetail]);
  const [dataHomeTeam, setDataHomeTeam] = useState([]);
  const [dataAwayTeam, setDataAwayTeam] = useState([]);

  const cleanValue = () => {
    setDataHomeTeam([]);
    setDataAwayTeam([]);
  };

  useImperativeHandle(fowardedRef, () => {
    return {
      cleanValue: cleanValue
    };
  });

  useEffect(() => {
    const newItemsNames = teamsDetail;
    setItemsName(newItemsNames);
  }, [teamsDetail]);

  useEffect(() => {
    const newFirstTeamHome = firstTeamNameHome;
    const newFirstTeamAway = firstTeamNameAway;
    setSelectedHomeName(newFirstTeamHome);
    setSelectedAwayName(newFirstTeamAway);
  },[firstTeamNameHome, firstTeamNameAway]);


  const selectHomeTeamStat = evt => {
    const { value } = evt.target;
    const item = items.find(item => item.team_id == value);
    setSelectedHomeOption(value);
    setSelectedHomeName(item.name);
    setDataHomeTeam([]);
    setStateHomeTeam(true);
    // console.log('Data Array Select', data);
  };

  const selectAwayTeamStat = evt => {
    const { value } = evt.target;
    const item = items.find(item => item.team_id == value);
    setSelectedAwayOption(value);
    setSelectedAwayName(item.name);
    setDataAwayTeam([]);

    setStateAwayTeam(true);
  };

  useEffect(() => {
    if(isStateHomeTeam) {
      getStats(leagueId, selectedHomeOption, 'home');
      setStateHomeTeam(false);
    }
  },[selectedHomeName, selectedHomeOption, home.matchsPlayed, home.totalCal]);

  useEffect(() => {
    if(isStateAwayTeam) {
    // console.log('Away Team name:', selectedAwayName, 'Away Team Option:', selectedAwayOption);
      getStats(leagueId, selectedAwayOption, 'away');
      setStateAwayTeam(false);
    }
  },[selectedAwayName, selectedAwayOption]);


  useEffect(() => {

     if (!home.matchsPlayed || !home.totalCal || !selectedHomeName) {
       return ;
     }

     setDataHomeTeam(prev =>
       prev.concat([
         {
           day: home.matchsPlayed,
           [selectedHomeName]: home.totalCal
         }
       ])
     );

   },[home.matchsPlayed, home.totalCal]);

   useEffect(() => {

      if (!away.matchsPlayed || !away.totalCal || !selectedAwayName) {
        return ;
      }

      setDataAwayTeam(prev =>
        prev.concat([
          {
            day: away.matchsPlayed,
            [selectedAwayName]: away.totalCal
          }
        ])
      );

    },[away.matchsPlayed, away.totalCal]);


   console.log('Data Array', dataHomeTeam);
   console.log('Data Array', dataAwayTeam);

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
            <div className="card-body text-decoration-none text-secondary">
              <LineChart
                width={500}
                height={300}
                data={dataHomeTeam}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey={selectedHomeName} stroke='#c60000' activeDot={{fill: '#c60000', stroke: 'none', r: 6}}/>
              </LineChart>
            </div>
            <div className="card-body text-decoration-none text-secondary">
              <LineChart
                width={500}
                height={300}
                data={dataAwayTeam}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type='monotone' dataKey={selectedAwayName} stroke='#c60000' activeDot={{fill: '#c60000', stroke: 'none', r: 6}}/>
              </LineChart>
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
  firstTeamNameHome: state.firstTeamNameHome,
  firstTeamNameAway: state.firstTeamNameAway,
  home: state.home,
  away: state.away,
  teamStats: state.teamStats
});


const mapDispatchToProps = {
  getStats: getTeamsStats,
};

const ConnectedDetails = connect(
  mapStateToProps,
  mapDispatchToProps,
  null
)(Details);

export default forwardRef((props, ref) => {
  return <ConnectedDetails {...props} fowardedRef={ref} />;
});
