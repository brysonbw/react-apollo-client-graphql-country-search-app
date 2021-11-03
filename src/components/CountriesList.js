import { Card } from "react-bootstrap"

function CountriesList({data}) {
    const variant = 'Success'
    
    return (
        <>
        {data.countries.map((country) => (
            <div key={country.id}>
                 <Card
    bg={variant.toLowerCase()}
    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
    style={{ width: '18rem' }}
    className="mb-2 mx-auto"
  >
    <Card.Body>
      <Card.Title>{country.name} {country.emoji} </Card.Title>
      <Card.Text>
       Captial: {country.capital}
      </Card.Text>
      <Card.Text>
       Currency: {country.currency}
      </Card.Text>
      <Card.Text>
            Code: {country.code}
        </Card.Text>
    </Card.Body>
  </Card>
            </div> 
        ))}
        </>
    )
}

export default CountriesList
