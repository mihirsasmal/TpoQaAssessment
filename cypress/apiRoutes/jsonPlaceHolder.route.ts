class jsOnPlaceHolderApi {

    url= 'https://jsonplaceholder.typicode.com/posts';

    getAllPosts() {
        return { url: this.url, method: 'GET'}
    }

    createNewPost(requestbody:object) {
        return { url: this.url, method: 'POST', body:requestbody}
    }

    updatePost(postId:string, requestbody:object) {
        return { url: `${this.url}/${postId}`, method: 'PUT', body:requestbody}
    }

    deletePost(postId:string){
        return { url: `${this.url}/${postId}`, method: 'DELETE'}
    }
}

export default new jsOnPlaceHolderApi();