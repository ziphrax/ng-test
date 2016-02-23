var defaultModel = require('../models/default');

module.exports = {
  handleDefault: function(req,res,next){
    res.status(200).json({message:'ok'});
  },
  handleList: function(req,res,next){
    defaultModel.find({}).exec(function(err,docs){
      if(err){
        res.status(500).json(err);
      } else {
        res.json(docs);
      }
    });
  },
  handleSave: function(req,res,next){
    var doc = new defaultModel(req.json);
    doc.save(function(err){
        if(err){
          res.status(500).json(err);
        } else {
          res.json(doc);
        }
    });
  },
  handleUpdate : function(req,res,next){
    defaultModel.findOne({_id:req.params.id}).exec(function(err,doc){
      if(err){
        res.status(500).json(err);
      } else {
        doc.name = req.json.name;
        doc.save(function(err){
            if(err){
              res.status(500).json(err);
            } else {
              res.json(doc);
            }
        });
      }
    });
  },
  handleFind: function(req,res,next){
    defaultModel.findOne({_id:req.params.id}).exec(function(err,doc){
      if(err){
        res.status(500).json(err);
      } else {
        res.json(doc);
      }
    });
  }
}
