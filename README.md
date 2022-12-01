# Development

### Link to Deployed Website
If you used the stencil code, this is `https://lazydog1120.github.io/development`

### Goal and Value of the Application
The goal of this app is to provide the user with simple statistics on the 2022 Formula 1 Driver roster. I think this provides value to the user because of its ability to filter out drivers based on team and where they are from and also sort the drivers based on points earned from races.

### Usability Principles Considered
I think this app has a really simple and consistent design. The Nav Bar provides the app with good efficiency as it 
makes it easy for the user to provide the filter they want and they are easy to understand. Also, it provides the user with a visible list of filters they have applied so that the user doesn't have to remember which filters are applied.

### Organization of Components
There are 2 components to this app. One being a DriverItem which is the card for each driver (that being the image and info provided on the driver) and the other being the Nav Bar which provides all the filters. The nav bar is at the top of the app while the driver cards are below in grid like order going from left to right. 

### How Data is Passed Down Through Components
For the Driver Item, the data it is given is the driver image, name, team they are on, nationality, region they are from, number of wins, and points earned from races. There are also two buttons provided to add and remove to favorites. In terms of the nav bar, it is given a function that that matches the filter type when on of the filters on the nave bar is clicked, a reset dat function that resets all the filters when it is clicked, and a combined points state that keeps track of the combined points of the drivers added to favorites (aggregate part).
### How the User Triggers State Changes
To trigger stat changes the user has to click on one of the filters or buttons on the driver card. I have 3 state variables: One that is a list that keeps track of the filtered drivers, one that keeps track of the combined points, and one that is a list that keeps track of the filters applied. For the filtered drivers state (filteredData) and for the filters applied state (filterType), a user can trigger state changes by clicking on the filters on the nav bar. For the combined points state, a user triggers changes when they click on either the add to favorites button or remove from favorites button on the driver cards. NOTE: When Reset Data filter is clicked, click home to get cards back. 

