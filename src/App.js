import './App.css';
import { useState } from "react";
import f1Data from "./assets/f1-data.json";
import {DriverItem} from "./components/DriverItem"
import {NavbarItem} from "./components/NavbarItem"
import 'bootstrap/dist/css/bootstrap.min.css'

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
f1Data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function App() {
  const [filteredData, setFilteredData] = useState(f1Data);
  const [combinedPoints, setCombinedPoints] = useState(0);
  const [filterType, setFilterType] = useState([]);
  const filterTeamType = ["Red Bull", "Ferrari", "Mercedes", "McLaren", "Alpine F1 Team", "Alfa Romeo", "Aston Martin", "Haas F1 Team", "AlphaTauri", "Williams"];
  const filterRegionType = ["Europe", "Asia", "North America", "Australia", "Africa"];

  function matchesFilterType(type, filter) {
    // all items should be shown when no filter is selected
    if(type === 0) { 
      let temp = filterType;
      home(temp);
    } else if (type === 1) {
      filterTeam(filter, false);
    } else if (type === 2){
      filterRegion(filter, false);
    } else if (type === 3){
      filterFavorites(false);
    } else if (type === 4){
      greatestToLeastPointsSort(false);
    }
  }

  function removedFilter(ind, tempFilterType){
    tempFilterType.splice(ind, 1);
    const len = tempFilterType.length;
    console.log(tempFilterType);
    if (len > 0){
      for (let i = 0; i < tempFilterType.length; i++) {
        const type = tempFilterType[i];
        if (filterTeamType.indexOf(type) !== -1){
          filterTeam(type, true);
        } else if (filterRegionType.indexOf(type) !== -1){
          filterRegion(type, true);
        } else if (type === "Favorites"){
          filterFavorites(true);
        } else if (type === "Points (Greatest to Least)"){
          greatestToLeastPointsSort(true);
        }
        setFilterType(tempFilterType);
      }
    } else{
      home(tempFilterType);
    }
  };
  
  function home(filter){
    setFilteredData(f1Data);
    if(filter.indexOf("Points (Greatest to Least)") !== -1){
      filter = ["Points (Greatest to Least)"];
      setFilterType(filter);
      greatestToLeastPointsSort(true);
    } else{
      setFilterType([]);
    }
  };

  //reset
  function resetData(){
    setFilteredData([]);
    setCombinedPoints(0);
    setFilterType([]);
    for (let i = 0; i < filteredData.length; i++) {
      filteredData[i].favorites = false;
    };
  };

  //filter
  function filterTeam(team, fromRemoved){
    if(!fromRemoved){
      let tempFilterType = [...filterType];
      const ind = tempFilterType.indexOf(team);
      if(ind === -1){
        tempFilterType.push(team);
        let temp = [...filteredData];
        setFilterType(tempFilterType);
        const filterTemp = temp.filter((item) => {
        return item.team.includes(team);
        });
        setFilteredData(filterTemp);
      } else{
        removedFilter(ind, tempFilterType);
      }
    } else{
      let temp = [...f1Data];
      const filterTemp = temp.filter((item) => {
      return item.team.includes(team);
      });
      setFilteredData(filterTemp);
    }
    
  };

  function filterRegion(place, fromRemoved){
    if(!fromRemoved){
      let tempFilterType = [...filterType];
      const ind = tempFilterType.indexOf(place);
      if(ind === -1){
        tempFilterType.push(place);
        let temp = [...filteredData];
        setFilterType(tempFilterType);
        const filterTemp = temp.filter((item) => {
        return item.region.includes(place);
        });
        setFilteredData(filterTemp);
      } else{
        removedFilter(ind, tempFilterType);
      }
    } else{
      let temp = [...f1Data];
      const filterTemp = temp.filter((item) => {
      return item.region.includes(place);
      });
      setFilteredData(filterTemp);
    }
  };

  function filterFavorites(fromRemoved){
    if(!fromRemoved){
      let tempFilterType = [...filterType];
      const ind = tempFilterType.indexOf("Favorites");
      if(ind === -1){
        tempFilterType.push("Favorites");
        let temp = [...filteredData];
        setFilterType(tempFilterType);
        const filterTemp = temp.filter((item) => {
        return item.favorites === true;
        });
        setFilteredData(filterTemp);
      } else{
        removedFilter(ind, tempFilterType);
      }
    } else{
      let temp = [...f1Data];
      const filterTemp = temp.filter((item) => {
      return item.favorites === true;
      });
      setFilteredData(filterTemp);
    }
  };
    
  //sort
  //sort least to greatest later
  function greatestToLeastPointsSort(fromRemoved){
    if(!fromRemoved){
      let tempFilterType = [...filterType];
      const ind = tempFilterType.indexOf("Points (Greatest to Least)");
      if(ind === -1){
        tempFilterType.push("Points (Greatest to Least)");
        let temp = [...filteredData];
        setFilterType(tempFilterType);
        const filterTemp = temp.sort((a,b) => { 
          return b.points - a.points;
        });
        setFilteredData(filterTemp);
      } else{
        removedFilter(ind, tempFilterType);
      }
    } else{
      let temp = [...f1Data];
      const filterTemp = temp.sort((a,b) => { 
        return b.points - a.points;
      });
      setFilteredData(filterTemp);
    }
  };

  function addToFavorites(item){
    item.favorites = true;
    setCombinedPoints(combinedPoints+item.points);
    console.log(f1Data);
  };

  function removeFromFavorites(item){
    if(item.favorites === true){
      item.favorites = false;
      setCombinedPoints(combinedPoints-item.points);
      if(filterType.indexOf("Favorites") !== -1){
        filterFavorites(true);
      }
    }
  };


  return (
    <div className="App">
      
      <div className="navbar">
        {<NavbarItem matchesFilterType={matchesFilterType} resetData={resetData} combinedPoints={combinedPoints}/>}
      </div>
      <div className="filters">
        Filters: 
        {filterType.map((filter, index) => {
          return " "+ (index+1)+ "-" + filter + " "
        })}
      </div>
      <div className="drivers">
        {filteredData.map((item, index)=>{
        return(<DriverItem key={index} item={item} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites}/>)
      })}
      </div>
    </div>
  );
};

export default App;


