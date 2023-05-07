import React from 'react'
import DateContainer from '../components/DateContainer'
import ManifestTable from '../components/ManifestTable'

export default function Manifest() {
  return (
    <div className='flex gap-4'>
      <DateContainer/>
      <ManifestTable/>
    </div>
  )
}
