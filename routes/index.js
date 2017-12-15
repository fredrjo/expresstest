var express = require('express');
var router = express.Router();
var ContentElement = require('./../models/content.element');

/* GET home page. */
router.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Accept-Version","2");
  next();
});
router.get('/api/app/', function(req, res, next) {
  res.send(  {"content":[{"header":{"title":"Kule ting"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings"}},"designCue":"score_card_menu_item"},{"header":{"title":"Mine meritter"},"links":{"self":{"verb":"GET","href":"\/api\/buildingAlarms"}},"designCue":"alarms_by_building","cardinality":52},{"header":{"title":"Steder i verden jeg har vært"},"links":{"self":{"verb":"GET","href":"\/api\/map"}},"designCue":"map"},{"header":{"title":"Oversikt over folk jeg har slått"},"links":{"self":{"verb":"GET","href":"\/api\/dashboard"}},"designCue":"dashboard"}],"header":{"title":"Energinet"},"links":{"self":{"verb":"GET","href":"\/api\/app"}},"designCue":"menu"});
});
router.get('/api/myBuildings', function(req, res, next) {
  res.send( {"content":[{"header":{"title":"Folk som får bank"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings\/7682building"}},"designCue":"building"},{"header":{"title":"Billigste øllen i byen"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings\/7683building"}},"designCue":"building"},{"header":{"title":"Lokale dopselgere"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings\/7684building"}},"designCue":"building"},{"header":{"title":"Brennbare kirker"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings\/7685building"}},"designCue":"building"},{"header":{"title":"Billige bordeller"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings\/7686building"}},"designCue":"building"},{"header":{"title":"Julenissens hovedkvarter"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings\/7687building"}},"designCue":"building"},{"header":{"title":"Nattåpne kebabsjapper"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings\/7688building"}},"designCue":"building"}],"header":{"title":"Score Cards"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings"},"parent":{"verb":"GET","href":"\/api\/app"}}});
});
router.get('/api/myBuildings/:data', function(req, res, next) {
 var newStuff = new ContentElement( 
    {title : "Hax!"}, 
    [ 
      {designCue : "building", header : { title : "Spennende" }, links : { self : { href : "/api/test" }}} 
    ], 
    {self : { href : "/api/test"}} 
  );
  res.send(newStuff);
});
router.get('/api/buildingAlarms', function(req, res, next) {
  res.send(  {"content":[{"header":{"title":"Mine KM"},"links":{"self":{"verb":"GET","href":"\/api\/buildingAlarms\/7682"}},"cardinality":"10","pendings":"1"},{"header":{"title":"Mine NM"},"links":{"self":{"verb":"GET","href":"\/api\/buildingAlarms\/7683"}},"cardinality":"8","pendings":"2"},{"header":{"title":"Grand Prix turneringer"},"links":{"self":{"verb":"GET","href":"\/api\/buildingAlarms\/7684"}},"cardinality":"122","pendings":"43"},{"header":{"title":"Mine OL"},"links":{"self":{"verb":"GET","href":"\/api\/buildingAlarms\/7685"}},"cardinality":"3","pendings":"0"},{"header":{"title":"Mine VM"},"links":{"self":{"verb":"GET","href":"\/api\/buildingAlarms\/7686"}},"cardinality":"7","pendings":"1"},{"header":{"title":"Mine tabber"},"links":{"self":{"verb":"GET","href":"\/api\/buildingAlarms\/7688"}},"cardinality":"0","pendings":"0"}],"header":{"title":"Alarmer per bygg"},"links":{"self":{"verb":"GET","href":"\/api\/buildingAlarms"},"parent":{"verb":"GET","href":"\/api\/app"}}});
});
router.get('/api/dashboard', function(req, res, next) {
  res.send(  {"content":[{"header":{"title":"Sorry","subtitle":"Du har ikke konfigurert noen Walls enda.","description":"For \u00e5 legge til Walls m\u00e5 du logge inn i Energinet og opprette dem"},"designCue":"notice"}],"header":{"title":"The Wall"},"links":{"self":{"verb":"GET","href":"\/api\/dashboard"},"parent":{"verb":"GET","href":"\/api\/app"}},"designCue":"dashboard"});
});
router.get('/api/map', function(req, res, next) {
  res.send(  {"content":[{"header":{"title":"Mine bygg"},"links":{"self":{"verb":"GET","href":"\/api\/myBuildings"}},"designCue":"score_card_menu_item"},{"header":{"title":"Alarmer"},"links":{"self":{"verb":"GET","href":"\/api\/buildingAlarms"}},"designCue":"alarms_by_building","cardinality":52},{"header":{"title":"Kart"},"links":{"self":{"verb":"GET","href":"\/api\/map"}},"designCue":"map"},{"header":{"title":"The Wall"},"links":{"self":{"verb":"GET","href":"\/api\/dashboard"}},"designCue":"dashboard"}],"header":{"title":"Energinet"},"links":{"self":{"verb":"GET","href":"\/api\/app"}},"designCue":"menu"});
});
router.get('/api/test', function(req, res, next) {
  var test = {hack : "HAXXXXX!"};
 res.send(test);
});
module.exports = router;
