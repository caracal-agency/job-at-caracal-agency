# Working at Caracal Studio

(current edition: Summer 2022)

## Technical stack

This repository should be used for job interviews at Caracal Studio and consists on the following technical stack:

-   Next.js as the React framework – [docs](https://nextjs.org/docs/getting-started)
-   Chakra UI as the CSS framework – [docs](https://chakra-ui.com/)
-   Supabase as the database – [docs](https://supabase.com/docs)
-   Framer Motion as the motion framework – [docs](https://framer.com/motion)

## Brief

Given this boilerplate repository and the Figma file received on the day of the test, the candidate is expected to implement the UI as faithfully as possible and in a timely possible manner, considering the UX functionalities underlined in this README.

## Features expected

-   The dashboard should display entries without filters by default and allow filtering through an optional toolbar which can be toggled by a button – don’t forget the pagination!
-   Through the dashboard, bulk deletion should be possible after confirming a [dialog alert](https://chakra-ui.com/docs/components/alert-dialog/usage).
-   We can add new entries manually (`src/pages/new.js`).
-   By clicking an entry, we can review & update its information (`src/pages/[id].js`).
-   Optional: we can log in/create an account using Supabase’s Javascript API (`src/pages/login.js`).

## Noteworthy details

-   Don’t forget input validation where it can be useful, you can refer to the screenshots at the end of the README to learn more about the current columns.
-   A headless `<DatePicker />` component is available in the `_comps` folder with its logic already prepared, it’s up to you to stylize it.
-   The column `flight_cost` should only receive a number.
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

## Tables structure

### `registrations`:

![image](https://user-images.githubusercontent.com/7307687/181276112-69d488ab-bd80-4a3a-a613-1cea01ef3bc9.png)

### `countries`:

![image](https://user-images.githubusercontent.com/7307687/181276578-50c119ed-1fc4-420c-9f37-39e25d5b6787.png)
