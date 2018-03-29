# Avant Coding Challenge
run `npm test` to run mocha tests

## Given a credit card that functions as follows:
* Each card has an APR and Credit Limit.
* Interest is calculated daily at the close of each day, but not applied.
* Interest is applied to the balance at the close of each 30-day period (opening day excluded).
  e.g., asking for the balance on days 28 and 29 will give the same results, but asking for balance on day 30 will give the balance + all interest accrued.

## The software should be able to:
* Create an account (e.g. opening a new credit card)
* Keep track of charges (e.g. card swipes)
* Keep track of payments
* Provide the outstanding balance for any given day (such as "10 days after account opening")
