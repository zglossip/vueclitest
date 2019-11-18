import { assert } from 'chai'
import sinon from "sinon";
import { mount, createLocalVue } from '@vue/test-utils'
import SearchBar from "../../src/components/SearchBar"
import BootstrapVue from "bootstrap-vue"

describe('SearchBar.vue', () => {
  const localVue = createLocalVue()
  localVue.use(BootstrapVue)

  const mocks = {
    $router: {
      push: function () {},
      go: function () {}
    }
  }

  it('Reroutes page on click', () => {
    const pushSpy = sinon.spy(mocks.$router, 'push')
    const wrapper = mount(SearchBar, {localVue, mocks})
    wrapper.find('#search-button').trigger('click')
    assert(pushSpy.calledWithExactly(`/searchResults/artist?query=`))
  })
})
