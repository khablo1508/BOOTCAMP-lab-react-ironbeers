import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function BeerDetails({ beers }) {
  const beerName = useParams();
  console.log(beerName);
  const foundBeer = beers.find((oneBeer) => {
    return oneBeer.name === beerName.beerName;
  });
  console.log(foundBeer);

  return (
    <Wrapper>
      {!foundBeer ? (
        <h1>Sorry dude! We don't have it...</h1>
      ) : (
        <section>
          <div className='beer-img'>
            <img src={foundBeer.image_url} alt='beer' />
          </div>
          <div className='beer-info'>
            <div className='first-container row-container'>
              <h1>{foundBeer.name}</h1>
              <p>{foundBeer.attenuation_level}</p>
            </div>
            <div className='second-container row-container'>
              <h4>{foundBeer.tagline}</h4>
              <h4>{foundBeer.first_brewed}</h4>
            </div>
            <div className='third-container'>
              <p className='description'>{foundBeer.description}</p>
              <h6>{foundBeer.contributed_by}</h6>
            </div>
          </div>
        </section>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.main`
  section {
    width: 100vw;
    height: 88vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  section .beer-img {
    margin-top: 60px;
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 120px;
    height: 300px;
  }
  section .beer-info {
    margin-top: 20px;
    width: 85%;
    max-width: 450px;
    height: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 20px;
    color: #56382d;
  }
  section .beer-info .row-container {
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    text-shadow: 1px 1px #000;
  }
  .description {
    margin-bottom: 10px;
  }
`;

export default BeerDetails;
