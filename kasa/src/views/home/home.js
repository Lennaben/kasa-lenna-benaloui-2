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
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              imageSrc={logement.cover}
            />
          ))}
      </div>

      {/* <div className="cardTest"></div> */}
      {/* <a> */}
      {/* <div class="container-cards"> */}
      {/* <div class="cards">
          <div class="degrade-horizontal"></div>
          <img
            class="img-cards"
            src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg"
            alt="Charmant studio"
          />
          <h3 class="text-overlay">Charmant studio</h3>
        </div> */}
      {/* </div> */}
      {/* </a> */}
    </div>
  )
}

export default Home
