import React from 'react'
import Helmet from 'react-helmet'
import TOKENS from 'bpk-tokens/tokens/base.common'

import './colors-page.scss'
import BpkHeading from 'bpk-component-heading'
import BpkParagraph from 'bpk-component-paragraph'
import BpkContentContainer from 'bpk-component-content-container'

import ColorSwatch from './../../components/ColorSwatch'

const ColorsPage = () => (
  <section>
    <Helmet title='Colors' />
    <BpkContentContainer>
      <BpkHeading level='h1'>Colors</BpkHeading>
      <BpkParagraph>
        Our palette is bold, colorful and impactful. The naming system below will help you quickly identify the colors
        referenced in this guide and in our prepared palette files.
      </BpkParagraph>
      <BpkParagraph>
        The primary color for Skyscanner’s brand is Blue-500, a bold and vibrant blue. All other colors in the palette
        are considered secondary to this. The brand is also heavily white and should make strong use of negative space
        and breathing room.
      </BpkParagraph>
      <BpkHeading level='h2'>Primary</BpkHeading>
      <div className='bpkdocs-colors-page__swatch-container'>
        <ColorSwatch name='color-blue-500' color={TOKENS.colorBlue500} whiteColor />
        <ColorSwatch name='color-white' color={TOKENS.colorWhite} border />
      </div>
      <BpkHeading level='h2'>Secondary</BpkHeading>
      <div className='bpkdocs-colors-page__swatch-container'>
        <ColorSwatch name='color-green-500' color={TOKENS.colorGreen500} whiteColor />
        <ColorSwatch name='color-yellow-500' color={TOKENS.colorYellow500} />
        <ColorSwatch name='color-red-500' color={TOKENS.colorRed500} whiteColor />
      </div>
      <BpkHeading level='h2'>Grays</BpkHeading>
      <div className='bpkdocs-colors-page__swatch-container'>
        <ColorSwatch name='color-gray-50' color={TOKENS.colorGray50} />
        <ColorSwatch name='color-gray-100' color={TOKENS.colorGray100} />
        <ColorSwatch name='color-gray-300' color={TOKENS.colorGray300} whiteColor />
        <ColorSwatch name='color-gray-500' color={TOKENS.colorGray500} whiteColor />
        <ColorSwatch name='color-gray-700' color={TOKENS.colorGray700} whiteColor />
        <ColorSwatch name='color-gray-900' color={TOKENS.colorGray900} whiteColor />
      </div>
      <BpkHeading level='h2'>Tints &amp; shades</BpkHeading>
      <BpkParagraph>
        A range of tints and shades are available for use in the Skyscanner palette, based on five base hues. The tints
        and shades are based on an algorithmic value from 50-900 with 50 being the lightest and 900 being the darkest.
        The number of tints and shades has been restrained to provide better visual coherence to the overall brand.
      </BpkParagraph>
      <BpkParagraph><strong>Strictly for use on Primary Button gradient and active/hit states:</strong></BpkParagraph>
      <div className='bpkdocs-colors-page__swatch-container'>
        <ColorSwatch name='color-green-600' color={TOKENS.colorGreen600} whiteColor />
      </div>
      <BpkParagraph><strong>Strictly for use on Android title bar only:</strong></BpkParagraph>
      <div className='bpkdocs-colors-page__swatch-container'>
        <ColorSwatch name='color-blue-700' color={TOKENS.colorBlue700} whiteColor />
      </div>
      <BpkHeading level='h2'>Gradients</BpkHeading>
      <BpkParagraph>
        This is our primary gradient. This should be used sparingly as a device to break up large swathes of blue.
      </BpkParagraph>
      <div className='bpkdocs-colors-page__swatch-container'>
        <ColorSwatch name='primary-gradient' gradient={TOKENS.primaryGradient} whiteColor />
      </div>
    </BpkContentContainer>
  </section>
)

export default ColorsPage