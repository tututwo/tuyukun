import { c as create_ssr_component } from "./index3.js";
const metadata = {
  "title": "Svelte Data Viz: Part 2 - Each Data",
  "date": "2022-09-07",
  "updated": "2022-10-20",
  "categories": ["svelte", "javascript"],
  "coverImage": "sveltekit-learn.png",
  "coverWidth": 16,
  "coverHeight": 9,
  "excerpt": "Learn the fundamentals of SvelteKit by building a statically generated blog from scratch, with Markdown support, Sass, an API, and an RSS feed.",
  "titleSection": [
    "Svelte's each block",
    "Tip1-Svelte Data Viz Mindset: each and DOM",
    "Tip2-Seperate Actual Visual Encodings Component from each block Component"
  ]
};
const Svelte_each = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 id="how-to-plot-data-pointsmarks-using-svelte"><a aria-hidden="true" tabindex="-1" href="#how-to-plot-data-pointsmarks-using-svelte"><span class="icon icon-link"></span></a>How to plot data points(marks) using Svelte?</h1>
<p>So far I have learned how to import data and define the canvas. </p>
<p><strong>The most urging topic is on the way: how to plot data points in Svelte.</strong></p>
<p>You can use <code>&lt;HTML&gt;</code>,<code>&lt;svg&gt;</code>, <code>&lt;canvas&gt;</code> or <code>&lt;WebGL&gt;</code>, but I only know so much about <code>&lt;svg&gt;</code> so far so today’s notes will be largely based on <code>&lt;svg&gt;</code></p>
<h2 id="sveltes-each-block"><a aria-hidden="true" tabindex="-1" href="#sveltes-each-block"><span class="icon icon-link"></span></a>Svelte’s each block</h2>
<p>Svelte has an excellent <a href="https://svelte.dev/tutorial/each-block-bindings" rel="nofollow">tutorial</a> so I am not going to dive into <code>{#each}</code> block. Here is a brief introduction for you:</p>
<ol><li>each block basically loops through an array to create HTML contents.</li>
<li>If you want to specify the variables/columns that you intend to use. Try object destructuring(Providing your dataset is an array of objects)</li></ol>
<p>I highly recommend <a href="https://twitter.com/lihautan/status/1411547328931143680" rel="nofollow">LiHau’s tweet thread for detailed explanation</a>.</p>
<h2 id="tip1-svelte-data-viz-mindset-each-and-dom"><a aria-hidden="true" tabindex="-1" href="#tip1-svelte-data-viz-mindset-each-and-dom"><span class="icon icon-link"></span></a>Tip1-Svelte Data Viz Mindset: each and DOM</h2>
<p>With such limited amount of knowledge, I believe you are ready to plot the data points in Svelte.</p>
<p><strong>Before you actually code/plot anything, I must tell you that I found it more intuitive to sketch your DOM beforehand.</strong></p>
<p>Just for the sake of demostration: Here are two data visualizations from <a href="https://www.axios.com/" rel="nofollow">Axios</a>. I marked different levels with pink arrows.</p>
<p>![featured](/Users/gordontu/Documents/Learning/Data Viz Designer 养成/Svelte Blog/4EachData/featured.png)</p>
<h4 id="the-first-data-visualization-is-change-in-teacher-salary-201016-its-dom-looks-like-this"><a aria-hidden="true" tabindex="-1" href="#the-first-data-visualization-is-change-in-teacher-salary-201016-its-dom-looks-like-this"><span class="icon icon-link"></span></a>The first data visualization is <a href="https://www.axios.com/oklahoma-teachers-brace-themselves-6c21da6f-06ef-474c-a2e8-ca84e7d53828.html" rel="nofollow">Change in teacher salary, 2010–16</a>. Its DOM looks like this:</h4>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 1st level --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart-g<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 2nd level --></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 3rd level --></span>
    		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rect</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 4th level --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>line</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>line</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rect</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>line</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>line</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
    	.
    	.
    	.
    	.etc.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>If you are turning it into a Svelte project, you can try:</p>
<pre class="language-svelte"><!-- HTML_TAG_START -->${`<code class="language-svelte">This is just a demo
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 1st level --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>chart-g<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 2nd level --></span>
  	<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">#each</span> <span class="token language-javascript">teacher_data </span><span class="token keyword">as</span> <span class="token language-javascript">d<span class="token punctuation">,</span>i<span class="token punctuation">&#125;</span></span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>state<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 3rd level --></span>
    		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rect</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rect</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 4th level --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>line</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>line</span><span class="token punctuation">></span></span>
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
  	<span class="token each"><span class="token punctuation">&#123;</span><span class="token keyword">/each</span><span class="token punctuation">&#125;</span></span> 
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>
</code>`}<!-- HTML_TAG_END --></pre>
<h4 id="the-second-data-visualization-is-thirty-years-of-atlantic-hurricanes"><a aria-hidden="true" tabindex="-1" href="#the-second-data-visualization-is-thirty-years-of-atlantic-hurricanes"><span class="icon icon-link"></span></a>The second data visualization is <a href="https://www.axios.com/a-history-of-atlantic-hurricanes-2482247577.html" rel="nofollow">Thirty years of Atlantic hurricanes</a></h4>
<p><strong>DOM</strong>:</p>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 1st level --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart-g<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 2nd level --></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 3rd level --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>storm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 4th level --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 5th level --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>storm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 4th level --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 5th level --></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
        .
        .
        .
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>		
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>In analogy, <strong>Svelte demo</strong>:</p>
<pre class="language-html"><!-- HTML_TAG_START -->${`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 1st level --></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>chart-g<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 2nd level --></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 3rd level --></span>
        &#123;#each hurricane_data as d,i&#125;
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>g</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>storm<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 4th level --></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span>		<span class="token comment">&lt;!-- 5th level --></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
        &#123;/each&#125;
    	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>		
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>g</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span></code>`}<!-- HTML_TAG_END --></pre>
<p>Svelte writes so much like creating DOM elements with your own hands.</p>
<p>Consequently:</p>
<ol><li>It is really helpful to know the DOM structure of your desired plot before you actually start coding.</li>
<li>You may learn from other people’s data viz project by inspecting their DOMs. In fact, this trick actually has been teaching me how to correctly arrange my data and DOM elements correspondly.</li></ol>
<h2 id="tip2-seperate-actual-visual-encodings-component-from-each-block-component"><a aria-hidden="true" tabindex="-1" href="#tip2-seperate-actual-visual-encodings-component-from-each-block-component"><span class="icon icon-link"></span></a>Tip2-Seperate Actual Visual Encodings Component from each block Component</h2>
<p>You probably find the demo code I wrote above verbose. <strong>The hierarchy gets longer in your actual projects, and often you even need to write nested each block!</strong></p>
<p>To keep the project manageable and readable, I often put each block in one component, and the actual SVG elements/visual encodings in another component. In the project below, there is <strong>Rects.svelte</strong> and its child component, <strong>Rect.svelte</strong>.</p>
<p><strong>Rects.svelte</strong> basically passes <code>year</code>, <code>month</code> and <code>value</code> to <strong>Rect.svelte</strong> and loops through the whole dataset, and then repeats the same numbers of <strong>Rect.svelte</strong> component. </p>
<p><strong>Rect.svelte</strong> then receives data and pass the scaled value as properties of <code>&lt;rect&gt;</code>.</p>
<p>Therefore, there appears multiple <code>&lt;rect&gt;</code> in the DOM. </p>
<iframe src="https://svelte.dev/repl/de12831b31f64004bc5dc8bfcd2f89d0?version=3.38.3" width="100%" height="600" title="Svelte temperature each demo"></iframe>
<h3 id="bonus-svg-dimensions"><a aria-hidden="true" tabindex="-1" href="#bonus-svg-dimensions"><span class="icon icon-link"></span></a>Bonus: SVG dimensions</h3>
<p>I often forgot to use CSS to set up the dimensions of <code>&lt;svg&gt;</code>, which results in a very limited space for the chart.</p>
<p>Remember: <code>&lt;style&gt;</code> in Svelte is scoped, which means it normally only styles the element written/created in the current component.</p>
<p>Here I used width and height property to equal <code>&lt;svg&gt;</code>’s width and height to 100% of its parent component.  More customization can be added.</p>
<pre class="language-css"><!-- HTML_TAG_START -->${`<code class="language-css"><span class="token selector">svg</span> <span class="token punctuation">&#123;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%
<span class="token punctuation">&#125;</span></code>`}<!-- HTML_TAG_END --></pre>`;
});
export {
  Svelte_each as default,
  metadata
};
