# Mindloops website [![Build Status](https://travis-ci.org/mindloops/mindloops.github.io.svg?branch=master)](https://travis-ci.org/mindloops/mindloops.github.io)
Static website of Mindloops, available on [mindloops.nl](http://mindloops.nl) and [mindloops.io](http://mindloops.io) 

#### Local development

- Clone this repo
- Install npm: `brew install npm`
- Install node's http-server `npm install -g http-server`
- Enter `http-server` to locally serve this website on `localhost:8080` 
- Make changes to the HTML, commit and push to GitHub.
- Travis CI will automatically deploy the changes to S3 (for both the .nl and .io website)

#### Delivery pipline

![Delivery pipline](website-delivery-pipeline.png)
