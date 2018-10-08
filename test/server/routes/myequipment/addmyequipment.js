var express = require('express');
var router = express.Router();
var func = require('../func.js');
var edo=require('../edonomix.js');
var con = require('../db');

router.post('/',function(req,res)
{
 if(req.session.adminid)
 {
    console.log(req.ip);
    req.check('category','equipment category must have proper value ').isLength({min:3});
    req.check('capacity','equipment capacity must have proper value ').isLength({min:1});
    req.check('year','year must have proper value ').isLength({min:4,max:4}).isNumeric().trim();
    req.check('brand','equipment brand must have proper value ').isLength({min:3});
    req.check('model','model must have proper value ').isLength({min:3});
    req.check('equipment','equipment must have proper value ').isLength({min:3});
    var verrs=req.validationErrors();
    if(verrs)
    {
      res.json({ success:false,msg: verrs[0].msg,});
      //console.log('*******'+verrs.length+'**********'+JSON.stringify(verrs)+'********'+verrs[1].msg+'********');
    }
    else
    {
      var myequipment = 
      {
        category:req.body.category,
        brand:req.body.brand,
        model:req.body.model,
        year:req.body.year,
        capacity:req.body.capacity,
        equipment:req.body.equipment,
      };
      con.query("Insert into myequipment SET ? ;",myequipment,function(err,result)
      {
        if(err)
        {
          console.log(sql,err);
          res.json({success:false,msg: 'something went wrong',});
        }
        else
        {
          res.json({ success:true,msg: 'succesful entry', });
        }
      });

    }
  }
  else
  {
    res.json({"success":true,'msg':'user login page'});
  }        
});

module.exports = router;