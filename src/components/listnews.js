import React, { Component } from 'react'
import News1 from './news1';
import News2 from './news2';
export default class listnews extends Component {
    render() {
        return (
            <div style={{flexDirection: 'row', marginBottom:'20px'}} >
                <News1/>
                <News2/>
            </div>
        )
    }
}
