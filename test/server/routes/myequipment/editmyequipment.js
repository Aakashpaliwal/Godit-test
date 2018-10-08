var express = require('express');
var router = express.Router();
// var func = require('../func.js');
// var edo=require('../edonomix.js');
var con = require('../db');

router.get('/',function(req, res, next) 
{   
  var myequipment_id=req.query.id;
  // req.checkQuery('id', 'id must be a number').optional().isNumber();
  req.checkQuery('id', 'id must be a number').isNumeric();
  var verrs=req.validationErrors();
  if(verrs)
  {
    res.json({ success:false,msg: verrs[0].msg,});
  }
  else
  {
    con.query("select * from myequipment where myequipment_id= ? and status=1 ",[{'status':0},myequipment_id],function(err,myequipmentresult,fields)
    {
      if(err)
      {
        console.log(err);
        res.json({'success':false});
      }
      else
      { 
        if(myequipmentresult["affectedRows"]==1)
        res.json({"success":true,'msg':'data can be edited now','myequipmentdata':myequipmentresult});
        else
        res.json({"success":false,'msg':'invalid operation'});    
      }      
    });  
  }             
});


module.exports = router;