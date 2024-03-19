import React, { Component } from 'react'
import MyName from './MyName'
import MyBio from './MyStyle'

export default class MyProfile extends Component {
  render() {
    return (
      <div>
        <h1>Biodata:</h1>
        <MyName />
        <MyBio name="Muhammad Zacky Afiff"/>
      </div>
    )
  }
}
