# www.csspacecoast.org

## Instructions for working on the website

1. Install Zola: https://www.getzola.org/documentation/getting-started/installation/
1. Clone this repo and `cd` into it.
1. Run `zola serve` and open http://localhost:1111/ in your browser.
1. Make changes to files. When you save, Zola will automatically rebuild the
   site and reload the open page in your browser (if possible).
    1. If your changes cause a build error, you might need to cancel `zola
       serve` (type Ctrl+C) and run `zola build` instead. This will reveal a
       more detailed error message. Once you resolve it, you can run `zola
       serve` again.

## How to deploy changes

Anything pushed to the `master` branch will automatically be deployed.  The
process is powered by the GitHub workflow defined at
[.github/workflows/publish.yaml](https://github.com/csspacecoast/www/blob/master/.github/workflows/publish.yaml).
Deployment usually takes 1–2 minutes.
