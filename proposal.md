# SafeWeb
#### SafeWeb is a chrome extension project that will help parents to monitor kids on the usage of internet and filter the informations

## Background and Overview
The informations kids browsing on internet might not always be appropriate. We tend to build a chrome extension to filter the inappropriate websites or results of searches by URLs, keywords, categories of websites, etc.

This problem decomposes into several areas of activity:
* Storing the setting of URLs or keywords given by users
* Access the contends on the webpages
* Request the categories of webpages of links
* Store the categories and links for future usage
* Automatically filter the adult contents

## Functionalities and MVP
- [ ] We will have a UI for users to customize what contents to filter
- [ ] We will be able to block restricted URLs
- [ ] We will be able to filter contents on a search result page
- [ ] We will save the result after fetching categories of a link/website for future usage

#### Bonus Features
- [ ] Let the user to set a time limit of kids using internet
- [ ] We will be able to disconnect internet access after reach time limit
- [ ] Let the user set a password to avoid kids making changes to the setting

## Technologies & Technical Challenges
###### Frontend:
* HTML5
* CSS3
* JavaScript

###### Date Storage:
* Chrome Storage

#### Storing user's preferences
* Get inputs from option page
  * Create form for user to fill in
  * Create actions to handle the inputs
* Store the preferences
  * SET Chrome API

#### Performing tasks according to user's preferences
* Retrieve the preferences
  * GET Chrome API
* Create actions
  * filter the contents of a page
  * redirect to 404 page if URL is restricted
* Sent actions to event page

## Project Flowchart
![flowchart](images/flowchart.png)
## Wireframe

Option page - The user can set a clock to limit the time on the web. when the time is over an alert will popup. The timer can be reset.
Input fields allow to user to add a specific URL to a list of blocked URL's and to add keywords to filter results from search engine.

![options page](images/safeWeb-options_v2.png)

Popup page allow the user easy access to the option page, add URL's to block, add keywords to filter and view of the timer.

![popup page](images/safeWeb-popup.png)

## Accomplished over the Weekend
* Study on how to build chrome extension
* Plan on what functionalities should be added on
* Make the png icon
* Draw wireframe
* Design flowchart
* Finish proposal

## Group Members & Work Breakdown
##### Roni Ramon and Chris Tsai

#### Day 1
* Create 404, option and pop-up pages HTML (Roni)
* Set up file tree (Chris)
* Complete manifest.json (TOGETHER)
* Complete tutorials on chromePageAction and chromeBrowserAction

#### Day 2
* Design chromeStorage for extension
* Build option.js (Roni)
  * add functions to option page inputs
  * SET, GET requests to chromeStorage
* Build popup.js (Chris)
  * add functions to pop-up page inputs
  * set link to option page
  * SET, GET requests to chromeStorage

#### Day 3
* Build content.js (TBD)
  * create function to get content
  * create logic to select unwanted contents
  * create function using DOM manipulation to remove unwanted contents
* Build eventPage.js (TBD)
  * create function to get url
  * create logic to check the url
  * create function to redirect to 404 page if URL is blocked

#### Day 4
* Style pages
  * create stylesheet for pop-up page (Chris)
  * create stylesheet for option page (Roni)

#### Day 5
* Set up Timer feature
* Create alert pop-up when the time limit is hit
* Add set timer feature to option page

#### Day 6
* Create website to showcase the project
  * descriptions about the extension
  * GIF to show functionalities
  * link to chrome extension
  * introductions about developers
* Create extension descriptions to publish on Chrome Web Store

#### Day 7
* Create README
* Upload to Chrome Web Store
* Debug
