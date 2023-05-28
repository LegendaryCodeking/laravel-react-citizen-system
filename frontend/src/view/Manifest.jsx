import React, { useEffect, useState } from 'react'
import DateContainer from '../components/DateContainer'
import axiosClient from '../axiosClient';
import BarangayTable from '../components/Tables/BarangayTable';

export default function Manifest() {

  const [loading, setLoading] = useState(false)
  const [barangays, setbarangays] = useState([]);

  useEffect(() => {
    setLoading(true)
    axiosClient.get('/barangays')
      .then(({data}) => {
        console.log(data)
        setLoading(false)
        setbarangays(data.data)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])


  return (
    <div className='flex gap-4'>
      <DateContainer address={barangays} loading={loading}/>
      <BarangayTable/>
    </div>
  )
}
