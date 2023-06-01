import Banner from "../../components/banner/banner"
import "./home.css"
import logements from "../../data/logement.json"
import Card from "../../components/card/card"

function Home() {
  console.log(logements)

  // for (const logement of logements) {
  //   console.log(logement)
  // }

  return (
    <div className="App">
      <Banner />

      <div className="container-cards">
        {/* Les cards */}
        {/* {logements && logements.map((logement) => <h1>{logement.title}</h1>)} */}
        {logements &&
          logements.map((logement) => (
            <Card title={logement.title} imageSrc={logement.cover} />
          ))}
      </div>
    </div>
  )
}

export default Home
