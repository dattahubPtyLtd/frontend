import React from 'react'

import Typical from "react-typical";

function MiddleHero() {
  return (
    <>
                <div className="text-center font-bold">
                    <span className="text-6xl text-teal-600">Empower </span>
                <span className="text-5xl "> Your Wager: </span>
                </div>
                <div className="justify-items-end">
                    <span className="text-5xl "> Trust the </span>
                    <span className="text-5xl text-green-500">Code,</span>
                    <span className="text-7xl "> Not the </span>
                    <span className="text-5xl text-red-500"> Bookie!</span>
                </div>
            <strong className="text-5xl text-green-500">
            <Typical
            steps={[
                ' true the Cakes',
                5000,
                'Not the Pies',
                5000,
                'definitely not Biscuits',
                4000,
                'or Scones',
                1000,
            ]}
            wrapper="span"
            loop={1}
            />
        </strong>
    </>
  )
}

export default MiddleHero