# www.csspacecoast.org

## Working on the website

1. Install Zola: https://www.getzola.org/documentation/getting-started/installation/
2. Clone this repo and `cd` into it.
3. Run `zola serve` and open http://localhost:1111/ in your browser.
4. Make changes to files. When you save, Zola will automatically rebuild the
   site and reload the open page in your browser (if possible).
    1. If your changes cause a build error, you might need to cancel `zola
       serve` (type Ctrl+C) and run `zola build` instead. This will reveal a
       more detailed error message. Once you resolve it, you can run `zola
       serve` again.

## Deploying changes

The website is served by GitHub pages, which is configured to serve the contents of
the `public/` directory of the `main` branch.

1. Run `zola build`, which will build the site into the `public` directory.
2. Run `git add public` and make sure to include these changes in your commit.
3. Push to the `main` branch on GitHub.

Deployment usually takes less than 1 minute after pushing.

