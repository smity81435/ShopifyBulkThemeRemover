# THEMECLEANER

## Shopify Bulk Theme Remover

Utility for removing multiple themes from shopify quickly.

### Requirements

You will need npm packages these installed globally:

-   ts-node

### Preparation

-   You will also need to create a private app in your Shopify store by heading to Apps, then scrolling to the bottom and clicking "Manage Private Apps". From there you can create a new app, give it permissions for `READ & WRITE` in the `Themes` section of the `Admin API`.

-   Take the `API_KEY` and `API_SECRET_KEY` and place them in a `.env` file in the root of the project. Like so:

```
SHOP=yourshopname.myshopify.com
API_KEY=yourapikey
PASSWORD=yourapisecrettkey
```

    This process opens API access for this program to make changes on your store.

-   Next you will want to `cd` into this project and install the packages with `npm i`.

-   Make sure the theme ID's of the themes you want to delete are listed in the file `themelist.ts`. To find those id's follow this link: (ThemeKit Commands)[https://shopify.dev/themes/tools/theme-kit/command-reference#get] The list should be formatted as shown below: ``` sexport const list = [1231231231, 12312312312, 123123123123 ]

```
    Where the array members are the individual theme id's.

-   You're ready to go. I recommend double checking that list because this process is NOT REVERSIBLE!!! By using this tool you agree that I am not responsible for you erasing your entire online store.

### Execution

-   To run the file use the command `npx ts-node index.ts`

-   Leave a star if you like it.
```
