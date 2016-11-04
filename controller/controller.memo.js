'use strict'

const express = require('express');
const mongoose = require('mongoose');
const Memo = require('../models/memo');

let addMemo = (req,res) => {
  console.log(req.body.data.catatan);
    var input = req.body.data
    Memo.create({
      judul:input.judul,
      catatan:input.catatan
    }, (err,data) => {
      if (err) {
        res.status(404)
      } else {
        res.json(data)
      }
    })

}

let listMemo = (req,res) => {
console.log("masuk");
  Memo.find({}, (err,data) => {
    if (err) {
      res.status(404)
    } else {
      res.json(data)
    }
  })

}

let deleteMemo = (req,res) => {
  console.log(req.params);
  Memo.findByIdAndRemove(req.params.id,(err,data) => {
    if (err) {
      res.status(404)
    } else {
      res.json(data)
    }
  })
}

let updateMemo = (req,res) => {
  Memo.findByIdAndUpdate(req.params.id,{
      judul:req.body.judul,
      catatan:req.body.catatan
  },(err,data) => {
    if (err) {
      res.status(404)
    }else {
      res.json(data)
    }
  })
}

module.exports = ({

  addMemo:addMemo,
  listMemo:listMemo,
  deleteMemo:deleteMemo,
  updateMemo:updateMemo

})
