#Sequence diagram: opening the SPA application in the browser 

```mermaid
sequenceDiagram
    participant Browser
    participant Server
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
    Server->>Browser: HTML code 
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server->>Browser: main.css 
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Server->>Browser: main.js 
    Browser->>Server: main.js initiate a HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server->>Browser: JSON array (content-type: application/json)
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
    Server->>Browser: HTML code 
 ```