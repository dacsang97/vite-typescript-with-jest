import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld.vue', () => {
  const msg = 'Hello World'
  it('renders correctly', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg,
      },
    })
    expect(wrapper.text()).toContain(msg)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('counter increment exactly', async () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg,
      },
    })
    expect(wrapper.find('button').text()).toContain('0')
    await wrapper.find('button').trigger('click')
    expect(wrapper.find('button').text()).toContain('1')
  })
})
