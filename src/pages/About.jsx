import countryFacts from "../api/countryData.json";

export const About = () => {
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>
      <div className="gradient-cards">
        {countryFacts.map((curElem, index) => {
          const { name, capital, population, interestingFact } = curElem;
          return (
            <div className="card" key={index}>
              <div className="container-card bg-blue-box">
                <p className="card-title">{name}</p>
                <p>
                  <span className="card-description">Capital: </span>
                  {capital}
                </p>
                <p>
                  <span className="card-description">Population: </span>
                  {population}
                </p>
                <p>
                  <span className="card-description">InterestingFact: </span>
                  {interestingFact}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
