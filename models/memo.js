'use strict'

const express = require('express');
const mongoose = require('mongoose');

let Schema = mongoose.Schema ;

let memo = new Schema ({
  judul:String,
  catatan:String
},{timestamps:true})

module.exports = mongoose.model("Memo", memo);
