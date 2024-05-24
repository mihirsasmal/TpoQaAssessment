class apiRoute {

    get(url:string) {
        return cy.api({ url: url, method: 'GET'});
    }

    post(url:string, requestbody:object) {
        return cy.api({ url: url, method: 'POST', body:requestbody});
    }

    put(url:string, requestbody:object) {
        return cy.api({ url: url, method: 'PUT', body:requestbody});
    }

    delete(url:string){
        return cy.api({ url: url, method: 'DELETE'});
    }
}

export default new apiRoute();