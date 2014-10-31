Anchor-Smooth-Scroll
====================

This will transform traditional scroll into smooth scrolling effect in a page using anchor links.

<p>Amaze your visitors by adding a smooth scroll effects to anchor links in your website. By adding this little javascript into your webpage and adding extra attribute into your link, you can have a smooth scoll effect in your anchor links.</p>

There are only two steps to make smooth scroll works
<ol>
<li>Initialize the Javascript</li>
<li>Add target to anchor link</li>
</ol>

<h3>1. Initializing Javascript</h3>
<p>After downloading the code, unzip it and copy the javascript file into the js folder of your website. Initialize the javascript below the jQuery library.</p>

<h5>Example</h5>
<pre>
&lt;script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"&gt;&lt;/script&gt;
&lt;script src="js/anchor-smooth-scroll.js"&gt;&lt;/script&gt;
</pre>

<h3>2. Adding target to achor links</h3>
<p>Smooth scroll will activate whenever you added a data-target attribute into your links. Smooth scroll will not work if the defined target element is empty.</p>

<h5>Example</h5>
<pre>
&lt;a href="#" data-target="#example-1"&gt;Example 1&lt;/a&gt;<br>
&lt;!-- Content --&gt;<br>
&lt;div id="example-1"&gt;...&lt;/div&gt;<br>
</pre>

