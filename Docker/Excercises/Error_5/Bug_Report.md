<h1>BUG REPORT</h1>
ID: Error_5
<h2>Reproduce</h2>
<ol>
    <li>Build Dockerfile with command <code>docker build -f Dockerfile -t a .</code></li>
    <li>Run Dockerfile with command <code>docker run --name ba a</code></li>
</ol>
<h2>Expected</h2>
    <li>The terminal screen will show the line <pre>Your alpine version is 3.20.3</pre></li>
<h2>Actual</h2>
    <li>The terminal screen displayed the line <pre>Your alpine version is</pre></li>