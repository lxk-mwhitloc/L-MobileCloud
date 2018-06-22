'use strict';

module.exports = function(app) {

 app.get('/', function(req, res) {
   res.render('pages/sign_in');
 });

 app.get('/jobs', function(req, res) {
   res.render('pages/jobs');
 });

 app.get('/shortcuts', function(req, res) {
   res.render('pages/shortcuts');
 });

 app.get('/devices', function(req, res) {
   res.render('pages/devices');
 });

 app.get('/print', function(req, res) {
   res.render('pages/print');
 });

 app.get('/settings', function(req, res) {
   res.render('pages/settings');
 });

};
