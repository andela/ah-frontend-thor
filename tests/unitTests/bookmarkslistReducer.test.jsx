import listReducer from "../../src/reducers/bookmarksReducer";

describe("bookmarks reducer", () => {
  it("should return initial state", () => {
    expect(listReducer(undefined, {})).toEqual({ list: [] });
  });

  it("receive all bookmarks", () => {
    expect(
      listReducer([], {
        type: "BOOKMARKS_LIST",
        payload: [
          { title: "now", description: "yet" },
          { title: "now2", description: "yet2" }
        ]
      })
    ).toEqual({
      list: [
        { title: "now", description: "yet" },
        { title: "now2", description: "yet2" }
      ]
    });
  });
});
