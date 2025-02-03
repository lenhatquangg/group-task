<h1>BUG REPORT</h1>
ID: Error_12
<h2>Reproduce</h2>
<ol>
    <li>Build Dockerfile with command <code>docker build -f Dockerfile -t a .</code></li>
</ol>
<h2>Expected</h2>
    <li>Build an image with name "a" successfully</li>
<h2>Actual</h2>
    <li>Recieved an error `The command '/bin/sh -c apt-get install curl' returned a non-zero code: 1`</li>