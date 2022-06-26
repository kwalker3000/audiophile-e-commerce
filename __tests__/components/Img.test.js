import { render, screen, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'

import Image from 'next/image'
import mockImg from '../../public/assets/favicon-32x32.png'

import { Img } from '../../src/components/Img'

describe('Img', () => {
  afterEach(cleanup)

  it('renders an image for desktop device', async () => {
    render(<Img defaultImg={mockImg} descr="some alt text at 1154px" />)

    global.innerWidth = 1154
    global.dispatchEvent(new Event('resize'))

    let image = await screen.queryByAltText('some alt text at 1154px')

    expect(image).toBeInTheDocument()
  })

  it('renders an image for tablet device', async () => {
    render(<Img defaultImg={mockImg} descr="some alt text at 720px" />)

    global.innerWidth = 720
    global.dispatchEvent(new Event('resize'))

    let image = await screen.queryByAltText('some alt text at 720px')

    expect(image).toBeInTheDocument()
  })

  it('renders an image form mobile device', async () => {
    render(<Img defaultImg={mockImg} descr="some alt text at 375px" />)

    global.innerWidth = 375
    global.dispatchEvent(new Event('resize'))

    let image = await screen.queryByAltText('some alt text at 375px')

    expect(image).toBeInTheDocument()
  })
})

describe('image layout', () => {
  afterEach(cleanup)

  it('renders -fill- layout', () => {
    render(<Img defaultImg={mockImg} descr="some text" remote={true} />)

    let image = screen.getByAltText('some text')
    expect(image).toBeInTheDocument()
  })
})
