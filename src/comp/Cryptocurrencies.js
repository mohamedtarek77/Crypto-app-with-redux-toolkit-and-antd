import React, { useEffect, useState } from 'react'
import millify from 'millify'
import { Link } from 'react-router-dom'
import { Card,Row,Col,Input } from 'antd'
import { useGetCryptosQuery } from '../services/cryptoApi'

const Cryptocurrencies = ({simplified}) => {
   const count = simplified ? 10 : 100;
   const {data:cryptosList , isFetching} = useGetCryptosQuery(count);
   const [crypyos, setcrypyos] = useState([]);
   const [searchTerm, setsearchTerm] = useState('');
  
    
   useEffect(() => {
      // setcrypyos(cryptosList?.data?.coins);
      const filteredData = cryptosList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
      setcrypyos (filteredData)
   }, [ cryptosList, searchTerm]);

   if (isFetching) return 'Loading...';
   console.log(crypyos)
   return (
    <div>
         {!simplified && (
          <div className="search-crypto">
        <Input placeholder='Search Cryptocurrency' onChange={(e)=> setsearchTerm (e.target.value)}/>
      </div>
         )}
    
      <Row gutter={[32,32]} className='crypto-card-container' >
         {crypyos?.map((currency)=>(
            <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.uuid}>
                 <Link to={`/crypto/${currency.uuid}`}>
                   <Card 
                      title ={`${currency.rank}. ${currency.name}`}
                      extra={<img className='crypto-image' src={currency.iconUrl}/>}
                      hoverable 
                      >
                         <p>price:{millify(currency.price)}</p>
                         <p>Market Cap:{millify(currency.marketCap)}</p>
                         <p> Daily Change: {millify(currency.change)}%</p>


                      </Card>
                 </Link>
            </Col>
         ))}
      </Row>
    </div>
  )
}

export default Cryptocurrencies