import React, {useState} from 'react'

export const InputE = ({place}) => {

  const [data, setData ] = useState('');

    return (
    <>
        <input  placeholder={place} value={data} onChange={(e) => setData(e.target.value)} style={{ width: 220, height: 30}}/>
    </>
  )
}


