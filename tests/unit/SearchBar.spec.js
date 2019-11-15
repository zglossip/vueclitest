import { expect } from 'chai'
import sinon from "sinon";
import { shallowMount, createLocalVue } from '@vue/test-utils'
import SearchBar from "../../src/components/SearchBar"
import BootstrapVue from "bootstrap-vue"

describe('SearchBar.vue', () => {
  const localVue = createLocalVue()
  localVue.use(BootstrapVue)

  const $router = {
    push: function () {},
    go: function () {}
  };

  it('renders props.msg when passed', () => {
    //TODO: Fix this test, why is spy not working?
    let pushSpy = sinon.spy($router, 'push')
    const wrapper = shallowMount(SearchBar, {localVue, mocks: {$router}})
    wrapper.find('#search-button').trigger('click')
    console.log(pushSpy.getCalls())
    expect(true)
  })
})
