# Working at Caracal Studio

(current edition: Summer 2022)

## Technical stack

This repository should be used for job interviews at Caracal Studio and consists on the following technical stack:

-   Next.js as the React framework – [docs](https://nextjs.org/docs/getting-started)
-   Chakra UI as the CSS framework – [docs](https://chakra-ui.com/)
-   Framer Motion as the motion framework – [docs](https://framer.com/motion)
-   Supabase as the database – [docs](https://supabase.com/docs)

## Brief

Given this boilerplate repository and Figma files received on the day of the test, the candidate is expected to implement the UI as close as timely possible and with the UX functionalities underlined here below.

We strive for pixel perfect interfaces but it is up to the candidate to determine the amount of energy that can be invested in the details.

## Functionalities

-   `/src/pages/index.js` should not display any data coming from Supabase unless an authenticated session is initialized on the client’s side.
-   `/src/pages/login.js` should contain the login form.
-   `/src/pages/[id].js`
