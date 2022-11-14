# Sequence diagram: Adding a new note to the SPA application
```mermaid
sequenceDiagram
    participant Browser
    participant Server
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server->>Browser: HTML code 
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Server->>Browser: main.css 
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    Server->>Browser: spa.js 
    Browser->>Server: main.js initiates a HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
    Server->>Browser: JSON array (content-type: application/json)
    Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/favicon.ico
    Server->>Browser: HTML code 
     Browser->>Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
    Server->>Browser: HTML code 
    Browser->>Server: spa.js initiates a POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa and push to the DOM
 ```