import React from 'react'
import { Button } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import CountriesList from '../../components/CountriesList';

const GET_LIST_OF_COUNTRIES = gql`
{
  countries{
    name
    emoji
    capital
    currency
    code
  }
}
`;

function Home() {
        const { loading, error, data } = useQuery(GET_LIST_OF_COUNTRIES)

    return (
        <div className="container-fluid">
             <div className="title">
             <h1>Find Your Country!</h1>
             <Link to='/search'>
                 <Button className="mt-3" variant="outline-success">Search</Button>{' '}
                 </Link>
             </div>
             <div>
            {loading && <p className="text-center" >Loading...</p>}
            {error && <p className="text-center" >{ error }</p> }
            </div>
            {data && <CountriesList data={data} />} 
        </div>
    )
}

export default Home
