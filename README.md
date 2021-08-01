# Stock Checker

This is a simple code to check some stores from Brazil.
We currently support these stores:

- Amazon.com.br
- Kabum.com.br
- Pichau.com.br
- terabyteshop.com.br

## How's it done?

By combinating `node-cron` and `puppeteer`, it is possible to spawn a headless browser to check the product page on the store. Using DOM methods, we check if a UI component is present or using any other relative techniques.

_P.s:_ The entire code is simple javascript, combined with a fancy organization :P

## Motivations

I created this bot to check the Nvidia RTX 3080 GPU availability in Brazil just after it's announcement. My point was to buy as soon as possible but I couldnt waste time refreshing page by page, therefore this bot was born. I just needed to keep an terminal tab opened.
