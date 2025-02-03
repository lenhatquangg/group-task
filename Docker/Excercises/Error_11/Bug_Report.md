<h1>BUG REPORT</h1>
ID: Error_11
<h2>Reproduce</h2>
<ol>
    <li>Build Dockerfile with command <code>docker build -f Dockerfile -t a .</code></li>
</ol>
<h2>Expected</h2>
    <li>The terminal screen will display line `Hello from PhuQuocDevs`</li>
<h2>Actual</h2>
    <li>The terminal screen display line `can't open 'Err11.txt': No such file or directory`</li>