import api from "../../apiRoutes/genericApi.route";
import apiEndpointData from "../../fixtures/apiEndpoints.json";

apiEndpointData.forEach((endPoint) => {
  describe(`Assessment 2- API Automation Test -2 with multiple endpoints- From Url-${endPoint.name}`, () => {

    it("Get Test ", () => {
      api.get(endPoint.url).its("status").should("equal", 200);
    });

    it("Post Test", () => {
      api.post(endPoint.postUrl, endPoint.postBody)
         .its("status")
         .should("equal", 201);
    });

    it("Put Test", () => {
      api.put(endPoint.putUrl, endPoint.putBody)
         .its("status")
         .should("equal", 200);
    });

    it("Delete Test", () => {
      api.get(endPoint.deleteUrl).its("status").should("equal", 200);
    });
  });
});
