import React from 'react'

const Jsx1 = () => {

    const message="Class isimleri className içinde verilir ve attribute isimleri camelCase yazilir"

  return (
    <>
    <div>Jsx1</div>
    <div className='title'>{message}</div>
    </>
  )
}

export default Jsx1