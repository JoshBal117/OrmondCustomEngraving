# Ormond Custom Engraving

The original React project, updated for a quote-first business website with the owner's green branding (#6abb03).

## Run the local preview

Open this folder in VS Code, then run this in its PowerShell terminal:

```powershell
npm.cmd start
```

Open the local address printed in the terminal (normally http://localhost:3000). Keep that terminal running while reviewing the site. Stop it with Ctrl+C.

On this computer, npm.cmd works; the npm.ps1 command resolves to a missing npm CLI. There is no need to reinstall dependencies to run this preview.

```powershell
npm.cmd run build
npm.cmd test -- --watchAll=false --runInBand
```

The existing Create React App structure and package lock are preserved. Migration to newer tooling can be a separate change after the preview is reviewed.

## Business details and branding

- Edit contact information in src/data/business.js.
- Confirmed email: spacedad63@icloud.com.
- Confirmed phone: 386-405-3424.
- The public/index.html noscript fallback also contains the contact information.
- Branding tokens are in src/index.css.
- Home layout is in src/Pages/Home.jsx and src/Pages/CSS/Home.css.
- Main navigation becomes a disclosure menu on smaller screens.
- Market copy says Daytona Beach farmers market. No booth number, address, hours, or schedule has been assumed.

## Quote workflow in this preview

Customers can call directly or fill out the quote form. Preparing a request produces a mailto link, and the customer must review and send it in their email app. A copyable request is available if no email app opens.

The site does not send email itself, save submissions, upload artwork, take payment, or create customer accounts. Customers can attach artwork in their email app. Login and cart URLs lead to the quote page.

## Content to confirm before public launch

- Confirm the exact business name, available services, and final wording with the owner.
- Review all product photographs and permission to use them. The existing wood-detail image is labeled as inspiration; it is not presented as the owner's completed work.
- Supply original finished-work photos and higher-resolution catalog images. Many current product pictures are small supplier images.
- Confirm product availability and pricing. The quote-first preview does not publish the old unverified prices.
- Product 68 has an acrylic award title paired with a maple name plate picture. The original record is retained but hidden until that pairing is corrected.
- Confirm farmers market name, dates, booth location, pickup/shipping, and turnaround expectations.
- Choose a domain, hosting, and a permanent business email when ready.
- Add automatic quote delivery and saved submissions, with server-side validation and spam protection.
- Test on actual phones and desktop browsers, including keyboard use, zoom, email-app handling, and image loading.
- For a future host using clean browser routes, configure direct-route fallback to index.html. The GitHub Pages preview uses hash routes instead. Verify metadata, privacy information, and all contact paths before a full launch.

## GitHub Pages preview

Repository: https://github.com/JoshBal117/OrmondCustomEngraving

Preview address after a successful deployment: https://joshbal117.github.io/OrmondCustomEngraving/

In the repository's Settings → Pages, select **GitHub Actions** as the publishing source. The workflow in `.github/workflows/pages.yml` installs the locked dependencies, runs the tests, builds the site, and publishes it whenever `master` is updated. It can also be started from the repository's Actions tab.

Run the same production build locally with `npm.cmd run build:pages`. It places assets under `/OrmondCustomEngraving` and uses hash routes such as `/#/contact` so shared links and refreshes work on static hosting. The normal `npm.cmd start` preview keeps its existing clean routes.

GitHub Pages publishes a static preview. The quote form still opens the customer's email app; it does not automatically send or store requests.

## Verification

The automated tests cover homepage navigation, menu interactions, product-to-quote selection, unavailable routes, confirmed contact details, quote validation, and email encoding. Browser and real-device visual review is a separate launch check.
