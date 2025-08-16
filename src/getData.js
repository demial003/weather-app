const getData = async (city) => {
  try {
    let data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&key=JCQRUCGLXGNAJDCDRETXM9VTD&contentType=json`,
      {
        mode: "cors",
      }
    );

    let response = await data.json();
    return response;
  } catch (error) {
    console.log("error ", error);
  }
};

export { getData };
