import Banner from "../../components/banner/banner"
import "./home.css"
import logements from "../../data/logement.json"
import Card from "../../components/card/card"


function Home() {
  console.log(logements)

  return (
    <div className="App">
      <Banner />
      <div className="container-cards">
        {/* Les cards */}
        {logements &&
          logements.map((logement) => (
            <Card key={logement.id} id={logement.id} title={logement.title} imageSrc={logement.cover} />
          ))}
      </div>
    </div>
  )
}

export default Home
