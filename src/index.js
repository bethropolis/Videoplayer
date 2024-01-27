const cheerio = require('cheerio');

class hello {
  /**
   * Retrieves an array of elements that match a given CSS selector in the provided HTML.
   *
   * @param {string} html - The HTML content to search within.
   * @param {string} selector - The CSS selector to match against.
   * @return {Promise<Array<object>>} An array of elements that match the provided CSS selector.
   */
  async querySelectorAll(html, selector) {
    const $ = cheerio.load(html);
    let elements = $(selector).toArray();

    console.log(
      elements.map((element) => {
        return {
          element: $(element),
          content: $(element).html(),
        };
      })
    );

    return elements.map((element) => {
      return {
        element: $(element),
        content: $(element).html(),
      };
    });
  }

  /**
   * Retrieves the value of the specified attribute from an HTML element
   * matching the given selector.
   *
   * @param {string} html - The HTML content to search in.
   * @param {string} selector - The CSS selector used to identify the element.
   * @param {string} attribute - The name of the attribute to retrieve.
   * @return {Promise<string>} The value of the specified attribute, or undefined if
   *                  the attribute does not exist.
   */
  async getAttributeText(html, selector, attribute) {
    const $ = cheerio.load(html);
    const element = $(selector);
    return element.attr(attribute) || '';
  }

  /**
   * Queries for an element in the provided HTML using the given selector.
   *
   * @param {string} html - The HTML content to search within.
   * @param {string} selector - The CSS selector to use for querying the element.
   * @return {Promise<Object>} - The element matching the provided selector.
   */
  async querySelector(html, selector) {
    const $ = cheerio.load(html);
    const element = $(selector);

    return {
      element: element,
      content: element.html(),
      async getAttributeText(selector = '') {
        console.log('getAttributeText', selector);
      },
    };
  }
}
