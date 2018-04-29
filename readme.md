# Chrome Extension -- SafeWeb
## Contributors
* Roni Ramon
  * [Link to LinkedIn](https://www.linkedin.com/in/roni-ramon-69531410a/)
  * [Link to GitHub](https://github.com/roniRamon)

* Chris Tsai
  * [Link to LinkedIn](https://www.linkedin.com/in/cheng-tsai-09bb63132/)
  * [Link to GitHub](https://github.com/tsai810417)

## Extension Demo / Installation
Visit our [Introduction Site]("#") for more information about our extension.

[Install]("#") the Google Chrome Extension

## Key Features
* Users can set customized URLs and keywords on the option page to prevent their kid's access to inappropriate contents
* Users can set a time duration on the option page to limit the hours their kids can browse on the internet
* By default some sensitive keywords are included when Chrome Extension is installed
* User can view and delete the saved URLs and keywords in option page
* User can reset the time duration in option page
* User can see the saved time duration in the pop-up page
* User can easily add URLs and keywords in the pop-up page
* User can easily reset the time frame in the pop-up page
* User can open the option page by clicking button in the pop-up page

#### Disable internet access when current time is not in the time frame
This is our first layer of protection. When the user was trying to access to the internet outside of the preset time duration, all the pages will be redirected to a 404 page so the user will not be able to use the internet at all.

![time limit]('#')

To determine whether to disable internet access or not, first we will retrieve the preset starting time and ending time by making an API call to the Chrome Storage and then apply algorithm to check if the current time is with that time duration.

#### Block URLs
This is our second layer of protection. When user is trying to visit a site that is listed in the restricted URLs, the page will be redirected to a 404 page. This feature is to prevent kids from visiting inappropriate or non-study-related sites.

![block url]('https://github.com/tsai810417/safeWeb/blob/master/images/block_url.gif?raw=true')

![404 page]('https://raw.githubusercontent.com/tsai810417/safeWeb/master/images/block_web_pages.png')

To determine whether the page should be redirected or not, first we retrieve the list of restricted URLs store by making an API call to the Chrome Storage and then compare the current site's URL to the list to see if there's any matches.

#### Filter contents containing inappropriate keywords
This is our final layer of protection. After checking the time duration and the site's URL, we then will have to check the 'CONTENTS' of the page. If the contents contain words that parents determine to be inappropriate for their kids, then the contents will be removed from the page. Then the kids will be able to see the informations that are safe for them.

![block words]('https://github.com/tsai810417/safeWeb/blob/master/images/block_word.gif?raw=true')


## Planning for the Project
The first thing we begin with this project is to build a blueprint while deciding which features to include and technologies that will be used. The proposal can be found [here]('https://github.com/tsai810417/safeWeb/blob/master/proposal.md')
## Technologies

## Future Directions
