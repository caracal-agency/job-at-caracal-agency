# Working at Caracal Studio

(current edition: Summer 2022)

## Technical stack

This repository should be used for job interviews at Caracal Studio and consists on the following technical stack:

-   Next.js as the React framework – [docs](https://nextjs.org/docs/getting-started)
-   Chakra UI as the CSS framework – [docs](https://chakra-ui.com/)
-   Framer Motion as the motion framework – [docs](https://framer.com/motion)
-   Supabase as the database – [docs](https://supabase.com/docs)

## Brief

Given this boilerplate repository and Figma files received on the day of the test, the candidate is expected to implement the UI as faithfully as possible and in a timely possible manner, considering the UX functionalities underlined in this README.

## Features expected

-   The app should force authentication before accessing any of the pages.
-   For this test, the same page should allow to create a new account.
-   The dashboard should display all entries by default and allow filtering through an optional toolbar, toggled by a button
-   Through the dashboard, bulk deletion should be possible after confirming a dialog alert.
-   By clicking an entry, we can review & update its information.
-   We can add new entries manually

## Noteworthy details

-   Don’t forget input validation where it’s necessary; you might also want to check the columns settings in Supabase to decide accordingly.
-   A headless `<DatePicker />` component is available in the `_comps` folder with its logic already prepared. It’s up to you to stylize it.
-   The column `flight_cost` should only receive a number; format it through `currency.js`
-   Possible choices for the column `status` are:
    -   Initialized
    -   Created
    -   Verified
    -   Completed
    -   Declined
-   Possible choices for the column `special_type` are:
    -   stdn (standard)
    -   acc (accessibility)
-   Possible choices for the column `ticket_type` are:
    -   FIX
    -   FLEX
