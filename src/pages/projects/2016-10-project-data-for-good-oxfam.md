---
title: "Data For Good x Oxfam"
date: "2016-10"
path: "/projects/data-for-good-oxfam"
parent: "projects"
excerpt: ""
# tags: ["2016"]
published: true
---

[Data For Good](http://www.dataforgood.fr/) is a French community of data scientist & developers that put their skills to the benefit of solving social problems. First as a [meetup](https://www.meetup.com/Data-for-Good-FR/), it is now a small acceleration program, matching & accompanying voluntaries with associations and NGOs twice a year.

I participated in the batch #2 (Autumn 2016) and chose to help [Oxfam](https://www.oxfam.org/) in analysing the role that tax havens play in the activities of the top 20 European Banks.

![data-for-good & oxfam logos](../../images/project-data-for-good-oxfam-logos-100.png)

Since 2013, all European banks are required to publish information on their activities (profits & turnover), staff, tax paid and subsidies received in each territory in which they are established - including tax havens. In March 2016, a first report published by Oxfam (you can find it [here](https://www.oxfam.org/en/pressroom/pressreleases/2016-03-16/new-report-reveals-prominent-role-tax-havens-banks)) examined the country-by-country reportings of the five largest French banks (BNP Paribas, BPCE, Société Générale, Crédit Agricole, and Crédit Mutuel).

The goal is to publish a similar report in March 2017, but this time going much further in the analysis: cleaner data, enrich & cross with open data, more countries, extract & investigate their subsidiaries. We will also build a small website to let people visualize, understand & filter the data.

## What we did

- extracted data from pdf tables with the open-source tool Tabula
- cleaned & processed data using Python & Pandas
- used Dataiku & PostgreSQL to centralize everything

## Go further

The final report can be viewed [here](https://www.oxfam.org/sites/www.oxfam.org/files/bp-opening-vaults-banks-tax-havens-270317-en_0.pdf).
