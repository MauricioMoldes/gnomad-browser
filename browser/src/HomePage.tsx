import queryString from 'query-string'
import React from 'react'
import styled from 'styled-components'

import { ExternalLink, List, ListItem } from '@gnomad/ui'

import DocumentTitle from './DocumentTitle'
import InfoPage from './InfoPage'
import Link from './Link'
import Searchbox from './Searchbox'
import GnomadLogo from './GnomadLogo'

const HomePage = styled(InfoPage)`
  max-width: 740px;
  margin-top: 90px;
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 1em;
`

const Heading = styled.h1`
  padding-top: 0;
  padding-bottom: 0;
  font-size: 1.2em;
  font-weight: normal;
  letter-spacing: 2px;
  text-align: center;
`

export default () => (
  <HomePage>
    <DocumentTitle />
    <HeadingContainer>
      <GnomadLogo width="60%" />
      <Heading> Dengen Genome Aggregation Database, powered by <a href="https://gnomad.broadinstitute.org/" target="_blank">gnomAD</a>  </Heading>
    </HeadingContainer>

    <Searchbox width="100%" />

    <div
      style={{
        height: '1em',
        borderBottom: '1px solid #666',
        margin: '1em 0 2em',
        textAlign: 'center',
      }}
    >
      <span
        style={{
          position: 'relative',
          top: '0.5em',
          padding: '0 0.5em',
          background: '#fafafa',
        }}
      >
        Or
      </span>
    </div>
   
    <h2 style={{ fontSize: '1em' }}>Examples</h2>
    {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
    <List>
      {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <ListItem>
        Gene:{' '}
        <Link preserveSelectedDataset={false} to="/gene/ENSG00000169174">
          PCSK9
        </Link>
      </ListItem>
      {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <ListItem>
        Transcript:{' '}
        <Link preserveSelectedDataset={false} to="/transcript/ENST00000302118">
          ENST00000302118
        </Link>
      </ListItem>
      {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <ListItem>
        Variant:{' '}
        <Link
          preserveSelectedDataset={false}
          to={{
            pathname: '/variant/1-55051215-G-GA',
            search: queryString.stringify({ dataset: 'gnomad_r4' }),
          }}
        >
          1-55051215-G-GA
        </Link>
      </ListItem>
      {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <ListItem>
        Structural variant region:{' '}
        <Link
          preserveSelectedDataset={false}
          to={{
            pathname: '/region/19-11078371-11144910',
            search: queryString.stringify({ dataset: 'gnomad_sv_r4' }),
          }}
        >
          19-11078371-11144910
        </Link>
      </ListItem>
      {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <ListItem>
        Copy number variant region:{' '}
        <Link
          preserveSelectedDataset={false}
          to={{
            pathname: '/region/1-55039447-55064852',
            search: queryString.stringify({ dataset: 'gnomad_cnv_r4' }),
          }}
        >
          1-55039447-55064852
        </Link>
      </ListItem>
      {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <ListItem>
        Mitochondrial variant:{' '}
        <Link
          preserveSelectedDataset={false}
          to={{
            pathname: '/variant/M-8602-T-C',
            search: queryString.stringify({ dataset: 'gnomad_r4' }),
          }}
        >
          M-8602-T-C
        </Link>
      </ListItem>
      {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <ListItem>
        <Link
          preserveSelectedDataset={false}
          to={{
            pathname: '/short-tandem-repeats',
            search: queryString.stringify({ dataset: 'gnomad_r4' }),
          }}
        >
          Short tandem repeat{' '}
        </Link>
        locus:{' '}
        <Link
          preserveSelectedDataset={false}
          to={{
            pathname: 'short-tandem-repeat/ATXN1',
            search: queryString.stringify({ dataset: 'gnomad_r4' }),
          }}
        >
          ATXN1
        </Link>
      </ListItem>
      {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <ListItem>
        Regional missense constraint (gnomAD v2, GRCh37):{' '}
        <Link
          preserveSelectedDataset={false}
          to={{
            pathname: '/gene/ENSG00000183454',
            search: queryString.stringify({
              dataset: 'gnomad_r2_1',
              variant: ['1-55505647-G-T', '1-55523855-G-A'],
            }),
          }}
        >
          GRIN2A
        </Link>
      </ListItem>
      {/* @ts-expect-error TS(2746) FIXME: This JSX tag's 'children' prop expects a single ch... Remove this comment to see the full error message */}
      <ListItem>
        Variant co-occurrence (gnomAD v2, GRCh37):{' '}
        <Link
          preserveSelectedDataset={false}
          to={{
            pathname: '/variant-cooccurrence',
            search: queryString.stringify({
              dataset: 'gnomad_r2_1',
              variant: ['1-55505647-G-T', '1-55523855-G-A'],
            }),
          }}
        >
          1-55505647-G-T and 1-55523855-G-A
        </Link>
      </ListItem>
    </List>

   
    <h2>New to DenGen ?</h2>
    <p>
      Check out these resources to learn about DenGen
    </p>

    <List>
      {/* @ts-expect-error TS(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <ListItem>
        {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
        <ExternalLink href="http://10.62.55.108:3000">         
            DenGen Website    
        </ExternalLink>
        </ListItem>
      <ListItem>
        {/* @ts-expect-error TS(2769) FIXME: No overload matches this call. */}
        <ExternalLink href="http://10.62.55.108:3000/publications">         
            DenGen Publications    
        </ExternalLink>
      </ListItem>
      {/* @ts-expect-error TS(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <ListItem>
        {/* @ts-expect-error TS(2786) FIXME: 'ExternalLink' cannot be used as a JSX component. */}
        <ExternalLink href="http://10.62.55.108:3000/about">
          About DenGen 
        </ExternalLink>
      </ListItem>
      {/* @ts-expect-error TS(2745) FIXME: This JSX tag's 'children' prop expects type 'never... Remove this comment to see the full error message */}
      <ListItem>
        {/* @ts-expect-error TS(2786) FIXME: 'ExternalLink' cannot be used as a JSX component. */}
        <ExternalLink href="http://10.62.55.108:3000/cohort-statistics">
         DenGen Cohort in numbers 
        </ExternalLink>
      </ListItem>
    </List>


    <h2>DenGen Browser is powered by gnomAD !</h2>
    <p>
    The DenGen Variant Browser leverages the existing infrastructure and search capabilities of the <a href="https://gnomad.broadinstitute.org/">gnomAD project</a>, providing a familiar and robust platform for exploring genetic variants. While the browser framework and core functionalities are based on gnomAD, the dataset has been entirely replaced with DenGen data, offering insights specific to the Danish population. We acknowledge the gnomAD team for their open-source contributions, which enable accessible and scalable genomic data exploration.
    </p>   

   
  </HomePage>
)
