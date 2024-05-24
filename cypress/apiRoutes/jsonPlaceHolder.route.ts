import apiRoute from "./genericApi.route";

class jsonPlaceHolderApi {

    url= 'https://jsonplaceholder.typicode.com/posts';

    getAllPosts() {
        return apiRoute.get(this.url);
    }

    createNewPost(requestbody:object) {
        return apiRoute.post(this.url,requestbody);
    }

    updatePost(postId:string, requestbody:object) {
        return apiRoute.put(`${this.url}/${postId}`, requestbody);
    }

    deletePost(postId:string){
        return apiRoute.delete(`${this.url}/${postId}`);
    }
}

export default new jsonPlaceHolderApi();