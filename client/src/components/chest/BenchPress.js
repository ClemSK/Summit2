import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BarChart from '../_charts/BarChart'
import LineChart from '../_charts/LineChart'
import PieChart from '../_charts/PieChart'

import { motion } from 'framer-motion'

const BenchPress = () => {
  return (
    <div className='exercise-group-container'>
      <motion.h1 animate={{ fontSize: '50px' }}>Chest</motion.h1>
      <div className='exercise-links'>
        <Link to='/benchpress'>
          <button>Bench Press</button>
        </Link>
        <Link to='/cablefly'>
          <button>Cable Fly</button>
        </Link>
      </div>
      <h2>Bench Press</h2>
      <div className='graph-container'>
        <LineChart />
        <BarChart />
        <PieChart />
      </div>
      <form className='weight-input-container'>
        <label>What was your personal best this session?</label>
        <input type='text' placeholder='Enter session weight' />
        <button>submit</button>
        <label>What is your lifting goal for next session?</label>
        <input type='text' placeholder='Enter weight target' />
        <button>submit</button>
      </form>
    </div>
  )
}

export default BenchPress
