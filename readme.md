# HeatLossJS

A small open source room by room heat loss calculator

Create html page, load heatloss.js tool with the following:

    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/handlebars@latest/dist/handlebars.js"></script>
    
    <script type="text/javascript" src="files/config_new.js"></script>
    <script type="text/javascript" src="files/bothylab_data.js"></script>
    <link rel="stylesheet" type="text/css" href="heatlossjs/style.css?v=1" />
    <script type="text/javascript" src="heatlossjs/model.js"></script>
    <div id="heatloss"></div><script>heatloss.init("#heatloss")</script>
    
Define your building in json object input definition (loaded in the first line above).

Examples: 

- [midterrace_data.js](files/midterrace_data.js)
- [bothylab_data.js](files/bothylab_data.js)
- [mainhouse_data.js](files/mainhouse_data.js)
- [study_data.js](files/study_data.js)

Examples with notes on input values:

- [Mid Terrace house](https://trystanlea.org.uk/roombyroomheatloss2)
- [Bothy](https://trystanlea.org.uk/bothy)
- [Detached house](https://trystanlea.org.uk/house)
