//Abdulellah Hakim
//D12122837
//Enterprise Application Development
//Lab3-4 Submission date: Sunday:26/2/17
//demonstration date: Monday 27/02/17
//Task 3-5.
//to start the app type npm start.
const Judge = require('../tables').judges;
const CourtRoom = require('../tables').courtrooms;
const Participant = require('../tables').participants;
const Case = require('../tables').cases;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: '1-List all  \n 2-Add a new user \n 3-Display information \n 4- Delete a entry',
  }));
//curl -X GET http://127.0.0.1:3000/api/judges
  app.get('/api/judges', Judge.list);
//curl -X POST --data "name=Abdulellah&room=123&ext=string" http://localhost:3000/api/judges
  app.post('/api/judges', Judge.create);
//curl http://127.0.0.1:3000/api/judges/1
  app.get('/api/judges/:id', Judge.retrieve);
//curl -X PUT http://127.0.0.1:3000/api/judges/1 --data "name=Abdul" 
  app.put('/api/judges/:id', Judge.update);
//curl -X DELETE http://127.0.0.1:3000/api/judges/4 
  app.delete('/api/judges/:id', Judge.destroy);


//curl http://127.0.0.1:3000/api/courtrooms/
  app.get('/api/courtrooms', CourtRoom.list);
//curl -X POST --data "number=145" http://localhost:3000/api/courtrooms
  app.post('/api/courtrooms', CourtRoom.create);
//curl -X GET http://localhost:3000/api/courtrooms/11
  app.get('/api/courtrooms/:id', CourtRoom.retrieve);
//curl -X PUT --data "number=155" http://localhost:3000/api/courtrooms
  app.put('/api/courtrooms/:id', CourtRoom.update);
//curl -X DELETE --data "number=145" http://localhost:3000/api/courtrooms/5
  app.delete('/api/courtrooms/:id', CourtRoom.destroy);


//curl -X POST --data "name=Abdul&address=Parnell&type=claimant" http://localhost:3000/api/participants
//curl -X POST --data "name=Obama&address=Parnell&type=respondent" http://localhost:3000/api/participants
  app.post('/api/participants', Participant.create);
//curl -X GET http://127.0.0.1:3000/api/participants
  app.get('/api/participants', Participant.list);
//curl -X GET http://127.0.0.1:3000/api/participants/1
  app.get('/api/participants/:id', Participant.retrieve);
//curl -X PUT --data "name=Abdulellah" http://localhost:3000/api/participants/1
  app.put('/api/participants/:id', Participant.update);
//curl -X DELETE http://localhost:3000/api/participants/1
  app.delete('/api/participants/:id', Participant.destroy);

//curl -X POST --data "judge_id=13&courtroom_id=1&claimant_id=1&respondent_id=2&start_date=10/07/2017&duration=5Days&result=true" http://localhost:3000/api/cases
  app.post('/api/cases', Case.create);
//curl -X GET http://127.0.0.1:3000/api/cases
  app.get('/api/cases', Case.list);
//curl -X GET http://127.0.0.1:3000/api/cases/3
  app.get('/api/cases/:id', Case.retrieve);
//curl -X PUT --data "duration=4Days" http://localhost:3000/api/cases/4
  app.put('/api/cases/:id', Case.update);
//curl -X DELETE http://localhost:3000/api/cases/1
  app.delete('/api/cases/:id', Case.destroy);
};