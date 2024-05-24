import jsonPlaceHolderRoute from "../apiRoutes/jsonPlaceHolder.route";

describe('Assessment 2- API Automation Test -1', () => {
it('Get Test', () => {

    cy.api(jsonPlaceHolderRoute.getAllPosts())
      .then((response)=>{
        expect(response.status).to.equal(200);
        //expect(response.body.length).to.equal(100);
      })  
  });

  it('Post Test', () => {

    cy.api(jsonPlaceHolderRoute.createNewPost({
                userId:101,
                title:'POST Test user',
                body:'Test User'
        }))
       .then((response)=>{
        expect(response.status).to.equal(201);
        // expect(response.body.id).to.equal(101);
        // expect(response.body.userId).to.equal(101);
        // expect(response.body.title).to.equal('POST Test user');
        // expect(response.body.body).to.equal('Test User');
      })  
  });

  it('Put Test', () => {

    cy.api(jsonPlaceHolderRoute.updatePost(
         '1',{
                userId:102,
                title:'PUT Test user',
                body:'Test User Updated'
        }))
        .then((response)=>{
        expect(response.status).to.equal(200);
        // expect(response.body.id).to.equal(1);
        // expect(response.body.userId).to.equal(102);
        // expect(response.body.title).to.equal('PUT Test user');
        // expect(response.body.body).to.equal('Test User Updated');
      })  
  });

  it('Delete Test', () => {

    cy.api(jsonPlaceHolderRoute.deletePost('1'))
      .then((response)=>{
        expect(response.status).to.equal(200);
      })  
  });

});