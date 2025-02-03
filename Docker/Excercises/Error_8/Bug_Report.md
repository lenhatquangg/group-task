<h1>BUG REPORT</h1>
ID: Error_8
<h2>Reproduce</h2>
<ol>
    <li>Build and run Docker Container with command <code>docker-compose up</code></li>
    <li>Open browser</li>
    <li>Access <code>http://localhost:8080/</code></li>
</ol>
<h2>Expected</h2>
    <li>The browser will display line `Hello from PhuQuocDevs` or `Congratulations` or `Made with Love`</li>
<h2>Actual</h2>
    <li>The browser display line `localhost refused to connect.`</li>