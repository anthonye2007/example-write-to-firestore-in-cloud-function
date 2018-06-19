describe('Firestore', () => {
   let myFunctions;

   test('expect to finish', async (done) => {
      myFunctions = require('../index');
      const req = {};
      const res = {
        send: () => {
            done();
        }
      };
      myFunctions.store(req, res);
   });
});
