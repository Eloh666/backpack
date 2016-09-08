import React from 'react'
import keys from 'lodash/keys'
import Helmet from 'react-helmet'
import pickBy from 'lodash/pickBy'
import includes from 'lodash/includes'
import TOKENS from 'bpk-tokens/tokens/base.common'

import BpkHeading from 'bpk-component-heading'
import BpkParagraph from 'bpk-component-paragraph'
import BpkContentContainer from 'bpk-component-content-container'
import { BpkTable, BpkTableHead, BpkTableBody, BpkTableRow, BpkTableHeadCell, BpkTableCell } from 'bpk-component-table'

import { formatTokenName, formatTokenValue } from './../../helpers/tokens-helper'

const radii = pickBy(TOKENS, (value, key) => includes(key, 'borderRadius'))

const RadiiPage = () => (
  <BpkContentContainer>
    <Helmet title='Radii' />
    <BpkHeading level='h1'>Radii</BpkHeading>
    <BpkParagraph>Radii are used to soften the edges of shapes.</BpkParagraph>
    <BpkTable>
      <BpkTableHead>
        <BpkTableRow>
          <BpkTableHeadCell>Bond</BpkTableHeadCell>
          <BpkTableHeadCell>Value</BpkTableHeadCell>
        </BpkTableRow>
      </BpkTableHead>
      <BpkTableBody>
        {keys(radii).map((radius) => (
          <BpkTableRow key={formatTokenName(radius)}>
            <BpkTableCell>{formatTokenName(radius)}</BpkTableCell>
            <BpkTableCell>{formatTokenValue(radii[ radius ])}</BpkTableCell>
          </BpkTableRow>
        ))}
      </BpkTableBody>
    </BpkTable>
  </BpkContentContainer>
)

export default RadiiPage
