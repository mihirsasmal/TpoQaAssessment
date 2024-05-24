class jsonPlaceHolderApi {

    url= 'https://jsonplaceholder.typicode.com/posts';

    getAllPosts() {
        return cy.api({ url: this.url, method: 'GET'});
    }

    createNewPost(requestbody:object) {
        return cy.api({ url: this.url, method: 'POST', body:requestbody});
    }

    updatePost(postId:string, requestbody:object) {
        return cy.api({ url: `${this.url}/${postId}`, method: 'PUT', body:requestbody});
    }

    deletePost(postId:string){
        return cy.api({ url: `${this.url}/${postId}`, method: 'DELETE'});
    }
}

export default new jsonPlaceHolderApi();