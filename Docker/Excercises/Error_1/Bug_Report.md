<h1>BUG REPORT</h1>
ID: Error_1
<h2>Reproduce</h2>
<ol>
    <li>Build Dockerfile with command <code>docker build -f Dockerfile -t a .</code></li>
    <li>Run Dockerfile with command <code>docker run --name ba a</code></li>
</ol>
<h2>Expected</h2>
    <li>The screen will show the line <pre>We are PhuQuocDevs</pre></li>
<h2>Actual</h2>
    <li>Received error message: <pre>Error response from daemon: no build stage in current context</pre></li>