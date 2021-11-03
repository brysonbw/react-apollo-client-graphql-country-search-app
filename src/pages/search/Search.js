import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";
import { Button, Card, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom";

const SEARCH_COUNTRY = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      capital
      emoji
      code
      currency
    }
  }
`

function Search() {
  const [search, setSearch] = useState("");
  const [searchCountry, { data, loading, error }] = useLazyQuery(SEARCH_COUNTRY)

  const variant = 'success'

  return (
    <div className="container-fluid text-center">
        <Link to='/'>
                 <h1 className="mt-5" variant="outline-success">View Countries List</h1>{' '}
                 </Link>
        <FormControl className="w-50 mx-auto mt-5"
          type="text"
          placeholder="Enter country code (ex. US)..."
          required
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <Button className="mt-4" variant="outline-success" size="md"
          onClick={() => {
            searchCountry({
              variables: { code: search.toUpperCase() },
            })
          }}
        >
          Search Country
        </Button>

      <div className="searchCountry mt-4">
      {loading && <p className="text-center" >Loading...</p>}
            {error && <p className="text-center" >{ error }</p> }
        {data && (
             <Card
             bg={variant.toLowerCase()}
             text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
             style={{ width: '18rem' }}
             className="mb-2 mx-auto"
           >
             <Card.Body>
               <Card.Title>{data.country.name} {data.country.emoji} </Card.Title>
               <Card.Text>
                Captial: {data.country.capital}
               </Card.Text>
               <Card.Text>
                Currency: {data.country.currency}
               </Card.Text>
               <Card.Text>
                Code: {data.country.code}
               </Card.Text>
             </Card.Body>
           </Card>
        )}
      </div>
    </div>
  );
}

export default Search
