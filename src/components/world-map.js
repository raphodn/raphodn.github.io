import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'

const WorldMap = ({ props }) => {
  const data = []
  // const data = useStaticQuery(graphql`
  //   query {
  //     allWorld110Json {
  //       objects {
  //         countries 
  //       }
  //     }
  //   }
  // `)

  const worldData = feature(data, data.objects.countries).features

  const projection = () => {
    return geoMercator()
      .scale(100)
      .translate([ 800 / 2, 450 / 2 ])
  }
  
  return (
    <svg width={800} height={450} viewBox="0 0 800 450">
      <g className="countries">
        {
          worldData.map((d,i) => (
            <path
              key={`path-${i}`}
              d={geoPath().projection(this.projection())(d)}
              className="country"
              fill={`rgba(38,50,56,${1 / this.state.worldData.length * i})`}
              stroke="#FFFFFF"
              strokeWidth={0.5}
            />
          ))
        }
      </g>
      <g className="markers">
        <circle
          cx={projection()([8,48])[0]}
          cy={projection()([8,48])[1]}
          r={10}
          fill="#E91E63"
          className="marker"
        />
      </g>
    </svg>
  )
}

export default WorldMap