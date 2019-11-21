import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../../components/seo'
import Layout from '../../components/layout'

import stylePost from '../../styles/post.module.css'

const randomGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
const getRandomQuote = quotesArray => {
  const randomPosition = randomGenerator(0, quotesArray.length - 1)
  return quotesArray[randomPosition].node
}

// export default ({ data }) => {
export default class QuotePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomQuote: getRandomQuote(props.data.allGoodreadsQuotesExport20190817Csv.edges),
    }
  }

  changeQuote() {
    this.setState((prevState, props) => ({
      randomQuote: getRandomQuote(props.data.allGoodreadsQuotesExport20190817Csv.edges),
    }))
  }
  
  render() {
    return (
      <>
        <SEO />
        <Layout>
          <h1>A Random Quote</h1>

          <br />

          <p>
            <i><span dangerouslySetInnerHTML={{ __html: this.state.randomQuote.Quote }} /></i>
          </p>
          <p>
            <span>― <b>{this.state.randomQuote.Author}</b></span>
            <span hidden={!this.state.randomQuote.Book}> ({this.state.randomQuote.Book})</span>
            {/* <span> / <a href={`https://www.goodreads.com/quotes/${randomQuote.Goodreads_Quote_Id}`} target="_blank" rel="noopener noreferrer">Goodreads</a></span> */}
          </p>

          <br />
          <hr />

          <p>
            The quote is taken from my Goodreads account's saved quotes.
            <br />Refresh the page or click this <button type="button" onClick={() => this.changeQuote()}>button</button> to get a new one!
          </p>

          <br />
          <a href="/sandbox" className={stylePost.readMore}>← Back to sandbox</a>
        </Layout>
      </>
    )
  }
}

export const query = graphql`
  {
    allGoodreadsQuotesExport20190817Csv {
      edges {
        node {
          Goodreads_Quote_Id
          Author
          Book
          Quote
        }
      }
    }
  }
`