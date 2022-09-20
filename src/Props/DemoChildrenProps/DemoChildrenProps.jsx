import React, { Component } from 'react'
import DemoChildren from './DemoChildren'
import ExerciseCarStore from '../ExerciseCarStore/ExerciseCarStore';
import ChangeCarColor from '../../StateDemo/ChangeCarColor'
export default class DemoChildrenProps extends Component {
  render() {
    return (
      <div className='container'>
        <DemoChildren element={ <ExerciseCarStore />} func={()=> {
            return 'abc';
        }} >
            <h3>Đây là nội dung html</h3>
            {/* <ExerciseCarStore /> */}
        </DemoChildren>

      </div>
    )
  }
}
