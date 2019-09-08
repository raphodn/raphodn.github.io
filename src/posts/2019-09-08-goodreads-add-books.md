---
title: "Adding books programmatically to Goodreads"
date: "2019-09-08"
path: "/blog/goodreads-add-books"
excerpt: ""
tags: ["goodreads", "2019"]
published: true
---

[Goodreads](https://www.goodreads.com/) is a website that helps you track and share the books your read. It's a great platform, easily on my Top-10-websites list :sparkles:

Many of the books are - I believe - added automatically from Amazon (it was bought by Amazon in 2013), but users can also add missing books, as well as edit current ones. You need to be a regular user and request for a librarian status.

You guessed it, over the past few years I've started spending more and more time improving the data of the website. Goodreads tells me I've done 789 edits in the last 12 months! From including small authors who's book I've stumbled on, to adding the ebook version of a more important work, or just combining multiple editions of a same book. One goal of having cleaner data, on top of helping the community, is to improve my [Calibre](https://calibre-ebook.com/) ebook library and making it sync successfully with my Goodreads account.

Anyways, after having added dozens of book, I considered ways to automate this process. Most of the books I add are ebooks, that are found on [kobo.com](https://www.kobo.com/). Wouldn't it be great to automatically extract the book details from Kobo and add them to Goodreads? Let's find out.

## Goodreads API

Goodreads' API (docs [here](https://www.goodreads.com/api)) is great and very thorough, covering most of the possible interactions a user can have with the website... except creating a book :sweat_smile:

So we'll have to find another way to upload the book data.

## Scraping Kobo

Kobo doesn't have an API, so we'll be scraping the book's page to get the info we need.

For each string that we want to extract, we find the unique 'query selector' related to this element. In Firefox, right click on the element and select 'Inspect Element'. Then on the 'Inspector' tab, right click on the corresponding HTML line, and select 'Copy > CSS Selector'.

```css
// ex: 'isbn' field
.bookitem-secondary-metadata > ul:nth-child(2) > li:nth-child(4) > span:nth-child(1)
```

If you switch to the 'Console' tab, you can see now retrieve this field by running `document.querySelector('YOUR-CSS-SELECTOR').textContent`. Depending on the HTML element, we will use `textContent` or other (such as `src` for images) to retrieve the actual raw text.

Let's populate a JSON list that contains all the fields we are interested in, and their corresponding selector. We also add some additional info that will be useful later on.

```json
// ex: 'isbn' object
{
  "name": "isbn",
  "koboQuerySelector": ".bookitem-secondary-metadata > ul:nth-child(2) > li:nth-child(4) > span:nth-child(1)",
  "koboFieldSelector": "textContent",
  "goodreadsFormId": "",
  "defaultValue": ""
}
```

## Automatically filling a form

Now that we understand how to extract the fields from Kobo, back to Goodreads where we'll need to fill the ['Add a New Book' form](https://www.goodreads.com/book/new).

Similarly to above, we dive into the console to find the Goodreads form id of the corresponding field. Again, switching to the 'Console' tab, we can now fill the form by running `document.querySelector('YOUR-FORM-ID').value = YOUR-VALUE`. Let's add this id to our JSON.

```json
// ex: 'isbn' object
{
  "name": "isbn",
  "koboQuerySelector": ".bookitem-secondary-metadata > ul:nth-child(2) > li:nth-child(4) > span:nth-child(1)",
  "koboFieldSelector": "textContent",
  "goodreadsFormId": "book_isbn13",
  "defaultValue": ""
}
```

## Wrap up

We have our Kobo field selectors, and our Goodreads form ids. Now we need a script to piece everything together. We'll be running this script directly in the Goodreads console of the new book form page.

We're just missing one small thing: how to actually bring data from one website (Kobo) to another (Goodreads). To do this, we'll make an HTTP call to retrieve our book's Kobo HTML page, parse it, and extract the fields programmatically (instead of having the page opened in a new tab).

```js
// code to retrieve the Kobo book page
// if you have issues (possibly CORS), try prepending KOBO_BOOK_URL with 'https://cors-anywhere.herokuapp.com/'
const KOBO_BOOK_URL = 'https://www.kobo.com/us/en/ebook/utopia-for-realists-1';
fetch(KOBO_BOOK_URL)
  .then(response => response.text())
  .then(respHtml => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(respHtml, "text/html");
    console.log(doc.body.innerHTML);
    // extract fields & populate form
  });
```

Everything is set, you can now piece everything together and easily add missing Goodreads books with the help of Kobo.

## Final thoughts

This process does help gain some precious seconds, but as you can see it is still far from perfect. A nice API on both sides would have been much much nicer, and some fields don't seem to be retrieved from the `fetch()` query (ex: 'page count' field), probably due to how Kobo's website loads. Altogether an interesting (but slighlty disappointing) weekend project :)

I also check the form before submitting, so this is not a batch/dirty process. I take great care to have correct data in Goodreads, and also sometimes purchase books on Kobo (if they come without DRM :grin:).

Improvements needed for v2:
- retrieve the page count from Kobo
- build the upload image workflow
- have only an ISBN as input instead of the full Kobo URL
- manage multiple authors
- another source of data instead of Kobo?

## Links

- [Goodreads.com](https://www.goodreads.com/)
- [Kobo.com](https://www.kobo.com/)
- [my final script](https://github.com/raphodn/goodreads-anb/blob/master/kobo.com/kobo_scraping.js)