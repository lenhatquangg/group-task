<h1>BUG REPORT</h1>
ID: Error_9
<h2>Reproduce</h2>
<ol>
    <li>Build Docker Container with command <code>docker build -f Dockerfile -t a .</code></li>
    <li>Run Docker Container with command <code>docker run -p 3001:3000 -d --name ba a</code></li>
    <li>Open browser</li>
    <li>Access <code>http://localhost:3001/</code></li>
</ol>
<h2>Expected</h2>
    <li>The browser will display like picture below</li>
    ![](../../assets/Error_9_1.png)
<h2>Actual</h2>
    <li>The browser displayed like picture below</li>
    ![](../../assets/Error_9_2.png)