import jsonPlaceHolderRoute from "../../apiRoutes/jsonPlaceHolder.route";

describe('Assessment 2- API Automation Test -1', () => {
  
it('Get Test', () => {

    jsonPlaceHolderRoute.getAllPosts()
      .then((response)=>{
        expect(response.status).to.equal(200);
        expect((response.body as any).length).to.equal(100);       
      })  
  });

  it('Post Test', () => {

    jsonPlaceHolderRoute.createNewPost({
                userId:101,
                title:'POST Test user',
                body:'Test User'
        })
       .then((response)=>{
        const responseBody = (response.body as any);
        expect(response.status).to.equal(201);
        expect(responseBody.id).to.equal(101);
        expect(responseBody.userId).to.equal(101);
        expect(responseBody.title).to.equal('POST Test user');
        expect(responseBody.body).to.equal('Test User');
      })  
  });

  it('Put Test', () => {

    jsonPlaceHolderRoute.updatePost(
         '1',{
                userId:102,
                title:'PUT Test user',
                body:'Test User Updated'
        })
        .then((response)=>{
        const responseBody = (response.body as any);
        expect(response.status).to.equal(200);
        expect(responseBody.id).to.equal(1);
        expect(responseBody.userId).to.equal(102);
        expect(responseBody.title).to.equal('PUT Test user');
        expect(responseBody.body).to.equal('Test User Updated');
      })  
  });

  it('Delete Test', () => {

    jsonPlaceHolderRoute.deletePost('1')
      .then((response)=>{
        expect(response.status).to.equal(200);
      })  
  });

});