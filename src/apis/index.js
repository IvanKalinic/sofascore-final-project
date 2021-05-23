const { REACT_APP_BASE_URL, REACT_APP_LOGIN_URL} = process.env;

const makeResponse = async (url) => {
  const response = await fetch(url);
  return response.json();
};

export const getCategoryList = async (sport, date, offset) => {
  const categoriesUrl =
  REACT_APP_BASE_URL + `/sport/${sport}/${date}/${offset}/categories`;
  return makeResponse(categoriesUrl);
};

export const getCategoryEvents = async (id, date) => {
  const categoryEventsUrl =
  REACT_APP_BASE_URL + `/category/${id}/scheduled-events/${date}`;

  return makeResponse(categoryEventsUrl);
};

export const getEventDetails = async (id) => {
  const eventDetailsUrl = REACT_APP_BASE_URL + `/event/${id}`;

  return makeResponse(eventDetailsUrl);
};

export const getTeamImage = async (id) => {
  const teamImageUrl = REACT_APP_BASE_URL + `/team/${id}/image`;
  const response = await fetch(teamImageUrl);
  return response;

};

export const getUniqueTournamentImage = async (id) =>{
  const uniqueTournamentImageUrl = REACT_APP_BASE_URL + `/unique-tournament/${id}/image`;
  const response = await fetch(uniqueTournamentImageUrl);
  return response;
}

export const loginRequest = async (username,password) => {
  const response = await fetch(REACT_APP_LOGIN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({username, password}),
  });
  return response.json();
};
