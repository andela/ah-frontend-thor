import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import expect from 'expect'
import { GetAllArticlesAction } from '../../src/actions/articlesAction';

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)


describe('async get all articles', () => {
  afterEach( () => {
    fetchMock.restore()
  })

  it('gets all articles from the api', () => {
    fetchMock.getOnce("https://ah-backend-thor.herokuapp.com/api/articles/", {
      body:{articles:['i write code', 'how to be wirkd class'] },
      headers:{'content-type':'application/json'}
    })
  const expectedAction = [{
    type:"GET_ALL_ARTICLES",
    payload:{articles:['i write code', 'how to be wirkd class'] }
  }]
  const store = mockStore({articles:[ ]})
  return store.dispatch(GetAllArticlesAction).then(
    ()=> {
      expect(store.getActions()).toEqual(expectedAction);
    })
})

})
