# 06 --- Sell BRLN Flow

## Frontend

-   Input BRLN amount
-   Validate:
    -   0

    -   \<= brlnBalance

Call:

POST /brln/sell

## BFF

-   Validate authentication
-   Validate BRLN balance
-   Transfer to settlement account
-   Credit FIAT
-   Return updated balances
