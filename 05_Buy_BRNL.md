# 05 --- Buy BRLN Flow

## Frontend

-   Input BRL amount
-   Validate:
    -   0

    -   \<= fiatBalance

Call:

POST /brln/buy

## BFF

-   Validate authentication
-   Validate balance
-   Debit FIAT
-   Trigger mint/transfer
-   Return updated balances
